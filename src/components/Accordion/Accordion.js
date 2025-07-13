import { Checkbox } from "@mui/material";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi2";
import { ThreeDots } from "react-loader-spinner";
const AccordionComponent = ({ data, formik, isLoading, isNew }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const openHandler = (id) => {
    for (let element of data) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  return (
    <form
      className="flex flex-col gap-y-[5px] -mt-[20px]"
      onSubmit={formik.handleSubmit}
    >
      {/* title */}
      <div className="p-[10px] -mr-[10px] md:-mr-[8px] lg:-mr-[5px] text-[14px] font-medium leading-normal md:text-[18px] lg:text-[20px] lg:font-bold lg:mb-[20px]">
        {!isNew && <p>افزودن سرویس جدید</p>}
      </div>
      {/* Description */}
      <div className="text-[12px] font-medium  leading-[30px] mb-[20px] md:text-[16px] md:mb-[30px] lg:mb-[20px]">
        <p>
          لطفا دسترسی یا اسکوپ های مورد نیاز برنامه را مشخص کنید. از این اسکوپ
          ها برای گرفتن دسترسی از کاربر و فراخوانی سرویس ها استفاده خواهید کرد.
          برای اطلاع از جزییات و نحوه فراخوانی سرویس ها به صفحه مستندات سرویس ها
          مراجعه کنید.
        </p>
      </div>
      {/* Accordion section */}
      <div
        className={`flex flex-col ${
          isNew ? "h-[410px]" : "h-[450px]"
        } overflow-y-scroll lg:-mb-[1px]`}
      >
        <div className="flex flex-col gap-y-[16px]">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={` rounded-[5px] text-[12px] md:text-[14px] font-medium leading-normal ${
                  isOpen && selectedId === item.id
                    ? "border border-primaryColor-1"
                    : "border border-neutralColor-4"
                }`}
              >
                <div
                  onClick={() => openHandler(item.id)}
                  className={`flex justify-between items-center h-[48px] px-4 cursor-pointer ${
                    isOpen && selectedId === item.id
                      ? "bg-primaryColor-5"
                      : "bg-neutralColor-5"
                  }`}
                >
                  <span>{item.serviceGroupName}</span>
                  <HiChevronDown
                    className={`text-neutralColor-3 w-5 h-5 ${
                      isOpen &&
                      selectedId === item.id &&
                      "rotate-180 transition-all duration-700"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    isOpen && selectedId === item.id ? "block" : "hidden"
                  }`}
                >
                  {item.services.map((service) => {
                    return (
                      <div
                        key={service.id}
                        className="h-[110px] md:h-[88px]  flex items-center gap-x-[12px] px-4 border-b border-b-neutralColor-4 relative "
                      >
                        <Checkbox
                          color="success"
                          disabled={service.isRequested}
                          name="serviceId"
                          type="checkbox"
                          {...formik.getFieldProps("serviceId")}
                          value={service.id}
                        />
                        <BsCheck
                          className={
                            service.isRequested
                              ? "absolute  mr-[11px]  fill-neutralColor-3 w-[20px] h-[20px]"
                              : "hidden"
                          }
                        />
                        <label>{service.serviceDesc}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Add Service Button */}
      <button
        type="onSubmit"
        className={`bg-primaryColor-1 text-naturalColor-2  h-[48px] flex items-center justify-center rounded-[5px] text-[14px] font-medium md:text-[16px] md:font-bold lg:w-[160px] ${
          !isNew ? "mt-[20px] md:mt-[90px]" : "mt-[20px] md:mt-[20px]"
        }`}
      >
        <div className="flex justify-center relative">
          <span className={`${isLoading ? "hidden" : "block"}`}>
            {isNew ? "تایید نهایی" : "ثبت سرویس جدید"}
          </span>
          <div className="absolute -top-[17px] block">
            {isLoading && (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#FAFAFA"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            )}
          </div>
        </div>
      </button>
    </form>
  );
};

export default AccordionComponent;

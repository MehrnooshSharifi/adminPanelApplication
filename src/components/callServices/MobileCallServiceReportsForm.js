import React from "react";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";

const MobileCallServicesReportsForm = ({
  formik,
  startvalue,
  setStartValue,
  endvalue,
  setEndValue,
  openFilter,
  setOpenFilter,
  isLoading,
  dateRange,
  servicesName,
}) => {
  // Map servicesName to match react-select options structure
  const serviceOptions = servicesName.map((service) => ({
    label: service.serviceName,
    value: service.id,
  }));

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[36px] md:hidden z-10"
    >
      {openFilter && (
        <div className="flex flex-col gap-y-[30px]">
          {/* Date From */}
          <div className="flex flex-col relative">
            <label
              className="w-[63px] h-[20px] absolute -top-2 px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span>از تاریخ</span>
            </label>
            <DatePicker
              value={startvalue}
              onChange={setStartValue}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "14px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "327px",
                height: "48px",
                paddingRight: "25px",
                background: 'url("/assets/images/calendar.svg")no-repeat left',
                backgroundSize: "30px",
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              containerStyle={{ width: "100%" }}
            />
          </div>

          {/* Date To */}
          <div className="flex flex-col relative">
            <label
              className="w-[63px] h-[20px] absolute -top-2 px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
              htmlFor="dateTo"
            >
              <span>تا تاریخ</span>
            </label>
            <DatePicker
              value={endvalue}
              onChange={setEndValue}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "14px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "327px",
                height: "48px",
                paddingRight: "25px",
                background: 'url("/assets/images/calendar.svg")no-repeat left',
                backgroundSize: "30px",
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              containerStyle={{ width: "100%" }}
            />
          </div>

          {/* User ID */}
          <div className="flex-col relative">
            <label
              className="w-[140px] h-[20px] whitespace-nowrap absolute -top-3 px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="userId"
            >
              <span>کدملی/شناسه ملی</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="userId"
              name="userId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userId}
            />
          </div>

          {/* Service ID - React Select */}
          <div className="flex-col relative z-50">
            <label
              className="w-[75px] h-[20px] absolute -top-3 px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2 z-40"
              htmlFor="serviceId"
            >
              <span>سرویس</span>
            </label>
            <Select
              id="serviceId"
              name="serviceId"
              options={serviceOptions}
              placeholder="جستجو یا انتخاب سرویس"
              isClearable // Add clearable icon
              onChange={(selectedOption) =>
                formik.setFieldValue("serviceId", selectedOption?.value || "")
              }
              value={serviceOptions.find(
                (option) => option.value === formik.values.serviceId
              )}
              styles={{
                control: (base) => ({
                  ...base,
                  fontSize: "14px",
                  borderRadius: "5px",
                  border: "1px solid #9E9E9E",
                  padding: "5px",
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: "14px",
                }),
                option: (base) => ({
                  ...base,
                  fontSize: "14px",
                }),
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primaryColor-1 rounded-[5px] text-center px-[16px] text-naturalColor-2 text-[14px] font-medium max-w-[327px] h-[48px] -mt-[16px]"
          >
            <div className="flex justify-center relative">
              <div>فیلتر کن</div>
              {isLoading && (
                <div className="absolute left-[125px] top-[7px]">
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#FAFAFA"
                    ariaLabel="three-dots-loading"
                    visible={true}
                  />
                </div>
              )}
            </div>
          </button>
        </div>
      )}
      {!openFilter && (
        <button
          onClick={() => setOpenFilter(true)}
          type="button"
          className="bg-primaryColor-1 rounded-[5px] text-center px-[16px] text-naturalColor-2 text-[14px] font-medium max-w-[327px] h-[48px] -mt-[16px]"
        >
          نمایش فیلترها
        </button>
      )}
    </form>
  );
};

export default MobileCallServicesReportsForm;

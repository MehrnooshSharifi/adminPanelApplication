import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
import Select from "react-select";

const DesktopCallServicesForm = ({
  formik,
  startvalue,
  setStartValue,
  endvalue,
  setEndValue,
  isLoading,
  dateRange,
  servicesName,
}) => {
  // Map `servicesName` to options for React-Select
  const serviceOptions = servicesName.map((service) => ({
    value: service.id,
    label: service.serviceName,
  }));

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:flex flex-col gap-y-[36px] hidden"
    >
      <div className="flex gap-x-[30px] -mr-[10px] relative">
        <div className="flex gap-x-[20px]">
          <div className="flex whitespace-nowrap items-center text-[18px]">
            <span>فیلتر :</span>
          </div>
          {/* Date From */}
          <div className="flex flex-col relative">
            <label
              className="w-[65px] h-[20px] absolute -top-3 [5px] px-[5px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
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
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "200px",
                height: "48px",
                paddingRight: "25px",
                background: 'url("/assets/images/calendar.svg")no-repeat left',
                backgroundSize: "30px",
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </div>
          {/* Date To */}
          <div className="flex flex-col relative">
            <label
              className="w-[65px] h-[20px] absolute -top-3 [5px] px-[5px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
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
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "200px",
                height: "48px",
                paddingRight: "25px",
                background: 'url("/assets/images/calendar.svg")no-repeat left',
                backgroundSize: "30px",
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </div>
          {/* User ID */}
          <div className="flex-col relative">
            <label
              className="w-[140px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 whitespace-nowrap bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="userId"
            >
              <span>کدملی/شناسه ملی</span>
            </label>
            <input
              autoComplete="off"
              className="w-[200px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="userId"
              name="userId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userId}
            />
          </div>
          {/* Service ID (Searchable Dropdown) */}
          <div className="flex-col relative">
            <label
              className="w-[70px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2 z-40"
              htmlFor="serviceId"
            >
              <span>سرویس</span>
            </label>
            <Select
              id="serviceId"
              name="serviceId"
              options={serviceOptions} // Pass mapped options
              onChange={(selectedOption) => {
                formik.setFieldValue("serviceId", selectedOption?.value || "");
              }}
              value={serviceOptions.find(
                (option) => option.value === formik.values.serviceId
              )} // Bind current value
              isClearable={true} // Allow clearing the selection
              placeholder="جستجو یا انتخاب سرویس"
              styles={{
                container: (base) => ({
                  ...base,
                  width: "200px",
                  fontSize: "11px",
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: "13px",
                  color: "#9E9E9E",
                  whiteSpace: "nowrap",
                }),
                control: (base) => ({
                  ...base,
                  height: "48px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  border: "1px solid #9E9E9E",
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 9999,
                }),
              }}
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primaryColor-1 rounded-[5px] text-center whitespace-nowrap px-[16px] text-naturalColor-2 text-[16px] font-medium w-[110px] h-[48px] absolute top-[1px] right-[950px]"
        >
          <div className="flex justify-center relative">
            <span>فیلتر کن</span>
            <div className="left-[20px] top-[8px] absolute">
              {isLoading && (
                <ThreeDots
                  height="40"
                  width="40"
                  radius="9"
                  color="#FAFAFA"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              )}
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default DesktopCallServicesForm;

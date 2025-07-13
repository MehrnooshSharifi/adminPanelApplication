import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
import Select from "react-select";

const TabletCallServicesReportsForm = ({
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
  // Map servicesName into react-select options
  const serviceOptions = servicesName.map((service) => ({
    value: service.id,
    label: service.serviceName,
  }));

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="md:flex lg:hidden flex-col gap-y-[36px] hidden "
    >
      {openFilter && (
        <div className="flex flex-col gap-y-[30px]">
          <div className="flex gap-x-[20px]">
            {/* dateFrom */}
            <div className="flex flex-col relative  ">
              <label
                className="w-[70px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
                htmlFor="dateFrom"
              >
                <span className="">از تاریخ</span>
              </label>
              <DatePicker
                value={startvalue}
                onChange={setStartValue}
                calendar={persian}
                locale={persian_fa}
                className="custom-calendar"
                style={{
                  fontSize: "16px",
                  color: "#212121",
                  background: "#FFFFFF",
                  border: "1px solid #9E9E9E",
                  borderRadius: "5px",
                  width: "344px",
                  height: "50px",
                  paddingRight: "25px",
                  background:
                    'url("/assets/images/calendar.svg")no-repeat left',
                  backgroundSize: "30px",
                  backgroundPosition: "10px",
                  cursor: "pointer",
                }}
                containerStyle={{
                  width: "100%",
                }}
              />
            </div>
            {/* dateTo */}
            <div className="flex flex-col relative  ">
              <label
                className=" w-[70px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
                htmlFor="dateTo"
              >
                <span className="">تا تاریخ</span>
              </label>
              <DatePicker
                value={endvalue}
                onChange={setEndValue}
                calendar={persian}
                locale={persian_fa}
                className="custom-calendar"
                style={{
                  fontSize: "16px",
                  color: "#212121",
                  background: "#FFFFFF",
                  border: "1px solid #9E9E9E",
                  borderRadius: "5px",
                  width: "344px",
                  height: "50px",
                  paddingRight: "25px",
                  background:
                    'url("/assets/images/calendar.svg")no-repeat left',
                  backgroundSize: "30px",
                  backgroundPosition: "10px",
                  cursor: "pointer",
                }}
                containerStyle={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="flex gap-x-[20px]">
            {/* userId */}
            <div className="flex-col relative">
              <label
                className="w-[140px] h-[20px] whitespace-nowrap absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
                htmlFor="userId"
              >
                <span className="">کدملی/شناسه ملی</span>
              </label>
              <input
                autoComplete="off"
                className="w-[344px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="userId"
                name="userId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userId}
              />
            </div>
            {/* serviceId */}
            <div className="flex-col relative">
              <label
                className="w-[70px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2 z-40"
                htmlFor="serviceId"
              >
                <span className="">سرویس</span>
              </label>
              <Select
                id="serviceId"
                name="serviceId"
                options={serviceOptions}
                onChange={(selectedOption) => {
                  formik.setFieldValue(
                    "serviceId",
                    selectedOption?.value || ""
                  );
                }}
                value={serviceOptions.find(
                  (option) => option.value === formik.values.serviceId
                )}
                isClearable={true}
                placeholder="جستجو یا انتخاب سرویس"
                styles={{
                  container: (base) => ({
                    ...base,
                    width: "344px",
                  }),
                  control: (base) => ({
                    ...base,
                    height: "48px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    border: "1px solid #9E9E9E",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    fontSize: "16px",
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: "16px",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: "16px",
                    color: "#9E9E9E",
                  }),
                  option: (base, { isFocused }) => ({
                    ...base,
                    fontSize: "14px",
                    backgroundColor: isFocused ? "#f0f0f0" : "white",
                    color: isFocused ? "#000" : "#212121",
                    cursor: "pointer",
                  }),
                  menu: (base) => ({
                    ...base,
                    fontSize: "14px",
                    zIndex: 9999,
                  }),
                }}
              />
            </div>
          </div>
          {/* submit */}
          <button
            type="submit"
            className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[708px] h-[48px] -mt-[16px] "
          >
            <div className="flex justify-center relative">
              <span> فیلتر کن</span>
              <div className=" left-[3px] w-[25px] md:w-[40px] absolute md:left-[320px] md:top-2 md:block">
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
        </div>
      )}
      {!openFilter && (
        <button
          onClick={() => setOpenFilter(true)}
          type="button"
          className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[708px] h-[48px]  -mt-[16px] lg:hidden "
        >
          نمایش فیلترها
        </button>
      )}
    </form>
  );
};

export default TabletCallServicesReportsForm;

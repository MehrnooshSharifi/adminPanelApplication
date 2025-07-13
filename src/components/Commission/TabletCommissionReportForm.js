import { ThreeDots } from "react-loader-spinner";
import Select from "react-select";
const TabletCommissionReportForm = ({
  formik,
  openFilter,
  setOpenFilter,
  isLoading,
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
      className="md:flex lg:hidden flex-col gap-y-[36px] hidden "
    >
      {openFilter && (
        <div className="flex flex-col gap-y-[30px]">
          <div className="flex gap-x-[20px]">
            <div className="flex-col relative">
              <label
                className="w-[150px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
                htmlFor="supperNationalId"
              >
                <span className="whitespace-nowrap">کد/شناسه ملی منبع</span>
              </label>
              <input
                autoComplete="off"
                className="w-[344px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="supperNationalId"
                name="supperNationalId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.supperNationalId}
              />
            </div>
            <div className="flex-col relative">
              <label
                className="w-[160px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
                htmlFor="representativeNationalId"
              >
                <span className="whitespace-nowrap">کد/شناسه ملی ذینفع</span>
              </label>
              <input
                autoComplete="off"
                className="w-[344px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="representativeNationalId"
                name="representativeNationalId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.representativeNationalId}
              />
            </div>
          </div>
          <div className="flex gap-x-[20px]">
            {/* userId */}
            <div className="flex-col relative">
              <label
                className="w-[200px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
                htmlFor="consumerNationalId"
              >
                <span className="whitespace-nowrap">
                  کد/شناسه ملی مصرف کننده
                </span>
              </label>
              <input
                autoComplete="off"
                className="w-[344px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="consumerNationalId"
                name="consumerNationalId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.consumerNationalId}
              />
            </div>
            {/* serviceId */}
            {/* <div className="flex-col relative">
              <label
                className="w-[85px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
                htmlFor="serviceId"
              >
                <span className="">ServiceId</span>
              </label>
              <input
                autoComplete="off"
                className="w-[344px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="serviceId"
                name="serviceId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.serviceId}
              />
            </div> */}
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

export default TabletCommissionReportForm;

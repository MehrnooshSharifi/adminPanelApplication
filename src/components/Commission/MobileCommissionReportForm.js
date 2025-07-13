import { ThreeDots } from "react-loader-spinner";
import Select from "react-select";
const MobileCommissionReportForm = ({
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
      className="flex flex-col gap-y-[36px] md:hidden"
    >
      {openFilter && (
        <div className="flex flex-col gap-y-[30px]">
          {/* userId */}
          <div className="flex-col relative">
            <label
              className="w-[150px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="supperNationalId"
            >
              <span className="whitespace-nowrap">کد/شناسه ملی منبع</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="supperNationalId"
              name="supperNationalId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.supperNationalId}
            />
          </div>
          {/* userId */}
          <div className="flex-col relative">
            <label
              className="w-[160px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="representativeNationalId"
            >
              <span className="whitespace-nowrap">کد/شناسه ملی ذینفع</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="representativeNationalId"
              name="representativeNationalId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.representativeNationalId}
            />
          </div>
          {/* userId */}
          <div className="flex-col relative">
            <label
              className="w-[200px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="consumerNationalId"
            >
              <span className="whitespace-nowrap">کد/شناسه ملی مصرف کننده</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
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
              className="w-[327px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="serviceId"
              name="serviceId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.serviceId}
            />
          </div> */}
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
          {/* submit */}
          <button
            type="submit"
            className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[16px] "
          >
            <div className="flex justify-center relative">
              <div> فیلتر کن</div>
              <div className="absolute left-[125px] top-[7px] md:block">
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
          className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[16px] "
        >
          نمایش فیلترها
        </button>
      )}
    </form>
  );
};

export default MobileCommissionReportForm;

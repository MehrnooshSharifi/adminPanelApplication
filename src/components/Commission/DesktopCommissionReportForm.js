import { ThreeDots } from "react-loader-spinner";
import Select from "react-select";
const DesktopCommissionReportForm = ({ formik, isLoading, servicesName }) => {
  // Map `servicesName` to options for React-Select
  const serviceOptions = servicesName.map((service) => ({
    value: service.id,
    label: service.serviceName,
  }));
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:flex flex-col gap-y-[36px] hidden "
    >
      <div className="flex  gap-x-[30px] -mr-[10px] relative ">
        <div className="flex gap-x-[20px]">
          <div className="flex whitespace-nowrap items-center text-[18px] ">
            <span>فیلتر :</span>
          </div>
          {/* SourceNationalCode */}
          <div className="flex-col relative">
            <label
              className="w-[140px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
              htmlFor="supperNationalId"
            >
              <span className="">کد/شناسه ملی منبع</span>
            </label>
            <input
              autoComplete="off"
              className="w-[200px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="supperNationalId"
              name="supperNationalId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.supperNationalId}
            />
          </div>
          {/* BeneficiaryNationalCode */}
          <div className="flex-col relative">
            <label
              className="w-[140px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
              htmlFor="representativeNationalId"
            >
              <span className="">کد/شناسه ملی ذینفع</span>
            </label>
            <input
              autoComplete="off"
              className="w-[200px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="representativeNationalId"
              name="representativeNationalId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.representativeNationalId}
            />
          </div>
          {/* consumerNationalCode */}
          <div className="flex-col relative">
            <label
              className="w-[180px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
              htmlFor="consumerNationalId"
            >
              <span className="">کد/شناسه ملی مصرف کننده</span>
            </label>
            <input
              autoComplete="off"
              className="w-[200px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="consumerNationalId"
              name="consumerNationalId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.consumerNationalId}
            />
          </div>
          {/* serviceId */}
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
        {/* submit */}
        <button
          type="submit"
          className="bg-primaryColor-1  rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[110px] h-[48px] absolute top-[1px] right-[950px]"
        >
          <div className="flex justify-center relative">
            <span> فیلتر کن</span>
            <div className=" left-[2  0px] top-[8px] absolute ">
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
    </form>
  );
};

export default DesktopCommissionReportForm;

import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import { ThreeDots } from "react-loader-spinner";
import Select from "react-select";
const CommissionForm = ({
  isUpdate,
  formik,
  nonActiveHandler,
  activeHandler,
  openIsActive,
  setOpenIsActive,
  isLoading,
  servicesName,
}) => {
  const formatNumber = (value) => {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  const handleAmountChange = (e) => {
    const formattedValue = formatNumber(e.target.value.replace(/,/g, ""));
    formik.handleChange({
      target: {
        name: "amount",
        value: formattedValue,
      },
    });
  };
  const serviceOptions = servicesName.map((service) => ({
    value: service.id,
    label: service.serviceName,
  }));
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col  md:gap-y-[40px] -pr-[7px] md:pr-5 lg:pr-[100px] relative md:-mt-[10px] lg:mt-[40px]"
    >
      {/* supperNationalId & representativeNationalId */}
      <div className="flex flex-col gap-y-[30px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* supperNationalId */}
        <div className="flex flex-col relative">
          <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[155px] lg:mr-[180px] -mt-[10px] md:-mt-[10px]  z-10" />
          <label
            className=" md:w-[160px] md:h-[20px] lg:w-[180px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="supperNationalId"
          >
            <span className="">کدملی/شناسه ملی منبع</span>
          </label>
          {isUpdate ? (
            <input
              value={formik.values.supperNationalId}
              readOnly
              autoComplete="off"
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
              id="supperNationalId"
              name="supperNationalId"
              type="text"
            />
          ) : (
            <>
              <input
                autoComplete="off"
                className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="supperNationalId"
                name="supperNationalId"
                type="text"
                {...formik.getFieldProps("supperNationalId")}
              />
              <div
                className={`absolute mt-[50px] -right-[15px] md:mt-[50px]  lg:mt-[50px]  md:text-[10px] lg:text-[12px] `}
              >
                {formik.touched.supperNationalId &&
                  formik.errors.supperNationalId && (
                    <div className="flex gap-x-2 items-center mr-[15px] ">
                      <Image
                        width={10}
                        height={10}
                        src="/assets/images/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.errors.supperNationalId}
                      </span>
                    </div>
                  )}
              </div>
            </>
          )}
        </div>
        {/* representativeNationalId */}
        <div className="flex flex-col relative">
          <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[170px] lg:mr-[190px] -mt-[10px] md:-mt-[10px]  z-10" />
          <label
            className=" md:w-[180px] md:h-[20px] lg:w-[190px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="representativeNationalId"
          >
            <span className="">کد ملی/شناسه ملی ذینفع</span>
          </label>
          {isUpdate ? (
            <input
              value={formik.values.representativeNationalId}
              readOnly
              autoComplete="off"
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
              id="representativeNationalId"
              name="representativeNationalId"
              type="text"
            />
          ) : (
            <>
              <input
                autoComplete="off"
                className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="representativeNationalId"
                name="representativeNationalId"
                type="text"
                {...formik.getFieldProps("representativeNationalId")}
              />
              <div
                className={`absolute mt-[50px] -right-[15px] md:mt-[50px]  lg:mt-[50px]  md:text-[10px] lg:text-[12px] `}
              >
                {formik.touched.representativeNationalId &&
                  formik.errors.representativeNationalId && (
                    <div className="flex gap-x-2 items-center mr-[15px] ">
                      <Image
                        width={10}
                        height={10}
                        src="/assets/images/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.errors.representativeNationalId}
                      </span>
                    </div>
                  )}
              </div>
            </>
          )}
        </div>
      </div>
      {/* consumerNationalId and serviceId */}
      <div className="flex flex-col gap-y-[30px] mt-[25px] md:mt-0 md:flex-row gap-x-[25px] lg:gap-x-[40px]">
        {/* consumerNationalId */}
        <div className="flex flex-col relative">
          <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[209px] lg:mr-[232px] -mt-[10px] md:-mt-[11px]  z-10" />
          <label
            className=" md:w-[210px] md:h-[20px] lg:w-[230px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="consumerNationalId"
          >
            <span className="">کد ملی/شناسه ملی مصرف کننده</span>
          </label>
          {isUpdate ? (
            <input
              value={formik.values.consumerNationalId}
              readOnly
              autoComplete="off"
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
              id="consumerNationalId"
              name="consumerNationalId"
              type="text"
            />
          ) : (
            <>
              <input
                autoComplete="off"
                className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
                id="consumerNationalId"
                name="consumerNationalId"
                type="text"
                {...formik.getFieldProps("consumerNationalId")}
              />
              <div
                className={`absolute mt-[50px] -right-[15px] md:mt-[50px]  lg:mt-[50px]  md:text-[10px] lg:text-[12px] `}
              >
                {formik.touched.consumerNationalId &&
                  formik.errors.consumerNationalId && (
                    <div className="flex gap-x-2 items-center mr-[15px] ">
                      <Image
                        width={10}
                        height={10}
                        src="/assets/images/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.errors.consumerNationalId}
                      </span>
                    </div>
                  )}
              </div>
            </>
          )}
        </div>
        {/* Service ID (Searchable Dropdown) Desktop */}
        <div className="flex-col relative md:hidden">
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
                width: "327px",
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
        {/* Service ID (Searchable Dropdown) Desktop */}
        <div className="flex-col relative hidden md:block lg:hidden">
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
                width: "327px",
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
        {/* Service ID (Searchable Dropdown) Desktop */}
        <div className="flex-col relative hidden lg:block">
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
                width: "397px",
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
      {/* amount & status */}
      {/* amount */}
      <div className="flex flex-col gap-y-[30px] mt-[25px] md:mt-0 md:flex-row gap-x-[25px] lg:gap-x-[40px]">
        {/* amount */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[90px] md:h-[20px] lg:w-[100px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="amount"
          >
            <span className="">قیمت (ریال)</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="amount"
            name="amount"
            type="text"
            onChange={handleAmountChange}
            value={formik.values.amount}
          />
        </div>
        {/* status */}
        {isUpdate && (
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="isActive"
            >
              <span className={`${openIsActive && "text-primaryColor-1"}`}>
                وضعیت
              </span>
            </label>
            <div
              onClick={() => setOpenIsActive(!openIsActive)}
              className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
                openIsActive && "border-2 border-primaryColor-1"
              }`}
              name="isActive"
              value={formik.values.isActive}
              onChange={formik.handleChange}
            >
              {formik.values.isActive ? "فعال" : "غیرفعال"}
            </div>
            <div
              className={`absolute left-4 lg:-left-12 top-[16px] cursor-pointer ${
                openIsActive && "transition-all duration-300 rotate-180"
              }`}
              onClick={() => setOpenIsActive(!openIsActive)}
            >
              <Image
                width={20}
                height={20}
                src="/assets/images/down.svg"
                alt="down"
              />
            </div>
          </div>
        )}
      </div>
      {/* submit */}
      <button
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[330px] md:w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px]  lg:mt-[300px] lg:mr-[680px]  mt-[200px] ${
          !formik.values.supperNationalId |
            !formik.values.consumerNationalId |
            !formik.values.representativeNationalId |
            !formik.values.serviceId |
            !formik.values.amount &&
          !isUpdate &&
          "cursor-not-allowed disabled opacity-30"
        }  `}
      >
        <div className="flex justify-center relative">
          <span>{isUpdate ? "ثبت تغییرات" : "ثبت اطلاعات"}</span>
          <div className="absolute lg:left-[40px] top-2 block">
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
      {/* openIsActiveSection */}
      {openIsActive && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute right-[0px] top-[430px] md:right-[372px] md:top-[235px] lg:top-[230px]  lg:right-[537px]  border-2 border-neutralColor-4">
          <div
            onClick={activeHandler}
            value={true}
            className=" cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center mb-[14px]">
              فعال
            </span>
          </div>
          <div
            value={false}
            className="cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center pt-[10px] "
            onClick={nonActiveHandler}
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center ">
              غیرفعال
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default CommissionForm;

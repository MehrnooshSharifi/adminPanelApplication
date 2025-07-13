import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const AddServiceMobileForm = ({
  formik,
  nonActiveHandler,
  activeHandler,
  isOpenType,
  isOpenStatus,
  setIsOpenStatus,
  isLoading,
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
        name: "defaultPrice",
        value: formattedValue,
      },
    });
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[36px] md:hidden"
    >
      {/* serviceName */}
      <div className="flex flex-col relative  ">
        <label
          className=" w-[82px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
          htmlFor="serviceName"
        >
          <span className=""> نام سرویس</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
          id="serviceName"
          name="serviceName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.serviceName}
        />
      </div>
      {/* serviceBasePrice */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="defaultPrice"
        >
          <span>مبلغ (ریال)</span>
        </label>
        <input
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
          name="defaultPrice"
          value={formik.values.defaultPrice}
          onChange={handleAmountChange}
        />
      </div>
      {/* serviceStatus */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-2 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="isActive"
        >
          <span className={`${isOpenStatus && "text-primaryColor-1"}`}>
            وضعیت
          </span>
        </label>
        <div
          onClick={() => setIsOpenStatus(!isOpenStatus)}
          className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
            isOpenStatus && "border-2 border-primaryColor-1"
          }`}
          name="isActive"
          value={formik.values.isActive}
          onChange={formik.handleChange}
        >
          {formik.values.isActive ? "فعال" : "غیرفعال"}
        </div>
        <div
          className={`absolute left-4 top-[16px] cursor-pointer ${
            isOpenStatus && "transition-all duration-300 rotate-180"
          }`}
          onClick={() => setIsOpenStatus(!isOpenStatus)}
        >
          <Image
            width={15}
            height={15}
            src="/assets/images/down.svg"
            alt="down"
          />
        </div>
      </div>
      {/* serviceGroupId */}
      <div className=" flex-col relative max-w-[327px] hidden ">
        <label
          className="flex flex-col mr-[170px] lg:mr-[220px] lg:whitespace-nowrap  px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="serviceGroupId"
        >
          <span>API ResourceName</span>
        </label>
        <input
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
          name="serviceGroupId"
          value={formik.values.serviceGroupId}
          onChange={formik.handleChange}
        />
      </div>
      {/* API ResourceName */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-2 text-[12px] mr-[190px] font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="policyauth"
        >
          <span>API ResourceName</span>
        </label>
        <input
          className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
            isOpenType && "border-2 border-primaryColor-1"
          }`}
          name="policyauth"
          value={formik.values.policyauth}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="servicePoint"
        >
          <span>امتیاز سرویس</span>
        </label>
        <input
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
          name="servicePoint"
          value={formik.values.servicePoint}
          onChange={formik.handleChange}
        />
      </div>
      {/* serviceDescription */}
      <div className="flex flex-col relative z-0 ">
        <label
          className="flex flex-col px-[10px] absolute mr-2 -top-2 text-[12px] font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="serviceDesc"
        >
          <span className="">توضیحات</span>
        </label>
        <textarea
          className="w-[327px] h-[130px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          id="serviceDesc"
          name="serviceDesc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.serviceDesc}
        />
      </div>
      {/* submit */}
      <button
        disabled={
          !formik.values.serviceName |
          !formik.values.servicePoint |
          !formik.values.serviceDesc |
          !formik.values.policyauth
        }
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[30px] ${
          !formik.values.serviceName |
            !formik.values.servicePoint |
            !formik.values.serviceDesc |
            !formik.values.policyauth &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        <div className="flex justify-center relative">
          <span> ثبت سرویس</span>
          <div className="absolute left-[125px] top-[7px]">
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
      {isOpenStatus && (
        <div className="flex text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[418px] border-2 border-neutralColor-4">
          <div
            onClick={activeHandler}
            value={true}
            className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span>فعال</span>
          </div>
          <div
            value={false}
            className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center"
            onClick={nonActiveHandler}
          >
            <span className="mt-2">غیرفعال</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddServiceMobileForm;

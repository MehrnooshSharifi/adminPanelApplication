import Image from "next/image";
import { useRef } from "react";

const MobileUpdateUserService = ({
  formik,
  nonActiveHandler,
  activeHandler,
  isOpenStatus,
  setIsOpenStatus,
}) => {
  const refServiceName = useRef();
  const refServicePrice = useRef();
  const focusServicePrice = () => {
    refServicePrice.current.focus();
  };
  const focusServiceName = () => {
    refServiceName.current.focus();
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
          readOnly
          ref={refServiceName}
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
          id="serviceName"
          name="serviceName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.serviceName}
        />
      </div>
      {/* serviceDefaultPrice */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="defaultPrice"
        >
          <span>مبلغ (پایه)</span>
        </label>
        <input
          ref={refServicePrice}
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
          name="servicePrice"
          value={formik.values.servicePrice}
          onChange={formik.handleChange}
        />
        <div
          className="w-fit absolute top-[15px] right-[300px]"
          onClick={focusServicePrice}
        >
          <Image
            alt="edit"
            src="/assets/images/yellowEdit.svg"
            width={15.61}
            height={16}
          />
        </div>
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
          value={formik.values.approveStates}
          onChange={formik.handleChange}
        >
          {formik.values.approveStates ? "فعال" : "غیرفعال"}
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
      {/* submit */}
      <button
        type="submit"
        className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px]  h-[48px] lg:w-[396px]   mt-[250px]"
      >
        ثبت تغییرات
      </button>
      {/* openIsActiveSection */}
      {isOpenStatus && (
        <div className="flex text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[418px]  border-2 border-neutralColor-4  mt-[12px]">
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

export default MobileUpdateUserService;

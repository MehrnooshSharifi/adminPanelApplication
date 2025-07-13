import { Checkbox } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { ThreeDots } from "react-loader-spinner";
const UpdateTerminalInfoForm = ({
  formik,
  nonActiveHandler,
  activeHandler,
  openIsActive,
  setOpenIsActive,
  isLoading,
  userId,
}) => {
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-y-[40px] md:gap-y-[40px] -pr-[7px] md:pr-5 lg:pr-[100px] relative md:-mt-[10px] lg:mt-[40px]"
    >
      {/* userNationalCode & terminalId */}
      <div className="flex flex-col gap-y-[40px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* userNationalCode */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[120px] md:h-[20px] lg:w-[140px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="userId"
          >
            <span className="">کدملی/شناسه ملی</span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            id="userId"
            name="userId"
            type="text"
            value={userId}
          />
        </div>
        {/* terminalId */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[95px] md:h-[20px] lg:w-[110px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="terminalId"
          >
            <span className="">شماره ترمینال</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            id="terminalId"
            name="terminalId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.terminalId}
          />
        </div>
      </div>
      {/* terminalAddress & terminalName */}
      <div className="flex flex-col gap-y-[40px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* terminalName */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[80px] md:h-[20px] lg:w-[90px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="terminalName"
          >
            <span className="">نام ترمینال</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="terminalName"
            name="terminalName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.terminalName}
          />
        </div>
        {/* terminalAddress */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[95px] md:h-[20px] lg:w-[110px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="terminalAddress"
          >
            <span className="">آدرس ترمینال</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="terminalAddress"
            name="terminalAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.terminalAddress}
          />
        </div>
      </div>
      {/*  status */}
      <div className="flex flex-col gap-y-[40px]  md:mt-0 md:flex-row gap-x-[25px] lg:gap-x-[40px]">
        {/* status */}
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
              width={15}
              height={15}
              src="/assets/images/down.svg"
              alt="down"
            />
          </div>
        </div>
      </div>
      {/* submit */}
      <button
        type="submit"
        className={`bg-primaryColor-1  absolute  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[330px] md:w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px]  lg:t-[300px] lg:mr-[680px]  top-[850px] md:top-[500px]  `}
      >
        <div className="flex justify-center relative">
          <span> ثبت تغییرات</span>
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
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute -right-[2px] top-[415px]  lg:right-[100px] md:right-[20px] md:top-[233px] lg:top-[227px] border-2 border-neutralColor-4">
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

export default UpdateTerminalInfoForm;

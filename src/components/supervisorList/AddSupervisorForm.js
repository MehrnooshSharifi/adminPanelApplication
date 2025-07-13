import { Checkbox } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { ThreeDots } from "react-loader-spinner";
const AddSupervisorForm = ({
  formik,
  nonActiveHandler,
  activeHandler,
  openIsActive,
  setOpenIsActive,
  isLoading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  const adminRoles = [
    { id: "284c7daf-53e2-49d5-8978-2814d714e3c3", roleName: "مالی" },
    { id: "4de31591-d70b-4a01-affe-e153e6c58390", roleName: "پشتیبانی" },
    { id: "46801160-75c5-4486-a7c5-09ddfe0e0375", roleName: "سرپرست کل" },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-y-[40px] md:gap-y-[40px] -pr-[7px] md:pr-5 lg:pr-[100px] relative md:-mt-[10px] lg:mt-[40px]"
    >
      {/* firstName & LastName */}
      <div className="flex flex-col gap-y-[40px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* firstName */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[40px] md:h-[20px] lg:w-[40px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="firstName"
          >
            <span className="">نام</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            {...formik.getFieldProps("firstName")}
          />
          <div
            className={`absolute mt-[50px] -mr-[20px] md:mt-[50px]   md:text-[10px] lg:text-[12px] `}
          >
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="flex gap-x-2 items-center mr-[20px] ">
                <Image
                  width={10}
                  height={10}
                  src="/assets/images/notice.svg"
                  className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                />
                <span className="text-red-400">{formik.errors.firstName}</span>
              </div>
            )}
          </div>
        </div>
        {/* LastName */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[90px] md:h-[20px] lg:w-[100px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="lastName"
          >
            <span className="">نام خانوادگی</span>
          </label>
          <input
            {...formik.getFieldProps("lastName")}
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div
          className={`absolute mt-[141px] -mr-[20px] md:mt-[50px] md:mr-[330px] lg:mr-[415px] lg:text-[12px] text-[10px]`}
        >
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="flex gap-x-2 items-center mr-[20px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/notice.svg"
                className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
              />
              <span className="text-red-400">{formik.errors.lastName}</span>
            </div>
          )}
        </div>
      </div>
      {/* phoneNumber & email */}
      <div className="flex flex-col gap-y-[40px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* phoneNumber */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[120px] md:h-[20px] lg:w-[130px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="phoneNumber"
          >
            <span className="">شماره تلفن همراه</span>
          </label>
          <input
            {...formik.getFieldProps("phoneNumber")}
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <div
            className={`absolute mt-[50px] -mr-[20px]  md:mt-[50px]  lg:text-[12px] text-[10px]`}
          >
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="flex gap-x-2 items-center mr-[20px] ">
                <Image
                  width={10}
                  height={10}
                  src="/assets/images/notice.svg"
                  className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                />
                <span className="text-red-400">
                  {formik.errors.phoneNumber}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[90px] md:h-[20px] lg:w-[100px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="email"
          >
            <span className="">آدرس ایمیل</span>
          </label>
          <input
            {...formik.getFieldProps("email")}
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div
            className={`absolute mt-[50px] -mr-[20px] md:mt-[50px] lg:text-[12px] text-[10px]`}
          >
            {formik.touched.email && formik.errors.email && (
              <div className="flex gap-x-2 items-center mr-[20px]">
                <Image
                  width={10}
                  height={10}
                  src="/assets/images/notice.svg"
                  className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                />
                <span className="text-red-400">{formik.errors.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* userNationalCode & CreatorNationalCode */}
      <div className="flex flex-col gap-y-[40px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* userNationalCode */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[120px] md:h-[20px] lg:w-[140px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="id"
          >
            <span className="">کدملی/شناسه ملی</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="id"
            name="id"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.id}
            {...formik.getFieldProps("id")}
          />
          <div
            className={`absolute mt-[50px] -mr-[20px] md:mt-[50px]  lg:mt-[50px] lg:text-[12px] text-[10px]`}
          >
            {formik.touched.id && formik.errors.id && (
              <div className="flex gap-x-2 items-center mr-[20px] ">
                <Image
                  width={10}
                  height={10}
                  src="/assets/images/notice.svg"
                  className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                />
                <span className="text-red-400">{formik.errors.id}</span>
              </div>
            )}
          </div>
        </div>
        {/* creator */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="adminId"
          >
            <span>ایجاد کننده کاربر</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="adminId"
            value={formik.values.adminId}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/*  status and adminRoles */}
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
        {/* adminRoles */}
        <div
          className={` rounded-[5px] text-[12px] md:text-[14px] font-medium leading-normal w-[327px] lg:w-[396px] lg:mr-[70px] overflow-hidden ${
            isOpen
              ? "border-2 border-primaryColor-1"
              : "border border-neutralColor-3"
          }`}
        >
          <div
            onClick={openHandler}
            className={`flex justify-between items-center h-[48px] md:h-[40px] px-4  cursor-pointer  rounded-[5px] ${
              isOpen
                ? "bg-primaryColor-5"
                : "bg-naturalColor-2 md:pt-[7px] lg:pt-[5px]"
            }`}
          >
            <span>نقش ها</span>
            <HiChevronDown
              className={`text-neutralColor-3 w-5 h-5 ${
                isOpen && "rotate-180 transition-all duration-700"
              }`}
            />
          </div>
          <div className={`${isOpen ? "block" : "hidden"}`}>
            {adminRoles.map((role) => {
              return (
                <div
                  key={role.id}
                  className=" md:h-[40px]  flex items-center gap-x-[12px] px-4 border-b border-b-neutralColor-4 relative "
                >
                  <Checkbox
                    name="userRoleType"
                    type="checkbox"
                    {...formik.getFieldProps("userRoleType")}
                    value={role.id}
                  />
                  <label>{role.roleName}</label>
                </div>
              );
            })}
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
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute -right-[2px] top-[590px]  lg:right-[100px] md:right-[20px] md:top-[320px] lg:top-[315px] border-2 border-neutralColor-4">
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

export default AddSupervisorForm;

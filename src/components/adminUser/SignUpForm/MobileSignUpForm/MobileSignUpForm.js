import { MdRefresh } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import Image from "next/image";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const MobileSignUpForm = ({ formik, step, onRandom, setStep, isLoading }) => {
  const [isConfirm, setIsConfirm] = useState(true);
  return (
    <CustomFontComponent>
      <form
        onSubmit={formik.handleSubmit}
        className=" md:hidden flex flex-col items-center"
        autoComplete="off"
      >
        {/* step Value Check */}
        <div>
          {step === 0 ? (
            // step1
            <div className="flex flex-col gap-y-[39.86px]">
              <div className="flex flex-col ">
                <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[45px] -mt-[5px]  z-10" />
                <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[35px] h-[28px] absolute top-[325px] mx-4 whitespace-nowrap flex items-center ">
                  نام
                </label>
                <input
                  {...formik.getFieldProps("firstName")}
                  className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "focus:border focus:border-errorColor-2"
                      : "focus:border-2 focus:border-primaryColor-1"
                  }`}
                  name="firstName"
                  type="text"
                />
                <div className={`absolute mt-[60px] text-[10px]`}>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="flex gap-x-2 items-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/assets/images/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.errors.firstName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col ">
                <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[90px] -mt-[5px]  z-10" />
                <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[80px] h-[28px] absolute top-[415px] mx-4 whitespace-nowrap flex items-center ">
                  نام خانوادگی
                </label>
                <input
                  {...formik.getFieldProps("lastName")}
                  className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "focus:border focus:border-errorColor-2"
                      : "focus:border-2 focus:border-primaryColor-1"
                  }`}
                  name="lastName"
                  type="text"
                />
                <div className={`absolute mt-[60px] text-[10px]`}>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="flex gap-x-2 items-center ">
                      <Image
                        width={10}
                        height={10}
                        src="/assets/images/notice.svg"
                        className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                      />
                      <span className="text-red-400">
                        {formik.errors.lastName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col ">
                <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[62px] -mt-[5px]  z-10" />
                <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[50px] h-[28px] absolute top-[510px] mx-4 whitespace-nowrap flex items-center ">
                  کد ملی
                </label>
                <input
                  {...formik.getFieldProps("id")}
                  className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                    formik.touched.id && formik.errors.id
                      ? "focus:border focus:border-errorColor-2"
                      : "focus:border-2 focus:border-primaryColor-1"
                  }`}
                  name="id"
                  type="text"
                />
                <div className={`absolute mt-[60px] text-[10px]`}>
                  {formik.touched.id && formik.errors.id && (
                    <div className="flex gap-x-2 items-center ">
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
              <button
                type="buttton"
                onClick={() => setStep(1)}
                className={`bg-primaryColor-1  cursor-pointer  rounded-[5px] flex items-center justify-between px-[16px] text-naturalColor-2 text-[14px] font-medium ab w-[335px] h-[48px] bottom-[30px] align-middle mt-[50.51px] ${
                  !formik.values.firstName |
                    !formik.values.lastName |
                    !formik.values.id &&
                  "disabled  opacity-30 cursor-not-allowed"
                }`}
              >
                <span>مرحله بعدی</span>
                <BiChevronLeft className="w-12 h-12" />
              </button>
            </div>
          ) : (
            // step2
            <div className="flex  flex-col items-center justify-center ">
              {/* contactInfo section */}
              <div className="flex flex-col gap-y-[39.86px]">
                <div className="flex flex-col ">
                  <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[90px] -mt-[5px]  z-10" />
                  <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[80px] h-[28px] absolute top-[325px] mx-4 whitespace-nowrap flex items-center ">
                    شماره تماس
                  </label>
                  <input
                    {...formik.getFieldProps("phoneNumber")}
                    className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? "focus:border focus:border-errorColor-2"
                        : "focus:border-2 focus:border-primaryColor-1"
                    }`}
                    name="phoneNumber"
                    type="text"
                  />
                  <div className={`absolute mt-[60px] text-[10px]`}>
                    {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber && (
                        <div className="flex gap-x-2 items-center ">
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
                <div className="flex flex-col gap-y-[39.86px]">
                  <div className="flex flex-col ">
                    <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[90px] -mt-[5px]  z-10" />
                    <label className="text-[12px] text-neutralColor-2  font-medium px-[10px] py-[16px] bg-naturalColor-2  w-[80px] h-[28px] absolute top-[418px] mx-4 whitespace-nowrap flex items-center ">
                      آدرس ایمیل
                    </label>
                    <input
                      {...formik.getFieldProps("email")}
                      className={`pr-[50px] w-[333px] h-[48px] text-[12px] md:text-[14px] lg:text-[16px]  md:w-[360px] lg:w-[396px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
                        formik.touched.email && formik.errors.email
                          ? "focus:border focus:border-errorColor-2"
                          : "focus:border-2 focus:border-primaryColor-1"
                      }`}
                      name="email"
                      type="text"
                    />
                    <div className={`absolute mt-[55px] text-[10px]`}>
                      {formik.touched.email && formik.errors.email && (
                        <div className="flex gap-x-2 items-center ">
                          <Image
                            width={10}
                            height={10}
                            src="/assets/images/notice.svg"
                            className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                          />
                          <span className="text-red-400">
                            {formik.errors.email}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* code section */}
              <div className="bg-primaryColor-5 w-[335px] h-[164.49px] flex flex-col items-start mt-[16px] pt-[30px] ">
                <div className="flex items-center justify-center w-full  ">
                  <input
                    onCopy={(e) => e.preventDefault()}
                    onClick={(e) => e.preventDefault()}
                    step={step}
                    className="w-[250px]  pr-[45px] h-[45px] tracking-[20px] text-[16px]  font-black  border-white rounded-[5px] "
                    readOnly
                    name="random"
                    type="text"
                    formik={formik}
                    {...formik.getFieldProps("random")}
                  />
                  <MdRefresh
                    className="w-10 h-10 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                    onClick={onRandom}
                  />
                </div>
                <div className="flex flex-col items-start w-full mx-[16.73px] mt-[1px] mr-[30px] ">
                  <p className="text-neutralColor-3 text-[12px] font-normal leading-[20.73px] mt-[5px]">
                    کد بالا را وارد کنید
                  </p>
                  <input
                    isConfirm={isConfirm}
                    onCopy={(e) => e.preventDefault()}
                    onClick={(e) => e.preventDefault()}
                    step={step}
                    className="w-[250px] h-[45px] pr-[45px] tracking-[20px] text-[16px]  font-black  border-white rounded-[5px] -mr-[15px] "
                    name="confirmRandomValue"
                    type="text"
                    formik={formik}
                    {...formik.getFieldProps("confirmRandomValue")}
                  />
                  {formik.values.confirmRandomValue &&
                    formik.values.random !==
                      formik.values.confirmRandomValue && (
                      <span className="text-errorColor-2 text-[10px] absolute mt-[70px]  -mr-[8px] ">
                        کد وارد شده صحیح نمی باشد
                      </span>
                    )}
                </div>
              </div>
              <button
                type="submit"
                className={`bg-primaryColor-1 cursor-pointer  rounded-[5px]  px-[16px] text-naturalColor-2 text-[14px] font-medium ab w-[335px] h-[48px]  bottom-[30px] align-middle mt-[50.51px] ${
                  !formik.values.phoneNumber |
                    !formik.values.email |
                    !formik.values.random |
                    !formik.values.confirmRandomValue |
                    (formik.values.random !==
                      formik.values.confirmRandomValue) &&
                  "disabled  opacity-30 cursor-not-allowed"
                }`}
              >
                <div className="flex  justify-center relative">
                  <div className=" absolute w-[30px]  top-[8px]">
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
                  <span>ثبت نام</span>
                </div>
              </button>
            </div>
          )}
        </div>
      </form>
    </CustomFontComponent>
  );
};

export default MobileSignUpForm;

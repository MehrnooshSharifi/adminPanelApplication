import { MdRefresh } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import Image from "next/image";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const TabletSignUpForm = ({ formik, onRandom, isLoading }) => {
  return (
    <CustomFontComponent>
      <form
        onSubmit={formik.handleSubmit}
        className=" hidden md:flex flex-col items-center"
        autoComplete="off"
      >
        <div className=" flex flex-col gap-y-[30px] md:gap-y-[28px] lg:gap-y-[20px]">
          <div className="flex flex-col ">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[65px] md:mr-[50px] -mt-[5px] md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[50px] md:w-[40px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[175px] md:top-[210px] lg:top-[250px] pr-1  mx-4  font-medium">
              نام
            </label>
            <input
              {...formik.getFieldProps("firstName")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="firstName"
              type="text"
            />
            <div
              className={`absolute md:mt-[48px]  lg:mt-[60px]  md:text-[10px] lg:text-[12px] `}
            >
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
          <div className="flex flex-col">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex  md:mr-[100px]  md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[100px] h-[15px] text-neutralColor-2   text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px] bg-naturalColor-2 flex items-center absolute top-[290px] lg:top-[340px] mx-4  font-medium">
              نام خانوادگی
            </label>
            <input
              {...formik.getFieldProps("lastName")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="lastName"
              type="text"
            />
            <div
              className={`absolute md:mt-[50px]  lg:mt-[63px] lg:text-[12px] text-[10px]`}
            >
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="flex gap-x-2 items-center ">
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
          <div className="flex flex-col">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex  md:mr-[65px]  md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[56px]  h-[15px]  text-neutralColor-2 flex items-center  text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px]  bg-naturalColor-2 absolute top-[362px] lg:top-[420px] mx-4  font-medium">
              کدملی
            </label>
            <input
              {...formik.getFieldProps("id")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="id"
              type="text"
            />
            <div
              className={`absolute md:mt-[50px]  lg:mt-[62px] lg:text-[12px] text-[10px]`}
            >
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
          <div className="flex flex-col">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex  md:mr-[100px]  md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[90px]  h-[15px]  text-neutralColor-2 flex items-center  text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px]  bg-naturalColor-2 absolute top-[440px] lg:top-[500px] mx-4  font-medium">
              شماره تماس
            </label>
            <input
              {...formik.getFieldProps("phoneNumber")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="phoneNumber"
              type="text"
            />
            <div
              className={`absolute md:mt-[50px]  lg:mt-[64px] lg:text-[12px] text-[10px]`}
            >
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
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
          <div className="flex flex-col">
            <FaStarOfLife className="w-[5px] fill-errorColor-1 flex  md:mr-[100px]  md:-mt-[10px] lg:mt-[2px] z-10" />
            <label className="w-[90px]  h-[15px]  text-neutralColor-2 flex items-center  text-[14px] lg:text-[14px] px-2  whitespace-nowrap leading-[27.64px]  bg-naturalColor-2 absolute top-[515px] lg:top-[580px] mx-4  font-medium">
              آدرس ایمیل
            </label>
            <input
              {...formik.getFieldProps("email")}
              className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="email"
              type="text"
            />
            <div
              className={`absolute md:mt-[50px]  lg:mt-[64px] lg:text-[12px] text-[10px]`}
            >
              {formik.touched.email && formik.errors.email && (
                <div className="flex gap-x-2 items-center ">
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
          {/* code section */}
          <div className="bg-primaryColor-5 flex flex-col items-start justify-center mt-[20px] md:-mt-2 lg:mt-[5px] md:w-[360px] md:h-[170px] lg:w-[396px] lg:h-[180px]">
            <div className="flex items-center justify-center w-full mt-2">
              <input
                onCopy={(e) => e.preventDefault()}
                onClick={(e) => e.preventDefault()}
                className=" w-[250px] md:w-[267px] pr-[45px] lg:w-[300px] md:h-[45px] rounded-[5px] tracking-[20px] text-[16px]  font-black  border-white lg:text-[20px] lg:font-black lg:text-xl lg:tracking-[25px]"
                {...formik.getFieldProps("random")}
                readOnly
                name="random"
                type="text"
              />
              <MdRefresh
                className="w-10 h-10 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                onClick={onRandom}
              />
            </div>
            <div className="flex flex-col items-start w-full mx-[16.73px] mt-1 mr-[20px] lg:mr-[20px]  ">
              <p className="text-neutralColor-3 text-[12px] lg:text-[16px] font-normal leading-[20.73px] -mb-3 md:mb-1">
                کد بالا را وارد کنید
              </p>
              <input
                className=" w-[250px] md:w-[267px] pr-[45px] lg:w-[300px] md:h-[45px] rounded-[5px] tracking-[20px] text-[16px]  font-black  border-white lg:text-[20px] lg:font-black lg:text-xl lg:tracking-[25px]"
                formik={formik}
                {...formik.getFieldProps("confirmRandomValue")}
                type="text"
                name="confirmRandomValue"
              />
            </div>
            {formik.values.confirmRandomValue &&
              formik.values.random !== formik.values.confirmRandomValue && (
                <span className="text-errorColor-2 text-[10px] absolute mt-[150px] lg:mt-[150px] md:text-[12px] mr-8 md:mr-6 lg:mr-6">
                  کد وارد شده صحیح نمی باشد
                </span>
              )}
          </div>
        </div>
        <button
          type="submit"
          className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  bottom-[30px] lg:mb-2  mt-[17.51px] ${
            !formik.values.phoneNumber |
              !formik.values.email |
              !formik.values.random |
              !formik.values.confirmRandomValue |
              (formik.values.random !== formik.values.confirmRandomValue) &&
            "cursor-not-allowed disabled opacity-30"
          }`}
        >
          <div className="flex  justify-center relative">
            <div className=" absolute w-[30px]   md:w-[40px]  md:top-[8px] lg:top-[9px]top-[8px]">
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
      </form>
    </CustomFontComponent>
  );
};

export default TabletSignUpForm;

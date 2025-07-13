import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { randomId } from "@/utils/Random";
import { Captcha, GetUserInfo, Login } from "@/src/server/Service";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa6";
import Image from "next/image";
import { generateGUID } from "@/utils/GUIDGenerator";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const SignInForm = () => {
  const [cookies] = useCookies();
  const [isChecked, setIsChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [randomGenerating, setRandomGeneraing] = useState(false);
  const router = useRouter();
  // const [isTablet, setIsTablet] = useState(false);
  const [randomValue, setRandomValue] = useState(randomId());
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    userName: cookies.userName || "",
    password: cookies.password || "",
    appId: "",
    confirmCaptchaValue: "",
  };

  useEffect(() => {
    const guid = generateGUID();
    Cookies.set("sessionid_guid", guid);
    captchaGenerator();
    return () => {
      Cookies.remove("sessionid_guid");
    };
  }, []);

  const captchaGenerator = async () => {
    setRandomGeneraing(true);
    const { data } = await Captcha();
    setRandomGeneraing(false);
    setRandomValue(data);
  };
  const onSubmit = async ({
    userName,
    password,
    appId,
    confirmCaptchaValue,
  }) => {
    if (isChecked) {
      Cookies.set("userName", userName);
      Cookies.set("password", password);
    }
    if (cookies.userName && cookies.password && !isChecked) {
      Cookies.remove("userName");
      Cookies.remove("password");
    }
    setIsLoading(true);
    const res = await Login({ userName, password, appId, confirmCaptchaValue });
    if (res.isSuccess) {
      const { data: tokenInfo } = res;
      const token = tokenInfo.actionResult.value.access_token;
      Cookies.set("Token", token);
      const { data } = await GetUserInfo(userName);
      if (appId == "46801160-75c5-4486-a7c5-09ddfe0e0375")
        router.push("/adminPanel/serviceManagement");
      if (appId == "284c7daf-53e2-49d5-8978-2814d714e3c3")
        router.push("/adminPanel/financial/financialReports");
      if (appId == "4de31591-d70b-4a01-affe-e153e6c58390")
        router.push("/adminPanel/blackList");

      const { nationalCode, firstName, lastName, phoneNumber, email } = data;
      Cookies.set("appId", appId);
      Cookies.set("nationalCode", nationalCode);
      Cookies.set("firstName", firstName);
      Cookies.set("lastName", lastName);
      Cookies.set("phoneNumber", phoneNumber);
      Cookies.set("email", email);
      toast.success("ورود با موفقیت انجام شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
    } else {
      toast.error(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: false,
  });
  const checkedHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CustomFontComponent>
      <div className="overflow-x-clip">
        {/* logo & stepper Section */}
        <div className="flex flex-col items-center justify-center mb-[54px] md:mb-[14px] lg:mb-[20px] lg:mt-[120px]">
          {/* logo&PageTitle */}
          <div className="flex flex-col mt-[41px] md:mb-[10px] lg:mb-[16px]">
            {/* logo */}
            <div className="flex items-center justify-center">
              <Link href="/">
                <span>
                  <Image
                    width={10}
                    height={10}
                    src="assets/images/ramzNegarLogo.svg"
                    alt="logo"
                    className="w-[30.14px] h-[50.14px] mb-[10.55px] md:w-[41.82px] md:h-[70px] lg:w-[50px] lg:h-[70px]"
                  />
                </span>
              </Link>
            </div>
            <h2 className="text-center text-primarycolor text-lg font-bold md:text-[18px] md:leading-[38.71px] md:font-medium lg:text-[18px] lg:leading-[43.01px] lg:font-medium ">
              ورود به پنل مدیریت
            </h2>
          </div>
          {/* question */}
          {/* <div className="flex items-center justify-center gap-x-[50px] md:gap-x-[70px] lg:gap-x-[90px] w-[193px] h-[48px]  mb-[29px]  md:w-[226px] md:h-[48px]  lg:w-[200px] lg:h-[24px] lg:mb-4 mr-[30px] lg:mr-[40px] md:mr-[30px]">
            <p className="w-[98px] h-[24px] text-neutralColor-2 leading-[24px] text-[12px] font-medium text-center md:w-[131px] md:h-[24px] md:text-[14px] md:font-medium md:leading-[24px] lg:w-[115px] lg:h-[24px]  lg:text-[14px] lg:leading-[24px] lg:font-medium whitespace-nowrap">
              آیا تاکنون ثبت نام نکرده اید؟
            </p>
            <div className="w-[75px] h-[48px] flex items-center justify-center">
              <Link href="/adminPanel/adminUser/signUp">
                <span className="text-primaryColor-1 w-[70px] h-[24px] text-[12px] leading-[24px] text-center font-medium  p-[10px] flex items-center cursor-pointer md:w-[67px] md:h-[24px] md:text-[14px] md:font-medium md:leading-[24px] md:whitespace-nowrap md:-mr-[20px] lg:w-[58px] lg:h-[24px] lg:text-[14px] lg:leading-[24px] lg:whitespace-nowrap lg:font-medium">
                  ثبت نام
                </span>
              </Link>
            </div>
          </div> */}
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center"
          autoComplete={`${cookies.password ? "on" : "off"}`}
        >
          <div className=" flex flex-col gap-y-[20px] mb-[16.51px] ">
            <div className="flex flex-col mb-3">
              <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[120px] md:mr-[150px] -mt-[5px] md:-mt-[10px] lg:mt-[2px] z-10" />
              <label className="w-[110px] md:w-[140px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[175px] md:top-[170px] lg:top-[340px] pr-1  mx-4  font-medium">
                کدملی/شناسه ملی
              </label>
              <input
                {...formik.getFieldProps("userName")}
                className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                name="userName"
                label="کد ملی"
                type="text"
              />
            </div>
            <div className="flex items-center justify-start">
              {showPass ? (
                <AiFillEyeInvisible
                  className=" w-6 h-6 lg:w-8 lg:h-8  absolute top-[294px]  md:top-[285px]  lg:top-[455px] mr-4 fill-primaryColor-1"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <AiFillEye
                  className=" w-6 h-6 lg:w-8 lg:h-8  absolute top-[294px]  md:top-[285px] lg:top-[455px] mr-4 fill-primaryColor-1"
                  onClick={() => setShowPass(!showPass)}
                />
              )}

              <div className="flex flex-col">
                <FaStarOfLife className="w-[5px] fill-errorColor-1 flex mr-[67px] md:mr-[77px] md:-mt-[2px] lg:mt-[2px] z-10" />
                <label className="w-[50px] md:w-[60px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[270px] md:top-[255px] lg:top-[430px] pr-1  mx-4  font-medium">
                  رمز عبور
                </label>
                <input
                  {...formik.getFieldProps("password")}
                  className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                  name="password"
                  label="رمز عبور"
                  type={`${showPass ? "text" : "password"}`}
                  showPass={showPass}
                />
              </div>
            </div>
            {/* AdminRoles */}
            <span className="text-[12px] md:text-[14px] text-neutralColor-2 mt-[10px]">
              نقش مورد نظر را جهت ورود انتخاب کنید :
            </span>
            <div
              className="flex gap-x-[20px] items-center mt-[5px] -mb-[10px] md:mb-[10px] lg:-mb-[10px]
        "
            >
              <input
                className="cursor-pointer"
                type="radio"
                id="finantial"
                {...formik.getFieldProps("appId")}
                name="appId"
                value="284c7daf-53e2-49d5-8978-2814d714e3c3"
                onChange={formik.handleChange}
              />
              <label for="finantial" className="text-[12px] md:text-[14px]">
                مالی
              </label>
              <br />
              <input
                {...formik.getFieldProps("appId")}
                className="cursor-pointer"
                type="radio"
                id="support"
                name="appId"
                value="4de31591-d70b-4a01-affe-e153e6c58390"
                onChange={formik.handleChange}
              />
              <label for="support" className="text-[12px] md:text-[14px]">
                پشتیبانی
              </label>
              <br />
              <input
                {...formik.getFieldProps("appId")}
                className="cursor-pointer"
                type="radio"
                id="fullAdmin"
                name="appId"
                value="46801160-75c5-4486-a7c5-09ddfe0e0375"
                onChange={formik.handleChange}
              />
              <label for="fullAdmin" className="text-[12px] md:text-[14px]">
                سرپرست کل
              </label>
            </div>
            {/* code section */}
            <div className="bg-primaryColor-5 w-[335px] py-3 h-[164.49px] flex flex-col items-start justify-center mt-[16px] md:w-[360px] md:h-[164.49px] lg:w-[396px] lg:h-[189px]">
              <div className="flex items-center justify-center w-full mt-3">
                {randomGenerating ? (
                  <div className="w-[50px] h-[50px]">
                    <ThreeDots
                      height="40"
                      width="40"
                      radius="9"
                      color="#0050E5"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  </div>
                ) : (
                  <>
                    <Image
                      src={`data:image/png;base64,${randomValue}`}
                      alt="Captcha"
                      {...formik.getFieldProps("random")}
                      name="random"
                      width={120}
                      height={120}
                    />
                    <MdRefresh
                      className="w-8 h-8 fill-primaryColor-1 mr-[13.13px] cursor-pointer"
                      onClick={captchaGenerator}
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col items-start w-full mx-[16.73px] mr-[20px] md:mr-[25px] lg:mr-[17px]">
                <p className="text-neutralColor-3 text-[12px] lg:text-[14px] font-normal leading-[20.73px]  md:mb-1 lg:mt-[4px]">
                  کد بالا را وارد کنید
                </p>
                <input
                  maxLength={5}
                  formik={formik}
                  type="text"
                  name="confirmCaptchaValue"
                  {...formik.getFieldProps("confirmCaptchaValue")}
                  className="w-[250px] md:w-[267px] lg:w-[325px] pr-[50px] h-[48px] lg:h-[60px] rounded-[5px] tracking-[20px] text-[16px] text-3xl font-black outline-none border-none lg:text-[20px] lg:font-black lg:text-4xl lg:tracking-[30px]"
                />
              </div>
            </div>
          </div>
          {/* RememberMe & ForgetPassword section */}
          <div className="flex w-[335px] h-[48px] md:w-[360px] md:h-[48px] lg:w-[388px] lg:h-[48px] items-center justify-between  mb-[70px] md:mb-[80px] -mt-[10px] md:-mt-0  ">
            {/* RememberMe */}
            <div className="flex gap-x-[8px] items-center  lg:-mt-[20px]">
              <div
                onClick={checkedHandler}
                className={` cursor-pointer ${
                  !isChecked &&
                  "hover:border hover:border-neutralColor-3 hover:bg-neutralColor-4"
                } w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] flex items-center justify-center  border border-neutralColor-4 rounded-[3px] ${
                  isChecked && "bg-successColor-2 border-none"
                }`}
              >
                {isChecked && (
                  <BsCheckLg className="w-8 h-8 fill-naturalColor-2" />
                )}
              </div>
              <span
                onClick={checkedHandler}
                className="text-neutralColor-2 cursor-pointer  text-[10px] font-medium leading-[21.51px] md:text-[14px] md:leading-[30.11px]"
              >
                مرا به خاطر بسپار
              </span>
            </div>
            {/* ForgetPassword */}
            <Link
              href="/adminPanel/adminUser/resetPassword"
              className="lg:-mt-[20px]"
            >
              <span className="text-[10px] text-primaryColor-1 leading-[21.51px] font-medium md:text-[14px] md:leading-[30.11px]  ">
                رمز عبور را فراموش کردید؟
              </span>
            </Link>
          </div>
          <button
            disabled={!formik.isValid || isLoading}
            type="submit"
            className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[335px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  bottom-[10px] lg:-mt-[90px]  -mt-[70px] ${
              !formik.values.confirmCaptchaValue && `opacity-30`
            }`}
          >
            <div className="flex  justify-center relative">
              <div className=" absolute w-[30px] md:w-[40px] top-[7px] md:top-[5px] lg:top-[9px]">
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
              <span> ورود به پنل مدیریت</span>
            </div>
          </button>
        </form>
      </div>
    </CustomFontComponent>
  );
};

export default SignInForm;

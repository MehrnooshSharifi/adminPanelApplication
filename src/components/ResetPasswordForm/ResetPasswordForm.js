import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import { useCookies } from "react-cookie";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import Image from "next/image";
import Cookies from "js-cookie";
import { Captcha, ResetPassword } from "@/src/server/Service";
import { generateGUID } from "@/utils/GUIDGenerator";
const CustomFontComponent = styled.div`
  font-family: "iranyekanEnNumBold";
`;
const initialValues = {
  nationalCode: "",
  confirmCaptchaValue: "",
};

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomGenerating, setRandomGeneraing] = useState(false);
  const [cookies] = useCookies();
  const router = useRouter();
  // const [isTablet, setIsTablet] = useState(false);
  const [randomValue, setRandomValue] = useState();
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
  const onSubmit = async (values) => {
    const nationalCode = values.nationalCode;
    const captchaCode = values.confirmCaptchaValue;
    setIsLoading(true);
    const res = await ResetPassword(nationalCode, captchaCode);
    const { isSuccess, message } = res;
    if (isSuccess) {
      toast.success("رمز عبور جدید از طریق پیامک ارسال گردید.", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push("/");
      setIsLoading(false);
    } else {
      toast.error(message, {
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
    validateOnMount: true,
  });
  return (
    <CustomFontComponent>
      <div className="overflow-x-clip">
        {/* logo & stepper Section */}
        <div className="flex flex-col items-center justify-center mb-[54px] md:mb-[14px] lg:mt-[150px] lg:-mb-[100px]">
          {/* logo&PageTitle */}
          <div className="flex flex-col mt-[41px] md:mb-[10px] lg:mb-[170px]">
            {/* logo */}
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/ramzNegarLogo.svg"
                  alt="logo"
                  className="w-[30.14px] h-[50.14px] mb-[10.55px] md:w-[41.82px] md:h-[70px] lg:w-[43.26px] lg:h-[72.45px]"
                />
              </Link>
            </div>
            <h2 className=" text-center text-primarycolor text-lg font-bold md:text-[18px] md:leading-[38.71px] md:font-medium lg:text-[20px] lg:leading-[43.01px] lg:font-medium ">
              بازیابی رمز عبور
            </h2>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center"
          autoComplete={`${
            cookies.userName && cookies.password ? "on" : "off"
          }`}
        >
          <div className=" flex flex-col gap-y-[16px] mb-[222.51px] md:mb-[20px]">
            <div className="flex flex-col mb-3">
              <FaStarOfLife className="w-[5px] md:w-[7px] fill-errorColor-1 flex mr-[60px] md:mr-[70px] -mt-[10px] z-20" />
              <label className="w-[50px] md:w-[60px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute top-[172px] md:top-[363px] lg:top-[373px] pr-1  mx-4  font-medium">
                کد ملی
              </label>
              <input
                {...formik.getFieldProps("nationalCode")}
                className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                name="nationalCode"
                label="کد ملی"
                formik={formik}
                type="text"
              />
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
                <p className="text-neutralColor-3 text-[12px] lg:text-[14px] font-normal leading-[20.73px]  md:mb-1">
                  کد بالا را وارد کنید
                </p>
                <input
                  maxLength={5}
                  formik={formik}
                  type="text"
                  name="confirmCaptchaValue"
                  {...formik.getFieldProps("confirmCaptchaValue")}
                  className="w-[250px] md:w-[267px] lg:w-[325px] pr-[50px] h-[48px] lg:h-[60px] rounded-[5px] tracking-[20px] text-[16px]  font-black outline-none border-none lg:text-[20px] lg:font-black  lg:tracking-[30px]"
                />
              </div>
            </div>
          </div>
          <button
            disabled={!formik.isValid || isLoading}
            type="submit"
            className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[335px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  bottom-[30px]  -mt-[200px] md:mt-[20px] ${
              !formik.values.confirmCaptchaValue ? "opacity-30" : "opacity-100"
            }`}
          >
            <div className=" absolute w-[30px] mr-[145px] mt-[7px] md:w-[40px] md:mr-[145px] md:mt-[7px] lg:mr-[165px] lg:mt-[7px] ">
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
            <span> ارسال رمز عبور جدید</span>
          </button>
        </form>
      </div>
    </CustomFontComponent>
  );
};

export default ResetPasswordForm;

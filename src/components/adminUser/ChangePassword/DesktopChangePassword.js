import { useFormik } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useCookies } from "react-cookie";
import { ChangePassword } from "@/src/server/Service";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const DesktopChangePassword = ({
  setShowPassModal,
  showPassModal,
  closeModalHandler,
}) => {
  const [cookies, setCookie] = useCookies();
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nationalCode = cookies.nationalCode;

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    resetForm();
    setIsLoading(true);
    const res = await ChangePassword(values, nationalCode);
    if (res.isSuccess) {
      toast.success(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      setShowPassModal(false);
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
    validateOnMount: true,
  });
  return (
    <>
      <div className="hidden lg:block max-w-[446px] h-[441.6px]  p-[20px] absolute top-[200px] bg-naturalColor-2 rounded-[5px] animate-slideInDown animate-duration-500 z-50 ">
        {/* Title and CloseIcone */}
        <div className="flex w-[396px] h-[39.6px]  mb-[20px] items-center whitespace-nowrap  gap-x-[255px] mr-[5px]">
          <div className="text-[20px] font-bold leading-[34.55px]">
            <span>تغییر رمز عبور</span>
          </div>
          <div
            onClick={() => setShowPassModal(false)}
            className="cursor-pointer"
          >
            <MdOutlineClose className="w-[28px] h-[28px]" />
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center mt-[30px] "
        >
          <div className=" flex flex-col gap-y-[50px]">
            {/* NowPassword */}
            <div className="flex items-center justify-start">
              {showOldPass ? (
                <AiFillEyeInvisible
                  className=" w-[24px] h-[24px]  absolute top-[100px]  mr-4 fill-primaryColor-1"
                  onClick={() => setShowOldPass(!showOldPass)}
                />
              ) : (
                <AiFillEye
                  className=" w-[24px] h-[24px]  absolute top-[100px] mr-4 fill-primaryColor-1"
                  onClick={() => setShowOldPass(!showOldPass)}
                />
              )}
              <div className="flex flex-col">
                <label className="lg:w-[100px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute lg:top-[75px] pr-1  mx-4  font-medium">
                  رمز عبور فعلی
                </label>
                <input
                  formik={formik}
                  {...formik.getFieldProps("oldPassword")}
                  className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                  name="oldPassword"
                  type={`${showOldPass ? "text" : "password"}`}
                  showOldPass={showOldPass}
                />
              </div>
            </div>
            {/* NewPassword */}
            <div className="flex items-center justify-start">
              {showNewPass ? (
                <AiFillEyeInvisible
                  className=" w-[24px] h-[24px]  absolute top-[200px]  mr-4 fill-primaryColor-1"
                  onClick={() => setShowNewPass(!showNewPass)}
                />
              ) : (
                <AiFillEye
                  className=" w-[24px] h-[24px]  absolute top-[200px] mr-4 fill-primaryColor-1"
                  onClick={() => setShowNewPass(!showNewPass)}
                />
              )}
              <div className="flex flex-col">
                <label className="lg:w-[100px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute lg:top-[175px] pr-1  mx-4  font-medium">
                  رمز عبور جدید
                </label>
                <input
                  formik={formik}
                  {...formik.getFieldProps("newPassword")}
                  className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                  name="newPassword"
                  type={`${showNewPass ? "text" : "password"}`}
                  showNewPass={showNewPass}
                />
              </div>
            </div>
            {/* ConfirmNewPassWord */}
            <div className="flex items-center justify-start">
              {showConfirmNewPass ? (
                <AiFillEyeInvisible
                  className=" w-[24px] h-[24px]  absolute  mr-4 fill-primaryColor-1"
                  onClick={() => setShowConfirmNewPass(!showConfirmNewPass)}
                />
              ) : (
                <AiFillEye
                  className=" w-[24px] h-[24px]  absolute mr-4 fill-primaryColor-1"
                  onClick={() => setShowConfirmNewPass(!showConfirmNewPass)}
                />
              )}
              <div className="flex flex-col">
                <label className="lg:w-[130px]  mr-5 h-[28px] whitespace-nowrap  text-neutralColor-2 text-[12px] md:text-[16px] leading-[20.73px] md:leading-[27.64px] lg:leading-[27.64px]  bg-naturalColor-2 absolute lg:top-[270px] pr-1  mx-4  font-medium">
                  تکرار رمز عبور جدید
                </label>
                <input
                  formik={formik}
                  {...formik.getFieldProps("confirmNewPassword")}
                  className="focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
                  name="confirmNewPassword"
                  type={`${showConfirmNewPass ? "text" : "password"}`}
                  showConfirmNewPass={showConfirmNewPass}
                />
              </div>
            </div>
            <button
              type="submit"
              className={`bg-primaryColor-1  rounded-[5px] text-center  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[396pxpx]  h-[48px] -mt-[40px] ${
                !formik.values.oldPassword |
                  !formik.values.newPassword |
                  (formik.values.newPassword !==
                    formik.values.confirmNewPassword) &&
                "cursor-not-allowed disabled opacity-30"
              }`}
            >
              <div className="flex justify-center relative">
                <span> ثبت رمز عبور جدید</span>
                <div className="absolute top-[8px] hidden lg:block">
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
      </div>
      {showPassModal && (
        <div className="hidden lg:flex justify-between">
          <div
            onClick={closeModalHandler}
            className="z-40 fixed top-0  w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
          />
        </div>
      )}
    </>
  );
};

export default DesktopChangePassword;

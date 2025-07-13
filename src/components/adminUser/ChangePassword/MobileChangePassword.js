import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";

const MobileChangePassword = ({ formik, isLoading }) => {
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[36px] md:hidden"
    >
      {/* oldPassword */}
      <div className="flex flex-col relative">
        {showOldPass ? (
          <AiFillEyeInvisible
            className=" w-[24px] h-[24px]  absolute top-[15px]  mr-4 fill-primaryColor-1"
            onClick={() => setShowOldPass(!showOldPass)}
          />
        ) : (
          <AiFillEye
            className=" w-[24px] h-[24px]  absolute top-[15px] mr-4 fill-primaryColor-1"
            onClick={() => setShowOldPass(!showOldPass)}
          />
        )}
        <label
          className=" w-[90px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
          htmlFor="oldPassword"
        >
          <span className="">رمز عبور فعلی</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[50px]"
          id="oldPassword"
          name="oldPassword"
          type={`${showOldPass ? "text" : "password"}`}
          onChange={formik.handleChange}
          value={formik.values.oldPassword}
        />
      </div>
      {/* NewPassword */}
      <div className="flex flex-col relative  ">
        {showNewPass ? (
          <AiFillEyeInvisible
            className=" w-[24px] h-[24px]  absolute top-[10px]  mr-4 fill-primaryColor-1"
            onClick={() => setShowNewPass(!showNewPass)}
          />
        ) : (
          <AiFillEye
            className=" w-[24px] h-[24px]  absolute top-[10px] mr-4 fill-primaryColor-1"
            onClick={() => setShowNewPass(!showNewPass)}
          />
        )}
        <label
          className=" w-[90px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
          htmlFor="newPassword"
        >
          <span className="">رمز عبور جدید</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[50px]"
          id="newPassword"
          name="newPassword"
          type={`${showNewPass ? "text" : "password"}`}
          onChange={formik.handleChange}
          value={formik.values.newPassword}
        />
      </div>
      {/* ConfirmNewPassWord */}
      <div className="flex flex-col relative  ">
        {showConfirmNewPass ? (
          <AiFillEyeInvisible
            className=" w-[24px] h-[24px]  absolute top-[12px]  mr-4 fill-primaryColor-1"
            onClick={() => setShowConfirmNewPass(!showConfirmNewPass)}
          />
        ) : (
          <AiFillEye
            className=" w-[24px] h-[24px]  absolute top-[12px] mr-4 fill-primaryColor-1"
            onClick={() => setShowConfirmNewPass(!showConfirmNewPass)}
          />
        )}
        <label
          className=" w-[116px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
          htmlFor="confirmNewPassword"
        >
          <span className="">تکرار رمز عبور جدید</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[50px]"
          id="confirmNewPassword"
          name="confirmNewPassword"
          type={`${showConfirmNewPass ? "text" : "password"}`}
          onChange={formik.handleChange}
          value={formik.values.confirmNewPassword}
        />
      </div>
      {/* submit */}
      <button
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] mt-[150px] ${
          !formik.values.oldPassword |
            !formik.values.newPassword |
            (formik.values.newPassword !== formik.values.confirmNewPassword) &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        <div className="flex justify-center relative">
          <span> ثبت رمز عبور جدید</span>
          <div className="absolute top-[10px] md:hidden">
            {isLoading && (
              <ThreeDots
                height="30"
                width="30"
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
    </form>
  );
};

export default MobileChangePassword;

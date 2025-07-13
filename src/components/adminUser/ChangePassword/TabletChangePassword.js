import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
const TabletChangePassword = ({ formik, isLoading }) => {
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="md:flex flex-col gap-y-[36px] hidden pr-5 lg:pr-[100px] relative "
    >
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
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
            className=" md:w-[101px] md:h-[20px] lg:w-[100px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="oldPassword"
          >
            <span className="">رمز عبور فعلی</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[50px]"
            id="oldPassword"
            name="oldPassword"
            type={`${showOldPass ? "text" : "password"}`}
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />
        </div>
        {/* NewPassword */}
        <div className="flex flex-col relative max-w-[327px] ">
          {showNewPass ? (
            <AiFillEyeInvisible
              className=" w-[24px] h-[24px]  absolute top-[12px]  mr-4 fill-primaryColor-1"
              onClick={() => setShowNewPass(!showNewPass)}
            />
          ) : (
            <AiFillEye
              className=" w-[24px] h-[24px]  absolute top-[12px] mr-4 fill-primaryColor-1"
              onClick={() => setShowNewPass(!showNewPass)}
            />
          )}
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="newPassword"
          >
            <span>رمز عبور جدید</span>
          </label>
          <input
            id="newPassword"
            type={`${showNewPass ? "text" : "password"}`}
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[50px] cursor-pointer"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* ConfirmNewPassWord */}
      <div className="flex flex-col relative max-w-[327px] mb-[430px] ">
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
          className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="confirmNewPassword"
        >
          <span>تکرار رمز عبور جدید</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[50px] cursor-pointer"
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
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[680px] h-[48px] -mt-[10px]  ${
          !formik.values.oldPassword |
            !formik.values.newPassword |
            (formik.values.newPassword !== formik.values.confirmNewPassword) &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        <div className="flex justify-center relative">
          <span> ثبت رمز عبور جدید</span>
          <div className="absolute top-[8px] hidden md:block lg:hidden">
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
    </form>
  );
};

export default TabletChangePassword;

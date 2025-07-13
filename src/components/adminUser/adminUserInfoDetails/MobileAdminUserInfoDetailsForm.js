const MobileAdminUserInfoDetailsForm = ({ formik }) => {
  return (
    <form className="flex flex-col gap-y-[36px] md:hidden">
      {/* firstName */}
      <div className="flex flex-col relative  ">
        <label
          className=" w-[35px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-3"
          htmlFor="userName"
        >
          <span className="">نام </span>
        </label>
        <input
          readOnly
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-3 bg-neutralColor-5 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
      </div>
      {/* LastName */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="family"
        >
          <span>نام خانوادگی</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="family"
          value={formik.values.family}
          onChange={formik.handleChange}
        />
      </div>
      {/* NationalCode */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="nationalCode"
        >
          <span>کد ملی</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="nationalCode"
          value={formik.values.nationalCode}
          onChange={formik.handleChange}
        />
      </div>
      {/* PhoneNumber */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="phoneNumber"
        >
          <span>شماره تلفن</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
        />
      </div>
      {/*EmailAddress */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="email"
        >
          <span>ایمیل</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      {/* password */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="companyName"
        >
          <span>رمز عبور</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="companyName"
          value={formik.values.companyName}
          onChange={formik.handleChange}
        />
      </div>
      {/* submit */}
      <button
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[30px] ${
          !formik.values.serviceName |
            !formik.values.serviceDesc |
            !formik.values.policyauth &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        ثبت تغییرات 
      </button>
    </form>
  );
};

export default MobileAdminUserInfoDetailsForm;

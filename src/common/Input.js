const InputComponent = ({
  formik,
  label,
  type,
  name,
  className,
  step,
  isTablet,
}) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={name} className={className} dir="rtl ">
        {label}
        <span
          className={` text-errorColor-2 w-[20px] ${step === 1 && "hidden"} ${
            isTablet && "hidden"
          }`}
        >
          *
        </span>
      </label>
      <input
        className={`focus-within:border-2 focus-within:border-primaryColor-1 pr-16 w-[333px] h-[48px] md:w-[360px] lg:w-[396px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2 ${
          step === 1
            ? "max-w-[200px] h-[48px] tracking-[20px] text-[16px] font-black border-none mt-4"
            : ""
        } ${
          isTablet
            ? "  max-w-[250px] md:max-w-[267px] lg:max-w-[325px] lg:h-[60px] tracking-[20px] text-[16px] text-3xl font-black outline-none border-none lg:text-[20px] lg:font-black lg:text-4xl lg:tracking-[30px]"
            : ""
        }`}
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        id={name}
      />
    </div>
  );
};

export default InputComponent;

const SearchForm = ({ formik, title, children }) => {
  return (
    <div className="flex flex-col px-4 md:px-[40px] mt-[10px] w-[375px] mx-auto md:w-[768px] lg:w-[1050px] mb-[30px] lg:mt-[35.07px] ">
      {/* title */}
      <span className="mb-[43px] text-[14px] font-medium leading-[24.18px] md:text-[18px] md:leading-[31.09px] lg:text-[20px] lg:font-bold lg:leading-[34.55px]">
        {title}
      </span>
      {/* form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="flex gap-x-[8px] md:gap-x-0">
          <div className="w-[100px] h-[44px] flex items-center text-[12px] text-neutralColor-1 font-medium leading-[40px] md:text-[16px] md:leading-[40px] lg:text-[18px]">
            <span>فیلتر:</span>
          </div>
          {/* searchBar */}
          <div className="flex w-[302px] h-[48px] ml-[10px] md:w-[447px] md:-mr-10 ">
            <label className="absolute bg-naturalColor-2 mr-3 px-[10px] h-[31px] flex items-center -mt-[15px] text-[12px] font-bold leading-[20.73px] md:text-[14px] md:leading-[24.18px] lg:text-[16px]">
              جستجو با کدملی/شناسه ملی
            </label>
            <input
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.nationalCode}
              name="nationalCode"
              type="text"
              className="pr-4 -ml-1 text-[12px] md:text-[14px] lg:text-[16px] w-[252px] md:w-[310px] rounded-tr-[5px] rounded-[5px] rounded-br-[5px] md:rounded-[5px]  border border-neutralColor-3 md:ml-4"
            />
            {children}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

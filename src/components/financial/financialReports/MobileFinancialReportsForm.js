import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
const MobileFinancialReportsForm = ({
  formik,
  startvalue,
  setStartValue,
  endvalue,
  setEndValue,
  openFilter,
  setOpenFilter,
  isLoading,
}) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[36px] md:hidden"
    >
      {openFilter && (
        <div className="flex flex-col gap-y-[30px]">
          <div className="flex flex-col relative  ">
            <label
              className=" w-[90px] h-[28px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2 whitespace-nowrap"
              htmlFor="nationalCode"
            >
              <span className="">کد/شناسه ملی</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="nationalCode"
              name="nationalCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nationalCode}
            />
          </div>
          <div className="flex flex-col relative  ">
            <label
              className=" z w-[63px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span className="">از تاریخ</span>
            </label>
            <DatePicker
              value={startvalue}
              onChange={setStartValue}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "14px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "327px",
                height: "48px",
                paddingRight: "25px",
                background: 'url("/assets/images/calendar.svg")no-repeat left',
                backgroundSize: "30px",
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </div>
          <div className="flex flex-col relative  ">
            <label
              className=" z w-[63px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span className="">تا تاریخ</span>
            </label>
            <DatePicker
              value={endvalue}
              onChange={setEndValue}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "14px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "327px",
                height: "48px",
                paddingRight: "25px",
                background: 'url("/assets/images/calendar.svg")no-repeat left',
                backgroundSize: "30px",
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[16px] "
          >
            <div className="flex justify-center relative">
              <span> فیلتر کن</span>
              <div className="absolute left-[125px] top-[7px] md:block">
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
      )}
      {!openFilter && (
        <button
          onClick={() => setOpenFilter(true)}
          type="button"
          className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[16px] "
        >
          نمایش فیلترها
        </button>
      )}
    </form>
  );
};

export default MobileFinancialReportsForm;

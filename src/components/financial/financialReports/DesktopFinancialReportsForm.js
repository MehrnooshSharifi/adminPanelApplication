import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
const DesktopFinancialReportsForm = ({
  formik,
  startvalue,
  setStartValue,
  endvalue,
  setEndValue,
  isLoading,
}) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:flex flex-col gap-y-[36px] hidden "
    >
      <div className="flex  gap-x-[30px] -mr-[10px] ">
        <div className="flex whitespace-nowrap items-center text-[18px] ">
          <span>فیلتر :</span>
        </div>
        {/* nationalCode */}
        <div className="flex flex-col relative">
          <label
            className=" w-[120px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2 whitespace-nowrap"
            htmlFor="nationalCode"
          >
            <span className="">کد/شناسه ملی</span>
          </label>
          <input
            autoComplete="off"
            className="w-[253.76px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="nationalCode"
            name="nationalCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nationalCode}
          />
        </div>
        {/* dateFrom */}
        <div className="flex flex-col relative  ">
          <label
            className="w-[80px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
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
              color: "#212121",
              background: "#FFFFFF",
              border: "1px solid #9E9E9E",
              borderRadius: "5px",
              width: "253.76px",
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
        {/* dateTo */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[80px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
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
              color: "#212121",
              background: "#FFFFFF",
              border: "1px solid #9E9E9E",
              borderRadius: "5px",
              width: "253.67px",
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
          className="bg-primaryColor-1  rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[137px] h-[48px] "
        >
          <div className="flex justify-center relative">
            <span>فیلتر کن</span>
            <div className="absolute left-[10px] top-2 md:block">
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
  );
};

export default DesktopFinancialReportsForm;

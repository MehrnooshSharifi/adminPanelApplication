import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
const DesktopMOHReportForm = ({
  formik,
  startvalue,
  setStartValue,
  endvalue,
  setEndValue,
  isLoading,
  dateRange,
}) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:flex flex-col gap-y-[36px] hidden "
    >
      <div className="flex  gap-x-[30px] -mr-[10px] relative ">
        <div className="flex gap-x-[20px]">
          <div className="flex whitespace-nowrap items-center text-[18px] ">
            <span>فیلتر :</span>
          </div>
          {/* dateFrom */}
          <div className="flex flex-col relative  ">
            <label
              className="w-[65px] h-[20px] absolute -top-3 [5px] px-[5px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span className="">از تاریخ</span>
            </label>
            <DatePicker
              // minDate={dateRange}
              // maxDate={new Date()}
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
                width: "200px",
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
              className=" w-[65px] h-[20px] absolute -top-3 [5px] px-[5px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span className="">تا تاریخ</span>
            </label>
            <DatePicker
              // minDate={dateRange}
              // maxDate={new Date()}
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
                width: "200px",
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
          {/* userId */}
          <div className="flex-col relative">
            <label
              className="w-[140px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 whitespace-nowrap bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2"
              htmlFor="userId"
            >
              <span className="">کدملی/شناسه ملی</span>
            </label>
            <input
              autoComplete="off"
              className="w-[200px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="userId"
              name="userId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userId}
            />
          </div>
          {/* terminalId */}
          <div className="flex-col relative">
            <label
              className="w-[110px] h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[16px] font-bold text-neutralColor-2 whitespace-nowrap"
              htmlFor="terminalId"
            >
              <span className="">شماره ترمینال</span>
            </label>
            <input
              autoComplete="off"
              className="w-[200px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="terminalId"
              name="terminalId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.terminalId}
            />
          </div>
        </div>
        {/* submit */}
        <button
          type="submit"
          className="bg-primaryColor-1  rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[110px] h-[48px] absolute top-[1px] right-[950px]"
        >
          <div className="flex justify-center relative">
            <span> فیلتر کن</span>
            <div className=" left-[2  0px] top-[8px] absolute ">
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

export default DesktopMOHReportForm;

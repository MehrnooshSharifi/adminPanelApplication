import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
const BlackListForm = ({
  isUpdate,
  formik,
  nonActiveHandler,
  activeHandler,
  openIsBlocked,
  setOpenIsBlocked,
  isLoading,
  startvalue,
  setStartValue,
  endvalue,
  setEndValue,
}) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col md:gap-y-[40px] -pr-[7px] md:pr-5 lg:pr-[100px] relative md:-mt-[10px] lg:mt-[40px]"
    >
      {/* userNationalCode & blockerNationalCode */}
      <div className="flex flex-col gap-y-[25px] md:flex-row md:gap-x-[25px] lg:gap-x-[40px]">
        {/* userNationalCode */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[120px] md:h-[20px] lg:w-[140px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="nationalCode"
          >
            <span className="">کدملی/شناسه ملی</span>
          </label>
          {isUpdate ? (
            <input
              readOnly
              autoComplete="off"
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
              id="nationalCode"
              name="nationalCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nationalCode}
            />
          ) : (
            <input
              autoComplete="off"
              className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="nationalCode"
              name="nationalCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nationalCode}
            />
          )}
        </div>
        {/* blockerNationalCode */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="adminNationalCode"
          >
            <span>بلاک کننده </span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5  text-neutralColor-2 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="adminNationalCode"
            value={formik.values.adminNationalCode}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* Date and status */}
      <div className="flex flex-col gap-y-[25px] mt-[25px] md:mt-0 md:flex-row gap-x-[25px] lg:gap-x-[40px]">
        {/* Date */}
        <div className="flex gap-x-[25px]  lg:gap-x-[95px] ">
          {/* dateFrom */}
          <div className="flex flex-col relative  ">
            <label
              className="w-[70px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span className="">از تاریخ</span>
            </label>
            <DatePicker
              minDate={new Date()}
              // maxDate={new Date()}
              value={startvalue}
              onChange={setStartValue}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "16px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "151px",
                height: "50px",
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
              className=" w-[70px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2"
              htmlFor="dateFrom"
            >
              <span className="">تا تاریخ</span>
            </label>
            <DatePicker
              minDate={new Date()}
              // maxDate={new Date()}
              value={endvalue}
              onChange={setEndValue}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "16px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "151px",
                height: "49px",
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
        </div>
        {/* status */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="isBlocked"
          >
            <span className={`${openIsBlocked && "text-primaryColor-1"}`}>
              وضعیت
            </span>
          </label>
          <div
            onClick={() => setOpenIsBlocked(!openIsBlocked)}
            className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
              openIsBlocked && "border-2 border-primaryColor-1"
            }`}
            name="isBlocked"
            value={formik.values.isBlocked}
            onChange={formik.handleChange}
          >
            {formik.values.isBlocked ? "فعال" : "غیرفعال"}
          </div>
          <div
            className={`absolute left-4 lg:-left-12 top-[16px] cursor-pointer ${
              openIsBlocked && "transition-all duration-300 rotate-180"
            }`}
            onClick={() => setOpenIsBlocked(!openIsBlocked)}
          >
            <Image width={20} height={20} src="/assets/images/down.svg" alt="down" />
          </div>
        </div>
      </div>
      {/* submit */}
      <button
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[330px] md:w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px]  lg:mt-[300px] lg:mr-[680px]  mt-[200px]  `}
      >
        <div className="flex justify-center relative">
          <span> ثبت تغییرات</span>
          <div className="absolute lg:left-[40px] top-2 block">
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
      {/* openIsActiveSection */}
      {openIsBlocked && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute right-[6px] top-[280px]  lg:right-[537px] md:right-[372px] md:top-[142px] lg:top-[140px] border-2 border-neutralColor-4">
          <div
            onClick={activeHandler}
            value={true}
            className=" cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center mb-[14px]">
              فعال
            </span>
          </div>
          <div
            value={false}
            className="cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center pt-[10px] "
            onClick={nonActiveHandler}
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center ">
              غیرفعال
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default BlackListForm;

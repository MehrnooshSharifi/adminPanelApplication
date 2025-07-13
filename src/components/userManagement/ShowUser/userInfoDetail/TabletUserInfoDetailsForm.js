import { ThreeDots } from "react-loader-spinner";
import moment from "moment";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const TabletUserInfoDetailsForm = ({
  userInfo,
  sendSms,
  setSendSms,
  formik,
  noSendSmsHandler,
  sendSmsHandler,
  peymentSendSmsHandler,
  noPeymentSendSmsHandler,
  peymentSendSms,
  setPaymentSendSms,
  changePasswordHandler,
  noChangePasswordHandler,
  changePassword,
  setChangePassword,
  isLoading,
  userExpireDate,
  setUserExpireDate,
}) => {
  const activityTimeTo = formik.values.activityTimeTo;
  const timeTo = moment(activityTimeTo, "HH:mm");
  const formattedTimeTo = timeTo.format("HH:mm");

  const activityTimeFrom = formik.values.activityTimeFrom;
  const timeFrom = moment(activityTimeFrom, "HH:mm");
  const formattedTimeFrom = timeFrom.format("HH:mm");
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="md:flex flex-col gap-y-[20px] hidden pr-5 lg:pr-[100px] relative md:-mt-[10px] lg:-mt-[40px]"
    >
      {/* userName&userFamily */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* firstName */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[35px] md:h-[20px] lg:w-[35px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-3"
            htmlFor="userName"
          >
            <span className="">نام</span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] bg-neutralColor-5 text-neutralColor-3 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="firstName"
            name="firstName"
            type="text"
            // onChange={userData.handleChange}
            value={userInfo.data.firstName}
          />
        </div>
        {/* lastName */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="lastName"
          >
            <span>نام خانوادگی</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5 text-neutralColor-3 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="lastName"
            value={userInfo.data.lastName}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* phoneNumber&nationalCode */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/*nationalCode */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[100px] md:h-[20px] lg:w-[120px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-3"
            htmlFor="nationalCode"
          >
            <span className="">کد/شناسه ملی</span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] bg-neutralColor-5 text-neutralColor-3 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="nationalCode"
            name="nationalCode"
            type="text"
            onChange={formik.handleChange}
            value={userInfo.data.nationalCode}
          />
        </div>
        {/* phoneNumber */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="phoneNumber"
          >
            <span>شماره تلفن</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5 text-neutralColor-3 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="phoneNumber"
            value={userInfo.data.phoneNumber}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* emailAddress&CompanyName */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* emailAddress */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[90px] md:h-[20px] lg:w-[100px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-3"
            htmlFor="email"
          >
            <span className="">آدرس ایمیل</span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] bg-neutralColor-5 text-neutralColor-3 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="email"
            name="email"
            type="text"
            // onChange={formik.handleChange}
            value={userInfo.data.email}
          />
        </div>
        {/* CompanyName */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="companyName"
          >
            <span>نام شرکت</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5 text-neutralColor-3 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="companyName"
            value={userInfo.data.companyName}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* deposit&ProfitMoney */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* balance */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[105px] md:h-[20px] lg:w-[110px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-3"
            htmlFor="balance"
          >
            <span className="">مانده موجودی</span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] bg-neutralColor-5 text-neutralColor-3 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="balance"
            name="balance"
            type="text"
            // onChange={formik.handleChange}
            value={userInfo.data.account.balance}
          />
        </div>
        {/* benefitAmount */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="benefitAmount"
          >
            <span>سود پول</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5 text-neutralColor-3 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="benefitAmount"
            value={userInfo.data.account.benefitAmount}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* userServicePoint & paymentSmsAmount */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* userServicePoint */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[80px] md:h-[20px] lg:w-[90px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="userServicePoint"
          >
            <span className="">امتیاز کاربر</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  text-neutralColor-2 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="userServicePoint"
            name="userServicePoint"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userServicePoint}
          />
        </div>
        {/* paymentSmsAmount */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="paymentSmsAmount"
          >
            <span>حداقل مبلغ ارسال پیامک</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px]  text-neutralColor-32 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="paymentSmsAmount"
            value={formik.values.paymentSmsAmount}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* activityTimeFrom & activityTimeTo */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* activityTimeFrom */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[170px] md:h-[20px] lg:w-[180px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="activityTimeFrom"
          >
            <span className="">ساعت فعال بودن کاربر از :</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] pl-[16px] cursor-pointer"
            id="activityTimeFrom"
            name="activityTimeFrom"
            type="time"
            onChange={formik.handleChange}
            value={formattedTimeFrom}
          />
        </div>
        {/* activityTimeTo */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="activityTimeTo"
          >
            <span>ساعت فعال بودن کاربر تا :</span>
          </label>
          <input
            type="time"
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px]  text-neutralColor-32 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] pl-[16px] cursor-pointer"
            name="activityTimeTo"
            value={formattedTimeTo}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* maxTransactionPerDay &  tempTransactionCount */}
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* maxTransactionPerDay */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[200px] md:h-[20px] lg:w-[220px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="maxTransactionPerDay"
          >
            <span className="">سقف تعداد تراکنش روزانه کاربر</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="maxTransactionPerDay"
            name="maxTransactionPerDay"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.maxTransactionPerDay}
          />
        </div>
        {/* tempTransactionCount */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="tempTransactionCount"
          >
            <span>تعداد تراکنش روز</span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] bg-neutralColor-5 text-neutralColor-3 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="tempTransactionCount"
            value={formik.values.tempTransactionCount}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* isSendSMS & isPaymentSendSMS */}
      <div className="flex gap-x-[25px] lg:gap-x-[108px]">
        {/* isSendSMS */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="isSendSMS"
          >
            <span className={`${sendSms && "text-primaryColor-1"}`}>
              اطلاع رسانی ورود از طریق پیامک
            </span>
          </label>
          <div
            onClick={() => setSendSms(!sendSms)}
            className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
              sendSms && "border-2 border-primaryColor-1"
            }`}
            name="isSendSMS"
            value={formik.values.isSendSms}
            onChange={formik.handleChange}
          >
            {formik.values.isSendSms ? "فعال" : "غیرفعال"}
          </div>
          <div
            className={`absolute left-4 lg:-left-12 top-[16px] cursor-pointer ${
              sendSms && "transition-all duration-300 rotate-180"
            }`}
            onClick={() => setSendSms(!sendSms)}
          >
            <Image
              width={15}
              height={15}
              src="/assets/images/down.svg"
              alt="down"
            />
          </div>
        </div>
        {/* isPaymentSendSMS */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="isPaymentSendSMS"
          >
            <span className={`${peymentSendSms && "text-primaryColor-1"}`}>
              قابلیت ارسال پیامک کسر موجودی
            </span>
          </label>
          <div
            onClick={() => setPaymentSendSms(!peymentSendSms)}
            className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
              peymentSendSms && "border-2 border-primaryColor-1"
            }`}
            name="isPaymentSendSMS"
            value={formik.values.isPaymentSendSms}
            onChange={formik.handleChange}
          >
            {formik.values.isPaymentSendSms ? "فعال" : "غیرفعال"}
          </div>
          <div
            className={`absolute left-4 lg:-left-12 top-[16px] cursor-pointer ${
              peymentSendSms && "transition-all duration-300 rotate-180"
            }`}
            onClick={() => setPaymentSendSms(!peymentSendSms)}
          >
            <Image
              width={15}
              height={15}
              src="/assets/images/down.svg"
              alt="down"
            />
          </div>
        </div>
      </div>
      {/* isChangePassword & paymentSmsAmount  */}
      <div className="flex gap-x-[25px] lg:gap-x-[108px]">
        {/* isChangePassword */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="isChangePassword"
          >
            <span className={`${changePassword && "text-primaryColor-1"}`}>
              الزام کاربر به تغییر پسورد
            </span>
          </label>
          <div
            onClick={() => setChangePassword(!changePassword)}
            className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
              changePassword && "border-2 border-primaryColor-1"
            }`}
            name="isChangePassword"
            value={formik.values.isChangePassword}
            onChange={formik.handleChange}
          >
            {formik.values.isChangePassword ? "فعال" : "غیرفعال"}
          </div>
          <div
            className={`absolute left-4 lg:-left-12 top-[16px] cursor-pointer ${
              changePassword && "transition-all duration-300 rotate-180"
            }`}
            onClick={() => setChangePassword(!changePassword)}
          >
            <Image
              width={15}
              height={15}
              src="/assets/images/down.svg"
              alt="down"
            />
          </div>
        </div>
        {/* minusAmount */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[165px] md:h-[20px] lg:w-[190px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="minusAmount"
          >
            <span className="">حداکثر مبلغ بدهکاری کاربر</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px]  rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="minusAmount"
            name="minusAmount"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.minusAmount}
          />
        </div>
      </div>
      <div className="flex gap-x-[25px] lg:gap-x-[108px]">
        <div className="flex gap-x-[25px] lg:gap-x-[108px] md:hidden lg:block ">
          {/* UserExpireDate */}
          <div className="flex flex-col relative  ">
            <label
              className="w-[120px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2 whitespace-nowrap"
              htmlFor="dateFrom"
            >
              <span className="">تاریخ اتمام قرارداد</span>
            </label>
            <DatePicker
              value={formik.values.contractExpirationDate}
              onChange={setUserExpireDate}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "16px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "395px",
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
        </div>
        <div className="flex gap-x-[25px] lg:gap-x-[108px] md:block lg:hidden">
          {/* UserExpireDate */}
          <div className="flex flex-col relative  ">
            <label
              className="w-[120px] h-[20px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] font-bold text-neutralColor-2 whitespace-nowrap"
              htmlFor="dateFrom"
            >
              <span className="">تاریخ اتمام قرارداد</span>
            </label>
            <DatePicker
              value={formik.values.contractExpirationDate}
              onChange={setUserExpireDate}
              calendar={persian}
              locale={persian_fa}
              className="custom-calendar"
              style={{
                fontSize: "16px",
                color: "#212121",
                background: "#FFFFFF",
                border: "1px solid #9E9E9E",
                borderRadius: "5px",
                width: "325px",
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
        </div>
      </div>
      {/* submit */}
      <button
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px]  lg:-mt-[5px] lg:mr-[675px]  mt-[80px]  `}
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
      {sendSms && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[545px] lg:top-[525px] border-2 border-neutralColor-4">
          <div
            onClick={sendSmsHandler}
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
            onClick={noSendSmsHandler}
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center ">
              غیرفعال
            </span>
          </div>
        </div>
      )}
      {peymentSendSms && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[545px] md:right-[370px] lg:top-[525px] lg:right-[535px] border-2 border-neutralColor-4">
          <div
            onClick={peymentSendSmsHandler}
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
            onClick={noPeymentSendSmsHandler}
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center ">
              غیرفعال
            </span>
          </div>
        </div>
      )}
      {changePassword && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[615px]  lg:top-[595px] border-2 border-neutralColor-4">
          <div
            onClick={changePasswordHandler}
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
            onClick={noChangePasswordHandler}
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

export default TabletUserInfoDetailsForm;

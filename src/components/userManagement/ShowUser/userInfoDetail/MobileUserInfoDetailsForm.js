import { ThreeDots } from "react-loader-spinner";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import moment from "moment";
import Image from "next/image";
const MobileUserInfoDetailsForm = ({
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
      className="flex flex-col gap-y-[30px]  md:hidden"
    >
      {/* firstName */}
      <div className="flex flex-col relative  ">
        <label
          className=" w-[35px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-3"
          htmlFor="firstName"
        >
          <span className="">نام </span>
        </label>
        <input
          readOnly
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-3 bg-neutralColor-5 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
          id="firstName"
          name="firstName"
          type="text"
          // onChange={formik.handleChange}
          value={userInfo.data.firstName}
        />
      </div>
      {/* userlastName */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="lastName"
        >
          <span>نام خانوادگی</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="lastName"
          value={userInfo.data.lastName}
          // onChange={formik.handleChange}
        />
      </div>
      {/* userNationalCode */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="nationalCode"
        >
          <span>کد/شناسه ملی</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="nationalCode"
          value={userInfo.data.nationalCode}
          // onChange={formik.handleChange}
        />
      </div>
      {/* userPhoneNumber */}
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
          value={userInfo.data.phoneNumber}
          // onChange={formik.handleChange}
        />
      </div>
      {/*userEmailAddress */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="email"
        >
          <span>آدرس ایمیل</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="email"
          value={userInfo.data.email}
          // onChange={formik.handleChange}
        />
      </div>
      {/* userCompanyName */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="companyName"
        >
          <span>نام شرکت</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="companyName"
          value={userInfo.data.companyName}
          // onChange={formik.handleChange}
        />
      </div>
      {/* userbalance */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="balance"
        >
          <span>مانده موجودی</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="balance"
          value={userInfo.data.account.balance}
          // onChange={formik.handleChange}
        />
      </div>
      {/* userbenefitAmount*/}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
          htmlFor="benefitAmount"
        >
          <span>سود پول</span>
        </label>
        <input
          readOnly
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="benefitAmount"
          value={userInfo.data.account.benefitAmount}
          // onChange={formik.handleChange}
        />
      </div>
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
          className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="tempTransactionCount"
        >
          <span>تعداد تراکنش روز</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px]  text-neutralColor-32 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          name="tempTransactionCount"
          value={formik.values.tempTransactionCount}
          onChange={formik.handleChange}
        />
      </div>
      {/* isSendSMS */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-3 text-[14px]  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="isSendSMS"
        >
          <span className={`${sendSms && "text-primaryColor-1"}`}>
            اطلاع رسانی ورود از طریق پیامک
          </span>
        </label>
        <div
          onClick={() => setSendSms(!sendSms)}
          className={`w-[327px] h-[50px]   text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
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
      {/* isChangePassword*/}
      <div className="flex gap-x-[25px] ">
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
      </div>
      {/* minusAmount */}
      <div className="flex flex-col relative">
        <label
          className=" md:w-[200px] md:h-[20px] lg:w-[220px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
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
      {/* submit */}
      <button
        type="submit"
        className="bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[16px] "
      >
        <div className="flex justify-center relative">
          <span>ثبت تغییرات</span>
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
      {sendSms && (
        <div className="flex text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[1365px] border-2 border-neutralColor-4">
          <div
            onClick={sendSmsHandler}
            value={true}
            className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span>فعال</span>
          </div>
          <div
            value={false}
            className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center"
            onClick={noSendSmsHandler}
          >
            <span className="mt-2">غیرفعال</span>
          </div>
        </div>
      )}
      {peymentSendSms && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[1445px]  border-2 border-neutralColor-4">
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
        <div className="flex  text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[1525px]  border-2 border-neutralColor-4">
          <div
            onClick={changePasswordHandler}
            value={true}
            className=" cursor-pointer w-[326px] h-[50px] text-center   flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 flex items-center justify-center mb-[14px]">
              فعال
            </span>
          </div>
          <div
            value={false}
            className="cursor-pointer w-[326px] h-[50px] text-center   flex justify-center items-center pt-[10px] "
            onClick={noChangePasswordHandler}
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 flex items-center justify-center ">
              غیرفعال
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default MobileUserInfoDetailsForm;

import MobileUserInfoDetailsForm from "@/src/components/userManagement/ShowUser/userInfoDetail/MobileUserInfoDetailsForm";
import TabletUserInfoDetailsForm from "@/src/components/userManagement/ShowUser/userInfoDetail/TabletUserInfoDetailsForm";
import {
  GetUserInfoByNationalCode,
  UpdateUserInfoByNationalCode,
} from "@/src/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { DateObject } from "react-multi-date-picker";
const UserfInfoDetails = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sendSms, setSendSms] = useState(false);
  const [peymentSendSms, setPaymentSendSms] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [userExpireDate, setUserExpireDate] = useState(new DateObject());
  const router = useRouter();
  const userNationalCode = router.query.userInfoDetailsId;
  const initialValues = {
    nationalCode: userNationalCode,
    userServicePoint: userInfo?.data?.userServicePoint || "0",
    activityTimeFrom: userInfo?.data?.activityTimeFrom || "",
    activityTimeTo: userInfo?.data?.activityTimeTo || "",
    maxTransactionPerDay: userInfo?.data?.maxTransactionPerDay || "0",
    isSendSms: userInfo?.data?.isSendSms || false,
    isPaymentSendSms: userInfo?.data?.isPaymentSendSms || false,
    isChangePassword: userInfo?.data?.isChangePassword || false,
    paymentSmsAmount: userInfo?.data?.paymentSmsAmount || "0",
    tempTransactionCount: userInfo?.data?.tempTransactionCount || "0",
    minusAmount: userInfo?.data?.account?.minusAmount || "0",
    contractExpirationDate: userInfo?.data.contractExpirationDate,
  };
  const dateObject = {
    dateFrom: [
      userExpireDate.year.toString(),
      `${
        userExpireDate.month.number.toString().length == 1
          ? "0" + userExpireDate.month.number.toString()
          : userExpireDate.month.number
      }`,
      userExpireDate.day.toString(),
    ].join("/"),
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UpdateUserInfoByNationalCode(values, dateObject);
    const { isSuccess, message } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success(message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(`/adminPanel/userManagement/showUsers`);
    } else {
      toast.error(message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
    setIsLoading(false);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  const sendSmsHandler = () => {
    formik.values.isSendSms = true;
    setSendSms(false);
  };
  const noSendSmsHandler = () => {
    formik.values.isSendSms = false;
    setSendSms(false);
  };
  const peymentSendSmsHandler = () => {
    formik.values.isPaymentSendSms = true;
    setPaymentSendSms(false);
  };
  const noPeymentSendSmsHandler = () => {
    formik.values.isPaymentSendSms = false;
    setPaymentSendSms(false);
  };
  const changePasswordHandler = () => {
    formik.values.isChangePassword = true;
    setChangePassword(false);
  };
  const noChangePasswordHandler = () => {
    formik.values.isChangePassword = false;
    setChangePassword(false);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-4 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal mr-[10px] md:mr-0  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/userManagement/showUsers/"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                نمایش کاربرها
              </span>
            </Link>
            <div className="-mr-[45px] md:-mr-[60px] lg:-mr-[45px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">جزییات اطلاعات شخصی</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] md:-mr-[15px] lg:-mr-1 lg:mb-[60.09px] md:-mt-[20px]">
            <span>جزییات اطلاعات شخصی</span>
          </div>
        </div>
        {/* userInfoDetails */}
        <MobileUserInfoDetailsForm
          formik={formik}
          peymentSendSmsHandler={peymentSendSmsHandler}
          noPeymentSendSmsHandler={noPeymentSendSmsHandler}
          userInfo={userInfo}
          peymentSendSms={peymentSendSms}
          setPaymentSendSms={setPaymentSendSms}
          sendSms={sendSms}
          setSendSms={setSendSms}
          noSendSmsHandler={noSendSmsHandler}
          sendSmsHandler={sendSmsHandler}
          changePasswordHandler={changePasswordHandler}
          noChangePasswordHandler={noChangePasswordHandler}
          changePassword={changePassword}
          setChangePassword={setChangePassword}
          isLoading={isLoading}
          userExpireDate={userExpireDate}
          setUserExpireDate={setUserExpireDate}
        />
        <TabletUserInfoDetailsForm
          formik={formik}
          peymentSendSmsHandler={peymentSendSmsHandler}
          noPeymentSendSmsHandler={noPeymentSendSmsHandler}
          userInfo={userInfo}
          peymentSendSms={peymentSendSms}
          setPaymentSendSms={setPaymentSendSms}
          sendSms={sendSms}
          setSendSms={setSendSms}
          noSendSmsHandler={noSendSmsHandler}
          sendSmsHandler={sendSmsHandler}
          changePasswordHandler={changePasswordHandler}
          noChangePasswordHandler={noChangePasswordHandler}
          changePassword={changePassword}
          setChangePassword={setChangePassword}
          isLoading={isLoading}
          userExpireDate={userExpireDate}
          setUserExpireDate={setUserExpireDate}
        />
      </div>
    </>
  );
};

export default UserfInfoDetails;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { userInfoDetailsId } = params;
    console.log("userInfoDetailsId:", userInfoDetailsId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const userInfo = await GetUserInfoByNationalCode(userInfoDetailsId, token);
    console.log("userInfo:", userInfo);
    return {
      props: { userInfo },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

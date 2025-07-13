import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  ChangeUserService,
  GetServiceAssignAppById,
} from "@/src/server/Service";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { useRouter } from "next/router";
import MobileUpdateUserService from "@/src/components/userManagement/ShowUser/userServices/updateUserService/MobileUpdateUserService";
import TabletUpdateUserService from "@/src/components/userManagement/ShowUser/userServices/updateUserService/TabletUpdateUserService";
import Image from "next/image";
const UpdateUserService = ({ userServiceInfo }) => {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);
  const router = useRouter();
  const { userAppId, userServiceId } = router.query;
  const initialValues = {
    id: userServiceInfo?.serviceId,
    serviceName: userServiceInfo?.serviceName || "",
    approveStates: userServiceInfo?.approveStates || false,
    servicePrice: userServiceInfo?.servicePrice,
    publicAppId: userServiceId,
  };
  const onSubmit = async (values) => {
    const res = await ChangeUserService(values);
    const { isSuccess, message } = res;
    if (isSuccess) {
      router.push(
        `/adminPanel/userManagement/showUsers/userApplications/${userAppId}/userServices/${userServiceId}`
      );
      toast.success(message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
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
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  const activeHandler = () => {
    formik.values.approveStates = true;
    setIsOpenStatus(false);
  };
  const nonActiveHandler = () => {
    formik.values.approveStates = false;
    setIsOpenStatus(false);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          {/* <div className="w-fit   whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
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
            <Link
              href={`/adminPanel/userManagement/showUsers/userServices/${userServiceId}`}
              className=" font-normal  text-neutralColor-2  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2"
            >
              <span className="w-[113px] h-[17px]">لیست سرویس های کاربر</span>
            </Link>
            <div className=" -mr-[15px] md:mr-[10px] lg:mr-[25px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-[5px] md:mr-[10px] ">
              <span className="w-[113px] h-[17px]">ویرایش سرویس</span>
            </div>
          </div> */}
          {/* Title */}
          <div className="w-[305px] md:w-[430px] lg:w-[500px] h-[44px] md:h-[51px] flex items-center p-[10px] whitespace-nowrap mb-[35.09px]">
            <div className="flex gap-x-[3px] text-[14px] md:text-[18px] leading-[24.18px] md:leading-[31.09px] lg:text-[20px] lg:leading-[34.55px] lg:font-bold font-medium text-neutralColor-1">
              <span>ویرایش سرویس</span>
              <span>{userServiceInfo.serviceName}</span>
            </div>
          </div>
        </div>
        <MobileUpdateUserService
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
        />
        <TabletUpdateUserService
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
        />
      </div>
    </>
  );
};

export default UpdateUserService;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { updateService } = params;
    console.log("updateUserService:", updateService);
    const token = req.cookies.Token;
    console.log("token:", token);
    const { data } = await GetServiceAssignAppById(updateService, token);
    console.log("data:", data);
    return {
      props: { userServiceInfo: data },
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

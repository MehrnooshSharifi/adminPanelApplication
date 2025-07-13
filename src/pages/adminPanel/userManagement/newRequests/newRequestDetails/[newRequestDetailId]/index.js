import MobileNewRequestDetailsForm from "@/src/components/userManagement/NewRequests/newRequestDetails/MobileNewRequestDetailsForm";
import TabletNewRequestDetailsForm from "@/src/components/userManagement/NewRequests/newRequestDetails/TabletNewRequestDetailsForm";
import { GetRequestById } from "@/src/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const NewRequestDetail = ({ requestInfo }) => {
  const router = useRouter();
  const initialValues = {
    serviceGroupName: requestInfo?.data?.serviceGroupName || "",
    serviceName: requestInfo?.data?.serviceName || "",
    appName: requestInfo?.data?.appName || "",
    publicAppId: requestInfo?.data?.publicAppId,
    defaultPrice: requestInfo?.data?.defaultPrice || "",
    id: requestInfo?.data?.id,
    adminDesc: "",
  };
  const onSubmit = async () => {
    console.log("values");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  if (!requestInfo || !requestInfo.data) {
    return (
      <div className="flex justify-center mx-auto">
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
      </div>
    );
  }
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-4 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/userManagement/newRequests/"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                درخواست های جدید
              </span>
            </Link>
            <div className=" -mr-[20px] md:-mr-[20px] lg:-mr-[10px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">بررسی درخواست های جدید</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-[10px] lg:mb-[60.09px]">
            <span>بررسی درخواست های جدید</span>
          </div>
        </div>
        {/* newRequestDetails */}
        <MobileNewRequestDetailsForm formik={formik} />
        <TabletNewRequestDetailsForm formik={formik} />
      </div>
    </>
  );
};

export default NewRequestDetail;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { newRequestDetailId } = params;
    console.log("newRequestDetailId:", newRequestDetailId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const requestInfo = await GetRequestById(newRequestDetailId, token);
    console.log("requestInfo:", requestInfo);

    return {
      props: { requestInfo },
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

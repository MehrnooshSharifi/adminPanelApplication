import EditServiceMobileForm from "@/src/components/servicesManagement/editService/EditServiceMobileForm";
import EditServiceTabletForm from "@/src/components/servicesManagement/editService/EditServiceTabletForm";
import { GetServiceById, UpdateService } from "@/src/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";

const EditService = ({ serviceInfo }) => {

  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const initialValues = {
    serviceName: serviceInfo?.data?.serviceName || "",
    serviceDesc: serviceInfo?.data?.serviceDesc || "",
    policyauth: serviceInfo?.data?.policyauth || "",
    defaultPrice: Number(serviceInfo?.data?.defaultPrice) || 0, // Convert to number
    servicePoint: serviceInfo?.data?.servicePoint || "0",
    isActive: serviceInfo?.data?.isActive || false,
    serviceGroupId: serviceInfo?.data?.serviceGroupId || "",
    id: serviceInfo?.data?.id || "",
    helpFileName: serviceInfo?.data?.helpFileName || "",
  };
  const router = useRouter();
  const onSubmit = async (values) => {
    // `defaultPrice` is already a number, so you can send it as-is
    const res = await UpdateService({
      ...formik.values,
      defaultPrice: formik.values.defaultPrice, // Pass as number
    });
    const { isSuccess, message } = res;
    if (isSuccess) {
      toast.success(message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(
        `/adminPanel/serviceManagement/serviceGroupDetails/${serviceInfo.data.serviceGroupId}`
      );
    } else {
      toast.error(message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
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
    formik.values.isActive = true;
    setIsOpenStatus(false);
  };
  const nonActiveHandler = () => {
    formik.values.isActive = false;
    setIsOpenStatus(false);
  };
  if (!serviceInfo) {
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
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/serviceManagement"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست گروه سرویس ها
              </span>
            </Link>
            <div className="lg:mr-4">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <Link
              href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceInfo.data.serviceGroupId}`}
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center mr-2"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست سرویس ها
              </span>
            </Link>
            <div className="-mr-[20px] md:-mr-[30px] lg:-mr-[20px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">ویرایش سرویس</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[305px] md:w-[430px] lg:w-[500px] h-[44px] md:h-[51px] flex items-center p-[10px] whitespace-nowrap mb-[35.09px]">
            <div className="flex gap-x-[3px] text-[14px] md:text-[18px] leading-[24.18px] md:leading-[31.09px] lg:text-[20px] lg:leading-[34.55px] lg:font-bold font-medium text-neutralColor-1">
              <span>ویرایش </span>
              <span>{serviceInfo.data.serviceName}</span>
            </div>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <EditServiceMobileForm
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
        />
        <EditServiceTabletForm
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

export default EditService;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { serviceUpdateId } = params;
    console.log("serviceUpdateId:", serviceUpdateId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const data = await GetServiceById(serviceUpdateId, token);
    console.log(data);
    return {
      props: { serviceInfo: data },
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

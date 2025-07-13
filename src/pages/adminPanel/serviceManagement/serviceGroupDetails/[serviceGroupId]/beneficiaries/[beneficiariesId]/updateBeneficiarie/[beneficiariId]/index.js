import AddNewDiscountForm from "@/src/components/servicesManagement/beneficiaries/addNewBeneficiaries/AddNewDiscountForm";
import { SelectDiscountByUniqueId, UpdateDiscount } from "@/src/server/Service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const BeneficiariDetails = ({ beneficiariInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { serviceGroupId, beneficiariId, beneficiariesId } = router.query;
  const initialValues = {
    nationalCode: beneficiariInfo?.data?.id,
    discountAmount: beneficiariInfo?.data?.dscNTAMT,
    discountPercentAmount: beneficiariInfo?.data?.dscNTPrNT,
    uniqueId: beneficiariInfo?.data?.uniqueId,
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UpdateDiscount(values);
    const { isSuccess } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("تسهیم با موفقیت ویرایش شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(
        `/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${beneficiariesId}`
      );
    } else {
      toast.error("ویرایش تسهیم با خطا مواجه شد", {
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
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit lg:mr-[10px]  whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
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
              href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${beneficiariesId}`}
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center mr-2"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست تسهیم ها
              </span>
            </Link>
            <div className="-mr-[30px] md:-mr-[40px] lg:-mr-[30px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2 ">
              <span className="w-[113px] h-[17px]">ویرایش تسهیم</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] -mr-[12px] md:-mr-[25px] lg:-mr-[8px] lg:mb-[60.09px]">
            <span>ویرایش تسهیم</span>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <AddNewDiscountForm
          isUpdate={true}
          formik={formik}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default BeneficiariDetails;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { beneficiariId } = params;
    console.log("beneficiariId:", beneficiariId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const beneficiariInfo = await SelectDiscountByUniqueId(
      beneficiariId,
      token
    );
    console.log("beneficiariInfo:", beneficiariInfo);
    return {
      props: { beneficiariInfo },
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

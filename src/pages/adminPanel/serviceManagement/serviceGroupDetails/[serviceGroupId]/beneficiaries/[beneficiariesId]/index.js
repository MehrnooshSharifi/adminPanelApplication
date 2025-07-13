import DesktopBeneficiariesTable from "@/src/components/servicesManagement/beneficiaries/DesktopBeneficiariesTable";
import MobileBeneficiariesTable from "@/src/components/servicesManagement/beneficiaries/MobileBeneficiariesTable";
import TabletBeneficiariesTable from "@/src/components/servicesManagement/beneficiaries/TabletBeneficiariesTable";
import { GetAllBeneficiaries } from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TashimInfo = ({ beneficiaries }) => {
  const router = useRouter();
  const serviceId = router.query.beneficiariesId;
  const serviceGroupId = router.query.serviceGroupId;

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
              href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}`}
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
              <span className="w-[113px] h-[17px]">تسهیم</span>
            </div>
          </div>

          {/* tableSection */}
          <div className="flex flex-col items-end ">
            {/* NewBeneficiaries */}
            <Link
              href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${serviceId}/addNewDiscount`}
              className=" px-[10px] py-[5px] mb-[16px] md:mb-[45px] md:ml-10"
            >
              <div className="flex bg-primaryColor-1 w-[154px]   h-[38px]  md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]">
                <Image
                  src="/assets/images/plus.svg"
                  alt="add New beneficiaries"
                  width={14}
                  height={14}
                />
                <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                  تسهیم جدید
                </span>
              </div>
            </Link>
            {/* beneficiariesTable */}
          </div>
        </div>
        {beneficiaries && beneficiaries.length > 0 && (
          <DesktopBeneficiariesTable beneficiaries={beneficiaries} />
        )}
        {beneficiaries && beneficiaries.length > 0 && (
          <TabletBeneficiariesTable beneficiaries={beneficiaries} />
        )}
        {beneficiaries && beneficiaries.length > 0 && (
          <MobileBeneficiariesTable beneficiaries={beneficiaries} />
        )}
      </div>
    </>
  );
};

export default TashimInfo;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { beneficiariesId } = params;
    console.log("beneficiariesId:", beneficiariesId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const { data } = await GetAllBeneficiaries(beneficiariesId, token);
    console.log("data:", data);
    return {
      props: { beneficiaries: data },
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

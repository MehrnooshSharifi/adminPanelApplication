import DesktopUserServicesTable from "@/src/components/userManagement/ShowUser/userServices/DesktopUserServicesTable";
import MobileUserServiceTable from "@/src/components/userManagement/ShowUser/userServices/MobileUserServiceTable";
import TabletUserServiceTable from "@/src/components/userManagement/ShowUser/userServices/TabletUserServiceTable";
import { AppAsigned, GetUserInfoByNationalCode } from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const UserServicesDetails = ({ userServices, userInfo }) => {
  const router = useRouter();
  const { userAppId } = router.query;
  return (
    <>
      <div className=" mx-auto  lg:mx-auto  flex-col md:mx-auto px-4 ">
        {/* serviceManagementContent */}
        <div className="felx flex-col  mt-[10px] items-start lg:mt-[25px]  lg:mr-[50px]">
          {/* BreadCrumbs */}
          <div className="hidden md:flex w-fit  -mr-[15px] md:mr-0  whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]   items-center  px-[10px] py-[15.5px] md:mb-5 ">
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
              href={`/adminPanel/userManagement/showUsers/userApplications/${userAppId}`}
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center mr-[10px] "
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست اپلیکیشن ها
              </span>
            </Link>
            <div className="-mr-[30px] md:-mr-[30px] lg:-mr-[20px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2 md:mr-[10px]">
              <span className="w-[113px] h-[17px]">لیست سرویس های کاربر</span>
            </div>
          </div>
          {/* title */}
          <div className="mb-[25px] -mr-[5px] md:mr-[9px] lg:mr-[10px]">
            <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              لیست سرویس های&nbsp;
            </span>
            &nbsp;
            <span className="w-[113px] h-[17px] text-neutralColor-1 text-[14px] leading-[24.18px] font-medium  md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              {userInfo.firstName} &nbsp;
              {userInfo.lastName}
            </span>
          </div>
          {/* tableSection */}
          <div className="flex flex-col items-end ">
            <>
              <DesktopUserServicesTable userServices={userServices} />
              <TabletUserServiceTable userServices={userServices} />
              <MobileUserServiceTable userServices={userServices} />
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserServicesDetails;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    console.log(params);
    const { userServiceId, userAppId } = params;
    console.log("userServiceId:", userServiceId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const { data } = await AppAsigned(userServiceId, token);
    const res = await GetUserInfoByNationalCode(userAppId, token);
    console.log(data);
    return {
      props: { userServices: data, userInfo: res.data },
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

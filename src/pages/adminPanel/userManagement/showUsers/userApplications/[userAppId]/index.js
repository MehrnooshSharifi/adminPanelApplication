import DesktopUserAppTable from "@/src/components/userManagement/ShowUser/userApplications/DesktopUserAppTable";
import MobileUserAppTable from "@/src/components/userManagement/ShowUser/userApplications/MobileUserAppTable";
import TabletUserAppTable from "@/src/components/userManagement/ShowUser/userApplications/TabletUserAppTable";
import {
  GetAllAppInfoByRealNationalCode,
  GetUserInfoByNationalCode,
} from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
const UserApplications = ({ userApps, userInfo }) => {
  return (
    <>
      <div className=" mx-auto  lg:mx-auto  flex-col md:mx-auto px-4 ">
        {/* serviceManagementContent */}
        <div className="felx flex-col  mt-[10px] items-start lg:mt-[25px]  lg:mr-[50px]">
          {/* BreadCrumbs */}
          <div
            className={`w-fit whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ${
              userApps && userApps.length > 0
                ? "-mr-[25px] md:mr-0 "
                : "lg:-mr-[520px]"
            }`}
          >
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
              <span className="w-[113px] h-[17px]">
                لیست اپلیکیشن های کاربر
              </span>
            </div>
          </div>
          {/* title */}
          {userApps && userApps.length > 0 ? (
            <div className="mb-[25px] -mr-[15px] md:mr-[9px] lg:mr-[10px]">
              <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
                لیست اپلیکیشن های&nbsp;
              </span>
              &nbsp;
              <span className="w-[113px] h-[17px] text-neutralColor-1 text-[14px] leading-[24.18px] font-medium  md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
                {userInfo.firstName} &nbsp;
                {userInfo.lastName}
              </span>
            </div>
          ) : (
            ""
          )}
          {/* tableSection */}
          <div className="flex flex-col items-end ">
            {userApps && userApps.length > 0 ? (
              <>
                <DesktopUserAppTable userApps={userApps} />
                <TabletUserAppTable userApps={userApps} />
                <MobileUserAppTable userApps={userApps} />
              </>
            ) : (
              <div className=" bg-yellow-100">
                <span className="md:-mr-[460px] lg:-mr-[508px]  lg:text-[14px]">
                  اطلاعاتی جهت نمایش موجود نیست
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserApplications;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { userAppId } = params;
    console.log("userAppId:", userAppId);
    const token = req.cookies.Token;
    console.log("token:", token);
    const { data } = await GetAllAppInfoByRealNationalCode(userAppId, token);
    const res = await GetUserInfoByNationalCode(userAppId, token);
    console.log(data, res.data);
    return {
      props: { userApps: data, userInfo: res.data },
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

import DesktopServiceGroupDetailsTable from "@/src/components/servicesManagement/serviceGroupDetails/DesktopServiceGroupDetailsTable";
import MobileServiceGroupDetailsTable from "@/src/components/servicesManagement/serviceGroupDetails/MobileServiceGroupDetailsTable";
import TabletServiceGroupDetailsTable from "@/src/components/servicesManagement/serviceGroupDetails/TabletServiceGroupDetailsTable";
import {
  DownloadHelpFile,
  GetAllServiceGroup,
  SelectServiceByGroupId,
} from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Services = ({ services, allServiceGroup }) => {
  const router = useRouter();
  const { serviceGroupId } = router.query;
  const downloadFileHandler = async (serviceId) => {
    DownloadHelpFile(serviceId);
  };
  return (
    <>
      <div className=" mx-auto  lg:mx-auto  flex-col md:mx-auto w-[343px] md:w-[710px] lg:w-[1005px]">
        {/* BreadCrumbs */}
        <div className="w-[271.84px] mt-[25px] whitespace-nowrap font-normal  text-[10px] md:w-[325.85px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center gap-x-[10px] px-[10px] py-[15.5px] md:mb-5 ">
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
          <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2">
            <span className="w-[113px] h-[17px]">لیست سرویس ها</span>
          </div>
        </div>
        {/* Title */}
        <div className="w-[305px] md:w-[430px] lg:w-[500px] h-[44px] md:h-[51px] flex items-center p-[10px] whitespace-nowrap">
          {allServiceGroup.data.map((item) => {
            if (item.id === serviceGroupId) {
              return (
                <div
                  key={item.id}
                  className="flex gap-x-[3px] text-[14px] md:text-[18px] leading-[24.18px] md:leading-[31.09px] lg:text-[20px] lg:leading-[34.55px] lg:font-bold font-medium text-neutralColor-1"
                >
                  <span>لیست سرویس های گروه سرویس</span>
                  <span>{item.serviceGroupName}</span>
                </div>
              );
            }
          })}
        </div>
        {/* tableSection */}
        <div className="flex flex-col items-end ">
          {/* NewServiceGroup */}
          <Link
            href={{
              pathname: "/adminPanel/serviceManagement/addService",
              query: { serviceGroupId: serviceGroupId },
            }}
            className="w-[174px] h-[48px] px-[10px] py-[5px] mb-[16px] md:mb-[45px] md:ml-10 lg:ml-[30px]"
          >
            <div className="flex bg-primaryColor-1 w-[154px]  h-[38px]  md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]">
              <Image
                src="/assets/images/plus.svg"
                alt="add New Service Group"
                width={14}
                height={14}
              />
              <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                سرویس جدید
              </span>
            </div>
          </Link>
          {/* services */}
          <MobileServiceGroupDetailsTable
            allServices={services.data}
            downloadFileHandler={downloadFileHandler}
          />
          <TabletServiceGroupDetailsTable
            allServices={services.data}
            downloadFileHandler={downloadFileHandler}
          />
          <DesktopServiceGroupDetailsTable
            allServices={services.data}
            downloadFileHandler={downloadFileHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Services;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { serviceGroupId } = params;
    const token = req.cookies.Token;
    const services = await SelectServiceByGroupId(serviceGroupId, token);
    console.log("services:", services);
    const allServiceGroup = await GetAllServiceGroup();
    console.log("allServiceGroup:", allServiceGroup);
    return {
      props: { services, allServiceGroup },
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

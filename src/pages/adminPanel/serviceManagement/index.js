import { useEffect } from "react";
import { GetAllServiceGroup } from "@/src/server/Service";
import Link from "next/link";
import Image from "next/image";
import MobileTableServicesManagement from "@/src/components/servicesManagement/MobileTableServicesManagement";
import TabletTableServicesManagement from "@/src/components/servicesManagement/TabletTableServicesManagement";
import DesktopTableServicesManagement from "@/src/components/servicesManagement/DesktopTableServicesManagement";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
const ServiceManagement = ({ allServiceGroup }) => {
  const { data } = allServiceGroup;
  const [cookies] = useCookies();
  const router = useRouter();
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className=" mx-auto  lg:mx-auto  flex-col md:mx-auto px-4 ">
        {/* serviceManagementContent */}
        <div className="felx flex-col  mt-[10px] items-start lg:mt-[25px] ">
          {/* title */}
          <div className="mb-[25px] mr-[20px]">
            <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              لیست گروه سرویس ها
            </span>
          </div>
          {/* tableSection */}
          <div className="flex flex-col items-end ">
            {/* NewServiceGroup */}
            <Link
              href="/adminPanel/serviceManagement/addServiceGroup"
              className="w-[174px] h-[48px] px-[10px] py-[5px] mb-[16px] md:mb-[45px] md:ml-10 "
            >
              <div className="flex bg-primaryColor-1 w-[154px]  h-[38px]  md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]">
                <Image
                  src="/assets/images/plus.svg"
                  alt="add New Service Group"
                  width={14}
                  height={14}
                />
                <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                  گروه سرویس جدید
                </span>
              </div>
            </Link>
            {/* serviceGroups */}
            <MobileTableServicesManagement serviceGroups={data} />
            <TabletTableServicesManagement serviceGroups={data} />
            <DesktopTableServicesManagement serviceGroups={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceManagement;

export async function getServerSideProps() {
  try {
    const allServiceGroup = await GetAllServiceGroup();
    return {
      props: { allServiceGroup },
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

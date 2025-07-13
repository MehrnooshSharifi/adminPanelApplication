import DesktopKeysTable from "@/src/components/card/keys/DesktopKeysTable";
import MobileKeysTable from "@/src/components/card/keys/MobileKeysTable";
import TabletKeysTable from "@/src/components/card/keys/TabletKeysTable";
import { GetAllScope } from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaIdCard } from "react-icons/fa6";

const Keys = ({ allScope }) => {
  return (
    <>
      <div className=" mx-auto  lg:mx-auto  flex-col md:mx-auto px-4 ">
        {/* serviceManagementContent */}
        <div className="felx flex-col  mt-[10px] items-start lg:mt-[25px] ">
          {/* title */}
          <div className="mb-[25px] -mr-[7px]  md:-mr-[9px] lg:mr-[10px]">
            <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              لیست کلیدها
            </span>
          </div>
          {/* tableSection */}
          <div className="flex flex-col items-end ">
            {/* NewServiceGroup */}
            <Link
              className="mr-[160px] md:mr-[460px] bg-yellow-100 w-[154px] h-[38px] md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] mb-[50px]"
              href="/adminPanel/serviceManagement/addServiceGroup"
            >
              <div className="flex bg-primaryColor-1 w-[154px]  h-[38px]  md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]">
                <Image
                  src="/assets/images/plus.svg"
                  alt="add New Service Group"
                  width={14}
                  height={14}
                />
                <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                  ثبت کلید جدید
                </span>
              </div>
            </Link>
            {/* //TODO:if there aren't any data to show */}
            {!allScope && allScope.length == 0 ? (
              <div className=" mt-[200px] lg:mt-[50px] lg:mr-[50px] lg:w-[500px] lg:h-[500px] flex flex-col items-center justify-center ">
                <FaIdCard className="w-32 h-32 md:w-52 md:h-52  lg:w-60 lg:h-60 fill-secondaryColor-2" />
                <span className="text-[12px] md:text-[14px] lg:text-[16px] text-neutralColor-2">
                  تا کنون کلیدی ثبت نشده است
                </span>
              </div>
            ) : (
              <>
                <DesktopKeysTable allScope={allScope} />
                <TabletKeysTable allScope={allScope} />
                <MobileKeysTable allScope={allScope} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;

export async function getServerSideProps() {
  try {
    const { data } = await GetAllScope();
    console.log(data);
    return {
      props: { allScope: data },
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

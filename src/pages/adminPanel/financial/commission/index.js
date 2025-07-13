import CommissionTable from "@/src/components/Commission/CommissionTable";
import { CommissionSelectAll } from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Commission = ({ commissionList }) => {
  return (
    <div
      className={`mx-auto  lg:mx-auto mt-[30px]  flex-col md:mx-auto px-4 lg:mt-[50px]`}
    >
      {/* ticketsContent */}
      <div className="felx flex-col mt-[22px] md:mt-[34.88px] lg:mt-[35px]  lg:mx-auto">
        {/* title */}
        <div
          className={`${
            commissionList.length == 0
              ? "mb-[123.8px] md:mb-[164.79px] lg:mb-[178px]"
              : "lg:mr-[50px]"
          } mb-[33px] md:mb-[43px] lg:mb-[35px] mr-[2px] md:-mr-[5px]`}
        >
          <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
            {commissionList && commissionList.length > 0
              ? "نمایش کامل لیست پورسانت و تخفیف"
              : ""}
          </span>
        </div>
        {commissionList.length == 0 && (
          <div className=" mt-[167px] flex flex-col items-center mb-[20px] mg:mb-[25px] lg:mb-[30px] text-[14px] md:text-[16px] lg:text-[18px] text-neutralColor-2 leading-[24.18px] md:leading-[27.64px] lg:leading-normal font-medium">
            <div className="mb-[24.12px] ">
              <Image
                width={10}
                height={10}
                src="/assets/images/noTickets.svg"
                alt="no ticket"
                className="w-[120px] h-[150px] md:w-[148px] md:h-[155px] lg:w-[200px] lg:h-[218px]"
              />
            </div>
            <div className="mb-[10px] md:mb-[6px] lg:mb-[10px]">
              <span>لیستی برای نمایش وجود ندارد.</span>
            </div>
          </div>
        )}

        {/* tableSection */}
        <div className="lg:mr-[50px] flex relative">
          {/* add To commissionList*/}
          <Link
            href="/adminPanel/financial/commission/addToCommissionList"
            className={`${
              commissionList.length == 0
                ? "-right-[2px] top-[30px] md:-right-[10px] md:top-[50px] lg:-right-[45px] lg:top-[50px]"
                : "right-[175px] -top-[10px] md:right-[477px] md:-top-[30px] lg:right-[865px] "
            } w-[174px] h-[48px] px-[10px] py-[5px] mb-[16px] md:mb-[45px] md:ml-10 absolute  `}
          >
            <div className="flex bg-primaryColor-1 w-[154px]  h-[38px]  md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]">
              <Image
                src="/assets/images/plus.svg"
                alt="add New Service Group"
                width={14}
                height={14}
              />
              <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                افزودن به لیست
              </span>
            </div>
          </Link>
          {/* ticketsList */}
          {/* //TODO: this section must be conditionalRendering when show all data or search one nationalCode */}
          <div>
            {commissionList && commissionList.length !== 0 && (
              <CommissionTable commissionList={commissionList} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;

export async function getServerSideProps(ctx) {
  try {
    const { req } = ctx;
    const token = req.cookies.Token;
    console.log("token:", token);
    const { data } = await CommissionSelectAll();
    console.log(data);
    return {
      props: { commissionList: data },
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

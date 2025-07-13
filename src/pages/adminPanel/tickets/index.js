// import TicketsTable from "@/components/tickets/TicketsTable";
import TicketsTable from "@/src/components/tickets/TicketsTable";
import { GetTicketByuseridReciver } from "@/src/server/Service";
import Image from "next/image";
import Link from "next/link";
const Tickets = ({ tickets }) => {
  return (
    <>
      <div className={`mx-auto  lg:mx-auto  flex-col md:mx-auto px-4`}>
        {/* ticketsContent */}
        <div className="felx flex-col mt-[22px] md:mt-[34.88px] lg:mt-[35px]  lg:mx-auto">
          {/* title */}
          <div
            className={`${
              tickets.length == 0
                ? "mb-[123.8px] md:mb-[164.79px] lg:mb-[178px]"
                : "lg:mr-[50px]"
            } mb-[33px] md:mb-[43px] lg:mb-[35px] mr-[2px] md:-mr-[5px]`}
          >
            <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              {tickets && tickets.length > 0 ? "لیست تیکت ها" : ""}
            </span>
          </div>
          {tickets.length == 0 && (
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
                <span>تیکتی برای نمایش وجود ندارد.</span>
              </div>
            </div>
          )}
          {/* tableSection */}
          <div className="flex flex-col lg:mr-[50px]">
            {/* ticketsList */}
            {tickets && tickets.length !== 0 && (
              <TicketsTable tickets={tickets} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;

export async function getServerSideProps(ctx) {
  try {
    const { req } = ctx;
    const nationalCode = req.cookies.nationalCode;
    const token = req.cookies.Token;
    console.log(nationalCode, token);
    const { data } = await GetTicketByuseridReciver(nationalCode, token);
    console.log(data);
    return {
      props: {
        tickets: data,
      },
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

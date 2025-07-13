import DesktopNewRequestTable from "@/src/components/userManagement/NewRequests/DesktopNewRequestTable";
import MobileNewRequestTable from "@/src/components/userManagement/NewRequests/MobileNewRequestTable";
import TabletNewRequestTable from "@/src/components/userManagement/NewRequests/TabletNewRequestTable";
import { NewRequests } from "@/src/server/Service";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const NewRequest = (props) => {
  const { data: newRequests } = props;
  const [cookies] = useCookies();
  const router = useRouter();
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <div className="mx-auto lg:mt-[35.07px] lg:w-[1060px] ">
        <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] md:-mr-[20px] -mr-[30px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-2 lg:mb-[60.09px]">
          <span>درخواست های جدید</span>
        </div>
        <DesktopNewRequestTable newRequests={newRequests} />
        <TabletNewRequestTable newRequests={newRequests} />
        <MobileNewRequestTable newRequests={newRequests} />
      </div>
    </>
  );
};

export default NewRequest;

export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const token = req.cookies.Token;
  const newRequests = await NewRequests(token);
  return {
    props: newRequests,
  };
}

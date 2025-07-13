import UpdateTerminalInfoForm from "@/src/components/card/terminal/TerminalsInfoTables/UpdateTerminalInfoForm";
import {
  GetTerminalInfoDetail,
  UpdateTerminalInfoByIds,
} from "@/src/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

const TerminalDetails = ({ terminalInfoDetails }) => {
  const [openIsActive, setOpenIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const userId = router.query.userId;
  const initialValues = {
    isActive: terminalInfoDetails?.isActive,
    terminalId: terminalInfoDetails?.terminalId,
    terminalName: terminalInfoDetails?.terminalName || "",
    terminalAddress: terminalInfoDetails?.terminalAddress || "",
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UpdateTerminalInfoByIds(values, userId);
    const { isSuccess, message } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("ویرایش اطلاعات با موفقیت انجام شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(`/adminPanel/card/terminal`);
    } else {
      toast.error(message, {
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
  const activeHandler = () => {
    formik.values.isActive = true;
    setOpenIsActive(false);
  };
  const nonActiveHandler = () => {
    formik.values.isActive = false;
    setOpenIsActive(false);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-4 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal mr-[10px] md:mr-0  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/card/terminal"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                ترمینال ها
              </span>
            </Link>
            <div className="-mr-[60px] md:-mr-[80px] lg:-mr-[75px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">ویرایش اطلاعات</span>
            </div>
          </div>
          {/* Title */}
          <div className="whitespace-nowrap w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex gap-x-[5px] items-center justify-center text-neutralColor-1 mb-[24px] mr-[10px] md:mr-[2px] lg:mr-[10px]  lg:mb-[60.09px] md:-mt-[20px]">
            <span>ویرایش اطلاعات ترمینال</span>
            <span className="">{terminalInfoDetails.terminalId}</span>
          </div>
        </div>
        <UpdateTerminalInfoForm
          userId={userId}
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          openIsActive={openIsActive}
          setOpenIsActive={setOpenIsActive}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default TerminalDetails;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { terminalId, userId } = params;
    const token = req.cookies.Token;
    const terminalInfo = await GetTerminalInfoDetail(userId, terminalId, token);
    console.log(terminalInfo);
    const { data } = terminalInfo;
    console.log(data);
    return {
      props: {
        terminalInfoDetails: data,
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

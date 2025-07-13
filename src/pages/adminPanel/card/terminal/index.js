import { GetTerminalInfoByUserId, TeminalKeyGenerator } from "@/src/server/Service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import * as Yup from "yup";
import TerminalForm from "@/src/components/card/terminal/TerminalForm";
import DesktopTerminalInfoTable from "@/src/components/card/terminal/TerminalsInfoTables/DesktopTerminalInfoTable";
import TabletTerminalInfoTable from "@/src/components/card/terminal/TerminalsInfoTables/TabletTerminalInfoTable";
import MobileTerminalInfoTable from "@/src/components/card/terminal/TerminalsInfoTables/MobileTerminalInfoTable";
const Terminal = () => {
  const [cookies] = useCookies();
  const router = useRouter();
  const [terminalInfo, setTerminalInfo] = useState();
  const [isLoadingGenerate, setIsLoadingGenerate] = useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, [cookies, router]);

  const initialValues = {
    userId: "",
    action: "", // Add action field to initialValues
    serialDevices: [
      {
        terminalId: "",
        terminalAddress: "",
        terminalName: "",
      },
    ],
  };
  const validationSchema = Yup.object({
    userId: Yup.string()
      .required("کد ملی/شناسه ملی را وارد نمایید")
      .min(10, "شناسه ملی باید 11 رقم باشد/کد ملی باید  10 رقم باشد")
      .max(11, "کد ملی حداکثر 10 رقم / شناسه ملی حداکثر 11 رقم می باشد"),
  });
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!values.userId) {
      return;
    }
    resetForm();
    setSubmitting(false);
    const action = values.action;
    if (action === "generate") {
      setIsLoadingGenerate(true);
      const res = await TeminalKeyGenerator(values);
      if (res.isSuccess) {
        setIsLoadingGenerate(false);
        toast.success("ترمینال با موفقیت ایجاد شد.", {
          duration: 4000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          className: "",
          icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
        });
      } else {
        toast.error(res.message, {
          duration: 4000,
          style: {
            backgroundColor: "#EE3A01",
            color: "#fff",
          },
          className: "",
          icon: <VscError className="w-[28px] h-[28px]" />,
        });
        setIsLoadingGenerate(false);
      }
    } else if (action === "search") {
      setIsLoadingSearch(true);
      const res = await GetTerminalInfoByUserId(values);
      if (res.data) {
        setTerminalInfo(res.data);
        setIsLoadingSearch(false);
      } else {
        toast(res.message);
        setIsLoadingSearch(false);
      }
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnMount: true,
  });

  return (
    <div
      className={`mt-[10px] h-screen  mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-10  lg:w-[1024px] flex flex-col gap-y-[20px]`}
    >
      <div className="-mr-[45px] md:-mr-[60px] lg:-mr-[120px] lg:mt-[20px]">
        {/* Title */}
        <div className="-mr-[15px] w-[178px] h-[44px]  text-[14px]  md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-[38px] lg:mb-[30.09px]">
          <span>ترمینال ها</span>
        </div>
      </div>
      <TerminalForm
        formik={formik}
        isLoadingGenerate={isLoadingGenerate}
        isLoadingSearch={isLoadingSearch}
      />
      {terminalInfo && <DesktopTerminalInfoTable terminalInfo={terminalInfo} />}
      {terminalInfo && <TabletTerminalInfoTable terminalInfo={terminalInfo} />}
      {terminalInfo && <MobileTerminalInfoTable terminalInfo={terminalInfo} />}
    </div>
  );
};

export default Terminal;

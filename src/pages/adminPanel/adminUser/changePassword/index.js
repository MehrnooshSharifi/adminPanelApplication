import MobileChangePassword from "@/src/components/adminUser/ChangePassword/MobileChangePassword";
import TabletChangePassword from "@/src/components/adminUser/ChangePassword/TabletChangePassword";
import { ChangePassword } from "@/src/server/Service";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

const AdminUserInfo = () => {
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const nationalCode = cookies.nationalCode;
  const router = useRouter();
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    resetForm();
    setIsLoading(true);
    const res = await ChangePassword(values, nationalCode);
    if (res.isSuccess) {
      toast.success(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push("/adminPanel/serviceManagement");
      setIsLoading(false);
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
      setIsLoading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <>
      <div className=" mt-[68px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:hidden">
        <div className="-mr-[45px] md:-mr-[40px] md:mb-[68px]">
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px]  font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px]">
            <span>تغییر رمز عبور</span>
          </div>
        </div>
        {/* MobileChangePassword */}
        <MobileChangePassword formik={formik} isLoading={isLoading} />
        <TabletChangePassword formik={formik} isLoading={isLoading} />
      </div>
    </>
  );
};

export default AdminUserInfo;

import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AdminCreateUser } from "@/src/server/Service";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import * as Yup from "yup";
import AddSupervisorForm from "@/src/components/supervisorList/AddSupervisorForm";
import Image from "next/image";
const AddToSupervisorList = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [openIsActive, setOpenIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const creatorNationalCode = cookies.nationalCode;
  const initialValues = {
    id: "",
    adminId: creatorNationalCode,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    userTypeId: "0",
    isActive: true,
    userRoleType: [],
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("نام را وارد نمایید"),
    lastName: Yup.string().required(" نام خانوادگی را وارد نمایید"),
    id: Yup.string()
      .required("کد/شناسه ملی را وارد نمایید")
      .min(10, "شناسه ملی باید 11 رقم باشد/کد ملی باید  10 رقم باشد")
      .max(11, "کد ملی حداکثر 10 رقم / شناسه ملی حداکثر 11 رقم می باشد"),
    phoneNumber: Yup.string().required("شماره تلفن همراه را وارد کنید"),
    email: Yup.string()
      .required("ایمیل را وارد کنید")
      .email("فرمت ایمیل صحیح نیست"),
  });
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await AdminCreateUser(values);
    const { isSuccess, message } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success(message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(`/adminPanel/supervisorUsers`);
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
    validationSchema,
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
          <div className="w-fit  whitespace-nowrap font-normal mr-[15px] md:mr-0  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/supervisorUsers"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                مدیریت سرپرستی
              </span>
            </Link>
            <div className="-mr-[30px] md:-mr-[40px] lg:-mr-[30px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">افزودن به لیست کاربران</span>
            </div>
          </div>
          {/* Title */}
          <div className="flex flex-col w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] md:-mr-[10px] mr-[10px] lg:mr-[4px] lg:mb-[60.09px] md:-mt-[20px]">
            <span>افزودن به لیست کاربران</span>
          </div>
        </div>
        <AddSupervisorForm
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

export default AddToSupervisorList;

import Layout from "@/src/container/layout";
import { useRouter } from "next/router";
import { Field, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { CreateServiceGroup } from "@/src/server/Service";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import AddServiceGroupMobileForm from "@/src/components/servicesManagement/addServiceGroup/AddServiceGroupMobileForm";
import AddServiceGroupTabletForm from "@/src/components/servicesManagement/addServiceGroup/AddServiceGroupTabletForm";
import Image from "next/image";
const initialValues = {
  serviceGroupName: "",
  serviceGroupDesc: "",
  isPublic: true,
  isActive: true,
};
const AddServiceGroup = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await CreateServiceGroup(values);
    const { isSuccess } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("گروه سرویس جدید با موفقیت ثبت شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push("/adminPanel/serviceManagement");
    } else {
      toast.error("ثبت گروه سرویس جدید با خطا روبرو شد", {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  const activeHandler = () => {
    formik.values.isActive = true;
    setIsOpenStatus(false);
  };
  const nonActiveHandler = () => {
    formik.values.isActive = false;
    setIsOpenStatus(false);
  };
  const publicHandler = () => {
    formik.values.isPublic = true;
    setIsOpenType(false);
  };
  const PrivateHandler = () => {
    formik.values.isPublic = false;
    setIsOpenType(false);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-[271.84px] whitespace-nowrap font-normal  text-[10px] md:w-[325.85px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center gap-x-[10px] px-[10px] py-[15.5px] md:mb-5 ">
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
              <span className="w-[113px] h-[17px]">افزودن گروه سرویس جدید</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-2 lg:mb-[60.09px]">
            <span>افزودن گروه سرویس جدید</span>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <AddServiceGroupMobileForm
          formik={formik}
          PrivateHandler={PrivateHandler}
          publicHandler={publicHandler}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenType={isOpenType}
          setIsOpenType={setIsOpenType}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
          isLoading={isLoading}
        />
        <AddServiceGroupTabletForm
          formik={formik}
          PrivateHandler={PrivateHandler}
          publicHandler={publicHandler}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenType={isOpenType}
          setIsOpenType={setIsOpenType}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default AddServiceGroup;

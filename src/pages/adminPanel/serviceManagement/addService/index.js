import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import AddServiceMobileForm from "@/src/components/servicesManagement/addService/AddServiceMobileForm";
import AddServiceTabletForm from "@/src/components/servicesManagement/addService/AddServiceTabletForm";
import { RegisterService } from "@/src/server/Service";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const AddService = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const serviceGroupId = searchParams.get("serviceGroupId");
  const router = useRouter();
  const initialValues = {
    serviceName: "",
    serviceDesc: "",
    defaultPrice: 0,
    isActive: true,
    policyauth: "",
    serviceGroupId: serviceGroupId,
    servicePoint: 0,
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const amountWithoutCommas = formik.values.defaultPrice.replace(/,/g, "");
    const res = await RegisterService({
      ...formik.values,
      defaultPrice: amountWithoutCommas,
    });
    const { isSuccess } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("سرویس جدید با موفقیت ثبت شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(
        `/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}`
      );
    } else {
      toast.error("ثبت سرویس جدید با خطا روبرو شد", {
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
    setIsOpenStatus(false);
  };
  const nonActiveHandler = () => {
    formik.values.isActive = false;
    setIsOpenStatus(false);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
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
            <Link
              href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}`}
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center mr-2"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست سرویس ها
              </span>
            </Link>
            <div className="-mr-[20px] md:-mr-[30px] lg:-mr-[20px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">افزودن سرویس جدید</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] -mr-[12px] md:-mr-[18px] lg:-mr-[8px] lg:mb-[60.09px]">
            <span>افزودن سرویس جدید</span>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <AddServiceMobileForm
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
          isLoading={isLoading}
        />
        <AddServiceTabletForm
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          onSubmit={onSubmit}
          isOpenStatus={isOpenStatus}
          setIsOpenStatus={setIsOpenStatus}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default AddService;

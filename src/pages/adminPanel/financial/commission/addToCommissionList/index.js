import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import Image from "next/image";
import * as Yup from "yup";
import { CreateCommission, FindServiceName } from "@/src/server/Service";
import CommissionForm from "@/src/components/Commission/CommissionForm";
const AddToCommissionList = ({servicesName}) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [openIsActive, setOpenIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    supperNationalId: "",
    representativeNationalId: "",
    consumerNationalId: "",
    serviceId: "",
    amount: 0,
  };
  const validationSchema = Yup.object({
    supperNationalId: Yup.string()
      .required("کد ملی/شناسه ملی منبع را وارد نمایید")
      .min(10, "شناسه ملی باید 11 رقم باشد/کد ملی باید  10 رقم باشد")
      .max(11, "کد ملی حداکثر 10 رقم / شناسه ملی حداکثر 11 رقم می باشد"),
    representativeNationalId: Yup.string()
      .required("کد ملی/شناسه ملی ذینفع را وارد نمایید")
      .min(10, "شناسه ملی باید 11 رقم باشد/کد ملی باید  10 رقم باشد")
      .max(11, "کد ملی حداکثر 10 رقم / شناسه ملی حداکثر 11 رقم می باشد"),
    consumerNationalId: Yup.string()
      .required("کد ملی/شناسه ملی مصرف کننده را وارد نمایید")
      .min(10, "شناسه ملی باید 11 رقم باشد/کد ملی باید  10 رقم باشد")
      .max(11, "کد ملی حداکثر 10 رقم / شناسه ملی حداکثر 11 رقم می باشد"),
  });
  const onSubmit = async (values) => {
    const amountWithoutCommas = Number(values.amount.replace(/,/g, ""));
    setIsLoading(true);
    const res = await CreateCommission({
      ...values,
      amount: amountWithoutCommas,
    });
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
      router.push(`/adminPanel/financial/commission`);
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
    validationSchema,
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
          <div className="w-fit  whitespace-nowrap font-normal mr-[15px] md:mr-0  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/financial/commission"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="-mr-[5px] w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                تخفیف و پورسانت
              </span>
            </Link>
            <div className="-mr-[30px] md:-mr-[40px] lg:-mr-[30px]">
              <Image
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
                width={20}
                height={20}
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-[10px] md:mr-[10px] lg:mr-[20px]">
              <span className="w-[113px] h-[17px]">
                افزودن به لیست تخفیف و پورسانت
              </span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[250px] h-[44px] text-[14px] md:text-[18px] md:w-[300px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap  lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-start text-neutralColor-1 mb-[24px] mr-[15px] md:mr-[5px]  lg:mb-[60.09px] md:-mt-[20px]">
            <span>افزودن به لیست تخفیف و پورسانت</span>
          </div>
        </div>
        <CommissionForm
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          openIsActive={openIsActive}
          setOpenIsActive={setOpenIsActive}
          isLoading={isLoading}
          servicesName={servicesName}
        />
      </div>
    </>
  );
};

export default AddToCommissionList;

export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const token = req.cookies.Token;
  const info = await FindServiceName(token);
  console.log(info);
  return {
    props: { servicesName: info.data },
  };
}

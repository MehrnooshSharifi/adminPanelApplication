import BlackListForm from "@/src/components/blackList/BlackListForm";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import { useCookies } from "react-cookie";
import { AddBlockUser } from "@/src/server/Service";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import Image from "next/image";
const AddToBlackList = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [openIsBlocked, setOpenIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [startvalue, setStartValue] = useState(new DateObject());
  const [endvalue, setEndValue] = useState(new DateObject());
  const blockerUserNationalCode = cookies.nationalCode;
  const initialValues = {
    nationalCode: "",
    isBlocked: true,
    adminNationalCode: blockerUserNationalCode,
  };
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let lastMonth = currentMonth - 1;
  const dateRange = currentDate.setMonth(lastMonth);
  const dateObject = {
    dateFrom: [
      startvalue.year.toString(),
      `${
        startvalue.month.number.toString().length == 1
          ? "0" + startvalue.month.number.toString()
          : startvalue.month.number
      }`,
      startvalue.day.toString(),
    ].join("/"),
    dateTo: [
      endvalue.year.toString(),
      `${
        endvalue.month.number.toString().length == 1
          ? "0" + endvalue.month.number.toString()
          : endvalue.month.number
      }`,
      endvalue.day.toString(),
    ].join("/"),
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await AddBlockUser(values, dateObject);
    const { isSuccess, message } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("شخص مورد نظر به لیست سیاه افزوده شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(`/adminPanel/blackList`);
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
    formik.values.isBlocked = true;
    setOpenIsBlocked(false);
  };
  const nonActiveHandler = () => {
    formik.values.isBlocked = false;
    setOpenIsBlocked(false);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-4 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal mr-[15px] md:mr-0  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/blackList/"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست سیاه
              </span>
            </Link>
            <div className="-mr-[45px] md:-mr-[60px] lg:-mr-[65px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">افزودن به لیست سیاه</span>
            </div>
          </div>
          {/* Title */}
          <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] md:-mr-[20px] lg:-mr-[15px] lg:mb-[60.09px] md:-mt-[20px]">
            <span>افزودن به لیست سیاه</span>
          </div>
        </div>
        <BlackListForm
          dateRange={dateRange}
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          openIsBlocked={openIsBlocked}
          setOpenIsBlocked={setOpenIsBlocked}
        />
      </div>
    </>
  );
};

export default AddToBlackList;

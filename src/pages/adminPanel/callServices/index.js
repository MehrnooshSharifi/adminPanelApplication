import CallServicesReportsTable from "@/src/components/callServices/CallServicesReportsTable";
import DesktopCallServicesForm from "@/src/components/callServices/DesktopCallServicesForm";
import MobileCallServicesReportsForm from "@/src/components/callServices/MobileCallServiceReportsForm";
import TabletCallServicesReportsForm from "@/src/components/callServices/TabletCallServicesReportsForm";
import {
  FindServiceName,
  ServiceCallReportAllByUserByService,
} from "@/src/server/Service";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import { BsDatabaseFillX } from "react-icons/bs";
import { Token } from "@mui/icons-material";
const CallServies = ({ servicesName }) => {
  const [cookies] = useCookies();
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(true);
  const [startvalue, setStartValue] = useState(new DateObject());
  const [endvalue, setEndValue] = useState(new DateObject());
  const [callServicesReports, setCallServicesReports] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let lastMonth = currentMonth - 1;
  const dateRange = currentDate.setMonth(lastMonth);
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);
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
  const initialValues = {
    userId: "",
    serviceId: "",
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await ServiceCallReportAllByUserByService(dateObject, values);
    if (res.data) {
      setCallServicesReports(res.data);
      setOpenFilter(false);
      setIsLoading(false);
    }
    if (res.isSuccess && res.data.length == 0) {
      toast("با فیلترهای انتخاب شده اطلاعاتی برای نمایش موجود نیست.", {
        style: {
          fontSize: 14,
          backgroundColor: "#FAFAFA",
          color: "#212121",
          width: 400,
          height: 100,
          lineHeight: 2,
        },
        icon: (
          <BsDatabaseFillX className="w-[30px] h-[30px] fill-primaryColor-1 " />
        ),
      });
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <>
      <div
        className={`mt-[10px] h-[672px]  mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-10  lg:w-[1024px] flex flex-col gap-y-[20px] ${
          callServicesReports && openFilter && "overflow-y-scroll"
        }`}
      >
        <div className="mr-[5px] md:mr-[5px] lg:-mr-[50px] lg:mt-[20px]">
          {/* Title */}
          <div className="-mr-[35px] w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-2 lg:mb-[30.09px]">
            <span>فراخوانی سرویس ها</span>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <DesktopCallServicesForm
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          isLoading={isLoading}
          dateRange={dateRange}
          servicesName={servicesName}
        />
        <TabletCallServicesReportsForm
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          onSubmit={onSubmit}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          isLoading={isLoading}
          dateRange={dateRange}
          servicesName={servicesName}
        />
        <MobileCallServicesReportsForm
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          onSubmit={onSubmit}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          isLoading={isLoading}
          dateRange={dateRange}
          servicesName={servicesName}
        />
        {callServicesReports && callServicesReports.length > 0 && (
          <CallServicesReportsTable callServicesReports={callServicesReports} />
        )}
      </div>
    </>
  );
};

export default CallServies;

export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const token = req.cookies.Token;
  const info = await FindServiceName(token);
  console.log(info);
  return {
    props: { servicesName: info.data },
  };
}

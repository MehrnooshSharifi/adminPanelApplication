import DesktopFinancialReportsForm from "@/src/components/financial/financialReports/DesktopFinancialReportsForm";
import FinancialReportsTable from "@/src/components/financial/financialReports/FinantialReportsTable";
import MobileFinancialReportsForm from "@/src/components/financial/financialReports/MobileFinancialReportsForm";
import TabletFinancialReportsForm from "@/src/components/financial/financialReports/TabletFinancialReportsForm";
import { FinancialReport } from "@/src/server/Service";
import { CleaningServices } from "@mui/icons-material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BsDatabaseFillX } from "react-icons/bs";
import { DateObject } from "react-multi-date-picker";
const FinancialReports = () => {
  const [openFilter, setOpenFilter] = useState(true);
  const [startvalue, setStartValue] = useState(new DateObject());
  const [endvalue, setEndValue] = useState(new DateObject());
  const [financialReports, setFinancialReports] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies();
  const router = useRouter();
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);
  const initialValues = {
    nationalCode: "",
  };
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
    if (!values.nationalCode) {
      return;
    }
    setIsLoading(true);
    const res = await FinancialReport(values, dateObject);
    if (res.data) {
      setFinancialReports(res.data);
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
          financialReports && openFilter && "overflow-y-scroll"
        }`}
      >
        <div className="-mr-[15px] md:-mr-[25px] lg:-mr-[75px] lg:mt-[20px]">
          {/* Title */}
          <div className=" -mr-[35px] w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-2 lg:mb-[30.09px]">
            <span>گزارشات مالی</span>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <MobileFinancialReportsForm
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          onSubmit={onSubmit}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          isLoading={isLoading}
        />
        <TabletFinancialReportsForm
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          onSubmit={onSubmit}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          isLoading={isLoading}
        />
        <DesktopFinancialReportsForm
          formik={formik}
          startvalue={startvalue}
          setStartValue={setStartValue}
          endvalue={endvalue}
          setEndValue={setEndValue}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
        {financialReports && financialReports.length > 0 && (
          <FinancialReportsTable financialReports={financialReports} />
        )}
      </div>
    </>
  );
};

export default FinancialReports;

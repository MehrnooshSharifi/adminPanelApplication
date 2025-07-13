import { FindServiceName, SearchCommission } from "@/src/server/Service";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BsDatabaseFillX } from "react-icons/bs";
import DesktopCommissionReportForm from "@/src/components/Commission/DesktopCommissionReportForm";
import TabletCommissionReportForm from "@/src/components/Commission/TabletCommissionReportForm";
import MobileCommissionReportForm from "@/src/components/Commission/MobileCommissionReportForm";
import CommissionReportsTable from "@/src/components/Commission/CommissionReportsTable";
import { PiWarningFill } from "react-icons/pi";
const CommissionReport = ({ servicesName }) => {
  const [cookies] = useCookies();
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(true);
  const [commissionData, setCommissionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);
  const initialValues = {
    supperNationalId: "",
    consumerNationalId: "",
    representativeNationalId: "",
    serviceId: "",
  };
  const onSubmit = async (values) => {
    console.log(values);
    if (
      !values.supperNationalId &&
      !values.representativeNationalId &&
      !values.consumerNationalId
    ) {
      toast("لطفاً یکی از موارد فیلتر را وارد نمایید.", {
        style: {
          fontSize: 14,
          backgroundColor: "#FAFAFA",
          color: "#212121",
          width: 300,
          height: 50,
          lineHeight: 2,
        },
        icon: (
          <PiWarningFill className="w-[20px] h-[20px] fill-secondaryColor-1 " />
        ),
      });
      return;
    }
    setIsLoading(true);
    const res = await SearchCommission(values);
    if (res.data) {
      setCommissionData(res.data);
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
          <BsDatabaseFillX className="w-[30px] h-[30px] fill-primaryColor-1  " />
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
        className={`mt-[10px] h-[672px]  mx-auto w-[375px] md:w-[768px] md:mx-auto px-6 md:pr-10  lg:w-[1024px] flex flex-col gap-y-[20px]  ${
          commissionData && openFilter && "overflow-y-scroll"
        }`}
      >
        <div className="mr-[5px] md:mr-[5px] lg:-mr-[50px] lg:mt-[20px]">
          {/* Title */}
          <div className="-mr-[25px] w-[178px] h-[44px]   text-[14px]  md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:mr-[22px] lg:mb-[30.09px]">
            <span>گزارش پورسانت و تخفیف</span>
          </div>
        </div>
        {/* addNewServiceGroupForm */}
        <DesktopCommissionReportForm
          formik={formik}
          isLoading={isLoading}
          servicesName={servicesName}
        />
        <TabletCommissionReportForm
          formik={formik}
          onSubmit={onSubmit}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          isLoading={isLoading}
          servicesName={servicesName}
        />
        <MobileCommissionReportForm
          formik={formik}
          onSubmit={onSubmit}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          isLoading={isLoading}
          servicesName={servicesName}
        />
        {commissionData && commissionData.length > 0 && (
          <CommissionReportsTable commissionData={commissionData} />
        )}
      </div>
    </>
  );
};

export default CommissionReport;

export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const token = req.cookies.Token;
  const info = await FindServiceName(token);
  console.log(info);
  return {
    props: { servicesName: info.data },
  };
}

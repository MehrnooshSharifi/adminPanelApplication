import MobileIncreaseCustomerCreditForm from "@/src/components/financial/customerCredit/MobileCustomerCreditForm";
import TabletIncreaseCustomerCreditForm from "@/src/components/financial/customerCredit/TabletCustomerCreditForm";
import { useFormik } from "formik";
const IncreaseCustomerCredit = () => {
  const initialValues = {
    nationalCode: "",
    docRef: "",
    docDesc: "",
    allAmount: "",
  };
  const onSubmit = async () => {
    console.log("values");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <>
      <div className="mx-auto lg:mt-[35.07px] lg:w-[1060px] ">
        <div className="w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] md:-mr-[50px] -mr-[50px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex items-center justify-center text-neutralColor-1 mb-[24px] lg:-mr-[10px] lg:mb-[60.09px]">
          <span>افزایش اعتبار</span>
        </div>
        <>
          <MobileIncreaseCustomerCreditForm formik={formik} title="increase" />
          <TabletIncreaseCustomerCreditForm formik={formik} title="increase" />
        </>
      </div>
    </>
  );
};

export default IncreaseCustomerCredit;

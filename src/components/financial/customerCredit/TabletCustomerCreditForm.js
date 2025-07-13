import { useState } from "react";
import CustomerCreditModal from "./CustomerCreditModal";
const TabletCustomerCreditForm = ({ formik, title }) => {
  const [showCustomerCreditModal, setShowCustomerCreditModal] = useState(false);
  const acceptRequestHandler = (e) => {
    e.preventDefault();
    setShowCustomerCreditModal(true);
  };
  const formatNumber = (value) => {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  const handleAmountChange = (e) => {
    const formattedValue = formatNumber(e.target.value.replace(/,/g, ""));
    formik.handleChange({
      target: {
        name: "allAmount",
        value: formattedValue,
      },
    });
  };
  return (
    <div className="flex items-center justify-center">
      <form className="md:flex flex-col gap-y-[36px] hidden pr-5 lg:pr-[100px] relative ">
        {/* serviceGroupName&serviceName */}
        <div className="flex gap-x-[25px] lg:gap-x-[40px]">
          {/* nationalCode */}
          <div className="flex flex-col relative">
            <label
              className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="nationalCode"
            >
              <span className="">کد ملی/شناسه ملی</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="nationalCode"
              name="nationalCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nationalCode}
            />
          </div>
          {/* docRef */}
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="docRef"
            >
              <span>شماره مرجع</span>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
              name="docRef"
              value={formik.values.docRef}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        {/* price&desc */}
        <div className="flex gap-x-[25px] lg:gap-x-[40px]">
          {/*allAmount */}
          <div className="flex flex-col relative">
            <label className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2">
              <div className="flex gap-x-[5px]">
                <span className="">مبلغ </span>
                <span className="">(ریال) </span>
              </div>
            </label>
            <input
              autoComplete="off"
              className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="allAmount"
              name="allAmount"
              type="text"
              onChange={handleAmountChange}
              value={formik.values.allAmount}
            />
          </div>
        </div>
        <div className="flex flex-col relative z-0 ">
          <label
            className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="docDesc"
          >
            <span className="">توضیحات</span>
          </label>
          <textarea
            className="w-[679px] h-[140px] lg:w-[832px] lg:h-[140px]  text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            id="docDesc"
            name="docDesc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.docDesc}
          />
        </div>
        {/* submit */}
        <div className="flex flex-col gap-y-[20px] mt-[250px] lg:flex-row relative ">
          <button
            disabled={
              !formik.values.nationalCode ||
              !formik.values.docRef ||
              !formik.values.docDesc ||
              !formik.values.allAmount
            }
            onClick={acceptRequestHandler}
            type="button"
            className={`bg-primaryColor-1  lg:right-[680px]  rounded-[5px] text-center lg:absolute  lg:-top-[50px]   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px] mt-[80px] ${
              !formik.values.nationalCode |
                !formik.values.docRef |
                !formik.values.docDesc |
                !formik.values.allAmount &&
              "cursor-not-allowed disabled opacity-30"
            }`}
          >
            {title == "increase" ? "افزایش اعتبار" : "کاهش اعتبار"}
          </button>
        </div>
      </form>
      {showCustomerCreditModal && (
        <CustomerCreditModal
          setShowCustomerCreditModal={setShowCustomerCreditModal}
          formik={formik}
          title={title}
        />
      )}
    </div>
  );
};

export default TabletCustomerCreditForm;

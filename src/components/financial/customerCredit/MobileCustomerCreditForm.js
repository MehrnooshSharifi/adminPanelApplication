import { useState } from "react";
import CustomerCreditModal from "./CustomerCreditModal";
const MobileCustomerCreditForm = ({ formik, title }) => {
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
    <div>
      <form className="flex flex-col gap-y-[36px] md:hidden">
        {/* nationalCode */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[110px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="nationalCode"
          >
            <span className="w-[120px]">کد ملی/شناسه ملی</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="nationalCode"
            name="nationalCode"
            onChange={formik.handleChange}
            value={formik.values.nationalCode}
          />
        </div>
        {/* docRef */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className=" w-[82px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="docRef"
          >
            <span>شماره مرجع</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            name="docRef"
            id="docRef"
            onChange={formik.handleChange}
            value={formik.values.docRef}
          />
        </div>
        {/* allAmount */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[70px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="allAmount"
          >
            <div className="flex gap-x-[5px]">
              <span className="">مبلغ</span>
              <span className="">(ریال)</span>
            </div>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="allAmount"
            name="allAmount"
            type="text"
            value={formik.values.allAmount}
            onChange={handleAmountChange}
          />
        </div>
        {/* docDescription */}
        <div className="flex flex-col relative z-0 ">
          <label
            className="flex flex-col px-[10px] absolute mr-2 -top-2 text-[12px] font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="docDesc"
          >
            <span className="">توضیحات</span>
          </label>
          <textarea
            className="w-[327px] h-[130px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            id="docDesc"
            name="docDesc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.docDesc}
          />
        </div>
        {/* submit */}
        <div className="flex flex-col gap-y-[10px] mt-[70px] ">
          <button
            disabled={
              !formik.values.nationalCode ||
              !formik.values.docRef ||
              !formik.values.docDesc ||
              !formik.values.allAmount
            }
            onClick={acceptRequestHandler}
            type="button"
            className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px]  mt-[80px] ${
              !formik.values.nationalCode |
                !formik.values.docRef |
                !formik.values.docDesc |
                !formik.values.allAmount &&
              "cursor-not-allowed disabled opacity-30"
            }`}
          >
            {title == "increase" ? "افزایش اعتبار" : "کاهش اعتبار"}
          </button>
          {/* submit */}
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

export default MobileCustomerCreditForm;

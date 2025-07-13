import Image from "next/image";
import { useRef, useState } from "react";
import AcceptNewRequestModal from "./checkNewRequest/AcceptNewRequestModal";
import RejectNewRequestModal from "./checkNewRequest/RejectNewRequestModal";

const MobileNewRequestDetailsForm = ({ formik }) => {
  const [showRejectRequestModal, setShowRejectRequestModal] = useState(false);
  const [showAcceptRequestModal, setShowAcceptRequestModal] = useState(false);
  const rejectRequestHandler = (e) => {
    e.preventDefault();
    setShowRejectRequestModal(true);
  };
  const acceptRequestHandler = (e) => {
    e.preventDefault();
    setShowAcceptRequestModal(true);
  };
  const defaultPrice = useRef();
  const focusDefaultPrice = () => {
    defaultPrice.current.focus();
  };
  return (
    <div>
      <form className="flex flex-col gap-y-[36px] md:hidden">
        {/* serviceGroupName */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[107px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-3"
            htmlFor="serviceGroupName"
          >
            <span className="">نام گروه سرویس </span>
          </label>
          <input
            readOnly
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-3 bg-neutralColor-5 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="serviceGroupName"
            name="serviceGroupName"
            type="text"
            value={formik.values.serviceGroupName}
          />
        </div>
        {/* serviceName */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="serviceName"
          >
            <span>نام سرویس</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="serviceName"
            value={formik.values.serviceName}
          />
        </div>
        {/* appName */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="appName"
          >
            <span>نام اپلیکیشن</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="appName"
            value={formik.values.appName}
          />
        </div>
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-3 bg-naturalColor-2"
            htmlFor="appName"
          >
            <span>Scope</span>
          </label>
          <input
            readOnly
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-3 bg-neutralColor-5 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
            name="appName"
            value={formik.values.publicAppId}
          />
        </div>
        {/* defaultPrice */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[82px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="defaultPrice"
          >
            <span className="">مبلغ (ریال)</span>
          </label>
          <input
            ref={defaultPrice}
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="defaultPrice"
            name="defaultPrice"
            type="text"
            value={formik.values.defaultPrice}
            onChange={formik.handleChange}
          />
          <div
            onClick={focusDefaultPrice}
            className="w-fit absolute top-[15px] right-[300px]"
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        {/* submit */}
        <div className="flex flex-col gap-y-[10px] mt-[70px] ">
          <button
            onClick={acceptRequestHandler}
            type="button"
            className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px]  mt-[80px]`}
          >
            تایید درخواست
          </button>
          {/* submit */}
          <button
            onClick={rejectRequestHandler}
            type="button"
            className={`bg-naturalColor-2  rounded-[5px] text-center   px-[16px] text-primaryColor-1 border border-primaryColor-1 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] `}
          >
            رد درخواست
          </button>
        </div>
      </form>
      {showAcceptRequestModal && (
        <AcceptNewRequestModal
          setShowAcceptRequestModal={setShowAcceptRequestModal}
          formik={formik}
        />
      )}
      {showRejectRequestModal && (
        <RejectNewRequestModal
          formik={formik}
          setShowRejectRequestModal={setShowRejectRequestModal}
        />
      )}
    </div>
  );
};

export default MobileNewRequestDetailsForm;

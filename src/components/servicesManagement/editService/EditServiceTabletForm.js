import Image from "next/image";
import { useRef, useState } from "react";
import FileUploadModal from "../serviceGroupDetails/FileUploadModal/FileUploadModal";

const EditServiceTabletForm = ({
  formik,
  nonActiveHandler,
  activeHandler,
  isOpenStatus,
  setIsOpenStatus,
}) => {
  const [showUploadFileModal, setShowUploadFileModal] = useState(false);
  const refServiceName = useRef();
  const refServiceDesc = useRef();
  const refServiceDefaultPrice = useRef();
  const refServicepolicyauth = useRef();
  const refServicePoint = useRef();

  const focusServiceName = () => {
    refServiceName.current.focus();
  };
  const focusServiceDesc = () => {
    refServiceDesc.current.focus();
  };
  const focusServicePoint = () => {
    refServicePoint.current.focus();
  };
  const focusServiceDefaultPrice = () => {
    refServiceDefaultPrice.current.focus();
  };
  const focusServicepolicyauth = () => {
    refServicepolicyauth.current.focus();
  };
  const showUploadFileModalHandler = (id) => {
    setShowUploadFileModal(true);
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
        name: "defaultPrice",
        value: formattedValue,
      },
    });
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="md:flex flex-col gap-y-[36px] hidden pr-5 lg:pr-[100px] relative "
      >
        <div className="flex gap-x-[25px] lg:gap-x-[40px]">
          {/* serviceName */}
          <div className="flex flex-col relative">
            <label
              className=" md:w-[90px] md:h-[18px] lg:w-[100px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
              htmlFor="serviceName"
            >
              <span className=""> نام سرویس</span>
            </label>
            <input
              ref={refServiceName}
              autoComplete="off"
              className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="serviceName"
              name="serviceName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.serviceName}
            />
            <div
              className="w-fit absolute top-[15px] right-[290px] lg:right-[360px] lg:top-[12px] cursor-pointer"
              onClick={focusServiceName}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
          {/* serviceBasePrice */}
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="defaultPrice"
            >
              <span>مبلغ (ریال)</span>
            </label>
            <input
              ref={refServiceDefaultPrice}
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
              name="defaultPrice"
              value={formik.values.defaultPrice}
              onChange={handleAmountChange}
            />
            <div
              className="w-[20px] absolute top-[15px] right-[290px] lg:right-[360px] cursor-pointer"
              onClick={focusServiceDefaultPrice}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-x-[25px] lg:gap-x-[108px]">
          {/* serviceStatus */}
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="isActive"
            >
              <span className={`${isOpenStatus && "text-primaryColor-1"}`}>
                وضعیت
              </span>
            </label>
            <div
              onClick={() => setIsOpenStatus(!isOpenStatus)}
              className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
                isOpenStatus && "border-2 border-primaryColor-1"
              }`}
              name="isActive"
              value={formik.values.isActive}
              onChange={formik.handleChange}
            >
              {formik.values.isActive ? "فعال" : "غیرفعال"}
            </div>
            <div
              className={`absolute left-4 lg:-left-12 top-[16px] cursor-pointer ${
                isOpenStatus && "transition-all duration-300 rotate-180"
              }`}
              onClick={() => setIsOpenStatus(!isOpenStatus)}
            >
              <Image
                width={15}
                height={15}
                src="/assets/images/down.svg"
                alt="down"
              />
            </div>
          </div>
          {/* API ResourceName */}
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col mr-[170px] lg:mr-[220px] lg:whitespace-nowrap  px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="policyauth"
            >
              <span>API ResourceName</span>
            </label>
            <input
              dir="ltr"
              ref={refServicepolicyauth}
              className="w-[327px] pl-4 h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
              name="policyauth"
              value={formik.values.policyauth}
              onChange={formik.handleChange}
            />
            <div
              className="w-fit absolute top-[15px] right-3  lg:right-[15px] lg:top-[12px] cursor-pointer"
              onClick={focusServicepolicyauth}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
        </div>
        {/* serviceGroupId */}
        <div className=" flex-col relative max-w-[327px] hidden ">
          <label
            className="flex flex-col mr-[170px] lg:mr-[220px] lg:whitespace-nowrap  px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="serviceGroupId"
          >
            <span>API ResourceName</span>
          </label>
          <input
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
            name="serviceGroupId"
            value={formik.values.serviceGroupId}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex gap-x-[25px] lg:gap-x-[108px]">
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="helpFile"
            >
              <span>فایل آپلود شده</span>
            </label>
            <input
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
              name="helpFile"
              value={
                formik.values.helpFileName
                  ? formik.values.helpFileName
                  : "فایلی آپلود نشده است"
              }
              onChange={formik.handleChange}
            />
            <div
              className="w-[20px] absolute top-[15px] right-[290px] lg:right-[360px] cursor-pointer"
              onClick={() => showUploadFileModalHandler(formik.values.id)}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
          {/* servicePoint */}
          <div className="flex flex-col relative max-w-[327px] ">
            <label
              className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="servicePoint"
            >
              <span>امتیاز سرویس</span>
            </label>
            <input
              ref={refServicePoint}
              className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
              name="servicePoint"
              value={formik.values.servicePoint}
              onChange={formik.handleChange}
            />
            <div
              className="w-[20px] absolute top-[15px] right-[290px] lg:right-[360px] cursor-pointer"
              onClick={focusServicePoint}
            >
              <Image
                alt="edit"
                src="/assets/images/yellowEdit.svg"
                width={20}
                height={21}
              />
            </div>
          </div>
        </div>
        {/* serviceDescription */}
        <div className="flex flex-col relative z-0 ">
          <label
            className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="serviceDesc"
          >
            <span className="">توضیحات</span>
          </label>
          <textarea
            ref={refServiceDesc}
            className="w-[679px] h-[140px] lg:w-[832px] lg:h-[140px]  text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] px-[70px]  "
            id="serviceDesc"
            name="serviceDesc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.serviceDesc}
          />
          <div
            className="w-fit h-[120px] absolute top-[15px] right-[640px] lg:right-[795px] lg:top-[12px] cursor-pointer"
            onClick={focusServiceDesc}
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={20}
              height={21}
            />
          </div>
        </div>
        {/* submit */}
        <button
          type="submit"
          className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px]  lg:mt-[200px] lg:mr-[680px]  mt-[80px]  ${
            !formik.values.serviceName |
              !formik.values.serviceDesc |
              !formik.values.policyauth &&
            "cursor-not-allowed disabled opacity-30"
          }`}
        >
          ثبت تغییرات
        </button>
        {/* openIsActiveSection */}
        {isOpenStatus && (
          <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[141px] lg:top-[137px] border-2 border-neutralColor-4">
            <div
              onClick={activeHandler}
              value={true}
              className=" cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center border-b border-b-neutralColor-4 "
            >
              <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center mb-[14px]">
                فعال
              </span>
            </div>
            <div
              value={false}
              className="cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center pt-[10px] "
              onClick={nonActiveHandler}
            >
              <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center ">
                غیرفعال
              </span>
            </div>
          </div>
        )}
      </form>
      {showUploadFileModal && (
        <FileUploadModal
          setShowUploadFileModal={setShowUploadFileModal}
          selectedServiceId={formik.values.id}
        />
      )}
    </div>
  );
};

export default EditServiceTabletForm;

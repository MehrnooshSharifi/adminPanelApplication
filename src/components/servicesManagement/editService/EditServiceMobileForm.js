import Image from "next/image";
import { useRef, useState } from "react";
import FileUploadModal from "../serviceGroupDetails/FileUploadModal/FileUploadModal";

const EditServiceMobileForm = ({
  formik,
  nonActiveHandler,
  activeHandler,
  isOpenType,
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
  const focusServiceDefaultPrice = () => {
    refServiceDefaultPrice.current.focus();
  };
  const focusServicepolicyauth = () => {
    refServicepolicyauth.current.focus();
  };
  const focusServicePoint = () => {
    refServicePoint.current.focus();
  };
  const showUploadFileModalHandler = (id) => {
    setShowUploadFileModal(true);
  };
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-y-[36px] md:hidden"
      >
        {/* serviceName */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[82px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="serviceName"
          >
            <span className=""> نام سرویس</span>
          </label>
          <input
            ref={refServiceName}
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="serviceName"
            name="serviceName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.serviceName}
          />
          <div
            className="w-fit absolute top-[15px] right-[300px]"
            onClick={focusServiceName}
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        {/* serviceDefaultPrice */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="defaultPrice"
          >
            <span>مبلغ (ریال)</span>
          </label>
          <input
            ref={refServiceDefaultPrice}
            className="w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer"
            name="defaultPrice"
            value={formik.values.defaultPrice}
            onChange={formik.handleChange}
          />
          <div
            className="w-fit absolute top-[15px] right-[300px]"
            onClick={focusServiceDefaultPrice}
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        {/* serviceStatus */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-2 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
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
            className={`absolute left-4 top-[16px] cursor-pointer ${
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
        {/* API ResourceName */}
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-2 text-[12px] mr-[190px] font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="policyauth"
          >
            <span>API ResourceName</span>
          </label>
          <input
            ref={refServicepolicyauth}
            dir="ltr"
            className={`w-[327px] pl-4 h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
              isOpenType && "border-2 border-primaryColor-1"
            }`}
            name="policyauth"
            value={formik.values.policyauth}
            onChange={formik.handleChange}
          />
          <div
            className="w-fit absolute top-[15px] right-[10px]"
            onClick={focusServicepolicyauth}
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        <div className="flex flex-col relative max-w-[327px] ">
          <label
            className="flex flex-col px-[10px] absolute -top-3 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
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
            className="w-fit absolute top-[15px] right-[300px]"
            onClick={() => showUploadFileModalHandler(formik.values.id)}
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        <div className="flex flex-col relative  ">
          <label
            className=" w-[82px] h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="servicePoint"
          >
            <span className="whitespace-nowrap">امتیاز سرویس</span>
          </label>
          <input
            ref={refServicePoint}
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="servicePoint"
            name="servicePoint"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.servicePoint}
          />
          <div
            className="w-fit absolute top-[15px] right-[300px]"
            onClick={focusServicePoint}
          >
            <Image
              alt="edit"
              src="/assets/images/yellowEdit.svg"
              width={15.61}
              height={16}
            />
          </div>
        </div>
        {/* serviceDescription */}
        <div className="flex flex-col relative z-0 ">
          <label
            className="flex flex-col px-[10px] absolute mr-2 -top-2 text-[12px] font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="serviceDesc"
          >
            <span className="">توضیحات</span>
          </label>
          <textarea
            ref={refServiceDesc}
            className="w-[327px] h-[130px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] px-[30px] "
            id="serviceDesc"
            name="serviceDesc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.serviceDesc}
          />
          <div
            className="w-fit absolute top-[15px] right-[300px] h-[110px]"
            onClick={focusServiceDesc}
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
        <button
          type="submit"
          className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  -mt-[30px] ${
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
          <div className="flex text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[429px] border-2 border-neutralColor-4">
            <div
              onClick={activeHandler}
              value={true}
              className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center border-b border-b-neutralColor-4 "
            >
              <span>فعال</span>
            </div>
            <div
              value={false}
              className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center"
              onClick={nonActiveHandler}
            >
              <span className="mt-2">غیرفعال</span>
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

export default EditServiceMobileForm;

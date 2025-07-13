import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const AddServiceGroupMobileForm = ({
  formik,
  PrivateHandler,
  publicHandler,
  nonActiveHandler,
  activeHandler,
  isOpenType,
  setIsOpenType,
  isOpenStatus,
  setIsOpenStatus,
  isLoading,
}) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[36px] md:hidden"
    >
      {/* serviceGroupName */}
      <div className="flex flex-col relative  ">
        <label
          className=" w-[107px] h-[28px] absolute -top-2 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
          htmlFor="serviceGroupName"
        >
          <span className=""> نام گروه سرویس</span>
        </label>
        <input
          autoComplete="off"
          className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
          id="serviceGroupName"
          name="serviceGroupName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.serviceGroupName}
        />
      </div>
      {/* serviceGroupType */}
      <div className="flex flex-col relative max-w-[327px] ">
        <label
          className="flex flex-col px-[10px] absolute -top-2 text-[12px] mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="isPublic"
        >
          <span className={`${isOpenType && "text-primaryColor-1"}`}>نوع</span>
        </label>
        <div
          onClick={() => setIsOpenType(!isOpenType)}
          className={`w-[327px] h-[50px] lg:w-[396px] lg:h-[48px]  text-[14px] leading-24.18px] text-neutralColor-1 font-medium rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] cursor-pointer ${
            isOpenType && "border-2 border-primaryColor-1"
          }`}
          name="isPublic"
          value={formik.values.isPublic}
          onChange={formik.handleChange}
        >
          <span className="absolute left-4">
            {formik.values.isPublic ? "Public" : "Private"}
          </span>
        </div>
        <div
          className={`absolute right-4 top-[16px] cursor-pointer ${
            isOpenType && "transition-all duration-300 rotate-180"
          }`}
          onClick={() => setIsOpenType(!isOpenType)}
        >
          <Image
            width={15}
            height={15}
            src="/assets/images/down.svg"
            alt="down"
          />
        </div>
      </div>
      {/* serviceGroupStatus */}
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
      {/* serviceGroupDescription */}
      <div className="flex flex-col relative z-0 ">
        <label
          className="flex flex-col px-[10px] absolute mr-2 -top-2 text-[12px] font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="serviceGroupDesc"
        >
          <span className="">توضیحات</span>
        </label>
        <textarea
          className="w-[327px] h-[130px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
          id="serviceGroupDesc"
          name="serviceGroupDesc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.serviceGroupDesc}
        />
      </div>
      {/* submit */}
      <button
        disabled={
          !formik.values.serviceGroupName | !formik.values.serviceGroupDesc
        }
        type="submit"
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  max-w-[327px] md:w-[360px] h-[48px] lg:w-[396px] lg:text-[16px]  lg:-mt-[30px]  mt-[80px] ${
          !formik.values.serviceGroupName | !formik.values.serviceGroupDesc &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        <div className="flex justify-center relative">
          <span> ثبت گروه سرویس</span>
          <div className="absolute left-[125px] top-[7px]">
            {isLoading && (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#FAFAFA"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            )}
          </div>
        </div>
      </button>
      {/* openIsActiveSection */}
      {isOpenStatus && (
        <div className="flex text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2  rounded-[5px] shadow-lg  py-[12px]  absolute top-[418px] border-2 border-neutralColor-4">
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
      {/* openIsPublicSection */}
      {isOpenType && (
        <div className="flex text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2 rounded-[5px] shadow-lg  py-[12px]  absolute top-[332px] border-2 border-neutralColor-4">
          <div
            onClick={publicHandler}
            value={true}
            className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span>Public</span>
          </div>
          <div
            value={false}
            className=" cursor-pointer w-[326px] h-[50px] text-center  flex justify-center items-center"
            onClick={PrivateHandler}
          >
            <span className="mt-2">Private</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddServiceGroupMobileForm;

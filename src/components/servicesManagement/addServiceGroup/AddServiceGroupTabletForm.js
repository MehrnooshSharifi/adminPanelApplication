import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const AddServiceGroupTabletForm = ({
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
      className="md:flex flex-col gap-y-[36px] hidden pr-5 lg:pr-[100px] relative "
    >
      <div className="flex gap-x-[25px] lg:gap-x-[40px]">
        {/* serviceGroupName */}
        <div className="flex flex-col relative">
          <label
            className=" md:w-[117.11px] md:h-[34px] lg:w-[136px] lg:h-[20px] absolute -top-3  [5px] px-[10px] whitespace-nowrap mr-2 bg-naturalColor-2 flex flex-col text-[14px] lg:text-[16px] lg:-top-4 font-bold text-neutralColor-2"
            htmlFor="serviceGroupName"
          >
            <span className=""> نام گروه سرویس</span>
          </label>
          <input
            autoComplete="off"
            className="w-[327px] lg:w-[396px] lg:h-[48px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
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
            className="flex flex-col px-[10px] absolute -top-3 text-[14px] lg:text-[16px] lg:-top-4  mr-2 font-bold text-neutralColor-2 bg-naturalColor-2"
            htmlFor="isPublic"
          >
            <span className={`${isOpenType && "text-primaryColor-1"}`}>
              نوع
            </span>
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
            <span className="absolute left-4 lg:-left-12 mt-[2px]">
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
      </div>
      {/* serviceGroupStatus */}
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
      {/* serviceGroupDescription */}
      <div className="flex flex-col relative z-0 ">
        <label
          className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2"
          htmlFor="serviceGroupDesc"
        >
          <span className="">توضیحات</span>
        </label>
        <textarea
          className="w-[679px] h-[140px] lg:w-[832px] lg:h-[140px]  text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
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
        className={`bg-primaryColor-1  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[680px] h-[48px] lg:w-[157px] lg:h-[44px] lg:text-[16px]  lg:mt-[200px] lg:mr-[680px]  mt-[80px]  ${
          !formik.values.serviceGroupName | !formik.values.serviceGroupDesc &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        <div className="flex justify-center relative">
          <span> ثبت گروه سرویس</span>
          <div className="absolute lg:left-[40px] top-2 block">
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
      {/* openIsPublicSection */}
      {isOpenType && (
        <div className="flex  lg:w-[396px] text-[14px] font-medium text-neutralColor-1 leading-[24.18px] flex-col items-center justify-center bg-naturalColor-2 rounded-[5px] shadow-lg  py-[12px]  absolute top-[53px] left-[23px] lg:left-[48px] lg:top-[52px] border-2 border-neutralColor-4">
          <div
            onClick={publicHandler}
            value={true}
            className=" cursor-pointer w-[326px] lg:w-[396px]  h-[50px] text-center  flex justify-center items-center border-b border-b-neutralColor-4 "
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center mb-[14px]">
              Public
            </span>
          </div>
          <div
            value={false}
            className=" cursor-pointer w-[326px] h-[50px] text-center lg:w-[396px]  flex justify-center items-center pt-[10px]"
            onClick={PrivateHandler}
          >
            <span className=" hover:bg-secondaryColor-5 active:bg-secondaryColor-3 lg:w-[365px] lg:pt-2 lg:h-[48px] lg:rounded-[5px] flex items-center justify-center ">
              Private
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddServiceGroupTabletForm;

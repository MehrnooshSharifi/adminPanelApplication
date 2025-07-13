import { ThreeDots } from "react-loader-spinner";

const AddNewDiscountForm = ({ formik, isLoading, isUpdate }) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-[36px] md:mr-[20px] lg:mr-[10px] "
    >
      <div className="flex flex-col gap-y-[36px]  md:flex-row md:gap-x-[36px]">
        {/* nationalCode */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[52px] h-[28px] whitespace-nowrap absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="nationalCode"
          >
            <span className="">کد ملی</span>
          </label>
          <input
            disabled={isUpdate}
            autoComplete="off"
            className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
            id="nationalCode"
            name="nationalCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nationalCode}
          />
        </div>
        {/* discountAmount */}
        <div className="flex flex-col relative  ">
          <label
            className="w-[82px] z-30 whitespace-nowrap h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2"
            htmlFor="discountAmount"
          >
            <span className="">مبلغ تسهیم</span>
          </label>
          <input
            autoComplete="off"
            className={`w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] ${
              formik.values.discountPercentAmount &&
              "opacity-20 cursor-not-allowed"
            }`}
            id="discountAmount"
            name="discountAmount"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.discountAmount || "0"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-[36px]  md:flex-row md:gap-x-[36px]">
        {/* discountPercentAmount */}
        <div className="flex flex-col relative  ">
          <label
            className=" w-[82px] whitespace-nowrap h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2 z-30"
            htmlFor="discountPercentAmount"
          >
            <span className="">درصد تسهیم</span>
          </label>
          <input
            autoComplete="off"
            className={`w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] ${
              formik.values.discountAmount && "opacity-20 cursor-not-allowed"
            }`}
            id="discountPercentAmount"
            name="discountPercentAmount"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.discountPercentAmount || "0"}
          />
        </div>
        {/* serviceId */}
        <div className="flex flex-col relative  ">
          <label
            className={`h-[28px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[12px] font-bold text-neutralColor-2 ${
              isUpdate ? "w-[92px]" : "w-[62px]"
            }`}
            htmlFor="serviceId"
          >
            <span className="whitespace-nowrap">
              {!isUpdate ? "serviceId" : "شناسه تسهیم"}
            </span>
          </label>
          {!isUpdate ? (
            <input
              className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="serviceId"
              name="serviceId"
              type="text"
              value={formik.values.serviceId}
            />
          ) : (
            <input
              className="w-[327px] h-[50px] text-[14px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              id="uniqueId"
              name="uniqueId"
              type="text"
              value={formik.values.uniqueId}
            />
          )}
        </div>
      </div>
      {/* submit */}
      <button
        disabled={
          !formik.values.nationalCode | !formik.values.discountAmount &&
          !formik.values.discountPercentAmount
        }
        type="submit"
        className={`bg-primaryColor-1 mt-[190px] md:mt-[2px] lg:mt-[290px] lg:mr-[550px]  rounded-[5px] text-center   px-[16px] text-naturalColor-2 text-[14px] font-medium  w-[327px] md:w-[690px] h-[48px] lg:w-[130px] lg:text-[16px]${
          !formik.values.nationalCode | !formik.values.discountAmount &&
          !formik.values.discountPercentAmount &&
          "cursor-not-allowed disabled opacity-30"
        }`}
      >
        <div className="flex justify-center relative">
          <span>{!isUpdate ? "ثبت تسهیم" : "ویرایش تسهیم"}</span>
          <div className="absolute left-[125px]  md:left-[310px] lg:left-[25px]  top-[7px]">
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
    </form>
  );
};

export default AddNewDiscountForm;

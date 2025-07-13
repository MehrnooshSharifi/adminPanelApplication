import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const KeysForm = ({ isLoadingGenerate, isLoadingSearch, formik }) => {
  return (
    <form className="md:flex flex-col gap-y-[36px]">
      <div className="flex  gap-x-[30px] -mr-[10px] relative ">
        <div className="flex gap-x-[20px]">
          <div className="flex whitespace-nowrap items-center text-[14px] md:text-[18px] mr-[10px] lg:mr-0 ">
            <span>فیلتر :</span>
          </div>
          {/* userId */}
          <div className="flex-col relative">
            <label
              className="w-[135px] md:w-[150px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] md:text-[16px] font-bold text-neutralColor-2"
              htmlFor="userId"
            >
              <span className="">کد ملی / شناسه ملی </span>
            </label>
            <input
              autoComplete="off"
              className="w-[270px] md:w-[265px] h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              name="userId"
              type="text"
              {...formik.getFieldProps("userId")}
            />
            <div
              className={`absolute mt-[2px] md:mt-[5px] lg:mt-[10px]  md:text-[10px] lg:text-[12px] -mr-[15px] `}
            >
              {formik.touched.userId && formik.errors.userId && (
                <div className="flex gap-x-2 items-center mr-[15px] ">
                  <Image
                    width={10}
                    height={10}
                    src="/assets/images/notice.svg"
                    className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                  />
                  <span className="text-red-400">{formik.errors.userId}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Generate Button */}
        <button
          disabled={!formik.isValid}
          type="button"
          onClick={() => {
            formik.setFieldValue("action", "generate");
            formik.handleSubmit();
          }}
          className={`bg-primaryColor-1 rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[325px] md:w-[150px]  h-[48px] absolute top-[70px] right-[10px]  md:top-[1px] md:right-[370px] lg:right-[350px] ${
            !formik.isValid && "opacity-30"
          }`}
        >
          <div className="flex justify-center relative">
            <span>ایجاد کلید جدید</span>
            <div className=" left-[125px] md:left-[35px] top-[8px] absolute ">
              {isLoadingGenerate && (
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
        {/* Search Button */}
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("action", "search");
            formik.handleSubmit();
          }}
          className="bg-primaryColor-1  rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[325px] md:w-[150px]  h-[48px] absolute top-[130px] right-[10px] md:top-[1px] md:right-[535px] lg:right-[520px]"
        >
          <div className="flex justify-center relative">
            <span>جستجوی کلید </span>
            <div className=" left-[125px] md:left-[35px] top-[8px] absolute ">
              {isLoadingSearch && (
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
      </div>
    </form>
  );
};

export default KeysForm;

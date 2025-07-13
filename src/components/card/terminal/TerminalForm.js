import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const TerminalForm = ({
  isLoadingGenerate,
  isLoadingSearch,
  formik,
  openFilter,
  setOpenFilter,
}) => {
  return (
    <form className="flex flex-col gap-y-[30px] lg:flex-row -mr-[10px] lg:-mr-[20px]">
      <div className="flex flex-col gap-y-[30px] lg:gap-y-[35px]">
        <div className="flex flex-col gap-y-[30px] md:flex-row md:gap-x-[30px]  ">
          {/* userId */}
          <div className="flex-col relative mr-[10px]">
            <label
              className="w-[105px] md:w-[120px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] md:text-[16px] font-bold text-neutralColor-2"
              htmlFor="userId"
            >
              <span className="">کد/ شناسه ملی </span>
            </label>
            <input
              autoComplete="off"
              className="w-[325px]  h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              name="userId"
              type="text"
              {...formik.getFieldProps("userId")}
            />
            <div
              className={`absolute mt-[2px] md:mt-[3px] lg:mt-[1px]  md:text-[10px] lg:text-[12px] -mr-[15px] `}
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
          {/* TerminalId */}
          <div className="flex-col relative mr-[10px]">
            <label
              className="w-[95px] md:w-[110px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] md:text-[16px] font-bold text-neutralColor-2"
              htmlFor="serialDevices[0].terminalId"
            >
              <span className="">شماره ترمینال</span>
            </label>
            <input
              autoComplete="off"
              className="w-[325px]  h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              name="serialDevices[0].terminalId"
              type="text"
              {...formik.getFieldProps("serialDevices[0].terminalId")}
            />
            <div
              className={`absolute mt-[2px] md:mt-[3px] lg:mt-[1px]  md:text-[10px] lg:text-[12px] -mr-[15px] `}
            >
              {formik.touched.serialDevices?.[0]?.terminalId &&
                formik.errors.serialDevices?.[0]?.terminalId && (
                  <div className="flex gap-x-2 items-center mr-[15px] ">
                    <Image
                      width={10}
                      height={10}
                      src="/assets/images/notice.svg"
                      className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                    />
                    <span className="text-red-400">
                      {formik.errors.serialDevices[0].terminalId}
                    </span>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px] md:flex-row md:gap-x-[30px]">
          {/* TerminalName */}
          <div className="flex-col relative mr-[10px]">
            <label
              className="w-[80px] md:w-[90px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] md:text-[16px] font-bold text-neutralColor-2"
              htmlFor="serialDevices[0].terminalName"
            >
              <span className="">نام ترمینال</span>
            </label>
            <input
              autoComplete="off"
              className="w-[325px]  h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              name="serialDevices[0].terminalName"
              type="text"
              {...formik.getFieldProps("serialDevices[0].terminalName")}
            />
            <div
              className={`absolute mt-[2px] md:mt-[3px] lg:mt-[1px]  md:text-[10px] lg:text-[12px] -mr-[15px] `}
            >
              {formik.touched.serialDevices?.[0]?.terminalName &&
                formik.errors.serialDevices?.[0]?.terminalName && (
                  <div className="flex gap-x-2 items-center mr-[15px] ">
                    <Image
                      width={10}
                      height={10}
                      src="/assets/images/notice.svg"
                      className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                    />
                    <span className="text-red-400">
                      {formik.errors.serialDevices[0].terminalName}
                    </span>
                  </div>
                )}
            </div>
          </div>
          {/* TerminalAdress */}
          <div className="flex-col relative mr-[10px]">
            <label
              className="w-[95px] md:w-[110px] whitespace-nowrap h-[20px] absolute -top-3 [5px] px-[10px] mr-2 bg-naturalColor-2 flex flex-col text-[14px] md:text-[16px] font-bold text-neutralColor-2"
              htmlFor="serialDevices[0].terminalAddress"
            >
              <span className="">آدرس ترمینال</span>
            </label>
            <input
              autoComplete="off"
              className="w-[325px]  h-[48px] text-[16px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px]"
              name="serialDevices[0].terminalAddress"
              type="text"
              {...formik.getFieldProps("serialDevices[0].terminalAddress")}
            />
            <div
              className={`absolute mt-[2px] md:mt-[3px] lg:mt-[1px]  md:text-[10px] lg:text-[12px] -mr-[15px] `}
            >
              {formik.touched.serialDevices?.[0]?.terminalAddress &&
                formik.errors.serialDevices?.[0]?.terminalAddress && (
                  <div className="flex gap-x-2 items-center mr-[15px] ">
                    <Image
                      width={10}
                      height={10}
                      src="/assets/images/notice.svg"
                      className=" w-[12px] h-[10px]  lg:w-[16px] lg:h-[14.62px]"
                    />
                    <span className="text-red-400">
                      {formik.errors.serialDevices[0].terminalAddress}
                    </span>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-y-[10px]  lg:gap-y-[5px] mr-[10px] lg:mt-[15px]">
        {/* Generate Button */}
        <button
          disabled={
            !formik.values.userId || !formik.values.serialDevices[0]?.terminalId
          }
          type="button"
          onClick={() => {
            formik.setFieldValue("action", "generate");
            formik.handleSubmit();
          }}
          className={`bg-primaryColor-1 rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[325px] md:w-[690px] lg:w-[150px]   h-[48px]  ${
            !formik.values.userId || !formik.values.serialDevices[0]?.terminalId
              ? "opacity-30"
              : ""
          }`}
        >
          <div className="flex justify-center relative">
            <span>ایجاد ترمینال</span>
            <div className=" left-[125px] md:left-[310px] lg:left-[35px] top-[8px] absolute ">
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
          className="bg-primaryColor-1  rounded-[5px] text-center whitespace-nowrap  px-[16px] text-naturalColor-2 text-[16px] font-medium  w-[325px] md:w-[690px] lg:w-[150px]  h-[48px] "
        >
          <div className="flex justify-center relative">
            <span>جستجوی ترمینال </span>
            <div className=" left-[125px] md:left-[310px] lg:left-[35px] top-[8px] absolute ">
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
export default TerminalForm;

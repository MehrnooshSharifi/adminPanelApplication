import { IgnoreServiceRequest } from "@/src/server/Service";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";
const RejectNewRequestModal = ({ setShowRejectRequestModal, formik }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const rejectRequestHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await IgnoreServiceRequest(
      formik.values.id,
      formik.values.adminDesc
    );
    const { isSuccess, message } = res;
    if (isSuccess) {
      toast.success(message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      setShowRejectRequestModal(false);
      setIsLoading(false);
      router.push("/adminPanel/userManagement/newRequests");
    } else {
      toast.error(message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
      setIsLoading(false);
    }
  };
  const cancleHandler = () => {
    setShowRejectRequestModal(false);
    formik.values.adminDesc = "";
    formik.values.id = null;
  };
  return (
    <>
      <form className="w-[320px] h-[373px] mr-[10px] md:w-[470px] md:h-[478px] lg:w-[496px] lg:h-[444px] bg-naturalColor-2  absolute top-[200px] rounded-[5px] animate-slideInDown animate-duration-500 z-50 py-[20px] px-[20px] lg:py-[50px]">
        <div className="flex flex-col items-center justify-center gap-y-5">
          {/* signoutImage */}
          <div>
            <BiXCircle className="fill-errorColor-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
          </div>
          {/* question */}
          <div className="text-[14px] md:text-[16px] lg:[18px] font-bold  leading-[24.18px] whitespace-nowrap text-neutralColor-1 mb-[20px]">
            <span>آیا میخواهید این درخواست را رد کنید؟</span>
          </div>
          <div className="flex flex-col relative z-0 ">
            <label
              className="flex flex-col px-[10px] absolute mr-2 -top-3 text-[14px] lg:text-[16px] lg:-top-4   font-bold text-neutralColor-2 bg-naturalColor-2"
              htmlFor="adminDesc"
            >
              <span className="">توضیحات</span>
            </label>
            <textarea
              placeholder="توضیحات لازم جهت رد درخواست را در اینجا ذکر بفرمایید..."
              className="w-[280px] h-[96.48px] md:w-[396px] lg:h-[125px]   text-[10px] md:text-[12px] text-neutralColor-1 rounded-[5px] border border-neutralColor-3 py-[12px] pr-[16px] "
              id="adminDesc"
              name="adminDesc"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.adminDesc}
            />
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-y-[10px] lg:flex-row lg:gap-x-[16px]">
            <button
              disabled={!formik.values.adminDesc}
              onClick={rejectRequestHandler}
              type="button"
              className={`w-[280px] h-[37px] md:w-[396px] md:h-[48px] lg:w-[190px] lg:h-[44px]  flex items-center justify-center rounded-[5px] py-[8px] px-[16px] text-[16px] leading-[27.64px]  font-bold bg-primaryColor-1 text-naturalColor-2 ${
                !formik.values.adminDesc &&
                "cursor-not-allowed disabled opacity-30"
              }`}
            >
              <div className="flex justify-center relative">
                <span> رد درخواست</span>
                <div className=" w-[30px] absolute top-[7px] md:top-[10px] md:w-[40px] lg:left-[15px] lg:top-[8px] md:block">
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
            <button
              onClick={cancleHandler}
              className="w-[280px] h-[37px] md:w-[396px] md:h-[48px] lg:w-[190px] lg:h-[44px]  flex items-center justify-center rounded-[5px] py-[8px] px-[16px] text-[16px] leading-[27.64px]  font-bold bg-naturalColor-2 text-primaryColor-1 border border-primaryColor-1"
            >
              انصراف
            </button>
          </div>
        </div>
      </form>
      <div
        onClick={() => setShowRejectRequestModal(false)}
        className="z-40 fixed top-0 right-0 w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
      />
    </>
  );
};

export default RejectNewRequestModal;

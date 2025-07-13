import {
  DecreaseCustomerCredit,
  DeleteDiscount,
  IncreaseCustomerCredit,
} from "@/src/server/Service";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";

const DeleteBeneficiariModal = ({ setIsDelete, selectedUniqueId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { serviceGroupId, beneficiariesId } = router.query;
  const acceptRequestHandler = async (e) => {
    e.preventDefault();
    const res = await DeleteDiscount(selectedUniqueId);
    setIsDelete(false);
    router.push(
      `/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${beneficiariesId}`
    );
  };
  return (
    <>
      <form className="w-[320px] h-[270px] md:w-[496px] md:h-[300px] lg:w-[496px] bg-naturalColor-2 mr-[10px]  absolute  top-[200px] rounded-[5px] animate-slideInDown animate-duration-500 z-50 py-[20px] px-[20px] lg:py-[50px]">
        <div className="flex flex-col items-center justify-center gap-y-5">
          {/* signoutImage */}
          <div>
            <AiOutlineCloseCircle
              Circle
              className="fill-errorColor-1 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
            />
          </div>
          {/* question */}
          <div className="text-[12px] md:text-[16px] lg:[18px] font-bold  leading-[24.18px] whitespace-nowrap text-neutralColor-1 mb-[20px] flex flex-col gap-y-[10px]">
            <span>آیا به حذف تسهیم اطمینان دارید ؟</span>
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-y-[10px] lg:flex-row lg:gap-x-[16px]">
            <button
              onClick={acceptRequestHandler}
              type="button"
              className="w-[280px] h-[37px] md:w-[396px] md:h-[48px] lg:w-[190px] lg:h-[44px]  flex items-center justify-center rounded-[5px] py-[8px] px-[16px] text-[16px] leading-[27.64px]  font-bold bg-primaryColor-1 text-naturalColor-2"
            >
              <div className="flex justify-center relative">
                <span>تایید</span>
                <div className=" w-[30px] absolute top-[7px] md:top-[10px] md:w-[40px]  lg:top-[8px] ">
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
              onClick={() => setIsDelete(false)}
              className="w-[280px] h-[37px] md:w-[396px] md:h-[48px] lg:w-[190px] lg:h-[44px]  flex items-center justify-center rounded-[5px] py-[8px] px-[16px] text-[16px] leading-[27.64px]  font-bold bg-naturalColor-2 text-primaryColor-1 border border-primaryColor-1"
            >
              <span className="mt-[2px]"> انصراف</span>
            </button>
          </div>
        </div>
      </form>
      <div
        onClick={() => setIsDelete(false)}
        className="z-40 fixed top-0 right-0 w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
      />
    </>
  );
};

export default DeleteBeneficiariModal;

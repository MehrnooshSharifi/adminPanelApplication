import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const DesktopSignout = ({
  showSignoutModal,
  setShowSignoutModal,
  closeModalHandler,
}) => {
  const router = useRouter();
  const exitHandler = () => {
    Cookies.remove("nationalCode");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    Cookies.remove("phoneNumber");
    Cookies.remove("email");
    Cookies.remove("Token");
    setShowSignoutModal(false);
    router.push("/");
  };
  return (
    <>
      <div className="w-[458px] h-[275px] bg-naturalColor-2 absolute  top-[200px] rounded-[5px] animate-slideInDown animate-duration-500 z-50 py-[50px] px-[53px]">
        <div className="flex flex-col items-center justify-center gap-y-5">
          {/* signoutImage */}
          <div>
            <Image
              src="/assets/images/blackSignOut.svg"
              alt="signOut"
              width={50}
              height={50}
            />
          </div>
          {/* question */}
          <div className="text-[18px] font-bold  leading-[31.09px] whitespace-nowrap">
            <span>آیا میخواهید از حساب کاربری خود خارج شوید؟</span>
          </div>
          {/* buttons */}
          <div className="flex gap-x-4">
            <button
              onClick={exitHandler}
              className="w-[168px] h-[44px] rounded-[5px] py-[8px] px-[16px] text-[16px] leading-[27.64px]  font-bold bg-primaryColor-1 text-naturalColor-2"
            >
              تایید
            </button>
            <button
              onClick={() => setShowSignoutModal(false)}
              className="w-[168px] h-[44px] rounded-[5px] py-[8px] px-[16px] text-[16px] leading-[27.64px]  font-bold bg-naturalColor-2 text-primaryColor-1 border border-primaryColor-1"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
      {showSignoutModal && (
        <div className="hidden lg:flex justify-between">
          <div
            onClick={closeModalHandler}
            className="z-40 fixed top-0  w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
          />
        </div>
      )}
    </>
  );
};

export default DesktopSignout;

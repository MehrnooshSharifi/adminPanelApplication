import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { RiCoinsFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa6";
import { FaUsersSlash } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
const MobileAndTabletMenu = ({ isOpen, setIsOpen, links }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userIsSelected, setUserIsSelected] = useState(false);
  const [financialIsSelected, setFinancialIsSelected] = useState(false);
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [terminalIsOpen, setTerminalIsOpen] = useState(false);

  const router = useRouter();
  const exitHandler = () => {
    removeCookie("nationalCode");
    removeCookie("firstName");
    removeCookie("lastName");
    removeCookie("phoneNumber");
    removeCookie("email");
    removeCookie("Token");
    router.push("/");
  };
  return (
    <div>
      <div
        className={`z-50 fixed top-0  lg:hidden ${
          isOpen
            ? "animate-slideInRight animate-duration-500"
            : "animate-slideOutRight animate-duration-500"
        } `}
      >
        <div
          className={` flex flex-col overflow-x-hidden items-start  w-[323px] h-[670px] overflow-y-scroll bg-gradient-to-b from-gradient-1 to-gradient-2 shadow-2xl rounded-tl-[50px] rounded-bl-[50px] pt-7 pr-4 md:w-[375px] md:h-screen `}
        >
          {/*Close Icon */}
          <MdOutlineClose
            className="w-[30.85px] h-[30.85px] mb-[34px] cursor-pointer fill-naturalColor-2"
            onClick={() => setIsOpen(false)}
          />
          {/* UserInfo */}
          <div className="flex items-center mb-[22px]">
            {/* UserIcon */}
            <div
              className={
                "bg-neutralColor-5 rounded-full w-[67px] h-[67px] flex justify-center items-center ml-[25px]"
              }
            >
              <BiSolidUser className="fill-primaryColor-1 w-[32px] h-[32px]" />
            </div>
            {/* UserName */}
            {cookies.nationalCode && (
              <div className="flex flex-col items-center justify-center gap-y-[20px]">
                <div className="flex gap-x-[75px]  md:gap-x-[65px] items-center">
                  <div className="flex text-naturalColor-2 text-[14px] md:text-[16px] font-[15px] justify-between gap-x-3">
                    <span> {cookies.firstName}</span>
                    <span> {cookies.lastName}</span>
                  </div>
                  <Link
                    className="w-[48px] h-[48px] flex items-center justify-center "
                    href="/adminPanel/adminUser/changePassword"
                  >
                    <Image
                      src="/assets/images/whiteEdit.svg"
                      alt="editUserInfo"
                      width={20}
                      height={21}
                    />
                  </Link>
                </div>
                <span className="text-neutralColor-5 -mr-[120px]">
                  {cookies.appId == "46801160-75c5-4486-a7c5-09ddfe0e0375"
                    ? "سرپرست کل"
                    : cookies.appId == "284c7daf-53e2-49d5-8978-2814d714e3c3"
                    ? "مالی"
                    : cookies.appId == "4de31591-d70b-4a01-affe-e153e6c58390"
                    ? "پشتیبانی"
                    : ""}
                </span>
              </div>
            )}
          </div>
          <hr className="w-[291px] h-0 bg-neutralColor-4 mb-5" />
          {/* navSection */}
          {cookies.appId == "46801160-75c5-4486-a7c5-09ddfe0e0375" ? (
            <nav className="mx-[5px] overflow-y-auto ">
              <ul className="flex flex-col text-naturalColor-2 gap-y-[5px] items-start text-[14px] font-[15px] md:text-[16px]">
                {/* userManagement */}
                <div
                  onClick={() => setUserIsSelected(!userIsSelected)}
                  className={`flex flex-col justify-center w-full  mb-[15px]`}
                >
                  <div className=" flex justify-between items-center md:gap-x-[190px]">
                    <div className={`flex items-center gap-x-[10px]`}>
                      <Image
                        width={10}
                        height={10}
                        src="/assets/images/userManagement.svg"
                        alt="userManagement"
                        className="w-[24px] h-[24px]"
                      />

                      <li>
                        <Link href="">
                          <span className="whitespace-nowrap">
                            مدیریت کاربران
                          </span>
                        </Link>
                      </li>
                    </div>
                    <div
                      className={`p-2  ${
                        !cookies.codeMelli && "mr-[140px] md:mr-0"
                      }`}
                    >
                      <BsChevronDown
                        className={`w-6 h-6 cursor-pointer fill-white ml-[25px] md:ml-6 ${
                          userIsSelected &&
                          "transition-all rotate-180 duration-500"
                        }`}
                      />
                    </div>
                  </div>
                  {/* userDetails */}
                  {userIsSelected && (
                    <ul className="text-[12px] bg-primaryColor-6 mb-[8px] rounded-[10px] pr-4 ml-[40px] md:ml-[34px] md:text-[14px] ">
                      <li className="  w-[250px] h-[58px] flex items-center mb-3">
                        <Link
                          href="/adminPanel/userManagement/showUsers"
                          className=""
                        >
                          <span> نمایش کاربرها</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/userManagement/newRequests">
                          <span>درخواست های جدید</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                {/* Supervisors */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <FaUserCog className="w-6 h-4 " />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/supervisorUsers">
                      <span>مدیریت سرپرستی</span>
                    </Link>
                  </li>
                </div>
                {/* BlackList */}
                {/* <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <FaUsersSlash className="w-6 h-4 " />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/blackList">
                      <span>لیست سیاه</span>
                    </Link>
                  </li>
                </div> */}
                {/* Card */}
                <div
                  className={`flex flex-col justify-center w-full  mb-[15px]`}
                >
                  <div
                    className=" flex justify-between items-center md:gap-x-[190px]"
                    onClick={() => setCardIsSelected(!cardIsSelected)}
                  >
                    <div className={`flex items-center gap-x-[10px]`}>
                      <FaIdCard className="w-5 h-5" />
                      <li>
                        <Link href="">
                          <span className="whitespace-nowrap">کارت</span>
                        </Link>
                      </li>
                    </div>
                    <div
                      className={`p-2  ${
                        !cookies.codeMelli && "mr-[140px] md:mr-0"
                      }`}
                    >
                      <BsChevronDown
                        className={`w-6 h-6 cursor-pointer fill-white ml-[25px] md:ml-6 ${
                          cardIsSelected &&
                          "transition-all rotate-180 duration-500"
                        }`}
                      />
                    </div>
                  </div>
                  {cardIsSelected && (
                    <ul className="text-[12px] w-[290px] md:w-[330px] bg-primaryColor-6 mb-[8px] rounded-[10px] pr-4  md:ml-[34px] md:text-[14px] ">
                      {/* <li className="  w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/card/NewKeys" className="">
                          <span>کلیدها</span>
                        </Link>
                      </li> */}
                      <li
                        onClick={() => setTerminalIsOpen(!terminalIsOpen)}
                        className="  w-[250px] h-[58px] flex items-center"
                      >
                        <Link href="/adminPanel/card/NewKeys" className="">
                          <span className="whitespace-nowrap">ترمینال ها</span>
                        </Link>
                        <div
                          className={`p-2  ${
                            !cookies.codeMelli && "mr-[185px] md:mr-[210px]"
                          }`}
                        >
                          <BiSolidChevronDown
                            className={`w-6 h-6 cursor-pointer fill-white ml-[25px]${
                              terminalIsOpen &&
                              "transition-all rotate-180 duration-500"
                            }`}
                          />
                        </div>
                      </li>
                      {terminalIsOpen && (
                        <ul className="text-[12px] bg-primaryColor-7 mb-[20px] rounded-[10px] pr-4 mx-[10px] -mr-[5px] md:-mr-[1px] md:w-[300px] md:text-[14px] ">
                          <li className="  w-[250px] h-[58px] flex items-center">
                            <Link href="/adminPanel/card/terminal" className="">
                              <span>ترمینال</span>
                            </Link>
                          </li>
                          <li className=" w-[250px] h-[58px] flex items-center">
                            <Link href="/adminPanel/card/terminal/MOHReport">
                              <span>گزارشات MOH </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </ul>
                  )}
                </div>
                {/* LoginReposrt */}
                {/* <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/loginReports.svg"
                    alt="loginReports"
                    className="-ml-[5px]"
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/loginReports">
                      <span>گزارشات لاگین</span>
                    </Link>
                  </li>
                </div> */}
                {/* servicesManagement */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/servicesManagement.svg"
                    alt="servicesManagement"
                    className="-ml-[5px]"
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/serviceManagement">
                      <span>مدیریت سرویس ها</span>
                    </Link>
                  </li>
                </div>
                {/* Tickets */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/tickets.svg"
                    alt="whyRamzNegarSeif"
                    className="-ml-[5px]"
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/tickets">
                      <span>تیکت ها</span>
                    </Link>
                  </li>
                </div>
                {/* Financial */}
                <div
                  onClick={() => setFinancialIsSelected(!financialIsSelected)}
                  className={`flex flex-col justify-center w-full  mb-[15px]`}
                >
                  <div className=" flex justify-between items-center md:gap-x-[190px]">
                    <div className={`flex items-center gap-x-[10px]`}>
                      <RiCoinsFill className="w-6 h-6" />
                      <li>
                        <Link href="">
                          <span className="whitespace-nowrap">مالی</span>
                        </Link>
                      </li>
                    </div>
                    <div
                      className={`p-2  ${
                        !cookies.codeMelli && "mr-[140px] md:mr-0"
                      }`}
                    >
                      <BsChevronDown
                        className={`w-6 h-6 cursor-pointer fill-white ml-[25px] md:ml-6 ${
                          financialIsSelected &&
                          "transition-all rotate-180 duration-500"
                        }`}
                      />
                    </div>
                  </div>
                  {/* ّFinancialDetails */}
                  {financialIsSelected && (
                    <ul className="text-[12px] bg-primaryColor-6 mb-[8px] rounded-[10px] pr-4 ml-[40px] md:ml-[34px] md:text-[14px] ">
                      <li className="  w-[250px] h-[58px] flex items-center">
                        <Link
                          href="/adminPanel/financial/financialReports"
                          className=""
                        >
                          <span>گزارشات مالی</span>
                        </Link>
                      </li>
                      <li className="  w-[250px] h-[58px] flex items-center">
                        <Link
                          href="/adminPanel/financial/accumulativeFinancialReports"
                          className=""
                        >
                          <span>گزارش مالی تجمیعی</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/increaseCustomerCredit">
                          <span>افزایش اعتبار</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/decreaseCustomerCredit">
                          <span>کاهش اعتبار</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/commission">
                          <span>پورسانت و تخفیف</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/commission/commissionReport">
                          <span>گزارش پورسانت و تخفیف</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                {/* callServices */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    src="/assets/images/callServices.svg"
                    alt="callServices"
                    className=""
                    width={20}
                    height={20}
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/callServices">
                      <span>فراخوانی سرویس ها</span>
                    </Link>
                  </li>
                </div>
                {cookies.nationalCode && (
                  <>
                    <hr className="w-[291px] h-0 bg-neutralColor-4 mb-5 -mr-[16px]" />
                    <div className="flex pb-[20px]" onClick={exitHandler}>
                      <Image
                        width={30}
                        height={30}
                        src="/assets/images/Exit.svg"
                        alt="whyRamzNegarSeif"
                        className="ml-[25px]"
                      />
                      <div>خروج از حساب کاربری</div>
                    </div>
                  </>
                )}
              </ul>
            </nav>
          ) : cookies.appId == "284c7daf-53e2-49d5-8978-2814d714e3c3" ? (
            <nav className="mx-[5px] overflow-y-auto ">
              <ul className="flex flex-col text-naturalColor-2 gap-y-[5px] items-start text-[14px] font-[15px] md:text-[16px]">
                {/* Tickets */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/tickets.svg"
                    alt="whyRamzNegarSeif"
                    className="-ml-[5px]"
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/tickets">
                      <span>تیکت ها</span>
                    </Link>
                  </li>
                </div>
                {/* Financial */}
                <div
                  onClick={() => setFinancialIsSelected(!financialIsSelected)}
                  className={`flex flex-col justify-center w-full  mb-[15px]`}
                >
                  <div className=" flex justify-between items-center md:gap-x-[190px]">
                    <div className={`flex items-center gap-x-[10px]`}>
                      <RiCoinsFill className="w-6 h-6" />
                      <li>
                        <Link href="">
                          <span className="whitespace-nowrap">مالی</span>
                        </Link>
                      </li>
                    </div>
                    <div
                      className={`p-2  ${
                        !cookies.codeMelli && "mr-[140px] md:mr-0"
                      }`}
                    >
                      <BsChevronDown
                        className={`w-6 h-6 cursor-pointer fill-white ml-[25px] md:ml-6 ${
                          financialIsSelected &&
                          "transition-all rotate-180 duration-500"
                        }`}
                      />
                    </div>
                  </div>
                  {/* ّFinancialDetails */}
                  {financialIsSelected && (
                    <ul className="text-[12px] bg-primaryColor-6 mb-[8px] rounded-[10px] pr-4 ml-[40px] md:ml-[34px] md:text-[14px] ">
                      <li className="  w-[250px] h-[58px] flex items-center">
                        <Link
                          href="/adminPanel/financial/financialReports"
                          className=""
                        >
                          <span>گزارشات مالی</span>
                        </Link>
                      </li>
                      <li className="  w-[250px] h-[58px] flex items-center">
                        <Link
                          href="/adminPanel/financial/accumulativeFinancialReports"
                          className=""
                        >
                          <span>گزارش مالی تجمیعی</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/increaseCustomerCredit">
                          <span>افزایش اعتبار</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/decreaseCustomerCredit">
                          <span>کاهش اعتبار</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/commission">
                          <span>پورسانت و تخفیف</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/financial/commission/commissionReport">
                          <span>گزارش پورسانت و تخفیف</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                {cookies.nationalCode && (
                  <>
                    <hr className="w-[291px] h-0 bg-neutralColor-4 mb-5 -mr-[16px]" />
                    <div className="flex pb-[20px]" onClick={exitHandler}>
                      <Image
                        width={30}
                        height={30}
                        src="/assets/images/Exit.svg"
                        alt="whyRamzNegarSeif"
                        className="ml-[25px]"
                      />
                      <div>خروج از حساب کاربری</div>
                    </div>
                  </>
                )}
              </ul>
            </nav>
          ) : cookies.appId == "4de31591-d70b-4a01-affe-e153e6c58390" ? (
            <nav className="mx-[5px] overflow-y-auto ">
              <ul className="flex flex-col text-naturalColor-2 gap-y-[5px] items-start text-[14px] font-[15px] md:text-[16px]">
                {/* userManagement */}
                <div
                  onClick={() => setUserIsSelected(!userIsSelected)}
                  className={`flex flex-col justify-center w-full  mb-[15px]`}
                >
                  <div className=" flex justify-between items-center md:gap-x-[190px]">
                    <div className={`flex items-center gap-x-[10px]`}>
                      <Image
                        width={30}
                        height={30}
                        src="/assets/images/userManagement.svg"
                        alt="userManagement"
                        className="w-[24px] h-[24px]"
                      />

                      <li>
                        <Link href="">
                          <span className="whitespace-nowrap">
                            مدیریت کاربران
                          </span>
                        </Link>
                      </li>
                    </div>
                    <div
                      className={`p-2  ${
                        !cookies.codeMelli && "mr-[140px] md:mr-0"
                      }`}
                    >
                      <BsChevronDown
                        className={`w-6 h-6 cursor-pointer fill-white ml-[25px] md:ml-6 ${
                          userIsSelected &&
                          "transition-all rotate-180 duration-500"
                        }`}
                      />
                    </div>
                  </div>
                  {/* userDetails */}
                  {userIsSelected && (
                    <ul className="text-[12px] bg-primaryColor-6 mb-[8px] rounded-[10px] pr-4 ml-[40px] md:ml-[34px] md:text-[14px] ">
                      <li className="  w-[250px] h-[58px] flex items-center mb-3">
                        <Link
                          href="/adminPanel/userManagement/showUsers"
                          className=""
                        >
                          <span> نمایش کاربرها</span>
                        </Link>
                      </li>
                      <li className=" w-[250px] h-[58px] flex items-center">
                        <Link href="/adminPanel/userManagement/newRequests">
                          <span>درخواست های جدید</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                {/* BlackList */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <FaUsersSlash className="w-6 h-4 " />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/blackList">
                      <span>لیست سیاه</span>
                    </Link>
                  </li>
                </div>
                {/* Tickets */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/tickets.svg"
                    alt="whyRamzNegarSeif"
                    className="-ml-[5px]"
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/tickets">
                      <span>تیکت ها</span>
                    </Link>
                  </li>
                </div>
                {/* callServices */}
                <div className="flex items-center mb-[16px] gap-x-[10px]">
                  <Image
                    src="/assets/images/callServices.svg"
                    alt="callServices"
                    className=""
                    width={30}
                    height={30}
                  />
                  <li className="py-[10px] w-[291px]">
                    <Link href="/adminPanel/callServices">
                      <span>فراخوانی سرویس ها</span>
                    </Link>
                  </li>
                </div>
                {cookies.nationalCode && (
                  <>
                    <hr className="w-[291px] h-0 bg-neutralColor-4 mb-5 -mr-[16px]" />
                    <div className="flex pb-[20px]" onClick={exitHandler}>
                      <Image
                        width={30}
                        height={30}
                        src="/assets/images/Exit.svg"
                        alt="whyRamzNegarSeif"
                        className="ml-[25px]"
                      />
                      <div>خروج از حساب کاربری</div>
                    </div>
                  </>
                )}
              </ul>
            </nav>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Backdrop */}
      <div
        className={`z-40 ${
          isOpen &&
          " fixed top-0  w-screen h-screen  backdrop-brightness-50 backdrop-contrast-100  backdrop-opacity-80 lg:backdrop-opacity-0 "
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

export default MobileAndTabletMenu;

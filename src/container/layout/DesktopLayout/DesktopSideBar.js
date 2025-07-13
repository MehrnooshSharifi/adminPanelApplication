import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useCookies } from "react-cookie";
import { RiCoinsFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa6";
import { FaUsersSlash } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
const DesktopSideBar = ({
  showPassModal,
  setShowPassModal,
  showSignoutModal,
  setShowSignoutModal,
}) => {
  const [cookies] = useCookies();
  const [isSelected, setIsSelected] = useState(false);
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [financialIsOpen, setFinancialIsOpen] = useState(false);
  const [terminalIsOpen, setTerminalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("4");
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const adminAppId = cookies.appId;
  return (
    <div>
      <div className="hidden relative lg:flex justify-center pt-[47px] text-white bg-gradient-to-b from-gradient-1 to-gradient-2 min-w-[270px] h-[1024px] ">
        {isSelected && cookies.nationalCode && (
          <div className="w-[230px] h-[150px] flex flex-col gap-y-[10px] bg-naturalColor-2 absolute top-[150px] rounded-[5px] py-[20px] px-[10px] z-10">
            <div
              onClick={() => setShowPassModal(!showPassModal)}
              className="flex w-[210px] h-[48px] items-center gap-x-[8px] pr-2 hover:bg-secondaryColor-5 active:bg-secondaryColor-3 cursor-pointer rounded-[5px]"
            >
              <Image
                src="/assets/images/changePass.svg"
                width={16}
                height={16}
                alt="changePass"
              />
              <span className="text-neutralColor-1 text-[12px] font-normal mt-[7px]  leading-[27.64px] whitespace-nowrap">
                تغییر رمز عبور
              </span>
            </div>
            <hr className="w-[210px]" />
            <div
              onClick={() => setShowSignoutModal(!showSignoutModal)}
              className="flex w-[210px] h-[48px] items-center gap-x-[8px] pr-2 hover:bg-secondaryColor-5 active:bg-secondaryColor-3 cursor-pointer rounded-[5px]"
            >
              <Image
                src="/assets/images/blueExit.svg"
                width={16}
                height={16}
                alt="Exit"
              />
              <span className="text-neutralColor-1 text-[12px] font-normal  leading-[27.64px] whitespace-nowrap">
                خروج از حساب کاربری
              </span>
            </div>
          </div>
        )}
        {/* SideBarSection */}
        <div className="flex flex-col z-0 ">
          {/* userSection */}
          <div className="flex flex-col items-center gap-y-[10px] mb-[68px]">
            {/* simbol user */}
            <div className="w-[67px] h-[67px] rounded-full bg-naturalColor-2 flex items-center justify-center">
              <BiSolidUser className="fill-primaryColor-1 w-[28px] h-[28px]" />
            </div>
            {/* userInfo */}
            {cookies.nationalCode && (
              <div className="flex flex-col items-center -mb-[20px] gap-y-[20px]">
                <div
                  className="flex cursor-pointer gap-x-[5px] mr-3"
                  onClick={() => setIsSelected(!isSelected)}
                >
                  <span className="text-[12px] font-medium leading-[25.91px]">
                    {cookies.firstName}
                  </span>
                  <span className="text-[12px] font-medium leading-[25.91px]">
                    {cookies.lastName}
                  </span>
                  <BsChevronDown
                    className={`w-4 h-4 cursor-pointer mt-1 ${
                      isSelected && "transition-all rotate-180 duration-500"
                    }`}
                  />
                </div>
                <span>
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
          {/* MenuLists */}
          {cookies.appId == "46801160-75c5-4486-a7c5-09ddfe0e0375" ? (
            <div className="flex flex-col  lg:h-[700px] overflow-y-scroll">
              {/* usersManagement */}
              <div
                className={`w-[270px] items-center cursor-pointer ${
                  !userIsOpen && "hover:bg-primaryColor-6"
                }`}
              >
                <div
                  onClick={() => setUserIsOpen(!userIsOpen)}
                  className={`flex w-[210px] items-center justify-between h-[76px]  border-t border-neutralColor-3 mx-[30px]`}
                >
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/userManagement.svg"
                      alt="usersManagement"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">مدیریت کاربران</span>
                  </div>
                  <BsChevronDown
                    className={`w-4 h-4 ${
                      userIsOpen && "transition-all duration-300 rotate-180"
                    }`}
                  />
                </div>
                {userIsOpen && (
                  <div className="flex flex-col">
                    <Link
                      onClick={() => setSelectedItem("1")}
                      href="/adminPanel/userManagement/showUsers"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "1" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        نمایش کاربرها
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("2")}
                      href="/adminPanel/userManagement/newRequests"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "2" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        درخواست های جدید
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              {/* Supervisors */}
              <Link
                onClick={() => setSelectedItem("13")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                  selectedItem === "13" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/supervisorUsers"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <FaUserCog className="w-6 h-4 " />
                    <span className="text-[12px]">مدیریت سرپرستی</span>
                  </div>
                </div>
              </Link>
              {/* BlackList */}
              {/* <Link
                onClick={() => setSelectedItem("11")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                  selectedItem === "11" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/blackList"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <FaUsersSlash className="w-6 h-4 " />
                    <span className="text-[12px]">لیست سیاه</span>
                  </div>
                </div>
              </Link> */}
              {/* Card */}
              <div
                className={`w-[270px] items-center cursor-pointer ${
                  !cardIsSelected && "hover:bg-primaryColor-6"
                }`}
              >
                <div
                  onClick={() => setCardIsSelected(!cardIsSelected)}
                  className={`flex w-[210px] items-center justify-between h-[76px]  border-t border-neutralColor-3 mx-[30px]`}
                >
                  <div className="flex gap-x-[8px] items-center">
                    <FaIdCard className="w-4 h-4" />
                    <span className="text-[12px]">کارت</span>
                  </div>
                  <BsChevronDown
                    className={`w-4 h-4 ${
                      cardIsSelected && "transition-all duration-300 rotate-180"
                    }`}
                  />
                </div>
                {cardIsSelected && (
                  <div className="flex flex-col">
                    {/* <Link
                      onClick={() => setSelectedItem("9")}
                      href="/adminPanel/card/NewKeys"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "9" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        کلیدها
                      </span>
                    </Link> */}
                    <div
                      onClick={() => setTerminalIsOpen(!terminalIsOpen)}
                      className={`flex max-w-[270px] h-[48px] items-center justify-between  mx-[30px]`}
                    >
                      <div className="flex gap-x-[8px] items-center">
                        <span className="text-[10px]">ترمینال ها</span>
                      </div>
                      <BiSolidChevronDown
                        className={`w-4 h-4 ${
                          terminalIsOpen &&
                          "transition-all duration-300 rotate-180"
                        }`}
                      />
                    </div>
                    {terminalIsOpen && (
                      <div className="flex flex-col">
                        <Link
                          onClick={() => setSelectedItem("14")}
                          href="/adminPanel/card/terminal"
                          className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                            selectedItem === "14" ? "bg-primaryColor-6" : ""
                          }`}
                        >
                          <span className="py-4 px-[30px]  text-[10px] mr-[20px]">
                            ترمینال
                          </span>
                        </Link>
                        <Link
                          onClick={() => setSelectedItem("16")}
                          href="/adminPanel/card/terminal/MOHReport"
                          className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                            selectedItem === "16" ? "bg-primaryColor-6" : ""
                          }`}
                        >
                          <span className="py-4 px-[30px]  text-[10px] mr-[20px]">
                            گزارشات MOH
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* LoginReports */}
              {/* <Link
                onClick={() => setSelectedItem("3")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                  selectedItem === "3" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/loginReports"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/loginReports.svg"
                      alt="loginReports"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">گزارشات لاگین</span>
                  </div>
                </div>
              </Link> */}
              {/* servicesManagement */}
              <Link
                onClick={() => setSelectedItem("4")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                  selectedItem === "4" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/serviceManagement"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/servicesManagement.svg"
                      alt="servicesManagement"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">مدیریت سرویس ها</span>
                  </div>
                </div>
              </Link>
              {/* Tickets */}
              <Link
                onClick={() => setSelectedItem("5")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                  selectedItem === "5" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/tickets"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/tickets.svg"
                      alt="tickets"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">تیکت ها</span>
                  </div>
                </div>
              </Link>
              {/* Financial */}
              <div
                className={`w-[270px] items-center cursor-pointer ${
                  !financialIsOpen && "hover:bg-primaryColor-6"
                }`}
              >
                <div
                  onClick={() => setFinancialIsOpen(!financialIsOpen)}
                  className={`flex w-[210px] items-center justify-between h-[76px]  border-t border-neutralColor-3 mx-[30px]`}
                >
                  <div className="flex gap-x-[8px] items-center">
                    <RiCoinsFill className="w-6 h-6" />
                    <span className="text-[12px]">مالی</span>
                  </div>

                  <BsChevronDown
                    className={`w-4 h-4 ${
                      financialIsOpen &&
                      "transition-all duration-300 rotate-180"
                    }`}
                  />
                </div>
                {financialIsOpen && (
                  <div className="flex flex-col">
                    <Link
                      onClick={() => setSelectedItem("6")}
                      href="/adminPanel/financial/financialReports"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "6" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        گزارشات مالی
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("7")}
                      href="/adminPanel/financial/accumulativeFinancialReports"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "7" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        گزارش مالی تجمیعی
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("8")}
                      href="/adminPanel/financial/increaseCustomerCredit"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "8" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        افزایش اعتبار
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("9")}
                      href="/adminPanel/financial/decreaseCustomerCredit"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "9" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        کاهش اعتبار
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("15")}
                      href="/adminPanel/financial/commission"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "15" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        پورسانت و تخفیف
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("16")}
                      href="/adminPanel/financial/commission/commissionReport"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "16" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        گزارش پورسانت و تخفیف
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              {/* callServices */}
              <Link
                onClick={() => setSelectedItem("10")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                  selectedItem === "10" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/callServices"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div
                    className={`flex gap-x-[8px]  items-center ${
                      userIsOpen && "mt-[2px]"
                    }`}
                  >
                    <Image
                      src="/assets/images/callServices.svg"
                      alt="callServices"
                      width={16}
                      height={16}
                    />
                    <span className="text-[12px]">فراخوانی سرویس ها</span>
                  </div>
                </div>
              </Link>
            </div>
          ) : cookies.appId == "284c7daf-53e2-49d5-8978-2814d714e3c3" ? (
            <div className="flex flex-col  lg:h-[700px] overflow-y-scroll">
              {/* Tickets */}
              <Link
                onClick={() => setSelectedItem("5")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                  selectedItem === "5" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/tickets"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/tickets.svg"
                      alt="tickets"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">تیکت ها</span>
                  </div>
                </div>
              </Link>
              {/* Financial */}
              <div
                className={`w-[270px] items-center cursor-pointer ${
                  !financialIsOpen && "hover:bg-primaryColor-6"
                }`}
              >
                <div
                  onClick={() => setFinancialIsOpen(!financialIsOpen)}
                  className={`flex w-[210px] items-center justify-between h-[76px]  border-t border-neutralColor-3 mx-[30px]`}
                >
                  <div className="flex gap-x-[8px] items-center">
                    <RiCoinsFill className="w-6 h-6" />
                    <span className="text-[12px]">مالی</span>
                  </div>
                  {!financialIsOpen ? (
                    <BsChevronDown className="w-4 h-4" />
                  ) : (
                    <BsChevronUp className="w-4 h-4" />
                  )}
                </div>
                {financialIsOpen && (
                  <div className="flex flex-col">
                    <Link
                      onClick={() => setSelectedItem("6")}
                      href="/adminPanel/financial/financialReports"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "6" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        گزارشات مالی
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("7")}
                      href="/adminPanel/financial/accumulativeFinancialReports"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "7" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        گزارش مالی تجمیعی
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("8")}
                      href="/adminPanel/financial/increaseCustomerCredit"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "8" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        افزایش اعتبار
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("9")}
                      href="/adminPanel/financial/decreaseCustomerCredit"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "9" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        کاهش اعتبار
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("15")}
                      href="/adminPanel/financial/commission"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "15" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        پورسانت و تخفیف
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("16")}
                      href="/adminPanel/financial/commission/commissionReport"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "16" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        گزارش پورسانت و تخفیف
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : cookies.appId == "4de31591-d70b-4a01-affe-e153e6c58390" ? (
            <div className="flex flex-col  lg:h-[700px] overflow-y-scroll">
              {/* usersManagement */}
              <div
                className={`w-[270px] items-center cursor-pointer ${
                  !userIsOpen && "hover:bg-primaryColor-6"
                }`}
              >
                <div
                  onClick={() => setUserIsOpen(!userIsOpen)}
                  className={`flex w-[210px] items-center justify-between h-[76px]  border-t border-neutralColor-3 mx-[30px]`}
                >
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/userManagement.svg"
                      alt="usersManagement"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">مدیریت کاربران</span>
                  </div>
                  {!userIsOpen ? (
                    <BsChevronDown className="w-4 h-4" />
                  ) : (
                    <BsChevronUp className="w-4 h-4" />
                  )}
                </div>
                {userIsOpen && (
                  <div className="flex flex-col">
                    <Link
                      onClick={() => setSelectedItem("1")}
                      href="/adminPanel/userManagement/showUsers"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6  focus-within:bg-primaryColor-6 ${
                        selectedItem === "1" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        نمایش کاربرها
                      </span>
                    </Link>
                    <Link
                      onClick={() => setSelectedItem("2")}
                      href="/adminPanel/userManagement/newRequests"
                      className={`max-w-[270px] h-[48px] flex items-center hover:bg-primaryColor-6 focus-within:bg-primaryColor-6 ${
                        selectedItem === "2" ? "bg-primaryColor-6" : ""
                      }`}
                    >
                      <span className="py-4 px-[30px]  text-[10px]">
                        درخواست های جدید
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              {/* BlackList */}
              <Link
                onClick={() => setSelectedItem("11")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6 ${
                  selectedItem === "11" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/blackList"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <FaUsersSlash className="w-6 h-4 " />
                    <span className="text-[12px]">لیست سیاه</span>
                  </div>
                </div>
              </Link>
              {/* Tickets */}
              <Link
                onClick={() => setSelectedItem("5")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                  selectedItem === "5" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/tickets"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div className="flex gap-x-[8px] items-center">
                    <Image
                      src="/assets/images/tickets.svg"
                      alt="tickets"
                      width={24}
                      height={24}
                    />
                    <span className="text-[12px]">تیکت ها</span>
                  </div>
                </div>
              </Link>
              {/* callServices */}
              <Link
                onClick={() => setSelectedItem("10")}
                className={`w-[270px] items-center cursor-pointer hover:bg-primaryColor-6  ${
                  selectedItem === "10" ? "bg-primaryColor-6" : ""
                }`}
                href="/adminPanel/callServices"
              >
                <div className="flex w-[210px] items-center justify-between h-[76px] border-t border-neutralColor-3 mx-[30px]">
                  <div
                    className={`flex gap-x-[8px]  items-center ${
                      userIsOpen && "mt-[2px]"
                    }`}
                  >
                    <Image
                      src="/assets/images/callServices.svg"
                      alt="callServices"
                      width={16}
                      height={16}
                    />
                    <span className="text-[12px]">فراخوانی سرویس ها</span>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopSideBar;

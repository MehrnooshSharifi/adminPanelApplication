import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi2";
const BlackUserInfo = ({ blockUser }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    setSelectedId(id);
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-y-[70px] -mt-[20px] ">
      <div className=" flex flex-col max-w-[340px] md:max-w-[680px] lg:max-w-[1440px] overflow-x-auto overflow-y-hidden ">
        {/* header */}
        <div className="flex min-w-[900px]   lg:w-[1030px] h-[60px] bg-neutralColor-5 pt-[6px] ">
          <div className="flex text-[12px] md:text-[16px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className=" mr-[20px] ">
              <span className="w-[55px] h-[28px] mr-[20px] md:mr-[10px] lg:mr-[10px]">
                وضعیت
              </span>
            </div>
            <div className=" mr-[100px] md:mr-[80px] ">
              <span className="w-[103px] h-[28px] lg:mr-[10px]">کدملی</span>
            </div>
            <div className=" mr-[107px] md:mr-[115px] lg:mr-[130px]">
              <span className="w-[103px] h-[28px]">تاریخ ورود به لیست</span>
            </div>
            <div className=" mr-[90px] md:mr-[90px] lg:mr-[80px] ">
              <span className="w-[103px] h-[28px] ">تاریخ خروج از لیست</span>
            </div>
            <div className=" mr-[65px] md:mr-[60px] lg:mr-[50px]">
              <span className="w-[103px] h-[28px] ">کدملی بلاک کننده</span>
            </div>
          </div>
          <div className=" lg:hidden mr-[260px] md:mr-[530px] md:-mt-[5px] w-[81px] md:w-[152px] flex items-center justify-center fixed  rounded-tl-[6px] rounded-bl-[6px] h-[43px] md:h-[60px] bg-neutralColor-5 text-[12px] md:text-[16px]  font-medium text-neutralColor-2">
            <span className="mb-1 lg:hidden">عملیات</span>
          </div>
        </div>
        {/* body */}

        <div key={blockUser.nationalCode} className="">
          {/* GroupServices */}
          <div
            className={`flex  min-w-[900px] md:min-w-[1000px]  lg:w-[1030px]  h-[61px] md:h-[70px] lg:h-[91px] items-center py-[12px] text-[12px] md:text-[14px]`}
          >
            <div
              className={`w-[95px] h-[37px] md:w-[106px]  md:h-[45px] ml-[60px] md:ml-[105px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                !blockUser.isBlocked
                  ? "bg-errorColor-5 text-errorColor-2"
                  : "bg-successColor-5 text-successColor-2"
              }`}
            >
              <span>{blockUser.isBlocked ? "فعال" : "غیرفعال"}</span>
            </div>
            <div className=" w-[100px] h-[57px] flex items-center  -mr-[5px] md:-mr-[80px] ">
              <span className="mr-[5px] md:mr-0 lg:mr-[10px]">
                {blockUser.nationalCode}
              </span>
            </div>
            <div className=" w-[150px] h-[57px] flex items-center  mr-[40px] md:mr-[80px] cursor-pointer ">
              <span className="lg:truncate whitespace-nowrap mr-[10px] md:mr-0 lg:mr-[20px]">
                {blockUser.startBlockDate}
              </span>
            </div>
            <div className=" w-[100px] h-[57px] flex items-center whitespace-nowrap mr-[50px] md:mr-[50px] ">
              <span className="md:mr-[20px] lg:mr-[30px] ">
                {blockUser.endBlockDate}
              </span>
            </div>
            <div className=" h-[57px] flex items-center max-w-[200px] mr-[60px]  md:mr-[30px] ">
              <span className="max-w-[500px] mr-[10px] md:mr-[90px] lg:mr-[100px] ">
                {blockUser.blockerAdminNationalCode}
              </span>
            </div>
          </div>
          {/* operations section */}
          {/* Mobile&Tablet */}
          <div
            id={blockUser.nationalCode}
            className={`w-[103px] h-[57px] md:h-[60px] mx-auto  -mt-[60px] md:-mt-[65px] flex items-center pr-[45px] lg:hidden`}
          >
            {!isOpen && blockUser.nationalCode == selectedId ? (
              <div className="flex items-baseline relative">
                <div className="flex flex-col w-[100px] h-[48px] md:w-[115px] md:h-[51px]  rounded-[10px] border text-[12px] md:text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-30   border-neutralColor-4 bg-naturalColor-2 fixed mr-[10px] md:mr-[120px] shadow-lg">
                  {/* services */}
                  <Link
                    className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                    href={`/adminPanel/blackList/updateBlackListItem/${blockUser.nationalCode}`}
                  >
                    <div>
                      <HiEye className="w-6 h-6 fill-primaryColor-1" />
                    </div>
                    <span>ویرایش</span>
                  </Link>
                </div>
                <div className="md:w-[150px] md:h-[48px] w-[80px] h-[48px] flex items-center justify-center fixed mr-[100px] -mt-[25px]  md:mr-[200px] md:-mt-[20px] bg-naturalColor-2 ">
                  <Image
                    onClick={() => openHandler(blockUser.nationalCode)}
                    className="mb-1"
                    src="/assets/images/multiple.svg"
                    alt="multipleOperation"
                    width={15}
                    height={20}
                  />
                </div>
              </div>
            ) : (
              <div className="md:w-[151px] w-[80px] h-[48px] flex items-center justify-center fixed mr-[100px] md:mr-[197px] bg-naturalColor-2">
                <Image
                  onClick={() => openHandler(blockUser.nationalCode)}
                  className="mb-1 "
                  src="/assets/images/operationDots.svg"
                  alt="operationDots"
                  width={20}
                  height={20}
                />
              </div>
            )}
          </div>
          {/* Desktop */}
          <div
            id={blockUser.nationalCode}
            className={`w-[103px] h-[57px]  -mt-[73px] absolute mr-[900px] whitespace-nowrap items-center  hidden lg:flex`}
          >
            <Link
              className="w-[166px] h-[44px]  flex items-center justify-center border border-primaryColor-1 px-4 py-2 rounded-[5px]"
              href={`/adminPanel/blackList/updateBlackListItem/${blockUser.nationalCode}`}
            >
              <span className="w-[50px]  text-[16px] text-primaryColor-1 font-medium leading-normal ">
                ویرایش
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackUserInfo;

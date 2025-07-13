import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ResetApplicationPass } from "@/src/server/Service";
import toast from "react-hot-toast";
import { TbCircleLetterG } from "react-icons/tb";
import { VscError } from "react-icons/vsc";
import { BiCheckCircle } from "react-icons/bi";
const DesktopUserAppTable = ({ userApps }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userApps.slice(indexOfFirstItem, indexOfLastItem);
  const resetAppPassHandler = async (userId, publicAppId) => {
    try {
      const res = await ResetApplicationPass(userId, publicAppId);
      if (res.isSuccess) {
        toast.success(res.message, {
          duration: 4000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          className: "",
          icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
        });
      } else {
        toast.error(res.message, {
          duration: 4000,
          style: {
            backgroundColor: "#EE3A01",
            color: "#fff",
          },
          className: "",
          icon: <VscError className="w-[28px] h-[28px]" />,
        });
      }
    } catch (error) {
      toast.error("عملیات نا موفق", {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden lg:flex flex-col  max-w-[1030px]  items-center">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[1030px] ">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[106px]">
            <div className="w-[40px]">
              <span className="mr-4">وضعیت</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="-mr-[10px]">کد/شناسه ملی کاربر</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="mr-[5px]">نام اپلیکیشن</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[10px]">آدرس</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[10px]">IP</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((app, index) => {
          return (
            <div
              key={app.id}
              className={` px-[20px] flex w-[1030px] h-[91px] items-center py-[23px]  text-[14px] text-neutralColor-1 leading-[27.64px] gap-x-[106px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div
                className={`w-[90px] h-[40px]  flex items-center justify-center rounded-[100px] ml-[70px] cursor-pointer ${
                  app.isActive
                    ? "bg-successColor-5 text-successColor-2"
                    : "bg-errorColor-5 text-errorColor-2"
                }`}
              >
                <span>{app.isActive ? "فعال" : "غیرفعال"}</span>
              </div>
              <div className="w-[99px]">
                <span className="-mr-[100px]">{app.userId}</span>
              </div>
              <div className="w-[200px] h-[24px] flex items-center   ">
                <Tooltip title={app.publicApp.appName}>
                  <span className="-mr-[100px] whitespace-nowrap truncate cursor-pointer">
                    {app.publicApp.appName}
                  </span>
                </Tooltip>
              </div>
              <div className="w-[99px]">
                <span className="-mr-[200px]">{app.publicApp.appRetAddr}</span>
              </div>
              <div className="w-[99px]">
                <span className="-mr-[250px]">{app.publicApp.appIp}</span>
              </div>
              <div className="flex gap-x-[12px] items-center mr-[790px] absolute">
                <Link
                  className="text-primaryColor-1 border flex items-center justify-center border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[100px] h-[44px] text-center"
                  href={`/adminPanel/userManagement/showUsers/userApplications/${app.userId}/userServices/${app.publicAppId}`}
                >
                  <span className="whitespace-nowrap">سرویس ها</span>
                </Link>
                <button
                  className="text-primaryColor-1 border flex items-center justify-center border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[100px] h-[44px] text-center "
                  onClick={() =>
                    resetAppPassHandler(app.userId, app.publicAppId)
                  }
                >
                  <span className="whitespace-nowrap">بازیابی رمز</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[80px]">
        {userApps && userApps.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(userApps.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: ArrowForwardIosIcon,
                  next: ArrowBackIosIcon,
                }}
                {...item}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default DesktopUserAppTable;

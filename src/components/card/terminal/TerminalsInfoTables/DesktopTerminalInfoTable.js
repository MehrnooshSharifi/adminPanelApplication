import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
const DesktopTerminalInfoTable = ({ terminalInfo }) => {
  const { userId, aesReq } = terminalInfo;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = aesReq.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden lg:flex flex-col  max-w-[1030px]  overflow-y-clip items-center ">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[45px] rounded-[6px] w-[1030px] ">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[70px]">
            <div className="w-[40px]">
              <span className="mr-[25px]">وضعیت</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[50px]">کد/شناسه ملی</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[120px]">شماره ترمینال</span>
            </div>
            <div className="w-[100px]  whitespace-nowrap">
              <span className="mr-[180px]">نام ترمینال</span>
            </div>
            <div className="w-[62px] whitespace-nowrap">
              <span className="mr-[180px]"> آدرس ترمینال</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((aes, index) => {
          return (
            <div key={aes.id} className="flex">
              <div
                className={` px-[20px]  flex w-[1030px] h-[91px] items-center py-[23px]  text-[14px] text-neutralColor-1 leading-[27.64px] gap-x-[70px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div
                  className={`w-[95px] h-[37px] md:w-[106px]  md:h-[45px] ml-[60px] md:ml-[105px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                    !aes.isActive
                      ? "bg-errorColor-5 text-errorColor-2"
                      : "bg-successColor-5 text-successColor-2"
                  }`}
                >
                  <span>{aes.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[100px]">{userId}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[30px]">{aes.terminalId}</span>
                </div>
                <div className="w-[99px]">
                  <span className="mr-[10px]">{aes.terminalName}</span>
                </div>
                <div className="w-[89px]">
                  <span className="mr-[50px]">{aes.terminalAddress}</span>
                </div>
                <div className="w-[20px] h-[55px] flex items-center ml-[79px]">
                  <Tooltip title={aes.serviceName}>
                    <span className="-mr-[130px]  whitespace-nowrap truncate cursor-pointer">
                      {aes.serviceName}
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[80px] h-[24px] flex items-center -mr-[80px]  ">
                  <Tooltip title={aes.appName}>
                    <span className=" whitespace-nowrap truncate cursor-pointer">
                      {aes.appName}
                    </span>
                  </Tooltip>
                </div>
              </div>
              <div className="flex  items-center fixed mr-[900px] mt-[20px]">
                <Link
                  className=" bg-primaryColor-1 text-naturalColor-2 whitespace-nowrap border  text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[44px]  flex justify-center items-center"
                  href={`/adminPanel/card/terminal/${userId}/${aes.terminalId}`}
                >
                  <span>ویرایش</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[80px]">
        {aesReq && aesReq.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(aesReq.length / itemsPerPage)}
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

export default DesktopTerminalInfoTable;

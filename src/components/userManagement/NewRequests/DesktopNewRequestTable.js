import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const DesktopNewRequestTable = ({ newRequests }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newRequests.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden lg:flex flex-col  max-w-[1030px]  overflow-y-clip items-center ">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[45px] rounded-[6px] w-[1030px] ">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[70px]">
            <div className="w-[40px]">
              <span className="mr-4">نام</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="">نام خانوادگی</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[10px]">کد/شناسه ملی</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[30px]">شماره تلفن</span>
            </div>
            <div className="w-[100px]  whitespace-nowrap">
              <span className="mr-[60px]">نام سرویس</span>
            </div>
            <div className="w-[62px] whitespace-nowrap">
              <span className="mr-[90px]"> اپلیکیشن</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((request, index) => {
          return (
            <div key={request.id} className="flex">
              <div
                className={` px-[20px]  flex w-[1030px] h-[91px] items-center py-[23px]  text-[14px] text-neutralColor-1 leading-[27.64px] gap-x-[70px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div className="w-[99px]">
                  <span className="mr-2">{request.firstName}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[40px]">{request.lastName}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[70px]">{request.nationalCode}</span>
                </div>
                <div className="w-[89px]">
                  <span className="-mr-[100px]">{request.phoneNumber}</span>
                </div>
                <div className="w-[20px] h-[55px] flex items-center ml-[79px]">
                  <Tooltip title={request.serviceName}>
                    <span className="-mr-[130px]  whitespace-nowrap truncate cursor-pointer">
                      {request.serviceName}
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[80px] h-[24px] flex items-center -mr-[80px]  ">
                  <Tooltip title={request.appName}>
                    <span className=" whitespace-nowrap truncate cursor-pointer">
                      {request.appName}
                    </span>
                  </Tooltip>
                </div>
              </div>
              <div className="flex  items-center fixed mr-[900px] mt-[20px]">
                <Link
                  className=" bg-primaryColor-1 text-naturalColor-2 whitespace-nowrap border  text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[44px]  flex justify-center items-center"
                  href={`/adminPanel/userManagement/newRequests/newRequestDetails/${request.id}`}
                >
                  <span>بررسی</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[80px]">
        {newRequests && newRequests.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(newRequests.length / itemsPerPage)}
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

export default DesktopNewRequestTable;

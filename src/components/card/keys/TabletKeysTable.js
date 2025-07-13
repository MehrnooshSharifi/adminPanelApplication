import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const TabletKeysTable = ({ allScope }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allScope.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden md:flex lg:hidden flex-col  justify-center max-w-[714px] max-h-[700px] overflow-x-scroll overflow-y-clip">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[1030px] ">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[60px]">
            <div className="w-[40px]">
              <span className="mr-4">وضعیت</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="mr-[50px]">تعداد دستگاه ها</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[130px]">تاریخ انقضاء</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[250px]">Key</span>
            </div>
            <div className="w-[100px]  whitespace-nowrap">
              <span className="mr-[300px]">Scope</span>
            </div>
          </div>
          <div className="  flex items-center justify-center rounded-tl-[6px] rounded-[6px]  h-[43px] absolute mr-[240px] bg-neutralColor-5 text-[16px] font-medium text-neutralColor-2">
            <span className="mr-[830px] bg-neutralColor-5 whitespace-nowrap absolute w-[150px] h-[43px] text-center flex items-center justify-center ">
              عملیات
            </span>
          </div>
        </div>
        {/* body */}
        {currentItems.map((scope, index) => {
          return (
            <div key={scope.scopeId}>
              <div
                className={` px-[20px] flex w-[1030px] h-[91px] items-center py-[23px]  text-[14px] text-neutralColor-1 leading-[27.64px] gap-x-[60px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div
                  className={`w-[59.97px] h-[40px]  ml-[80px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center cursor-pointer  ${
                    scope.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{scope.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[10px]">{scope.deviceCount}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[40px] whitespace-nowrap">{scope.expireDate}</span>
                </div>
                <div className="w-[99px]">
                  <span className="mr-[70px]">{scope.pfxKey}</span>
                </div>
                <div className="w-[89px]">
                  <span className="mr-[85px]">{scope.scopeId}</span>
                </div>
              </div>
              <div className="flex gap-x-[12px] items-center absolute mr-[605px] -mt-[70px]">
                <Link
                  className="bg-primaryColor-1 text-naturalColor-2 whitespace-nowrap  text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[48px]  flex justify-center items-center"
                  href={`/adminPanel/userManagement/newRequests/newRequestDetails/${scope.scopeId}`}
                >
                  <span>ویرایش</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden md:block lg:hidden overflow-y-clip -mt-[80px]">
        {allScope && allScope.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(allScope.length / itemsPerPage)}
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

export default TabletKeysTable;

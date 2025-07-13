import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
const ShowUserDesktopTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden lg:flex flex-col  max-w-[1030px]  items-center">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[1030px] ">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[106px]">
            <div className="w-[40px]">
              <span className="mr-4">نام</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="">نام خانوادگی</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[10px]">کد/شناسه ملی</span>
            </div>
            <div className="w-[100px] mr-[20px]">
              <span className="">مانده موجودی</span>
            </div>
            <div className="w-[62px]">
              <span className="-mr-[45px]">سود پول</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((user, index) => {
          return (
            <div
              key={user.nationalCode}
              className={` px-[20px] flex w-[1030px] h-[91px] items-center py-[23px]  text-[14px] text-neutralColor-1 leading-[27.64px] gap-x-[106px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div className="w-[99px]">
                <span className="mr-2">{user.firstName}</span>
              </div>
              <div className="w-[50px] h-[24px] flex items-center   ">
                <Tooltip title={user.lastName}>
                  <span className="-mr-[10px] whitespace-nowrap truncate cursor-pointer">
                    {user.lastName}
                  </span>
                </Tooltip>
              </div>
              <div className="w-[99px]">
                <span className="">{user.nationalCode}</span>
              </div>
              <div className="w-[50px]">
                <span className="-mr-[40px]">{user.account?.balance}</span>
              </div>
              <div className="w-[50px]">
                <span className=" -mr-[30px] w-[70px]">
                  {user.account?.benefitAmount}
                </span>
              </div>
              <div className="flex gap-x-[12px] items-center mr-[800px] absolute">
                <Link
                  className="text-primaryColor-1 border flex items-center justify-center border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[100px] h-[44px] text-center"
                  href={`/adminPanel/userManagement/showUsers/userApplications/${user.nationalCode}`}
                >
                  <span className="whitespace-nowrap">اپلیکیشن ها</span>
                </Link>
                <Link
                  className="text-primaryColor-1 border flex items-center justify-center border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[100px] h-[44px] text-center"
                  href={`/adminPanel/userManagement/showUsers/userInfoDetails/${user.nationalCode}`}
                >
                  <span>جزییات</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[80px]">
        {users && users.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(users.length / itemsPerPage)}
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

export default ShowUserDesktopTable;

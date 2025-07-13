import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const DesktopTableServicesManagement = ({ serviceGroups }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = serviceGroups?.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden lg:flex flex-col  max-w-[1030px]  items-center">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px]">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px]">
            <div className="w-[35px] h-[28px] ml-[96px] mr-[34px]">
              <span className="-mr-2">وضعیت</span>
            </div>
            <div className="w-[122px] h-[28px] ml-[95px] mr-2">
              <span className="-mr-[8px]">نام گروه سرویس</span>
            </div>
            <div className="w-[24px] h-[28px] ml-[120px] mr-1">
              <span className="-mr-[12px]">نوع</span>
            </div>
            <div className="w-[69px] h-[28px] ml-[374px]">
              <span className="mr-[15px]">توضیحات</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((serviceGroup, index) => {
          return (
            <div
              className={`flex max-w-[1030px] h-[91px] items-center py-[23px] px-[16px] text-[14px] text-neutralColor-1 leading-[27.64px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
              key={serviceGroup.id}
            >
              <div
                className={`w-[90px] h-[40px]  flex items-center justify-center rounded-[100px] ml-[70px] cursor-pointer ${
                  serviceGroup.isActive
                    ? "bg-successColor-5 text-successColor-2"
                    : "bg-errorColor-5 text-errorColor-2"
                }`}
              >
                <span>{serviceGroup.isActive ? "فعال" : "غیرفعال"}</span>
              </div>
              <div className="w-[165px] h-[24px] flex items-center ml-[44px]">
                <span>{serviceGroup.serviceGroupName}</span>
              </div>
              <div className="w-[42px] h-[24px] flex items-center  ml-[74px]">
                <span>{serviceGroup.isPublic ? "public" : "private"}</span>
              </div>
              <div className="w-[170px] h-[24px] flex items-center  ml-[79px] ">
                <Tooltip title={serviceGroup.serviceGroupDesc}>
                  <span className="mr-8 whitespace-nowrap truncate cursor-pointer">
                    {serviceGroup.serviceGroupDesc}
                  </span>
                </Tooltip>
              </div>
              <div className="flex gap-x-[12px] items-center ">
                <Link
                  className="text-primaryColor-1 border border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[44px] text-center"
                  href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroup.id}`}
                >
                  <span className="whitespace-nowrap">سرویس ها</span>
                </Link>
                <Link
                  className="text-primaryColor-1 border border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[44px] text-center"
                  href={`/adminPanel/serviceManagement/updateServiceGroup/${serviceGroup.id}`}
                >
                  <span>ویرایش</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[80px]">
        {serviceGroups && serviceGroups.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(serviceGroups.length / itemsPerPage)}
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

export default DesktopTableServicesManagement;

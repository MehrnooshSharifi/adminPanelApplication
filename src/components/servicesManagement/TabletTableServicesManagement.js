import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
const TabletTableServicesManagement = ({ serviceGroups }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = serviceGroups?.slice(indexOfFirstItem, indexOfLastItem);

  const [selectedId, setSelectedId] = useState(
    "4e93e3a2-01ca-49a9-a02d-52d116fa2a5c"
  );
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of serviceGroups) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden md:flex lg:hidden flex-col  justify-center max-w-[714px] max-h-[700px] overflow-x-scroll overflow-y-clip">
        {/* header */}
        <div className="flex items-center">
          <div className="flex bg-neutralColor-5 text-[16px]  font-medium text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[55px]">
            <div className="w-[59.97px] h-[28px] ml-[83.5px] mr-[15px]">
              <span>وضعیت</span>
            </div>
            <div className="w-[131.93px] h-[28px] ml-[131.83px]">
              <span>نام گروه سرویس</span>
            </div>
            <div className="w-[26.17px] h-[28px] ml-[178.77px]">
              <span>نوع</span>
            </div>
            <div className="w-[80px] h-[21px] ml-[178px]">
              <span>توضیحات</span>
            </div>
          </div>
          <div className="w-[60px] pr-1 h-[55px] flex items-center justify-center  fixed mr-[650px] bg-neutralColor-5 text-[16px] font-medium text-neutralColor-2">
            <span className="">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((serviceGroup, index) => {
          return (
            <div key={serviceGroup.id}>
              <div
                className={`flex w-[825px] h-[90px] items-center py-[12px] text-[16px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div
                  className={`w-[59.97px] h-[40px]  ml-[80px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center cursor-pointer  ${
                    serviceGroup.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{serviceGroup.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[179.28px] h-[28px] ml-[80px] flex items-center">
                  <span>{serviceGroup.serviceGroupName}</span>
                </div>
                <div className="w-[53.34px] h-[28px] ml-[100px] flex items-center ">
                  <span>{serviceGroup.isPublic ? "public" : "private"}</span>
                </div>
                <div className="w-[202.8px] h-[28px] ml-[22px] whitespace-pre-wrap flex items-center leading-[32px]">
                  <Tooltip title={serviceGroup.serviceGroupDesc}>
                    <span className=" whitespace-nowrap truncate cursor-pointer">
                      {serviceGroup.serviceGroupDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
              <div
                id={serviceGroup.id}
                onClick={() => openHandler(serviceGroup.id)}
                className={`w-[65px] h-[90px] fixed mr-[650px] -mt-[90px] flex items-center pr-5 ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && serviceGroup.id == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[134px] h-[100px] rounded-[10px] border text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-10 -top-[40px] ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/serviceManagement/updateServiceGroup/${serviceGroup.id}`}
                      >
                        <div>
                          <Image
                            src="/assets/images/edit.svg"
                            width={16}
                            height={16}
                            alt="editOperation"
                          />
                        </div>
                        <span>ویرایش</span>
                      </Link>
                      <hr />
                      {/* services */}
                      <Link
                        className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px]  p-[10px]"
                        href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroup.id}`}
                      >
                        <div>
                          <Image
                            src="/assets/images/servicesSubOperation.svg"
                            width={25}
                            height={25}
                            alt="servicesSubOperation"
                          />
                        </div>
                        <span>سرویس ها</span>
                      </Link>
                    </div>
                    <Image
                      onClick={() => openHandler(serviceGroup.id)}
                      className="mb-1 "
                      src="/assets/images/multiple.svg"
                      alt="multipleOperation"
                      width={13.3}
                      height={3.5}
                    />
                  </div>
                ) : (
                  <Image
                    className="mb-1 "
                    src="/assets/images/operationDots.svg"
                    alt="operation"
                    width={20.9}
                    height={5.5}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden md:block lg:hidden overflow-y-clip -mt-[80px]">
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

export default TabletTableServicesManagement;

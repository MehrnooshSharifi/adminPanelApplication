import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
const MobileTableServicesManagement = ({ serviceGroups }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = serviceGroups?.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedId, setSelectedId] = useState(null);
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
      <div className=" md:hidden flex flex-col  justify-center max-w-[334px] max-h-[467px] overflow-x-scroll">
        {/* header */}
        <div className="flex items-center">
          <div className="flex bg-neutralColor-5 text-[12px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className="w-[40px] h-[21px] ml-[73.5px] mr-[15px]">
              <span>وضعیت</span>
            </div>
            <div className="w-[86px] h-[21px] ml-[78px]">
              <span>نام گروه سرویس</span>
            </div>
            <div className="w-[36px] h-[21px] ml-[100px]">
              <span>نوع</span>
            </div>
            <div className="w-[80px] h-[21px] ml-[78px]">
              <span>توضیحات</span>
            </div>
          </div>
          <div className="w-[48px]  flex items-center justify-center rounded-tl-[6px] rounded-bl-[6px] h-[43px] absolute mr-[290px] bg-neutralColor-5 text-[12px] font-medium text-neutralColor-2">
            <span className="mb-1">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((serviceGroup, index) => {
          return (
            <div key={serviceGroup.id} className="">
              {/* GroupServices */}
              <div
                className={`flex w-[625px] h-[61px] items-center py-[12px] text-[12px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div
                  className={`w-[55px] h-[37px]  ml-[60px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center cursor-pointer ${
                    serviceGroup.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{serviceGroup.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[134px] h-[21px] ml-[30px] flex items-center">
                  <span>{serviceGroup.serviceGroupName}</span>
                </div>
                <div className="w-[36px] h-[21px] ml-[78px] flex items-center ">
                  <span>{serviceGroup.isPublic ? "public" : "private"}</span>
                </div>
                <div className="w-[140px] h-[21px] ml-[22px] whitespace-pre-wrap flex items-center leading-[24px] ">
                  <Tooltip title={serviceGroup.serviceGroupDesc}>
                    <span className="whitespace-nowrap truncate cursor-pointer">
                      {serviceGroup.serviceGroupDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
              {/* operations section */}
              <div
                id={serviceGroup.id}
                className={`w-[45px] h-[61px] absolute mr-[290px] -mt-[62px] flex items-center pr-3 ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && serviceGroup.id == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[125px] h-[100px] rounded-[10px] border text-[12px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-7 -top-[40px] ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[5px] p-[10px]"
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
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroup.id}`}
                      >
                        <div>
                          <Image
                            src="/assets/images/servicesSubOperation.svg"
                            width={16}
                            height={16}
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
                    onClick={() => openHandler(serviceGroup.id)}
                    className="mb-1 "
                    src="/assets/images/operationDots.svg"
                    alt="operationDots"
                    width={13.3}
                    height={3.5}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 md:hidden -mt-[60px]">
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

export default MobileTableServicesManagement;

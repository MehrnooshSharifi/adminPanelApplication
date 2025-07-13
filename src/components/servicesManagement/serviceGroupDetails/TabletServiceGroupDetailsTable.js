import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import FileUploadModal from "./FileUploadModal/FileUploadModal";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { SiSlideshare } from "react-icons/si";
import { useRouter } from "next/router";
const TabletServiceGroupDetailsTable = ({
  allServices,
  downloadFileHandler,
}) => {
  const router = useRouter();
  const { serviceGroupId } = router.query;
  const [showUploadFileModal, setShowUploadFileModal] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allServices.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedId, setSelectedId] = useState(
    "4a4c61a1-b13e-4024-a248-6b2709ecb58e"
  );
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of allServices) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  const showUploadFileModalHandler = (id) => {
    setSelectedServiceId(id);
    setShowUploadFileModal(true);
  };

  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden md:flex lg:hidden flex-col  justify-center max-w-[714px] max-h-[700px] overflow-x-scroll overflow-y-clip">
        {/* header */}
        <div className="flex items-center w-[1000px]">
          <div className="flex bg-neutralColor-5 w-[1000px] text-[16px]  font-medium text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[55px]">
            <div className="w-[59.97px] h-[28px] ml-[83.5px] mr-[15px]">
              <span>وضعیت</span>
            </div>
            <div className="w-[131.93px] h-[28px] mr-[10px]">
              <span className="mr-[30px]">نام سرویس</span>
            </div>
            <div className="w-[26.17px] h-[28px] mr-[140px]">
              <span>قیمت نهایی</span>
            </div>
            <div className="w-[80px] h-[21px] mr-[190px]">
              <span>توضیحات</span>
            </div>
          </div>
          <div className="w-[60px] pr-1 h-[55px] flex items-center justify-center  fixed mr-[650px] bg-neutralColor-5 text-[16px] font-medium text-neutralColor-2">
            <span className="">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems.map((service, index) => {
          return (
            <div key={service.id}>
              <div
                className={`flex w-[1000px] h-[90px] items-center py-[12px] text-[16px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div
                  className={`w-[59.97px] h-[40px]  ml-[80px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center cursor-pointer ${
                    service.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{service.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[200px] h-[28px] ml-[80px] flex items-center">
                  <Tooltip title={service.serviceName}>
                    <span className="mr-[40px] whitespace-nowrap truncate cursor-pointer">
                      {service.serviceName}
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[53.34px] h-[28px] ml-[100px] flex items-center ">
                  <span className="mr-[35px]">{service.defaultPrice}</span>
                </div>
                <div className="w-[300px] h-[28px] ml-[22px] flex items-center">
                  <Tooltip title={service.serviceDesc}>
                    <span className="mr-[60px] whitespace-nowrap truncate cursor-pointer">
                      {service.serviceDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
              <div
                id={service.id}
                onClick={() => openHandler(service.id)}
                className={`w-[65px] h-[90px] fixed mr-[650px] -mt-[90px] flex items-center pr-5 ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && service.id == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[134px] h-[140px] rounded-[10px] border text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-10 -top-[60px] ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/serviceManagement/updateService/${service.id}`}
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
                      <Link
                        className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${service.id}`}
                      >
                        <div>
                          <SiSlideshare className="fill-primaryColor-1 w-4 h-4" />
                        </div>
                        <span>تسهیم</span>
                      </Link>
                      <hr />
                      {/* services */}
                      {!service.helpFileName ? (
                        <div
                          className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px]  p-[10px]"
                          onClick={() => showUploadFileModalHandler(service.id)}
                        >
                          <div>
                            <Image
                              src="/assets/images/upload.svg"
                              width={16}
                              height={16}
                              alt="upload"
                            />
                          </div>
                          <span>آپلود فایل</span>
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px]  p-[10px]"
                          onClick={() => downloadFileHandler(service.id)}
                        >
                          <div>
                            <HiDocumentArrowDown className="w-[20px] h-[20px] fill-primaryColor-1 rounded-sm" />
                          </div>
                          <span>دانلود فایل</span>
                        </div>
                      )}
                    </div>
                    <Image
                      onClick={() => openHandler(service.id)}
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
      {showUploadFileModal && (
        <FileUploadModal
          setShowUploadFileModal={setShowUploadFileModal}
          selectedServiceId={selectedServiceId}
        />
      )}
      <div className="z-10 hidden md:block lg:hidden overflow-y-clip -mt-[95px]">
        {allServices && allServices.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(allServices.length / itemsPerPage)}
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

export default TabletServiceGroupDetailsTable;

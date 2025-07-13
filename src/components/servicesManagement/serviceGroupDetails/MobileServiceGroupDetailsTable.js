import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import FileUploadModal from "./FileUploadModal/FileUploadModal";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { useRouter } from "next/router";
import { SiSlideshare } from "react-icons/si";
const MobileServiceGroupDetailsTable = ({
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
    <div className="flex flex-col gap-y-[70px] items-center ml-1">
      <div className=" md:hidden flex flex-col  justify-center max-w-[334px] max-h-[800px] overflow-x-scroll overflow-y-hidden">
        {/* header */}
        <div className="flex items-center w-[700px]">
          <div className="flex bg-neutralColor-5 w-[1300px] text-[12px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className="w-[40px] h-[21px] ml-[73.5px] mr-[15px]">
              <span>وضعیت</span>
            </div>
            <div className="w-[86px] h-[21px] ml-[78px]">
              <span className="mr-[20px]">نام سرویس</span>
            </div>
            <div className="w-[36px] h-[21px] ml-[100px]">
              <span>قیمت نهایی</span>
            </div>
            <div className="w-[80px] h-[21px] ml-[78px]">
              <span>توضیحات</span>
            </div>
          </div>
          <div className="w-[56px]  flex items-center justify-center rounded-tl-[6px] rounded-bl-[6px] h-[43px] absolute mr-[280px] bg-neutralColor-5 text-[12px] font-medium text-neutralColor-2">
            <span className="mb-1">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems.map((service, index) => {
          return (
            <div key={service.id} className="">
              {/* GroupServices */}
              <div
                className={`flex w-[700px] h-[70px] items-center py-[12px] text-[12px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div
                  className={`w-[55px] h-[37px]  ml-[60px] mr-[10px] py-2rounded-[50px] rounded-[100px]  flex items-center justify-center cursor-pointer ${
                    service.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{service.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[134px] h-[76px] ml-[30px] flex items-center leading-[24px] ">
                  <Tooltip title={service.serviceName}>
                    <span className="mr-[25px] whitespace-nowrap truncate cursor-pointer">
                      {service.serviceName}
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[36px] h-[76px] ml-[78px] flex items-center ">
                  <span className="mr-[25px]">{service.defaultPrice}</span>
                </div>
                <div className=" w-[250px] h-[76px] ml-[54px] flex items-center leading-[24px]  ">
                  <Tooltip title={service.serviceDesc}>
                    <span className="mr-[25px] whitespace-nowrap truncate cursor-pointer">
                      {service.serviceDesc}
                    </span>
                  </Tooltip>
                </div>
              </div>
              {/* operations section */}
              <div
                id={service.id}
                className={`w-[55px] h-[70px] absolute mr-[285px] -mt-[70px] flex items-center pr-3 ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && service.id == selectedId ? (
                  <div className="flex items-baseline relative ">
                    <div className="flex flex-col w-[125px] ml-[8px] h-[140px] rounded-[10px] border text-[12px] text-neutralColor-1 font-medium whitespace-nowrap  z-50 border-neutralColor-4 bg-naturalColor-2  absolute  bottom-5 left-7 -top-[60px] ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[5px] p-[10px]"
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
                          className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
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
                          className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                          onClick={() => downloadFileHandler(service.id)}
                        >
                          <div>
                            <HiDocumentArrowDown className="w-[20px] h-[20px] fill-primaryColor-1 rounded-sm" />
                          </div>
                          <span>دنلود فایل</span>
                        </div>
                      )}
                    </div>
                    <Image
                      onClick={() => openHandler(service.id)}
                      className="mb-1 mr-2"
                      src="/assets/images/multiple.svg"
                      alt="multipleOperation"
                      width={13.3}
                      height={3.5}
                    />
                  </div>
                ) : (
                  <Image
                    onClick={() => openHandler(service.id)}
                    className="mb-1 mr-[10px]"
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
      {showUploadFileModal && (
        <FileUploadModal
          setShowUploadFileModal={setShowUploadFileModal}
          selectedServiceId={selectedServiceId}
        />
      )}
      <div className="z-10 md:hidden -mt-[90px]">
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

export default MobileServiceGroupDetailsTable;

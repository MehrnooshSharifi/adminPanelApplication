import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import FileUploadModal from "./FileUploadModal/FileUploadModal";
import { useRouter } from "next/router";
const DesktopServiceGroupDetailsTable = ({
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
  const showUploadFileModalHandler = (id) => {
    setSelectedServiceId(id);
    setShowUploadFileModal(true);
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center lg:-mt-[20px]">
      <div className=" hidden lg:flex flex-col  max-w-[1030px]  items-center">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px]">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px]">
            <div className="w-[35px] h-[28px] ml-[96px] mr-[34px]">
              <span className="-mr-[20px]">وضعیت</span>
            </div>
            <div className="w-[130px] h-[28px] ml-[65px] mr-2">
              <span className="mr-[6px]">نام سرویس</span>
            </div>
            <div className="w-[24px] h-[28px] ml-[120px] mr-1 whitespace-nowrap">
              <span className="-mr-[25px]">قیمت نهایی</span>
            </div>
            <div className="w-[80px] h-[28px] ml-[374px]">
              <span className="mr-[10px]">توضیحات</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((service, index) => {
          return (
            <div
              className={`flex max-w-[1300px] h-[91px] items-center py-[23px] px-[16px] text-[14px] text-neutralColor-1 ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
              key={service.id}
            >
              <div
                className={`w-[90px] h-[40px]  flex items-center justify-center rounded-[100px] ml-[70px] cursor-pointer ${
                  service.isActive
                    ? "bg-successColor-5 text-successColor-2"
                    : "bg-errorColor-5 text-errorColor-2"
                }`}
              >
                <span>{service.isActive ? "فعال" : "غیرفعال"}</span>
              </div>
              <div className="w-[165px] h-[24px] flex items-center ml-[44px]">
                <Tooltip title={service.serviceName}>
                  <span className="mr-[25px] whitespace-nowrap truncate cursor-pointer">
                    {service.serviceName}
                  </span>
                </Tooltip>
              </div>
              <div className="w-[42px] h-[24px] flex items-center text-center  ml-[74px]">
                <span className="mr-[25px] text-center">
                  {service.defaultPrice}
                </span>
              </div>
              <div className="w-[170px] h-[55px] flex items-center ml-[79px]">
                <Tooltip title={service.serviceDesc}>
                  <span className="mr-[45px]  whitespace-nowrap truncate cursor-pointer">
                    {service.serviceDesc}
                  </span>
                </Tooltip>
              </div>
              <div className="flex gap-x-[12px] items-center  ">
                <Link
                  className="text-primaryColor-1 border border-primaryColor-1 text-[14px] font-medium  py-[8px] px-[16px] rounded-[5px] w-[70px] flex items-center justify-center h-[44px] text-center"
                  href={`/adminPanel/serviceManagement/updateService/${service.id}`}
                >
                  <span className="whitespace-nowrap">ویرایش</span>
                </Link>
                <Link
                  className="text-primaryColor-1 border border-primaryColor-1 text-[14px] font-medium  py-[8px] px-[16px] rounded-[5px] w-[70px] flex items-center justify-center h-[44px] text-center"
                  href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${service.id}`}
                >
                  <span className="whitespace-nowrap">تسهیم</span>
                </Link>
                {!service.helpFileName ? (
                  <div
                    onClick={() => showUploadFileModalHandler(service.id)}
                    className="text-primaryColor-1 cursor-pointer flex items-center justify-center w-[70px] h-[44px] border border-dashed border-primaryColor-1 text-[14px] font-medium leading-[27.64px]  text-center py-[8px] px-[16px] rounded-[5px]"
                  >
                    <span className="whitespace-nowrap">آپلود فایل</span>
                  </div>
                ) : (
                  <div
                    onClick={() => downloadFileHandler(service.id)}
                    className="text-primaryColor-1 border border-primaryColor-1 text-[14px] font-medium  py-[8px] px-[16px] rounded-[5px] w-[70px] flex items-center justify-center h-[44px] text-center cursor-pointer"
                  >
                    <span className="whitespace-nowrap">دانلود فایل</span>
                  </div>
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
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[100px]">
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

export default DesktopServiceGroupDetailsTable;

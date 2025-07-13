import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomerCreditModal from "../../financial/customerCredit/CustomerCreditModal";
import DeleteBeneficiariModal from "./DeleteBeneficiarieModal";

const DesktopBeneficiariesTable = ({ beneficiaries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedUniqueId, setSelectedUniqueId] = useState("");
  const router = useRouter();
  const { serviceGroupId, beneficiariesId } = router.query;
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beneficiaries?.slice(indexOfFirstItem, indexOfLastItem);
  const deleteHandler = (id) => {
    setSelectedUniqueId(id);
    setIsDelete(true);
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden lg:flex flex-col  w-[1030px]  items-center">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[1000px]">
          <div className="flex items-center text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px]">
            <div className="w-[40px] h-[28px] ml-[96px] ">
              <span className="mr-[5px]">نام </span>
            </div>
            <div className="w-[70px] h-[28px] ml-[96px] ">
              <span className="whitespace-nowrap mr-[10px] ">نام خانوادگی</span>
            </div>
            <div className="w-[122px] h-[28px] ml-[95px] ">
              <span className="mr-[30px] whitespace-nowrap">درصد تسهیم</span>
            </div>
            <div className="w-[24px] h-[28px] ml-[100px] ">
              <span className="whitespace-nowrap mr-[20px] ">مبلغ تسهیم</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((beneficiarie, index) => {
          return (
            <div
              className={`flex w-[1000px] h-[91px] items-center py-[23px] px-[16px] text-[14px] text-neutralColor-1 leading-[27.64px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
              key={beneficiarie.uniqueId}
            >
              <div className="w-[165px] h-[24px] flex items-center ml-[44px]">
                <span>{beneficiarie.firstName}</span>
              </div>
              <div className="w-[165px] h-[24px] flex items-center ml-[60px]">
                <span className="-mr-[30px] lg:-mr-[10px]">
                  {beneficiarie.lastName}
                </span>
              </div>
              <div className="w-[165px] h-[24px] flex items-center ml-[44px]">
                <span className="lg:mr-[10px]">{beneficiarie.dscNTPrNT}</span>
              </div>
              <div className="w-[170px] h-[24px] flex items-center  ml-[79px] ">
                <span className="mr-8 lg:mr-[40px] whitespace-nowrap truncate cursor-pointer">
                  {beneficiarie.dscNTAMT}
                </span>
              </div>
              <div className="flex gap-x-[12px] items-center ">
                <Link
                  className="text-primaryColor-1 border border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[44px] text-center"
                  href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${beneficiariesId}/updateBeneficiarie/${beneficiarie.uniqueId}`}
                >
                  <span>ویرایش</span>
                </Link>
                <div
                  onClick={() => deleteHandler(beneficiarie.uniqueId)}
                  className="text-primaryColor-1 border border-primaryColor-1 text-[16px] font-medium leading-[27.64px] py-[8px] px-[16px] rounded-[5px] w-[110px] h-[44px] text-center cursor-pointer"
                >
                  <span>حذف</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 hidden lg:block overflow-y-clip -mt-[80px]">
        {beneficiaries && beneficiaries.length > 6 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(beneficiaries.length / itemsPerPage)}
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
      {isDelete && (
        <DeleteBeneficiariModal
          setIsDelete={setIsDelete}
          selectedUniqueId={selectedUniqueId}
        />
      )}
    </div>
  );
};

export default DesktopBeneficiariesTable;

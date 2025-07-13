import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import DeleteBeneficiariModal from "./DeleteBeneficiarieModal";
const TabletBeneficiariesTable = ({ beneficiaries }) => {
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
  const [selectedId, setSelectedId] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of beneficiaries) {
      if (element.uniqueId === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  const deleteHandler = (id) => {
    setSelectedUniqueId(id);
    setIsDelete(true);
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" hidden md:flex lg:hidden flex-col  justify-center max-w-[714px] max-h-[700px] overflow-x-scroll overflow-y-clip">
        {/* header */}
        <div className="flex items-center">
          <div className="flex bg-neutralColor-5 text-[16px]  font-medium text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[55px]">
            <div className="w-[59.97px] h-[28px]  mr-[40px]">
              <span>نام</span>
            </div>
            <div className="w-[131.93px] h-[28px] mr-[130px] ">
              <span>نام خانوادگی</span>
            </div>
            <div className="w-[26.17px] h-[28px] mr-[60px] md:mr-[70px]">
              <span>درصد تسهیم</span>
            </div>
            <div className="w-[150px] h-[21px] mr-[170px] ">
              <span>مبلغ تهسیم</span>
            </div>
          </div>
          <div className="w-[60px] pr-1 h-[55px] flex items-center justify-center  fixed mr-[650px] bg-neutralColor-5 text-[16px] font-medium text-neutralColor-2">
            <span className="">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((beneficiarie, index) => {
          return (
            <div key={beneficiarie.uniqueId}>
              <div
                className={`flex w-[825px] h-[90px] items-center py-[12px] text-[16px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div className="w-[179.28px] h-[28px] mr-[30px] flex items-center">
                  <span>{beneficiarie.firstName}</span>
                </div>
                <div className="w-[179.28px] h-[28px] mr-[30px] flex items-center">
                  <span>{beneficiarie.lastName}</span>
                </div>
                <div className="w-[202.8px] h-[28px]  whitespace-pre-wrap flex items-center leading-[32px]">
                  <span className=" whitespace-nowrap truncate cursor-pointer mr-[60px]">
                    {beneficiarie.dscNTPrNT}
                  </span>
                </div>
                <div className="w-[202.8px] h-[28px] ml-[22px] whitespace-pre-wrap flex items-center leading-[32px]">
                  <span className=" whitespace-nowrap truncate cursor-pointer mr-[40px]">
                    {beneficiarie.dscNTAMT}
                  </span>
                </div>
              </div>
              <div
                id={beneficiarie.uniqueId}
                onClick={() => openHandler(beneficiarie.uniqueId)}
                className={`w-[65px] h-[90px] fixed mr-[650px] -mt-[90px] flex items-center pr-5 ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && beneficiarie.uniqueId == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[134px] h-[100px] rounded-[10px] border text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-10 top-1 ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/serviceManagement/serviceGroupDetails/${serviceGroupId}/beneficiaries/${beneficiariesId}/updateBeneficiarie/${beneficiarie.uniqueId}`}
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
                      <div
                        onClick={() => deleteHandler(beneficiarie.uniqueId)}
                        className="flex items-center justify-start w-[112px] h-[49px] gap-x-[10px]  p-[10px]"
                      >
                        <div>
                          <RiDeleteBin6Fill className="fill-errorColor-1 w-4 h-4" />
                        </div>
                        <span>حذف</span>
                      </div>
                    </div>
                    <Image
                      onClick={() => openHandler(beneficiarie.uniqueId)}
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
        {beneficiaries && beneficiaries.length > 5 && (
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

export default TabletBeneficiariesTable;

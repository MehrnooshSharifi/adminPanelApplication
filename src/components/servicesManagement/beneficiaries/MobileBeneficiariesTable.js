import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import DeleteBeneficiariModal from "./DeleteBeneficiarieModal";

const MobileBeneficiariesTable = ({ beneficiaries }) => {
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
      <div className=" md:hidden flex flex-col  justify-center max-w-[334px] max-h-[467px] overflow-x-scroll">
        {/* header */}
        <div className="flex items-center">
          <div className="flex bg-neutralColor-5 text-[12px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className="w-[40px] h-[21px]  mr-[30px]">
              <span>نام</span>
            </div>
            <div className="w-[86px] h-[21px] mr-[78px]">
              <span>نام خانوادگی</span>
            </div>
            <div className="w-[36px] h-[21px] mr-[70px]">
              <span>درصد تسهیم</span>
            </div>
            <div className="w-[150px] h-[21px] mr-[120px]">
              <span>مبلغ تسهیم</span>
            </div>
          </div>
          <div className="w-[48px]  flex items-center justify-center rounded-tl-[6px] rounded-bl-[6px] h-[43px] fixed mr-[290px] bg-neutralColor-5 text-[12px] font-medium text-neutralColor-2">
            <span className="mb-1">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((beneficiarie, index) => {
          return (
            <div key={beneficiarie.uniqueId} className="">
              {/* GroupServices */}
              <div
                className={`flex w-[625px] h-[61px] items-center py-[12px] text-[12px] ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <div className="w-[134px] h-[21px] mr-[20px] flex items-center">
                  <span>{beneficiarie.firstName}</span>
                </div>
                <div className=" h-[21px] ml-[78px] flex items-center ">
                  <span className="w-[100px]">{beneficiarie.lastName}</span>
                </div>
                <div className="w-[140px] h-[21px] ml-[22px] whitespace-pre-wrap flex items-center leading-[24px] ">
                  <span className="whitespace-nowrap truncate cursor-pointer">
                    {beneficiarie.dscNTPrNT}
                  </span>
                </div>
                <div className="w-[140px] h-[21px] ml-[22px] whitespace-pre-wrap flex items-center leading-[24px] ">
                  <span className="whitespace-nowrap truncate cursor-pointer">
                    {beneficiarie.dscNTAMT}
                  </span>
                </div>
              </div>
              {/* operations section */}
              <div
                id={beneficiarie.uniqueId}
                className={`w-[45px] h-[61px] fixed mr-[290px] -mt-[62px] flex items-center pr-3 ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && beneficiarie.uniqueId == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[125px] h-[100px] rounded-[10px] border text-[12px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-7 top-1 ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[5px] p-[10px]"
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
                    onClick={() => openHandler(beneficiarie.uniqueId)}
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
      <div className="z-10 md:hidden -mt-[50px]">
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

export default MobileBeneficiariesTable;

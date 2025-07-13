import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const CommissionTable = ({ commissionList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = commissionList?.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of commissionList) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-[70px] mt-[50px] ">
      <div className=" flex flex-col max-w-[340px] md:max-w-[680px] lg:max-w-[1440px] overflow-x-auto overflow-y-hidden ">
        {/* header */}
        <div className="flex min-w-[1000px]   lg:w-[1070px] h-[60px] bg-neutralColor-5 pt-[6px] ">
          <div className="flex text-[12px] md:text-[16px]  font-medium  text-neutralColor-2 items-center whitespace-nowrap rounded-[6px] h-[43px]">
            <div className="mr-[10px] ">
              <span className="w-[55px] h-[28px] mr-[10px] md:mr-[10px] lg:mr-[10px]">
                وضعیت
              </span>
            </div>
            <div className=" mr-[100px] md:mr-[70px] lg:mr-[90px] ">
              <span className="w-[103px] h-[28px] lg:-mr-[15px]">
                  منبع
              </span>
            </div>
            <div className=" mr-[100px] md:mr-[100px] lg:mr-[90px]">
              <span className="w-[103px] h-[28px]">ذینفع</span>
            </div>
            <div className=" mr-[100px] md:mr-[90px] lg:mr-[70px] ">
              <span className="w-[103px] h-[28px] lg:mr-[30px] ">
                  مصرف کننده
              </span>
            </div>
            <div className=" mr-[100px] md:mr-[60px] lg:mr-[70px]">
              <span className="w-[103px] h-[28px] lg:mr-[20px]">نوع</span>
            </div>
            <div className=" mr-[70px] md:mr-[70px] lg:mr-[50px]">
              <span className="w-[103px] h-[28px]  lg:mr-[40px]">
                قیمت (ریال)
              </span>
            </div>
            <div className=" mr-[80px] md:mr-[45px] lg:mr-[50px]">
              <span className="w-[103px] h-[28px] lg:mr-[10px]">
                service Id
              </span>
            </div>
          </div>
          <div className=" lg:hidden mr-[260px] md:mr-[530px] md:-mt-[5px] w-[81px] md:w-[152px] flex items-center justify-center fixed  rounded-tl-[6px] rounded-bl-[6px] h-[43px] md:h-[60px] bg-neutralColor-5 text-[12px] md:text-[16px]  font-medium text-neutralColor-2">
            <span className="mb-1 lg:hidden">عملیات</span>
          </div>
        </div>
        {/* body */}
        {currentItems?.map((commissionItem, index) => {
          return (
            <div key={commissionItem.id} className="">
              <div
                className={`flex  min-w-[1000px] md:min-w-[1000px]  lg:w-[1070px]  h-[61px] md:h-[70px] lg:h-[91px] items-center py-[12px] text-[12px] md:text-[14px]  ${
                  index % 2 == 0
                    ? "bg-naturalColor-2  "
                    : "bg-neutralColor-5  border-t border-t-neutralColor-4 border-b border-b-neutralColor-4 "
                }`}
              >
                <div
                  className={`w-[60px] h-[37px] md:w-[80px]  md:h-[45px] ml-[60px] md:ml-[105px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                    !commissionItem.isActive
                      ? "bg-errorColor-5 text-errorColor-2"
                      : "bg-successColor-5 text-successColor-2"
                  }`}
                >
                  <span>{commissionItem.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className=" w-[100px] h-[57px] flex items-center  -mr-[5px] md:-mr-[80px]">
                  <span className="mr-[10px] md:mr-[15px] lg:mr-[10px]">
                    {commissionItem.supperNationalId}
                  </span>
                </div>
                <div className=" w-[100px] h-[57px] flex items-center  mr-[30px] md:mr-[30px] lg:mr-[30px] cursor-pointer">
                  <span className="lg:truncate whitespace-nowrap mr-[15px] md:mr-[10px] lg:mr-[10px]">
                    {commissionItem.representativeNationalId}
                  </span>
                </div>
                <div className=" w-[100px] h-[57px] flex items-center whitespace-nowrap mr-[50px] md:mr-[50px]">
                  <span className="mr-[10px] md:mr-[5px] lg:mr-[20px] ">
                    {commissionItem.consumerNationalId}
                  </span>
                </div>
                <div className="w-[70px] h-[57px] flex items-center max-w-[200px] mr-[40px]  md:mr-[30px] lg:mr-[60px]">
                  <span className="max-w-[500px] mr-[15px] md:mr-[10px] lg:mr-[15px] ">
                    {commissionItem.commissionType == 0 ? "پورسانت" : "تخفیف"}
                  </span>
                </div>
                <div className="w-[100px] h-[57px] flex items-center max-w-[200px] mr-[40px]  md:mr-[30px] lg:mr-[30px]">
                  <span className="max-w-[500px] mr-[20px] md:mr-[30px] lg:mr-[40px] ">
                    {formatNumber(commissionItem.amount)}
                  </span>
                </div>
                <div className="w-[100px] h-[57px] flex items-center max-w-[200px] mr-[30px]  md:mr-[20px] lg:mr-[60px]">
                  <Tooltip title={commissionItem.serviceId}>
                    <span className="max-w-[500px] mr-[15px] md:mr-[20px] truncate whitespace-nowrap cursor-pointer  ">
                      {commissionItem.serviceId}
                    </span>
                  </Tooltip>
                </div>
              </div>
              {/* operations section */}
              {/* Mobile&Tablet */}
              <div
                id={commissionItem.id}
                className={`w-[103px] h-[57px] md:h-[60px] mx-auto  -mt-[60px] md:-mt-[65px] flex items-center pr-[45px] lg:hidden ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && commissionItem.id == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[100px] h-[48px] md:w-[115px] md:h-[51px]  rounded-[10px] border text-[12px] md:text-[14px] text-neutralColor-1 font-medium whitespace-nowrap  z-30   border-neutralColor-4 bg-naturalColor-2 fixed mr-[10px] md:mr-[120px] shadow-lg">
                      {/* services */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/financial/commission/updateCommission/${commissionItem.id}`}
                      >
                        <div>
                          <HiEye className="w-6 h-6 fill-primaryColor-1" />
                        </div>
                        <span>ویرایش</span>
                      </Link>
                    </div>
                    <div
                      className={`md:w-[150px] md:h-[48px] w-[80px] h-[48px] flex items-center justify-center fixed mr-[100px] -mt-[25px]  md:mr-[200px] md:-mt-[20px] ${
                        index % 2 == 0
                          ? "bg-naturalColor-2"
                          : "bg-neutralColor-5"
                      }`}
                    >
                      <Image
                        onClick={() => openHandler(commissionItem.id)}
                        className="mb-1"
                        src="/assets/images/multiple.svg"
                        alt="multipleOperation"
                        width={15}
                        height={20}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`md:w-[151px] w-[80px] h-[48px] flex items-center justify-center fixed mr-[100px] md:mr-[197px] ${
                      index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                    }`}
                  >
                    <Image
                      onClick={() => openHandler(commissionItem.id)}
                      className="mb-1 "
                      src="/assets/images/operationDots.svg"
                      alt="operationDots"
                      width={20}
                      height={20}
                    />
                  </div>
                )}
              </div>
              {/* Desktop */}
              <div
                id={commissionItem.id}
                className={`w-[103px] h-[57px]  -mt-[73px] absolute mr-[950px] whitespace-nowrap items-center  hidden lg:flex  ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                <Link
                  className="w-[166px] h-[44px]  flex items-center justify-center border border-primaryColor-1 px-4 py-2 rounded-[5px]"
                  href={`/adminPanel/financial/commission/updateCommission/${commissionItem.id}`}
                >
                  <span className="w-[50px]  text-[16px] text-primaryColor-1 font-medium leading-normal ">
                    ویرایش
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10  -mt-[100px]">
        {commissionList && commissionList.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(commissionList.length / itemsPerPage)}
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

export default CommissionTable;

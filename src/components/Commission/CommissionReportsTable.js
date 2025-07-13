import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
const CommissionReportsTable = ({ commissionData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = commissionData.slice(indexOfFirstItem, indexOfLastItem);
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert your commissionData data to a worksheet
    const ws = XLSX.utils.json_to_sheet(commissionData);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "commissionData");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "commissionData_reports.xlsx");
  };
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center  mt-[20px] ">
      <div className=" lg:flex flex-col w-[327px] md:w-[708px] md:mr-[2px] lg:mr-[80px] lg:w-[1060px] items-center overflow-x-scroll overflow-y-clip lg:overflow-hidden">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[800px] md:w-[1200px] lg:w-[1060px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className=" whitespace-nowrap ">
              <span className="mr-[10px]  lg:mr-[20px]">وضعیت</span>
            </div>
            <div className=" whitespace-nowrap ">
              <span className="mr-[55px] md:mr-[90px] lg:mr-[80px]">
                serviceId
              </span>
            </div>
            <div className=" whitespace-nowrap ">
              <span className="mr-[70px] md:mr-[90px] lg:mr-[80px]">نوع</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[60px] md:mr-[100px] lg:mr-[100px]">منبع</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[100px] md:mr-[90px] lg:mr-[100px]">ذینفع</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[80px] md:mr-[90px] lg:mr-[120px]">
                مصرف کننده
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[50px] md:mr-[60px] lg:mr-[80px]">
                مبلغ (ریال)
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((commission, index) => {
          return (
            <div
              key={commission.id}
              className={` px-[20px] flex w-[800px] md:w-[1200px] lg:w-[1060px] h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div
                className={`w-[120px] h-[37px] md:w-[150px]  md:h-[45px] ml-[60px] md:ml-[105px] -mr-[10px] py-2 rounded-[50px] flex items-center justify-center  ${
                  !commission.isActive
                    ? "bg-errorColor-5 text-errorColor-2"
                    : "bg-successColor-5 text-successColor-2"
                }`}
              >
                <span>{commission.isActive ? "فعال" : "غیرفعال"}</span>
              </div>
              <div className="w-[100px]  md:w-[150px] lg:w-[200px] flex items-center justify-center">
                <span className="-mr-[50px] md:-mr-[90px] lg:-mr-[140px]">
                  {commission.serviceId.slice(0, 8)}
                </span>
              </div>
              <div className=" w-[100px] md:w-[200px] mr-[50px] flex items-center justify-center  md:mr-[5px]  lg:mr-[10px]">
                <span className="whitespace-nowrap truncate cursor-pointer -mr-[80px] md:-mr-[50px] lg:-mr-[150px]">
                  {commission.commissionType == 0 ? "پورسانت" : "تخفیف"}
                </span>
              </div>
              <div className=" w-[100px] md:w-[200px] mr-[50px] flex items-center justify-center  md:mr-[5px]  lg:mr-[10px]">
                <span className="whitespace-nowrap truncate cursor-pointer -mr-[110px] md:-mr-[50px] lg:-mr-[185px]">
                  {commission.supperNationalId}
                </span>
              </div>
              <div className="w-[200px] flex items-center justify-center  mr-[10px] md:-mr-[5px] lg:mr-[10px]  ">
                <span className="-mr-[75px] md:-mr-[40px] lg:-mr-[175px]">
                  {commission.representativeNationalId}
                </span>
              </div>
              <div className="w-[50px] flex items-center justify-center mr-[20px] md:mr-[40px] lg:mr-[50px] ">
                <span className="-mr-[20px] md:-mr-[10px] lg:-mr-[80px]">
                  {commission.consumerNationalId}
                </span>
              </div>
              <div className="w-[180px] md:w-[300px] lg:w-[250px] lg:flex flex items-center justify-center">
                <span className=" mr-[50px] lg:mr-[50px] md:mr-[50px]  whitespace-nowrap truncate cursor-pointer">
                  {formatNumber(commission.amount)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <button
        variant="outlined"
        onClick={handleExportToExcel}
        className="-mt-[50px] -mr-[180px] md:-mr-[560px]  md:-mt-[60px]   lg:-mr-[850px]  rounded-[5px] text-center px-[16px] text-successColor-1 text-[14px] font-medium  h-[48px] w-[137px] border border-successColor-1 whitespace-nowrap z-50  "
      >
        <div className="flex gap-x-[5px] items-center justify-center ">
          <SiMicrosoftexcel className="w-6 h-6 fill-successColor-1" />
          <span>خروجی Excel</span>
        </div>
      </button>
      <div className="z-10 block overflow-y-clip -mt-[80px] md:-mt-[90px]">
        {commissionData && commissionData.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(commissionData.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                size="small"
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

export default CommissionReportsTable;

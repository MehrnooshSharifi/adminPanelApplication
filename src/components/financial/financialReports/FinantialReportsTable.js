import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from "xlsx";
const FinancialReportsTable = ({ financialReports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = financialReports.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
    const handleExportToExcel = () => {
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Convert your financialReports data to a worksheet
      const ws = XLSX.utils.json_to_sheet(financialReports);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "FinancialReports");

      // Save the workbook as an Excel file
      XLSX.writeFile(wb, "financial_reports.xlsx");
    };
  return (
    <div className="flex flex-col gap-y-[70px] items-center  mt-[20px] ">
      <div className=" lg:flex flex-col w-[327px] md:w-[675px] md:-mr-[30px] lg:mr-[40px] lg:w-[1030px] items-center overflow-x-scroll overflow-y-clip lg:overflow-hidden">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[800px] md:w-[1200px] lg:w-[1030px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className=" whitespace-nowrap ">
              <span className="mr-[30px] lg:mr-[30px]">نوع تراکنش</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[70px] md:mr-[100px] lg:mr-[110px]">
                تاریخ و ساعت
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[50px] md:mr-[80px]">مبلغ بستانکاری</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[35px] md:mr-[90px] lg:mr-[90px]">
                مبلغ بدهکاری
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[60px] md:mr-[120px] lg:mr-[100px]">
                توضیحات
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((financialReport, index) => {
          return (
            <div
              key={index}
              className={` px-[20px] flex w-[800px] md:w-[1200px] lg:w-[1030px] h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div
                className={`w-[200px] md:w-[150px] lg:w-[200px]   rounded-[100px] py-3 px-2 flex items-center justify-center whitespace-nowrap ${
                  financialReport.transactionNameDesc === "خرید"
                    ? "bg-successColor-5 text-successColor-2"
                    : financialReport.transactionNameDesc == "تراکنش بازگشتی"
                    ? "bg-errorColor-5 text-errorColor-2"
                    : financialReport.transactionNameDesc == "افزایش اعتبار"
                    ? "bg-primaryColor-5 text-primaryColor-2"
                    : financialReport.transactionNameDesc == "بازگشت از اعتبار"
                    ? "bg-secondaryColor-5 text-naturalColor-1"
                    : financialReport.transactionNameDesc ==
                      "مالیات ارزش افزوده"
                    ? "bg-purple-100 text-purple-700"
                    : ""
                }`}
              >
                <span className="">{financialReport.transactionNameDesc}</span>
              </div>
              <div className="w-[150px] mr-[50px]  md:mr-[80px] md:whitespace-nowrap lg:mr-[70px]">
                <span className="">
                  {financialReport.documentDate} {financialReport.documentTime}
                </span>
              </div>
              <div className="w-[200px] mr-[50px] md:mr-[100px] lg:mr-[120px]">
                <span className="">{financialReport.amountBes}</span>
              </div>
              <div className="w-[200px] mr-[20px] lg:mr-[50px]">
                <span className="">{financialReport.amountBed}</span>
              </div>
              <div className=" w-[250px] h-[76px] ml-[54px] flex items-center leading-[24px] lg:flex ">
                <Tooltip title={financialReport.documentDesc}>
                  <span className="lg:mr-[20px] w-[150px] whitespace-nowrap truncate cursor-pointer">
                    {financialReport.documentDesc}
                  </span>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
        <button
          variant="outlined"
          onClick={handleExportToExcel}
          className="mt-[420px] md:mt-[520px] rounded-[5px] text-center px-[16px] text-successColor-1 text-[14px] font-medium  h-[48px] w-[137px] border border-successColor-1 whitespace-nowrap z-50 absolute -mr-[180px] md:-mr-[570px] lg:-mr-[850px]  "
        >
          <div className="flex gap-x-[5px] items-center justify-center ">
            <SiMicrosoftexcel className="w-6 h-6 fill-successColor-1" />
            <span>خروجی Excel</span>
          </div>
        </button>
        <div className="z-10 block overflow-y-clip -mt-[10px] md:-mt-[70px]">
          {financialReports && financialReports.length > 6 && (
            <Pagination
              siblingCount={0}
              color="primary"
              size="medium"
              count={Math.ceil(financialReports.length / itemsPerPage)}
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

export default FinancialReportsTable;

import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
const MOHReportTable = ({ mohReports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mohReports.slice(indexOfFirstItem, indexOfLastItem);
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert your mohReports data to a worksheet
    const ws = XLSX.utils.json_to_sheet(mohReports);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "MOHReports");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "MOH_reports.xlsx");
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center  mt-[20px] ">
      <div className=" lg:flex flex-col w-[327px] md:w-[708px] md:mr-[2px] lg:mr-[80px] lg:w-[1060px] items-center overflow-x-scroll overflow-y-clip lg:overflow-hidden">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[1000px] md:w-[1200px] lg:w-[1060px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className=" whitespace-nowrap ">
              <span className="mr-[10px] md:mr-[20px] lg:mr-[10px]">
                کد/شناسه ملی
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[60px] md:mr-[20px] lg:mr-[30px]">
                شماره ترمینال
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[90px] md:mr-[70px] lg:mr-[60px]">
                نام سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[140px] md:mr-[90px] lg:mr-[100px]">
                تاریخ درخواست
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[90px] md:mr-[100px] lg:mr-[80px]">
                توضیحات
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[135px] md:mr-[130px] lg:mr-[155px]">
                وضعیت
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((MohReport, index) => {
          return (
            <div
              key={MohReport.id}
              className={` px-[20px] flex w-[1000px] md:w-[1200px] lg:w-[1060px] h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div className="w-[100px]  md:w-[150px] lg:w-[200px] flex items-center justify-center">
                <span className="mr-[10px]  lg:-mr-[60px]">
                  {MohReport.userId}
                </span>
              </div>
              <div className="w-[100px]  md:w-[150px] lg:w-[200px] flex items-center justify-center">
                <span className="mr-[60px] md:-mr-[90px] lg:-mr-[150px]">
                  {MohReport.terminalId}
                </span>
              </div>
              <div className=" w-[200px] md:w-[200px] mr-[20px] flex items-center justify-center  md:-mr-[80px]  lg:-mr-[120px]">
                <Tooltip title={MohReport.serviceName}>
                  <span className="w-[200px] whitespace-nowrap truncate cursor-pointer mr-[50px] ">
                    {MohReport.serviceName}
                  </span>
                </Tooltip>
              </div>
              <div className="w-[200px] flex items-center justify-center  mr-[20px] md:-mr-[5px] lg:mr-[10px]  ">
                <span className="">{MohReport.logDateTime}</span>
              </div>
              <div className="w-[180px] md:w-[200px] lg:w-[200px] lg:flex flex items-center justify-center">
                <Tooltip title={MohReport.serviceDesc}>
                  <span className="mr-[10px] md:-mr-[40px]  lg:mr-[10px]  whitespace-nowrap truncate cursor-pointer">
                    {MohReport.serviceDesc}
                  </span>
                </Tooltip>
              </div>
              <div className="w-[100px]  md:w-[150px] lg:w-[200px] flex items-center justify-center">
                <span
                  className={`mr-[10px] md:-mr-[10px] lg:mr-[5px] ${
                    MohReport.resCode == 0
                      ? "text-successColor-2"
                      : "text-errorColor-2"
                  }`}
                >
                  {MohReport.resCode == 0 ? "موفق" : "نا موفق "}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <button
        variant="outlined"
        onClick={handleExportToExcel}
        className="-mt-[50px] -mr-[180px] md:-mr-[560px]  md:-mt-[60px]   lg:-mr-[850px]  rounded-[5px] text-center px-[16px] text-successColor-1 text-[14px] font-medium  h-[48px] w-[137px] border border-successColor-1 whitespace-nowrap z-30  "
      >
        <div className="flex gap-x-[5px] items-center justify-center ">
          <SiMicrosoftexcel className="w-6 h-6 fill-successColor-1" />
          <span>خروجی Excel</span>
        </div>
      </button>
      <div className="z-10 block overflow-y-clip -mt-[80px] md:-mt-[90px]">
        {mohReports && mohReports.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(mohReports.length / itemsPerPage)}
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

export default MOHReportTable;

import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
const CallServicesReportsTable = ({ callServicesReports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = callServicesReports.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert your callServicesReports data to a worksheet
    const ws = XLSX.utils.json_to_sheet(callServicesReports);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "callServicesReports");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "callServices_reports.xlsx");
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center  mt-[20px] ">
      <div className=" lg:flex flex-col w-[327px] md:w-[708px] md:mr-[2px] lg:mr-[80px] lg:w-[1060px] items-center overflow-x-scroll overflow-y-clip lg:overflow-hidden">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[800px] md:w-[1200px] lg:w-[1060px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className=" whitespace-nowrap ">
              <span className="mr-[30px] md:mr-[50px] lg:mr-[50px]">scope</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[100px] md:mr-[120px] lg:mr-[170px]">
                نام سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[80px] md:mr-[100px] lg:mr-[100px]">
                تاریخ فراخوانی سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[50px] md:mr-[40px] lg:mr-[50px]">
                پاسخ سرویس
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[80px] md:mr-[120px] lg:mr-[70px]">
                توضیحات
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((callServiceReport, index) => {
          return (
            <div
              key={callServiceReport.id}
              className={` px-[20px] flex w-[800px] md:w-[1200px] lg:w-[1060px] h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div className="w-[100px]  md:w-[150px] lg:w-[200px] flex items-center justify-center">
                <span className="lg:-mr-[60px]">
                  {callServiceReport.publicAppId.slice(0, 8)}
                </span>
              </div>
              <div className=" w-[100px] md:w-[200px] mr-[50px] flex items-center justify-center  md:mr-[5px]  lg:mr-[10px]">
                <Tooltip title={callServiceReport.serviceName}>
                  <span className="whitespace-nowrap truncate cursor-pointer">
                    {callServiceReport.serviceName}
                  </span>
                </Tooltip>
              </div>
              <div className="w-[200px] flex items-center justify-center  mr-[10px] md:-mr-[5px] lg:mr-[10px]  ">
                <span className="">{callServiceReport.logDateTime}</span>
              </div>
              <div className="w-[50px] flex items-center justify-center mr-[20px] md:mr-[40px] lg:mr-[50px] ">
                <span className="">{callServiceReport.publicResCode}</span>
              </div>
              <div className="w-[180px] md:w-[300px] lg:w-[250px] lg:flex flex items-center justify-center">
                <Tooltip title={callServiceReport.serviceDesc}>
                  <span className=" mr-[50px] lg:mr-[50px] md:mr-[50px]  whitespace-nowrap truncate cursor-pointer">
                    {callServiceReport.serviceDesc}
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
        className="-mt-[50px] -mr-[180px] md:-mr-[560px]  md:-mt-[60px]   lg:-mr-[850px]  rounded-[5px] text-center px-[16px] text-successColor-1 text-[14px] font-medium  h-[48px] w-[137px] border border-successColor-1 whitespace-nowrap z-30  "
      >
        <div className="flex gap-x-[5px] items-center justify-center ">
          <SiMicrosoftexcel className="w-6 h-6 fill-successColor-1" />
          <span>خروجی Excel</span>
        </div>
      </button>
      <div className="z-10 block overflow-y-clip -mt-[80px] md:-mt-[90px]">
        {callServicesReports && callServicesReports.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(callServicesReports.length / itemsPerPage)}
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

export default CallServicesReportsTable;

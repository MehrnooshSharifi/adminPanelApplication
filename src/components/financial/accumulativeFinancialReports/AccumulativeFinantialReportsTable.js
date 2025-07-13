import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa6";
import moment from "jalali-moment";
import "jspdf-autotable";
const AccumulativeFinantialReportsTable = ({
  accumulativeFinancialReports,
  startvalue,
  endvalue,
  formik,
}) => {
  const nationalCode = formik.values.nationalCode;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = accumulativeFinancialReports.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert your financialReports data to a worksheet
    const ws = XLSX.utils.json_to_sheet(accumulativeFinancialReports);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "AccumulativeFinancialReports");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "Accumulative_FinancialReports.xlsx");
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    const totalSum = accumulativeFinancialReports.reduce(
      (acc, current) => acc + parseInt(current.sum),
      0
    );
    // const totalSumFormatted = totalSum.toLocaleString();
    const numberWithCommas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    doc.addFileToVFS("/assets/font/iranyekanwebboldfanum.ttf");
    doc.addFont(
      "/assets/font/iranyekanwebboldfanum.ttf",
      "PersianFont",
      "normal"
    );
    doc.setFont("PersianFont");
    const headerHeight = 20; // Height of the header

    const topMargin = 35;
    const totalPages = Math.ceil(
      accumulativeFinancialReports.length / itemsPerPage
    );
    // Add custom header with logo
    const imgWidth = 30; // Adjust the width of the logo as needed
    const imgHeight = 12; // Adjust the height of the logo as needed
    const xCoordinateLogo = doc.internal.pageSize.width - imgWidth - 10;

    const headerContent = () => {
      // Set background color
      doc.setFillColor(250, 250, 250); // Set fill color to primaryColor (RGB: 250, 250, 250)

      // Draw a rectangle as the header background
      doc.rect(0, 0, doc.internal.pageSize.width, 30, "F"); // Adjust the height of the rectangle as needed

      // Reset fill color
      doc.setFillColor(0);

      const currentDate = moment().locale("fa").format("YYYY/MM/DD"); // Format date as 'YYYY/MM/DD' in Persian
      const reportDayText = `تاریخ تهیه گزارش : ${currentDate}`; // Text for report date
      // Add report date on the left side
      doc.setFontSize(10); // Set font size to 10
      doc.text(reportDayText, 28, 8); // Adjust the Y coordinate as needed

      // CodeMelli :
      const codeMelli = `کد ملی : ${nationalCode}`; // Text for report date
      // Add report date on the left side
      doc.setFontSize(10); // Set font size to 10
      doc.text(codeMelli, 42, 16); // Adjust the Y coordinate as needed

      // Add start and end values below the report date
      const startEndText = `از تاریخ : ${startvalue}  تا تاریخ : ${endvalue}`;
      doc.setFontSize(10); // Set font size to 10
      doc.text(startEndText, 12, 24); // Adjust the Y coordinate as needed

      doc.addImage(
        "/assets/images/pngLogo.png",
        "PNG",
        xCoordinateLogo,
        10,
        imgWidth,
        imgHeight
      );

      // Add title on the right side
      const customText = "گزارش مالی تجمیعی";
      const textWidth = doc.getStringUnitWidth(customText) * 12; // Calculate the width of the text in points (assuming font size 12)
      const xCoordinateText = doc.internal.pageSize.width - textWidth - 20; // Calculate the X coordinate to position the text on the right side
      doc.setTextColor(0, 0, 0); // Set text color to black (RGB: 0, 0, 0)
      doc.setFontSize(14);
      doc.text(customText, xCoordinateText, 16);
      doc.setTextColor(0);
    };

    // Add custom footer
    const footerContent = (pageNum) => {
      const text = `Page ${pageNum} of ${totalPages}`;
      const textWidth =
        (doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      const x = (doc.internal.pageSize.width - textWidth) / 2;
      const y = doc.internal.pageSize.height - 4;

      doc.setFontSize(10);
      doc.text(text, x, y);
    };
    for (let i = 0; i < totalPages; i++) {
      if (i > 0) {
        doc.addPage();
      }

      // Add custom header to each page
      headerContent();

      // Add custom footer to each page
      footerContent(i + 1);
      const columns = [
        {
          header: "(جمع کل)ریال",
          dataKey: "sum",
          width: 30,
        },
        { header: "تعداد فراخوانی شده", dataKey: "countService", width: 30 },
        { header: "(مبلغ)ریال", dataKey: "defaultPrice", width: 35 },
        { header: "نام سرویس", dataKey: "serviceName", width: 70 },
        { header: "ردیف", dataKey: "index", width: 10 }, // New column definition
      ];

      const rows = accumulativeFinancialReports
        .slice(i * itemsPerPage, (i + 1) * itemsPerPage)
        .map((report, index) => ({
          // Include index for each row
          index: i * itemsPerPage + index + 1, // Calculate the index
          sum: numberWithCommas(report.sum),
          countService: report.countService,
          defaultPrice: numberWithCommas(report.defaultPrice),
          serviceName: report.serviceName,
        }));
      doc.autoTable({
        head: [columns.map((column) => column.header)],
        body: rows.map((row) => columns.map((column) => row[column.dataKey])),
        startY: topMargin,
        margin: { top: headerHeight + 10 },
        styles: {
          font: "PersianFont",
          fontSize: 10,
          direction: "rtl",
          halign: "center",
          cellPadding: { top: 3, right: 0, bottom: 3, left: 1 },
          overflow: "linebreak",
          minCellWidth: "auto",
        },
        columnStyles: {
          0: { cellWidth: columns[0].width }, // Set width for each column
          1: { cellWidth: columns[1].width },
          2: { cellWidth: columns[2].width },
          3: { cellWidth: columns[3].width },
        },
        headStyles: { fillColor: [100, 100, 100] },
        bodyStyles: { cellPadding: 1 },
        didDrawCell: (data) => {
          const cell = data.cell;
          // const row = data.row;
          // const column = data.column;
          // const settings = data.settings;

          doc.setLineWidth(0.1);
          doc.setDrawColor(0);
          doc.line(cell.x, cell.y, cell.x + cell.width, cell.y); // Top border
          doc.line(
            cell.x,
            cell.y + cell.height,
            cell.x + cell.width,
            cell.y + cell.height
          ); // Bottom border
          doc.line(cell.x, cell.y, cell.x, cell.y + cell.height); // Left border
          doc.line(
            cell.x + cell.width,
            cell.y,
            cell.x + cell.width,
            cell.y + cell.height
          ); // Right border
        },
      });
      // Add custom footer to the last page
      if (i === totalPages) {
        footerContent(i + 1);
      }
      if (i === totalPages - 1) {
        const totalRow = {
          sum: numberWithCommas(totalSum),
          countService: "", // You can leave other fields empty or fill them as needed
          defaultPrice: "",
          serviceName: "جمع نهایی", // You can add a label for the total row if needed
        };
        doc.autoTable({
          body: [columns.map((column) => totalRow[column.dataKey])],
          startY: doc.autoTable.previous.finalY + 10,
          styles: {
            font: "PersianFont",
            fontSize: 12,
            direction: "rtl",
            halign: "center",
            cellPadding: { top: 2, right: 10, bottom: 2, left: 10 },
            overflow: "linebreak",
            minCellWidth: "auto",
          },
        });
      }
    }

    // Save the PDF
    doc.save("Accumulative_FinancialReports.pdf");
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center  mt-[20px] ">
      <div className=" lgflex flex-col w-[327px] md:w-[675px] md:-mr-[30px] lg:mr-[40px] lg:w-[1030px] items-center overflow-x-scroll overflow-y-clip lg:overflow-hidden">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[800px] md:w-[1200px] lg:w-[1030px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className=" whitespace-nowrap ">
              <span className="mr-[30px] lg:mr-[60px]">نام سرویس</span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[190px] md:mr-[270px] lg:mr-[200px]">
                مبلغ
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[65px] md:mr-[120px] lg:mr-[120px]">
                تعداد فراخوانی شده
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[105px] md:mr-[155px] lg:mr-[150px]">
                جمع کل
              </span>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="overflow-y-scroll overflow-x-hidden w-[800px] md:w-[1200px] lg:w-[1030px] h-[500px]">
          {currentItems.map((accumulative, index) => {
            return (
              <div
                key={index}
                className={`px-[20px] flex w-[800px] md:w-[1200px] lg:w-[1030px] h-[40px] md:h-[50px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div className=" w-[250px] h-[76px] ml-[54px] flex items-center leading-[24px] lg:flex ">
                  <Tooltip title={accumulative.serviceName}>
                    <span className="lg:mr-[20px] w-[150px] whitespace-nowrap truncate cursor-pointer">
                      {accumulative.serviceName}
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[150px] mr-[50px]  md:mr-[80px] md:whitespace-nowrap lg:mr-[70px]">
                  <span className="">{accumulative.defaultPrice}</span>
                </div>
                <div className="w-[200px] mr-[50px] md:mr-[100px] lg:mr-[120px]">
                  <span className="">{accumulative.countService}</span>
                </div>
                <div className="w-[200px] mr-[20px] lg:mr-[50px]">
                  <span className="">{accumulative.sum}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-x-[20px] -mr-[250px] md:-mr-[600px] lg:-mr-[850px] -mt-[60px]">
        <div
          variant="outlined"
          onClick={handleExportToExcel}
          className="flex gap-x-[5px] items-center justify-center cursor-pointer"
        >
          <SiMicrosoftexcel className=" w-6 h-6 md:w-10 md:h-10 fill-successColor-1" />
          {/* <span>خروجی Excel</span> */}
        </div>
        <div
          className="flex gap-x-[5px] items-center justify-center cursor-pointer "
          variant="outlined"
          onClick={handleExportToPDF}
        >
          <FaFilePdf className=" w-6 h-6 md:w-10 md:h-10 fill-errorColor-1" />
          {/* <span className="opacity-0 md:opacity-100"> Export PDF</span> */}
        </div>
      </div>
      <div className="z-10 block overflow-y-clip -mt-[10px] md:-mt-[100px]">
        {accumulativeFinancialReports &&
          accumulativeFinancialReports.length > 20 && (
            <Pagination
              siblingCount={0}
              color="primary"
              size="medium"
              count={Math.ceil(
                accumulativeFinancialReports.length / itemsPerPage
              )}
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

export default AccumulativeFinantialReportsTable;

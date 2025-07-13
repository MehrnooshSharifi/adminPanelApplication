import { Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const LoginReportsTable = ({ loginReports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = loginReports.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" lg:flex flex-col max-w-[343px] md:max-w-[566px]  lg:max-w-[577px] items-center">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[343px] md:w-[566px] lg:w-[577px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[20px] md:gap-x-[100px] lg:gap-x-[106px]">
            <div className="w-[40px]">
              <span className="mr-[20px] lg:mr-4">تاریخ</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="mr-[80px] md:mr-[100px]">ساعت</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[120px] md:mr-[155px] lg:mr-[155px]">IP</span>
            </div>
          </div>
        </div>
        {/* body */}
        {currentItems.map((loginReport, index) => {
          return (
            <div
              key={loginReport.id}
              className={` px-[20px] flex w-[343px] md:md:w-[566px] lg:w-[577px] h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[27.64px] gap-x-[20px] md:gap-x-[100px] lg:gap-x-[106px] ${
                index % 2 === 0
                  ? "bg-naturalColor-2"
                  : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
              }`}
            >
              <div className="w-[99px]">
                <span className="mr-2">{loginReport.dateTime}</span>
              </div>
              <div className="w-[99px] mr-[40px] whitespace-nowrap">
                <span className="">{loginReport.time}</span>
              </div>
              <div className="mr-[40px] w-[99px]">
                <span className="">{loginReport.ip}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-10 block overflow-y-clip -mt-[90px] md:-mt-[80px]">
        {loginReports && loginReports.length > 6 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(loginReports.length / itemsPerPage)}
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

export default LoginReportsTable;

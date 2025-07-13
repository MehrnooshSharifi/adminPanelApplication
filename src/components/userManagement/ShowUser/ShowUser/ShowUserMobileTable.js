import Link from "next/link";
import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TbListDetails } from "react-icons/tb";
const ShowUserMobileTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedId, setSelectedId] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of users) {
      if (element.nationalCode === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" md:hidden flex flex-col  justify-center max-w-[334px] max-h-[467px] overflow-x-scroll">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[700px] ">
          <div className=" pr-4 flex items-center text-[12px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px]">
            <div className="w-[40px]">
              <span className="-mr-2">نام</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="mr-[35px]">نام خانوادگی</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[80px]">کد/شناسه ملی</span>
            </div>
            <div className="w-[100px]">
              <span className="mr-[170px] whitespace-nowrap">مانده موجودی</span>
            </div>
            <div className="w-[62px]">
              <span className="mr-[200px] whitespace-nowrap">سود پول</span>
            </div>
          </div>
          <div className="  flex items-center justify-center rounded-[6px] h-[10px] absolute mr-[250px] bg-neutralColor-5 text-[12px] font-medium text-neutralColor-2">
            <span className="mr-[102px] bg-neutralColor-5 whitespace-nowrap absolute w-[89px] h-[27px] mt-[25px] text-center flex items-center justify-center ">
              عملیات
            </span>
          </div>
        </div>
        {/* body */}
        {currentItems.map((user, index) => {
          return (
            <div key={user.nationalCode}>
              <div
                className={` px-[20px] flex w-[700px] h-[70px] items-center py-[23px]  text-[12px] text-neutralColor-1 leading-[27.64px] gap-x-[10px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div className="w-[99px]">
                  <span className="">{user.firstName}</span>
                </div>
                <div className="w-[99px]  flex items-center   ">
                  <Tooltip title={user.lastName}>
                    <span className="w-[60px] whitespace-nowrap truncate cursor-pointer">
                      {user.lastName}
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[99px] mr-[20px]">
                  <span className="">{user.nationalCode}</span>
                </div>
                <div className="w-[99px]">
                  <span className="mr-[40px]">{user.account?.balance}</span>
                </div>
                <div className="w-[89px]">
                  <span className="mr-[70px]">
                    {user.account?.benefitAmount}
                  </span>
                </div>
              </div>
              <div
                id={user.nationalCode}
                className={`w-[70px] h-[51px] absolute mr-[265px] -mt-[62px] flex items-center pr-3  justify-center ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && user.nationalCode == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[125px] h-[100px] rounded-[10px] border text-[12px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-[50px] -top-[40px] ">
                      {/* edit */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[5px] p-[10px]"
                        href={`/adminPanel/userManagement/showUsers/userInfoDetails/${user.nationalCode}`}
                      >
                        <div>
                          <TbListDetails className="w-4 h-4 stroke-primaryColor-1" />
                        </div>
                        <span>جزییات</span>
                      </Link>
                      <hr />
                      {/* services */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/userManagement/showUsers/userApplications/${user.nationalCode}`}
                      >
                        <div>
                          <Image
                            src="/assets/images/servicesSubOperation.svg"
                            width={16}
                            height={16}
                            alt="servicesSubOperation"
                          />
                        </div>
                        <span>اپلیکیشن ها</span>
                      </Link>
                    </div>
                    <Image
                      onClick={() => openHandler(user.nationalCode)}
                      className="mb-1 "
                      src="/assets/images/multiple.svg"
                      alt="multipleOperation"
                      width={13.3}
                      height={3.5}
                    />
                  </div>
                ) : (
                  <Image
                    onClick={() => openHandler(user.nationalCode)}
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
      <div className="z-10 md:hidden -mt-[80px]">
        {users && users.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(users.length / itemsPerPage)}
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

export default ShowUserMobileTable;

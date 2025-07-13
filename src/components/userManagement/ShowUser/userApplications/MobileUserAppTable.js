import { Pagination, PaginationItem, Tooltip } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import toast from "react-hot-toast";
import { ResetApplicationPass } from "@/src/server/Service";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { MdOutlineLockReset } from "react-icons/md";
const MobileUserAppTable = ({ userApps }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userApps.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedId, setSelectedId] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const openHandler = (id) => {
    for (let element of userApps) {
      if (element.id === id) {
        setSelectedId(id);
        setIsOpen(!isOpen);
      }
    }
  };
  const resetAppPassHandler = async (userId, publicAppId) => {
    try {
      const res = await ResetApplicationPass(userId, publicAppId);
      if (res.isSuccess) {
        toast.success(res.message, {
          duration: 4000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          className: "",
          icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
        });
      } else {
        toast.error(res.message, {
          duration: 4000,
          style: {
            backgroundColor: "#EE3A01",
            color: "#fff",
          },
          className: "",
          icon: <VscError className="w-[28px] h-[28px]" />,
        });
      }
    } catch (error) {
      toast.error("عملیات نا موفق", {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
  };
  return (
    <div className="flex flex-col gap-y-[70px] items-center">
      <div className=" md:hidden flex flex-col  justify-center max-w-[334px] max-h-[467px] overflow-x-scroll">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[700px] ">
          <div className=" pr-4 flex items-center text-[12px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px]">
            <div className="w-[40px]">
              <span className="-mr-2">وضعیت</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="mr-[40px]">کد/شناسه ملی کاربر</span>
            </div>
            <div className="w-[75px] whitespace-nowrap">
              <span className="mr-[130px]">نام اپلیکیشن</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[200px]">آدرس</span>
            </div>
            <div className="w-[52px] whitespace-nowrap">
              <span className="mr-[250px]">IP</span>
            </div>
          </div>
          <div className="  flex items-center justify-center rounded-[6px] h-[10px] absolute mr-[250px] bg-neutralColor-5 text-[12px] font-medium text-neutralColor-2">
            <span className="mr-[102px] bg-neutralColor-5 whitespace-nowrap absolute w-[60px] h-[27px] mt-[25px] text-center flex items-center justify-center ">
              عملیات
            </span>
          </div>
        </div>
        {/* body */}
        {currentItems.map((app, index) => {
          return (
            <div key={app.id}>
              <div
                className={` px-[20px] flex w-[700px] h-[70px] items-center py-[23px]  text-[12px] text-neutralColor-1 leading-[27.64px] gap-x-[10px] ${
                  index % 2 === 0
                    ? "bg-naturalColor-2"
                    : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
                }`}
              >
                <div
                  className={`w-[55px] h-[37px]  ml-[60px] mr-[10px] py-2 rounded-[50px] flex items-center justify-center cursor-pointer ${
                    app.isActive
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  <span>{app.isActive ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="w-[99px]">
                  <span className="-mr-[10px] whitespace-nowrap">
                    {app.userId}
                  </span>
                </div>
                <div className="w-[99px]">
                  <span className="mr-[40px] whitespace-nowrap">
                    {app.publicApp.appName}
                  </span>
                </div>
                <div className="w-[99px] mr-[80px]">
                  <span className="">{app.publicApp.appRetAddr}</span>
                </div>
                <div className="w-[100px] -mr-[10px]">
                  <span className="">{app.publicApp.appIp}</span>
                </div>
              </div>
              <div
                id={app.id}
                className={`w-[70px] h-[51px] absolute mr-[265px] -mt-[62px] flex items-center pr-3  justify-center ${
                  index % 2 == 0 ? "bg-naturalColor-2" : "bg-neutralColor-5"
                }`}
              >
                {!isOpen && app.id == selectedId ? (
                  <div className="flex items-baseline relative">
                    <div className="flex flex-col w-[125px] h-[100px] rounded-[10px] border text-[12px] text-neutralColor-1 font-medium whitespace-nowrap  z-50   border-neutralColor-4 bg-naturalColor-2 absolute  bottom-5 left-[50px] -top-[40px] ">
                      {/* edit */}
                      <button
                        onClick={() =>
                          resetAppPassHandler(app.userId, app.publicAppId)
                        }
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[5px] p-[10px]"
                      >
                        <MdOutlineLockReset className="w-5 h-5 fill-primaryColor-1" />
                        <span>بازیابی رمز</span>
                      </button>
                      <hr />
                      {/* services */}
                      <Link
                        className="flex items-center justify-start w-[103px] h-[49px] gap-x-[10px] p-[10px]"
                        href={`/adminPanel/userManagement/showUsers/userApplications/${app.userId}/userServices/${app.publicAppId}`}
                      >
                        <div>
                          <Image
                            src="/assets/images/servicesSubOperation.svg"
                            width={16}
                            height={16}
                            alt="servicesSubOperation"
                          />
                        </div>
                        <span>سرویس ها</span>
                      </Link>
                    </div>
                    <Image
                      onClick={() => openHandler(app.id)}
                      className="mb-1 "
                      src="/assets/images/multiple.svg"
                      alt="multipleOperation"
                      width={13.3}
                      height={3.5}
                    />
                  </div>
                ) : (
                  <Image
                    onClick={() => openHandler(app.id)}
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
        {userApps && userApps.length > 5 && (
          <Pagination
            siblingCount={0}
            color="primary"
            size="medium"
            count={Math.ceil(userApps.length / itemsPerPage)}
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

export default MobileUserAppTable;

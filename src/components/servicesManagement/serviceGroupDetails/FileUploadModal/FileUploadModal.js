import { UploadHelpFile } from "@/src/server/Service";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillXCircleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";

const FileUploadModal = ({ setShowUploadFileModal, selectedServiceId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append("file", selectedFile);
    const res = await UploadHelpFile(formdata, selectedServiceId);
    if (res.isSuccess) {
      setIsLoading(false);
      toast.success(res.message, {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      setShowUploadFileModal(false);
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
      setIsLoading(false);
    }
  };
  const changeFileHandler = (e) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const removeFileHandler = () => {
    setSelectedFile(null);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[320px] h-[449px] md:w-[436px] md:h-[494.89px]  absolute top-[200px] lg:w-[436px] lg:h-[510.22px] bg-naturalColor-2 p-5 animate-slideInDown animate-duration-500 z-50 rounded-[10px]"
      >
        <div className="flex flex-col">
          {/* Title&closeIcon */}
          <div className="flex gap-x-[200px] md:gap-x-[290px] mb-[20px]">
            <span className="text-[14px] whitespace-nowrap font-bold leading-[24.18px] md:text-[18px] md:leading-[31.09px] lg:text-[20px] lg:leading-[34.55px]">
              آپلود فایل
            </span>
            <MdOutlineClose
              className="w-4 h-4 md:w-7 md:h-7 cursor-pointer "
              onClick={() => setShowUploadFileModal(false)}
            />
          </div>
          {/* choose file section */}
          <div
            className={`w-[280px] h-[212px] md:w-[396px] bg-neutralColor-5 border-2 border-dashed rounded-[5px] border-primaryColor-1 rounded-5px pt-[74.5px] mb-[37.64px] ${
              selectedFile && "cursor-not-allowed disabled opacity-30"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-y-[10px] ">
              {/* uploadFileImage */}
              <input
                type="file"
                className={`h-[150px] opacity-0 cursor-pointer ${
                  selectedFile && "hidden"
                }`}
                onChange={changeFileHandler}
              />
              <Image
                className={`-mt-[170px] ${selectedFile && "-mb-[185px]"}`}
                alt="uploadFile"
                src="/assets/images/uploadFile.svg"
                width={32}
                height={32}
              />
              <span className="text-[12px] text-neutralColor-1 font-medium md:text-[16px] leading-[20.73px] md:leading-[27.64px] absolute top-[180px]">
                لطفاً فایل مورد نظر را انتخاب کنید
              </span>
            </div>
          </div>
          {/* UploadedFile section */}
          <div className="flex flex-col w-[279px] h-[42.76px] md:w-[396px] md:h-[71.49px] border border-neutralColor-4 relative rounded-[5px] mb-[20px]">
            <span className="w-[109px]  text-[12px] md:text-[14px] font-medium text-neutralColor-2 absolute -top-[15px] mr-[6px] bg-naturalColor-2 flex justify-center">
              فایل آپلود شده
            </span>
            {selectedFile && (
              <div className="flex items-center md:justify-start  absolute top-2 md:top-[12px] w-fit h-[27px]  md:h-[44px]  md:rounded-[30px] rounded-[15px] border border-secondaryColor-1 mr-[7.88px] gap-x-[5px] md:gap-x-[15px] justify-center md:pr-[2px]">
                <BsFillXCircleFill
                  onClick={removeFileHandler}
                  className="fill-errorColor-1 w-4 h-4 md:w-[30px] md:h-[30px] mr-2 cursor-pointer"
                />
                <span className="whitespace-nowrap text-[12px] md:text-[16px] px-[7px] md:-mr-3 ">
                  {`${selectedFile.name}`}
                </span>
              </div>
            )}
          </div>
          {/* SendFileButton */}
          <button
            type="submit"
            className={`bg-primaryColor-1 text-naturalColor-2 text-[12px] font-bold flex items-center justify-center rounded-[5px] w-[280px] h-[37px] md:w-[396px] md:h-[48px] md:text-[16px] leading-[20.73px] md:leading-[27.64px]
            ${!selectedFile && "cursor-not-allowed disabled opacity-30"}`}
          >
            <div className="flex justify-center relative">
              <span> ارسال فایل</span>
              <div className="absolute top-[2px] md:top-[10px] lg:left-[15px] lg:top-[8px] md:block">
                {isLoading && (
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#FAFAFA"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                )}
              </div>
            </div>
          </button>
        </div>
      </form>
      <div
        onClick={() => setShowUploadFileModal(false)}
        className="z-40 fixed top-0 right-0 w-screen h-screen  backdrop-brightness-0 backdrop-contrast-100  backdrop-opacity-60 "
      />
    </>
  );
};

export default FileUploadModal;

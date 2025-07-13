import persianJs from "persianjs";
const KeyReportsTable = ({ userKey }) => {
  return (
    <div className="flex flex-col gap-y-[70px] items-center mt-[150px] md:mt-[20px]">
      <div className=" lg:flex flex-col w-[327px] md:w-[670px] md:-mr-[20px] lg:mr-[80px] lg:w-[1060px] items-center overflow-x-scroll overflow-y-clip lg:overflow-hidden">
        {/* header */}
        <div className=" bg-neutralColor-5 flex h-[43px] rounded-[6px] w-[900px] md:w-[900px] lg:w-[1060px] ">
          <div className="flex items-center text-[12px]  md:text-[16px] font-medium leading-[27.64px] text-neutralColor-2 w-fit mr-[17px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px]">
            <div className=" whitespace-nowrap ">
              <span className="mr-[10px] md:mr-[30px]  lg:mr-[40px]">
                وضعیت
              </span>
            </div>
            <div className=" whitespace-nowrap ">
              <span className="mr-[150px] md:mr-[100px] lg:mr-[170px]">
                کدملی/شناسه ملی
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="mr-[200px] md:mr-[100px] lg:mr-[210px]">
                تعداد دستگاه ها
              </span>
            </div>

            <div className="whitespace-nowrap">
              <span className="mr-[140px] md:mr-[110px] lg:mr-[170px]">
                تاریخ انقضاء
              </span>
            </div>
          </div>
        </div>
        {/* body */}

        <div
          key={userKey.userId}
          className={` px-[20px] flex w-[800px] md:w-[900px] lg:w-[1060px] h-[70px] md:h-[91px] items-center py-[23px] text-[12px]  md:text-[14px] text-neutralColor-1 leading-[20px] md:leading-[27px] gap-x-[10px] md:gap-x-[40px] lg:gap-x-[10px] ${
            userKey.isActive
              ? "bg-naturalColor-2"
              : "bg-neutralColor-5 border-t border-t-neutralColor-4 border-b border-b-neutralColor-4"
          }`}
        >
          <div
            className={`w-[50px] px-[30px] md:px-0 h-[37px] md:w-[120px]  md:h-[45px]  md:ml-[90px]  md:mr-[20px] py-2 rounded-[50px] flex items-center justify-center  ${
              !userKey.isActive
                ? "bg-errorColor-5 text-errorColor-2"
                : "bg-successColor-5 text-successColor-2"
            }`}
          >
            <span>{userKey.isActive ? "فعال" : "غیرفعال"}</span>
          </div>
          <div className="w-[100px]  md:w-[150px] lg:w-[200px] flex items-center justify-center bg-ye">
            <span className="mr-[270px] md:mr-[10px] lg:mr-[50px]">
              {userKey.userId}
            </span>
          </div>
          <div className=" w-[400px] md:w-[300px] mr-[50px] flex items-center justify-center  md:mr-[5px]  lg:mr-[50px]">
            <span className="whitespace-nowrap truncate cursor-pointer mr-[290px] md:mr-[150px] lg:mr-[190px]">
              {userKey.deviceCount}
            </span>
          </div>
          <div className=" w-[400px] md:w-[400px] mr-[50px] flex items-center justify-center  md:mr-[5px]  lg:mr-[10px]">
            <span className="whitespace-nowrap truncate cursor-pointer mr-[140px] md:mr-[100px] lg:mr-[180px]">
              {new Date(userKey?.expireDate).toLocaleDateString("fa-IR")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyReportsTable;

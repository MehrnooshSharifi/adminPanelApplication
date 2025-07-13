import SearchForm from "@/src/common/SearchForm";
import BlackListTable from "@/src/components/blackList/BlackListTable";
import BlackUserInfo from "@/src/components/blackList/BlackUserInfo";
import {
  GetAllBlockedList,
  GetBlockUserByNationalCode,
} from "@/src/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BsDatabaseFillX } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
const BlackList = ({ blockedList }) => {
  const [blockUser, setBlockUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies();
  const router = useRouter();
  const initialValues = {
    nationalCode: "",
  };
  useEffect(() => {
    if (!cookies.nationalCode) {
      router.push("/");
    }
  }, []);

  const onSubmit = async (values) => {
    if (values.nationalCode == "") {
      setIsLoading(false);
      return;
    }
    if (values.nationalCode !== "") {
      setIsLoading(true);
      const res = await GetBlockUserByNationalCode(values);
      if (res.data) {
        setBlockUser(res.data);
        setIsLoading(false);
      }
      if (
        res.isSuccess &&
        res.data == null &&
        res.message == "Success" &&
        res.statusCode == 0
      ) {
        toast("با کد ملی/شناسه ملی وارد شده اطلاعاتی برای نمایش موجود نیست.", {
          style: {
            fontSize: 14,
            backgroundColor: "#FAFAFA",
            color: "#212121",
            width: 400,
            height: 100,
            lineHeight: 2,
          },
          icon: (
            <BsDatabaseFillX className="w-[30px] h-[30px] fill-primaryColor-1 " />
          ),
        });
        setIsLoading(false);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <>
      <SearchForm formik={formik} title="لیست سیاه">
        <button
          type="submit"
          className="w-[50px] h-[48px] md:w-[137px] flex items-center  bg-primaryColor-1 rounded-tl-[5px] rounded-bl-[5px] md:rounded-[5px] cursor-pointer"
        >
          <div className="flex gap-x-[10px] whitespace-nowrap w-full md:items-center md:justify-center ml-4">
            <Image
              className="mr-[15px]"
              src="/assets/images/search.svg"
              alt="searchNationalCode"
              width={16}
              height={16}
            />
            <div className="flex  justify-center relative">
              <span className="hidden md:block text-naturalColor-2 text-[16px] font-bold leading-[27.64px]">
                جستجو کن
              </span>
              <div className=" left-[3px] w-[25px] md:w-[40px] absolute md:left-[25px] md:top-2 md:block">
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
          </div>
        </button>
      </SearchForm>
      <div
        className={`mx-auto  lg:mx-auto -mt-[30px]  flex-col md:mx-auto px-4 lg:-mt-[50px]`}
      >
        {/* ticketsContent */}
        <div className="felx flex-col mt-[22px] md:mt-[34.88px] lg:mt-[35px]  lg:mx-auto">
          {/* title */}
          <div
            className={`${
              blockedList.length == 0
                ? "mb-[123.8px] md:mb-[164.79px] lg:mb-[178px]"
                : "lg:mr-[50px]"
            } mb-[33px] md:mb-[43px] lg:mb-[35px] mr-[2px] md:-mr-[5px]`}
          >
            <span className="text-neutralColor-1 text-[14px] leading-[24.18px] font-medium w-[172px] h-[31px] md:text-[18px] md:leading-[31.09px] md:w-[134px] md:h-[24px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:w-[193px] lg:h-[35px]">
              {blockedList && blockedList.length > 0
                ? "نمایش کامل لیست سیاه"
                : ""}
            </span>
          </div>
          {blockedList.length == 0 && (
            <div className=" mt-[167px] flex flex-col items-center mb-[20px] mg:mb-[25px] lg:mb-[30px] text-[14px] md:text-[16px] lg:text-[18px] text-neutralColor-2 leading-[24.18px] md:leading-[27.64px] lg:leading-normal font-medium">
              <div className="mb-[24.12px] ">
                <Image
                  width={10}
                  height={10}
                  src="/assets/images/noTickets.svg"
                  alt="no ticket"
                  className="w-[120px] h-[150px] md:w-[148px] md:h-[155px] lg:w-[200px] lg:h-[218px]"
                />
              </div>
              <div className="mb-[10px] md:mb-[6px] lg:mb-[10px]">
                <span>لیستی برای نمایش وجود ندارد.</span>
              </div>
            </div>
          )}

          {/* tableSection */}
          <div className="lg:mr-[50px] flex relative">
            {/* add To BlackList*/}
            <Link
              href="/adminPanel/blackList/addToBlackList"
              className={`${
                blockedList.length == 0
                  ? "right-[170px] -top-[70px] md:right-[475px] md:-top-[90px] lg:right-[320px] lg:-top-[510px]"
                  : "right-[170px] -top-[70px] md:right-[475px] md:-top-[90px] lg:right-[820px] lg:-top-[90px]"
              } w-[174px] h-[48px] px-[10px] py-[5px] mb-[16px] md:mb-[45px] md:ml-10 absolute  `}
            >
              <div className="flex bg-primaryColor-1 w-[154px]  h-[38px]  md:w-[194px] md:h-[58px] lg:w-[194px] lg:h-[48px] items-center justify-center gap-x-[8px] rounded-[5px]">
                <Image
                  src="/assets/images/plus.svg"
                  alt="add New Service Group"
                  width={14}
                  height={14}
                />
                <span className="text-naturalColor-2 text-[12px] font-bold leading-[20.73px] md:text-[16px] md:font-bold md:leading-[27.64px]">
                  افزودن به لیست
                </span>
              </div>
            </Link>
            {/* ticketsList */}
            {/* //TODO: this section must be conditionalRendering when show all data or search one nationalCode */}
            <div>
              {blockedList && blockedList.length !== 0 && !blockUser && (
                <BlackListTable blockedList={blockedList} />
              )}
            </div>
            <div>
              {blockUser && blockUser.length !== 0 && (
                <BlackUserInfo blockUser={blockUser} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackList;

export async function getServerSideProps(ctx) {
  try {
    const { req } = ctx;
    const token = req.cookies.Token;
    console.log("token:", token);
    const allBlockedList = await GetAllBlockedList();
    console.log(allBlockedList);
    return {
      props: { blockedList: allBlockedList.data },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

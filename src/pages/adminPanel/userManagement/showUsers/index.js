import SearchForm from "@/src/common/SearchForm";
import ShowUser from "@/src/components/userManagement/ShowUser/ShowUser/ShowUser";
import {
  GetAllUsersBySearch,
  GetUserInfoByNationalCodeSearch,
} from "@/src/server/Service";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BsDatabaseFillX } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
const ShowUsers = () => {
  const [users, setUsers] = useState();
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
    setIsLoading(true);
    if (values.nationalCode !== "") {
      const res = await GetUserInfoByNationalCodeSearch(values);
      if (res.data) {
        setUsers(res.data);
        setIsLoading(false);
      }
      if (res.isSuccess && res.data.length == 0) {
        toast("با کد ملی وارد شده اطلاعاتی برای نمایش موجود نیست.", {
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
      }
    } else {
      const res = await GetAllUsersBySearch();
      if (res.data) {
        setUsers(res.data);
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
      <SearchForm formik={formik} title="لیست کاربرها">
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
      {users && users.length > 0 && <ShowUser users={users} />}
    </>
  );
};

export default ShowUsers;

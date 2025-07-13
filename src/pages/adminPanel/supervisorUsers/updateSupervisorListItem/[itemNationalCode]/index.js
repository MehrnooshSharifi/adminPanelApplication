import SupervisorForm from "@/src/components/supervisorList/SupervisorForm";
import {
  GetAdminUserInfoByNationalCodeSearch,
  UpdateRoleType,
} from "@/src/server/Service";
import { useStepContext } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
const UpdateSupervisorListItem = ({ userInfo }) => {
  const userInfoDetails = userInfo[0];
  const userRoles = userInfoDetails.roles;
  const [openIsActive, setOpenIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies();
  const creatorNationalCode = cookies.nationalCode;
  const [roles, setRoles] = useState(userRoles);
  const router = useRouter();
  const initialValues = {
    id: userInfoDetails?.nationalCode,
    adminId: creatorNationalCode,
    firstName: userInfoDetails?.firstName,
    lastName: userInfoDetails?.lastName,
    phoneNumber: userInfoDetails?.phoneNumber,
    email: userInfoDetails?.email,
    userTypeId: "0",
    isActive: userInfoDetails?.isActive,
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UpdateRoleType(values, roles);
    const { isSuccess, message } = res;
    if (isSuccess) {
      setIsLoading(false);
      toast.success("ویرایش اطلاعات با موفقیت انجام شد", {
        duration: 4000,
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        className: "",
        icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
      });
      router.push(`/adminPanel/supervisorUsers`);
    } else {
      toast.error(message, {
        duration: 4000,
        style: {
          backgroundColor: "#EE3A01",
          color: "#fff",
        },
        className: "",
        icon: <VscError className="w-[28px] h-[28px]" />,
      });
    }
    setIsLoading(false);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });
  const activeHandler = () => {
    formik.values.isActive = true;
    setOpenIsActive(false);
  };
  const nonActiveHandler = () => {
    formik.values.isActive = false;
    setOpenIsActive(false);
  };
  const changeRoleHandler = (appId) => {
    const updatedRoles = roles.map((role) => {
      if (role.publicAppId == appId) {
        return { ...role, isActivePublicApp: !role.isActivePublicApp };
      }
      return role;
    });

    setRoles(updatedRoles);
  };
  return (
    <>
      <div className=" mt-[10px] mx-auto w-[375px] md:w-[768px] md:mx-auto px-4 md:pr-5  lg:w-[1024px]">
        <div className="-mr-[15px] md:mr-[10px] lg:-mr-[5px]">
          {/* BreadCrumps */}
          <div className="w-fit  whitespace-nowrap font-normal mr-[15px] md:mr-0  text-[10px] md:w-fit md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px] md:leading-[24.18px] h-[48px]  flex items-center  px-[10px] py-[15.5px] md:mb-5 ">
            <Link
              href="/adminPanel/supervisorUsers"
              className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
            >
              <span className="w-[95px] h-[17px] md:w-[133px] md:h-[24px]">
                لیست سرپرستی
              </span>
            </Link>
            <div className="-mr-[45px] md:-mr-[50px] lg:-mr-[45px]">
              <Image
                width={10}
                height={10}
                src="/assets/images/breadCrumbsDirection.svg"
                className="w-[10px]"
                alt="breadCrumbsDirection"
              />
            </div>
            <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center md:-mt-2 mr-2">
              <span className="w-[113px] h-[17px]">ویرایش اطلاعات</span>
            </div>
          </div>
          {/* Title */}
          <div className="whitespace-nowrap w-[178px] h-[44px] text-[14px] md:text-[18px] md:w-[224px] md:h-[51px] lg:text-[20px] lg:font-bold lg:leading-[34.55px] lg:whitespace-nowrap lg:w-[226px] lg:h-[35px] font-medium leading-[24.18px] flex gap-x-[5px] items-center justify-center text-neutralColor-1 mb-[24px] mr-[20px] md:mr-[7px] lg:mr-[15px] lg:mb-[60.09px] md:-mt-[20px]">
            <span>ویرایش اطلاعات</span>
            <span className="">{userInfoDetails.nationalCode}</span>
          </div>
        </div>
        <SupervisorForm
          userInfo={userInfo}
          formik={formik}
          nonActiveHandler={nonActiveHandler}
          activeHandler={activeHandler}
          openIsActive={openIsActive}
          setOpenIsActive={setOpenIsActive}
          isLoading={isLoading}
          roles={roles}
          changeRoleHandler={changeRoleHandler}
        />
      </div>
    </>
  );
};

export default UpdateSupervisorListItem;

export async function getServerSideProps(ctx) {
  try {
    const { params, req } = ctx;
    const { itemNationalCode } = params;
    console.log("itemNationalCode:", itemNationalCode);
    const token = req.cookies.Token;
    console.log("token:", token);
    const res = await GetAdminUserInfoByNationalCodeSearch(itemNationalCode);
    console.log("adminUserInfo:", res.data);
    return {
      props: { userInfo: res.data },
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

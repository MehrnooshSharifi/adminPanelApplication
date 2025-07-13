// const baseURL = "http://10.1.20.135:7015";
const baseURL = "https://Cli.gsafe.ir";
// const baseURL = "http://192.168.30.122:7015";

const baseURLserver = "https://srvtest.gsafe.ir";
// const baseURLserver = "https://10.1.20.135:7016 ";
// const baseURLserver = "http://192.168.30.122:7016";

import Cookies from "js-cookie";
// LoginAdminUser
export async function Login(values) {
  let adminUserInfo = {
    userName: values.userName,
    password: values.password,
    appId: values.appId,
    captchaCode: values.confirmCaptchaValue,
  };
  const res = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(adminUserInfo),
    credentials: "include", // Ensure cookies are sent with the request
  });

  const data = await res.json();
  return data;
}
// CreateUser
export async function CreateUser(values) {
  const userInfo = {
    id: values.id,
    firstName: values.firstName,
    lastName: values.lastName,
    phoneNumber: values.phoneNumber,
    email: values.email,
    userTypeId: values.userTypeId,
    captchaCode: values.confirmCaptchaValue,
  };
  const url = "/api/user/create";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(userInfo),
  });
  const data = await res.json();
  console.log(data);

  return data;
}
// GetUserInfo :
export async function GetUserInfo(nationalCode) {
  const res = await fetch(`/api/user/userInfo/${nationalCode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    credentials: "include", // Ensures cookies (token) are sent
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user info");
  }

  const data = await res.json();
  return data;
}
// GetUserInfoByNationalCode :
export async function GetUserInfoByNationalCode(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/Users/GetUserInfoByNationalCode/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// ChangePassword :
export async function ChangePassword(values, nationalCode) {
  let passwordInfo = {
    oldPassword: values.oldPassword,
    newPassword: values.newPassword,
  };
  const url = `/api/user/changePassword/${nationalCode}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(passwordInfo),
  });
  const data = await res.json();
  return data;
}
// UpdateUserInfoByNationalCode :
export async function UpdateUserInfoByNationalCode(values, dateObject) {
  let updateUserInfo = {
    nationalCode: values.nationalCode,
    activityTimeFrom: values.activityTimeFrom,
    activityTimeTo: values.activityTimeTo,
    maxTransactionPerDay: values.maxTransactionPerDay,
    isChangePassword: values.isChangePassword,
    isSendSms: values.isSendSms,
    isPaymentSendSms: values.isPaymentSendSms,
    paymentSmsAmount: values.paymentSmsAmount,
    userServicePoint: values.userServicePoint,
    tempTransactionCount: values.tempTransactionCount,
    minusAmount: values.minusAmount,
    contractExpirationDate: dateObject.dateFrom,
  };
  const url = "/api/user/updateUserInfoByNationalCode";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(updateUserInfo),
  });
  const data = await res.json();
  return data;
}
// ResetPassword :
export async function ResetPassword(nationalCode, captchaCode) {
  const userInfo = {
    nationalCode: nationalCode,
    captchaCode: captchaCode,
  };
  console.log(userInfo.nationalCode, nationalCode);
  const url = `/api/user/resetPassword/${nationalCode}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(userInfo),
  });
  const data = await res.json();
  return data;
}
// GetAllServiceGroup:
export async function GetAllServiceGroup() {
  const url =
    baseURLserver +
    "/USR/api/v1/UserManagement/ServiceGroup/GetAllAdminGroupServices";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetGroupServiceById :
export async function GetGroupServiceById(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/ServiceGroup/GetGroupServiceById/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// CreateServiceGroup:
export async function CreateServiceGroup(values) {
  let serviceGroupInfo = {
    serviceGroupName: values.serviceGroupName,
    serviceGroupDesc: values.serviceGroupDesc,
    isPublic: values.isPublic,
    isActive: values.isActive,
  };
  const url = "/api/serviceGroups/createServiceGroup";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(serviceGroupInfo),
  });
  const data = await res.json();
  return data;
}
// SelectServiceByGroupId :
export async function SelectServiceByGroupId(id) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/Service/SelectServiceByGroupId/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
//UpdateServiceGroup :
export async function UpdateServiceGroup(values, serviceGroupUpdateId) {
  let serviceGroupInfo = {
    serviceGroupName: values.serviceGroupName,
    serviceGroupDesc: values.serviceGroupDesc,
    isActive: values.isActive,
    isPublic: values.isPublic,
    id: serviceGroupUpdateId,
  };
  const url = "/api/serviceGroups/updateServiceGroup";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(serviceGroupInfo),
  });
  const data = await res.json();
  return data;
}
// SelectAllService:
// TODO: after finalCheck remove from this file
// export async function SelectAllService() {
//   const url = baseURL + "/USR/api/v1/UserManagement/Service/SelectAllService";
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// GetServiceById:
export async function GetServiceById(id, token) {
  const url =
    baseURLserver + `/USR/api/v1/UserManagement/Service/GetServiceById/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// RegisterService :
export async function RegisterService(values) {
  let serviceGroupInfo = {
    serviceName: values.serviceName,
    serviceDesc: values.serviceDesc,
    defaultPrice: values.defaultPrice,
    isActive: values.isActive,
    policyauth: values.policyauth,
    servicePoint: values.servicePoint,
    serviceGroupId: values.serviceGroupId,
  };
  const url = "/api/serviceGroups/registerService";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(serviceGroupInfo),
  });
  const data = await res.json();
  return data;
}
// UpdateService :
export async function UpdateService(values) {
  let serviceInfo = {
    serviceName: values.serviceName,
    serviceDesc: values.serviceDesc,
    policyauth: values.policyauth,
    defaultPrice: values.defaultPrice,
    isActive: values.isActive,
    serviceGroupId: values.serviceGroupId,
    id: values.id,
    servicePoint: values.servicePoint,
  };
  console.log(serviceInfo);
  const url = "/api/serviceGroups/updateService";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(serviceInfo),
  });
  const data = await res.json();
  return data;
}
//GetUserInfoByNationalCodeSearch : with nationalCode
export async function GetUserInfoByNationalCodeSearch(values) {
  const nationalCode = values.nationalCode;
  console.log(nationalCode);
  const res = await fetch(
    `/api/user/getUserInfoByNationalCodeSearch/${nationalCode}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("Token"),
      },
      credentials: "include", // Ensures cookies (token) are sent
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user info");
  }

  const data = await res.json();
  return data;
}
//GetAllUsersBySearch : without nationalCode
export async function GetAllUsersBySearch() {
  const url = "/api/user/getAllUsersBySearch";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
  });
  const data = await res.json();
  return data;
}

// GetAllUsers :  This function is not diffrent api that is the same GetUserInfoByNationalCodeSearch but because of condithion defined here again
// TODO:this function not used
// export async function GetAllUsers() {
//   const url =
//     baseURL +
//     "/USR/api/v1/UserManagement/Users/GetUserInfoByNationalCodeSearch";
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//   });
//   const data = await res.json();
//   return data;
// }
// REQUESTED_SERVICE_NOT-DECLARE :

export async function NewRequests(token) {
  const url =
    baseURLserver +
    "/USR/api/v1/UserManagement/ServiceAssignApp/REQUESTED_SERVICES_NOT_DECLARE";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// REQUESTED_SERVICE_BY_ID :
export async function GetRequestById(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/ServiceAssignApp/REQUESTED_SERVICES_By_Id/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
//IgnoreServiceRequest :
export async function IgnoreServiceRequest(id, adminDesc) {
  let requestInfo = {
    adminDesc: adminDesc,
    requestId: id,
  };
  const url = "/api/user/serviceRequest/ignoreServiceRequest";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(requestInfo),
  });
  const data = await res.json();
  return data;
}
// ApproveServiceRequest :
export async function ApproveServiceRequest(id, defaultPrice) {
  let requestInfo = {
    servicePrice: defaultPrice,
    requestId: id,
  };
  const url = "/api/user/serviceRequest/approveServiceRequest";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(requestInfo),
  });
  const data = await res.json();
  return data;
}
// GetLoginReport:
// export async function GetLoginReport(values) {
//   const nationalCode = values.nationalCode;
//   const url =
//     baseURL + `/USR/api/v1/UserManagement/Users/GetLoginReport/${nationalCode}`;
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + Cookies.get("Token"),
//     },
//   });
//   const data = await res.json();
//   return data;
// }
// FinancialReport :
export async function FinancialReport(values, dateObject) {
  let reportInfo = {
    nationalCode: values.nationalCode,
    dateFrom: dateObject.dateFrom,
    dateTo: dateObject.dateTo,
  };
  const url = "/api/financial/financialReport";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(reportInfo),
  });
  const data = await res.json();
  return data;
}
//ServiceCallReportAllByUserByService :
export async function ServiceCallReportAllByUserByService(dateObject, values) {
  let servicesCallInfo = {
    dateFrom: dateObject.dateFrom,
    dateTo: dateObject.dateTo,
    userId: values.userId,
    serviceId: values.serviceId,
  };
  const url = "/api/serviceCallReport";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(servicesCallInfo),
  });
  const data = await res.json();
  return data;
}
// UploadHelpFile :
export async function UploadHelpFile(formdata, selectedServiceId) {
  const serviceId = selectedServiceId;
  const url =
    baseURL + `/USR/api/v1/UserManagement/HelpFile/UploadHelpFile/${serviceId}`;
  var myHeaders = new Headers();
  myHeaders.append("accept", "text/plain");
  myHeaders.append("Authorization", "Bearer " + Cookies.get("Token"));
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
}
// DownloadHelpFile :
export async function DownloadHelpFile(id) {
  const url = `/api/downloadHelpFile/${id}`; // Dynamic route without query string

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("Token"),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to download file");
    }

    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);

    // Creating a link and triggering the download
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "HelpFile.pdf";
    document.body.appendChild(alink);
    alink.click();
    document.body.removeChild(alink);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}
// GetAllBeneficiaries :
export async function GetAllBeneficiaries(id, token) {
  const url =
    baseURLserver + `/api/v1/Accounting/GetAllBeneficiaries?serviceId=${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// CreateDiscount :
export async function CreateDiscount(values) {
  let discountInfo = {
    nationalCode: values.nationalCode,
    serviceId: values.serviceId,
    discountAmount: values.discountAmount || "0",
    discountPercentAmount: values.discountPercentAmount || "0",
  };
  const url = "/api/financial/createDiscount";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(discountInfo),
  });
  const data = await res.json();
  return data;
}
// GetAllScope :
export async function GetAllScope() {
  const url = baseURLserver + "/SabteAhval/v1/Card/GetAllScope";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetUserServiceByNationalCode:
export async function GetUserServiceByNationalCode(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/Users/GetUserServiceByNationalCode/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetServiceAssignAppById :
export async function GetServiceAssignAppById(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/ServiceAssignApp/GetServiceAssignAppById/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// ChangeUserService :
export async function ChangeUserService(values) {
  let userServiceInfo = {
    id: values.id,
    servicePrice: values.servicePrice,
    approveStates: values.approveStates,
    publicAppId: values.publicAppId,
  };
  const url = "/api/user/changeUserService";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(userServiceInfo),
  });
  const data = await res.json();
  return data;
}
// IncreaseCustomerCredit:
export async function IncreaseCustomerCredit(values) {
  let increaseCreditInfo = {
    nationalCode: values.nationalCode,
    docRef: values.docRef,
    docDesc: values.docDesc,
    allAmount: values.allAmount,
  };
  const url = "/api/financial/increaseCustomerCredit";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(increaseCreditInfo),
  });
  const data = await res.json();
  return data;
}
// DecreaseCustomerCredit :
export async function DecreaseCustomerCredit(values) {
  let increaseCreditInfo = {
    nationalCode: values.nationalCode,
    docRef: values.docRef,
    docDesc: values.docDesc,
    allAmount: values.allAmount,
  };
  const url = "/api/financial/decreaseCustomerCredit";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(increaseCreditInfo),
  });
  const data = await res.json();
  return data;
}
//GetTicketByUserId :
export async function GetTicketByUserId(nationalCode, token) {
  const url =
    baseURLserver + `/api/v1/Ticket/GetTicketByuserid/${nationalCode}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
//GetTicketByuseridReciver :
export async function GetTicketByuseridReciver(nationalCode, token) {
  const url =
    baseURLserver + `/api/v1/Ticket/GetTicketByuseridReciver/${nationalCode}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetTicketDetails :
export async function GetTicketDetails(id, token) {
  const url = baseURLserver + `/api/v1/Ticket/GetTicketDetail/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// ReplyToTicket :
export async function ReplyToTicket(values, selectedFiles) {
  let info = {
    ticketId: values.ticketId,
    userSender: values.userSender,
    userReciver: values.userReciver,
    ticketoc: values.ticketdoc,
    ticketFiles: selectedFiles,
  };
  const url = "/api/user/userTicket/replytoTicket";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(info),
  });
  const data = await res.json();
  return data;
}
// ChangeTicketStatus :
export async function ChangeTicketStatus(statusNum, ticketNum) {
  let info = {
    statusId: statusNum,
    ticketId: ticketNum,
  };
  const url = "/api/user/userTicket/changeTicketstatus";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(info),
  });
  const data = await res.json();
  return data;
}
// FinancialCompactReport :
export async function FinancialCompactReport(values, dateObject) {
  let reportInfo = {
    nationalCode: values.nationalCode,
    dateFrom: dateObject.dateFrom,
    dateTo: dateObject.dateTo,
  };
  const url = "/api/financial/financialCompactReport";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(reportInfo),
  });
  const data = await res.json();
  return data;
}
// GetAllBlockedList:
export async function GetAllBlockedList() {
  const url =
    baseURLserver + "/SabteAhval/v1/AdminManagment/BlackList/allUsers";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetBlockUserByNationalCode :
// export async function GetBlockUserByNationalCode(values, token) {
//   const nationalCode = values.nationalCode;
//   const url = baseURL + `/api/user/getBlockUserByNationalCode/${nationalCode}`;
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//   });
//   const data = await res.json();
//   return data;
// }
// AddBlockUser :
// export async function AddBlockUser(values, dateObject) {
//   let personInfo = {
//     nationalCode: values.nationalCode,
//     adminNationalCode: values.adminNationalCode,
//     isBlocked: values.isBlocked,
//     startBlockDate: dateObject.dateFrom,
//     endBlockDate: dateObject.dateTo,
//   };
//   const url = baseURL + "/SabteAhval/v1/AdminManagment/BlackList/addBlockUser";
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + Cookies.get("Token"),
//     },
//     body: JSON.stringify(personInfo),
//   });
//   const data = await res.json();
//   return data;
// }
// UpdateBlockUser :
// export async function UpdateBlockUser(values, dateObject) {
//   let blockedUserInfo = {
//     nationalCode: values.nationalCode,
//     adminNationalCode: values.adminNationalCode,
//     isBlocked: values.isBlocked,
//     startBlockDate: dateObject.dateFrom,
//     endBlockDate: dateObject.dateTo,
//   };
//   const url =
//     baseURL + `/SabteAhval/v1/AdminManagment/BlackList/updateBlockUser`;
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + Cookies.get("Token"),
//     },
//     body: JSON.stringify(blockedUserInfo),
//   });
//   const data = await res.json();
//   return data;
// }
// GetAllAdmin
export async function GetAllAdmin() {
  const url =
    baseURLserver + "/USR/api/v1/UserManagement/AdminUser/GetAllAdmin";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetAdminUserInfoByNationalCodeSearch :
export async function GetAdminUserInfoByNationalCodeSearch(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/AdminUser/GetAdminUserInfoByNationalCodeSearch/${id}`;
  const res = await fetch(url, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// AdminCreateUser :
export async function AdminCreateUser(values) {
  let personInfo = {
    id: values.id,
    adminId: values.adminId,
    firstName: values.firstName,
    lastName: values.lastName,
    phoneNumber: values.phoneNumber,
    email: values.email,
    isActive: values.isActive,
    userTypeId: values.userTypeId,
    userRoleType: values.userRoleType,
  };
  const url = "/api/user/adminCreateUser";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(personInfo),
  });
  const data = await res.json();
  return data;
}
// UpdateRoleType :
export async function UpdateRoleType(values, roles) {
  let adminInfo = {
    email: values.email,
    phoneNumber: values.phoneNumber,
    nationalCode: values.id,
    adminId: values.adminId,
    isActiveAdmin: values.isActive,
    roleType: roles,
  };
  const url = "/api/user/updateRoleType";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(adminInfo),
  });
  const data = await res.json();
  return data;
}
// CommissionSelectAll:
export async function CommissionSelectAll() {
  const url = baseURLserver + "/api/v1/AccountingOperation/CommissionSelectAll";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// CreateCommission :
export async function CreateCommission(values) {
  let commissionInfo = {
    serviceId: values.serviceId,
    supperNationalId: values.supperNationalId,
    consumerNationalId: values.consumerNationalId,
    representativeNationalId: values.representativeNationalId,
    amount: values.amount,
  };
  const url = "/api/financial/createCommission";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(commissionInfo),
  });
  const data = await res.json();
  return data;
}
// SelectCommissionById :
export async function SelectCommissionById(id, token) {
  const url =
    baseURLserver + `/api/v1/AccountingOperation/SelectById?uniqueId=${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// UpdateCommission :
export async function UpdateCommission(values, commissionId) {
  let commissionInfo = {
    isActive: values.isActive,
    amount: values.amount,
    id: commissionId,
  };
  const url = "/api/financial/updateCommission";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(commissionInfo),
  });
  const data = await res.json();
  return data;
}
// SearchCommission :
export async function SearchCommission(values) {
  let searchItem = {
    serviceId: values.serviceId,
    supperNationalId: values.supperNationalId,
    consumerNationalId: values.consumerNationalId,
    representativeNationalId: values.representativeNationalId,
    isActive: true,
    amount: 0,
    commissionType: 0,
  };
  const url = "/api/financial/searchCommission";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(searchItem),
  });
  const data = await res.json();
  return data;
}
// KeyGenerator :
// export async function KeyGenerator(userId) {
//   const url = baseURL + `/SabteAhval/v1/Card/KeyGenerator/${userId}`;
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + Cookies.get("Token"),
//     },
//     body: JSON.stringify(userId),
//   });
//   const data = await res.json();
//   return data;
// }
//GetByUserId :
// export async function GetByUserId(values) {
//   let id = values.userId;
//   const url = baseURL + `/SabteAhval/v1/Card/GetByUserId/${id}`;
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + Cookies.get("Token"),
//     },
//   });

//   if (!res.ok) {
//     throw new Error(`HTTP error! status: ${res.status}`);
//   }

//   const data = await res.json();
//   return data;
// }
// /SSM/TeminalKeyGenerator :
export async function TeminalKeyGenerator(values) {
  let terminalInfo = {
    userId: values.userId,
    serialDevices: [
      {
        terminalId: values.serialDevices[0].terminalId,
        terminalAddress: values.serialDevices[0].terminalAddress,
        terminalName: values.serialDevices[0].terminalName,
      },
    ],
  };
  const url = "/api/terminals/teminalKeyGenerator";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(terminalInfo),
  });
  const data = await res.json();
  return data;
}
//GetTerminalInfoByUserId :
export async function GetTerminalInfoByUserId(values) {
  let id = values.userId;
  console.log(id);
  let terminalNo = {
    terminalId: values.serialDevices[0].terminalId,
  };
  const url = `/api/terminals/getTerminalInfoByUserId/${id}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(terminalNo),
  });
  const data = await res.json();
  return data;
}
//GetTerminalInfoDetail:
export async function GetTerminalInfoDetail(userId, terminalId, token) {
  const url =
    baseURLserver + `/SSM/GetTerminalInfoDetail/${userId}/${terminalId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
//UpdateTerminalInfoByIds :
export async function UpdateTerminalInfoByIds(values, id) {
  let terminalNo = {
    isActive: values.isActive,
    userId: id,
    terminalId: values.terminalId,
    terminalName: values.terminalName,
    terminalAddress: values.terminalAddress,
  };
  const url = `/api/terminals/updateTerminalInfoByIds`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(terminalNo),
  });
  const data = await res.json();
  return data;
}
//TerminalInfoReportById :
export async function TerminalInfoReportById(values, dateObject) {
  let terminalNo = {
    userId: values.userId,
    terminalId: values.terminalId,
    dateFrom: dateObject.dateFrom,
    dateTo: dateObject.dateTo,
  };
  const url = `/api/terminals/terminalInfoReportById`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(terminalNo),
  });
  const data = await res.json();
  return data;
}
//FindServiceName :
export async function FindServiceName() {
  const url =
    baseURLserver + "/USR/api/v1/UserManagement/Users/FindServiceName";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetAllAppInfoByRealNationalCode :
export async function GetAllAppInfoByRealNationalCode(nationalCode, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/PublicAppAssignUser/GetAllAppInfoByRealNationalCode/${nationalCode}/1`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// AppAsigned :
export async function AppAsigned(id, token) {
  let appId = {
    publicAppId: id,
  };
  const url = baseURLserver + `/USR/api/v1/UserManagement/Users/AppAssigned`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(appId),
  });
  const data = await res.json();
  return data;
}
export async function Captcha() {
  try {
    //const sessionId = localStorage.getItem("sessionId") || "1"; // Ensure sessionId is always set
    const res = await fetch("/api/user/captcha", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        sesionId: Cookies.get("sessionid_guid"),
      },
      credentials: "include", // Ensure cookies are included
    });

    const contentType = res.headers.get("Content-Type") || "";

    return contentType.includes("application/json") ? res.json() : res.blob(); // If it's an image, return as a blob
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
}
//ResetApplicationPass :
export async function ResetApplicationPass(userId, scope) {
  let resetAppInfo = {
    userId: userId,
    scope: scope,
  };
  console.log(resetAppInfo);
  const url = "/api/user/application/ResetApplicationPass";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(resetAppInfo),
  });
  const data = await res.json();
  return data;
}
// SelectDiscountByUniqueId:
export async function SelectDiscountByUniqueId(id, token) {
  const url =
    baseURLserver +
    `/api/v1/Accounting/SelectDiscountByUniqueId?uniqueId=${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// UpdateDiscount :
export async function UpdateDiscount(values) {
  let discountInfo = {
    uniqueId: values.uniqueId,
    discountAmount: values.discountAmount,
    discountPercentAmount: values.discountPercentAmount,
  };
  const url = `/api/financial/updateDiscount`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(discountInfo),
  });
  const data = await res.json();
  return data;
}
// DeleteDiscount :
export async function DeleteDiscount(id) {
  let discountInfo = {
    uniqueId: id,
  };
  const url = `/api/financial/deleteDiscount`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(discountInfo),
  });
  const data = await res.json();
  return data;
}

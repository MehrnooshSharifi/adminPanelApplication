import React, { useState } from "react";
import { Card, Button, Input, Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

// Utility function to convert English numbers to Persian numbers
const toPersianNumber = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(num).replace(/\d/g, (digit) => persianDigits[digit]);
};

const MobileUserServicesTable = ({ userServices }) => {
  const router = useRouter();
  const { userServiceId, userAppId } = router.query;
  const [searchText, setSearchText] = useState("");

  // Filter services based on search
  const filteredServices = userServices.filter((service) => {
    return (
      service.serviceName.toLowerCase().includes(searchText.toLowerCase()) ||
      service.serviceGroupName.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="md:hidden flex flex-col items-center max-w-full px-4">
      {/* Search Bar */}
      <div className="w-full mb-4">
        <Input
          placeholder="جستجو در سرویس‌ها"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            marginBottom: 16,
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #d9d9d9",
          }}
        />
      </div>

      {/* Services List */}
      {filteredServices.length > 0 ? (
        filteredServices.map((service) => (
          <Card
            key={service.id}
            className="w-full mb-4"
            style={{
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            {/* Service Details */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span>وضعیت:</span>
                <div
                  className={`w-[90px] h-[30px] flex items-center justify-center rounded-[100px] ${
                    service.approveStates == 1
                      ? "bg-successColor-5 text-successColor-2"
                      : "bg-errorColor-5 text-errorColor-2"
                  }`}
                >
                  {service.approveStates == 1 ? "فعال" : "غیرفعال"}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>سرویس:</span>
                <Tooltip title={service.serviceName}>
                  <span className="truncate max-w-[150px]">
                    {service.serviceName}
                  </span>
                </Tooltip>
              </div>
              <div className="flex justify-between items-center">
                <span>گروه سرویس:</span>
                <span>{service.serviceGroupName}</span>
              </div>
              {/* <div className="flex justify-between items-center">
                <span>اپلیکیشن:</span>
                <Tooltip title={service.appName}>
                  <span className="truncate max-w-[150px]">
                    {service.appName}
                  </span>
                </Tooltip>
              </div> */}
              <div className="flex justify-between items-center">
                <span>قیمت:</span>
                <span>
                  {toPersianNumber(service.servicePrice.toLocaleString())}
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end mt-4">
              <Link
                href={`/adminPanel/userManagement/showUsers/userApplications/${userAppId}/userServices/${userServiceId}/updateUserService/${service.id}`}
              >
                <Button type="primary" className="bg-primaryColor-1 no-hover">
                  ویرایش
                </Button>
              </Link>
            </div>
          </Card>
        ))
      ) : (
        <div className="mt-8">
          <span className="text-[16px] font-bold">
            اطلاعاتی برای نمایش موجود نیست
          </span>
        </div>
      )}
    </div>
  );
};

export default MobileUserServicesTable;

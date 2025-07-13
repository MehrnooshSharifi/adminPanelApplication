import React, { useState } from "react";
import { Table, Tooltip, Button, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

// Utility function to convert English numbers to Persian numbers
const toPersianNumber = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(num).replace(/\d/g, (digit) => persianDigits[digit]);
};

const TabletUserServicesTable = ({ userServices }) => {
  const router = useRouter();
  const { userServiceId, userAppId } = router.query;

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  // Search input handler
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  // Generate the filter dropdown
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`جستجو در ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <div>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            جستجو
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            پاک کردن
          </Button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <span style={{ color: filtered ? "#1890ff" : undefined }}>🔍</span>
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : false,
  });

  // Define the columns for the table
  const columns = [
    {
      title: "وضعیت",
      dataIndex: "approveStates",
      key: "approveStates",
      render: (approveStates) => (
        <div
          className={`w-[70px] h-[30px] flex items-center justify-center rounded-[100px] cursor-pointer ${
            approveStates == 1
              ? "bg-successColor-5 text-successColor-2"
              : "bg-errorColor-5 text-errorColor-2"
          }`}
        >
          {approveStates == 1 ? "فعال" : "غیرفعال"}
        </div>
      ),
      sorter: (a, b) => a.approveStates - b.approveStates, // Add sorter
    },
    {
      title: "سرویس",
      dataIndex: "serviceName",
      key: "serviceName",
      ...getColumnSearchProps("serviceName"),
      render: (serviceName) => {
        return (
          <Tooltip title={serviceName}>
            <span
              className="truncate cursor-pointer"
              style={{
                display: "block",
                maxWidth: 150,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {serviceName}
            </span>
          </Tooltip>
        );
      },
      sorter: (a, b) => a.serviceName.localeCompare(b.serviceName),
      width: 150, // Smaller width for tablet view
    },
    {
      title: "گروه سرویس",
      dataIndex: "serviceGroupName",
      key: "serviceGroupName",
      ...getColumnSearchProps("serviceGroupName"),
      sorter: (a, b) => a.serviceGroupName.localeCompare(b.serviceGroupName),
    },
    {
      title: "قیمت",
      dataIndex: "servicePrice",
      key: "servicePrice",
      ...getColumnSearchProps("servicePrice"),
      render: (servicePrice) => {
        const formattedPrice = Number(servicePrice).toLocaleString();
        return toPersianNumber(formattedPrice);
      },
      sorter: (a, b) => a.servicePrice - b.servicePrice,
    },
    {
      title: "ویرایش",
      key: "actions",
      render: (_, record) => (
        <Link
          href={`/adminPanel/userManagement/showUsers/userApplications/${userAppId}/userServices/${userServiceId}/updateUserService/${record.id}`}
        >
          <Button
            type="primary"
            className="bg-primaryColor-1 no-hover h-[38px]"
          >
            ویرایش
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="hidden lg:hidden md:flex flex-col items-center max-w-[768px] mx-auto h-auto">
      {userServices && userServices.length > 0 ? (
        <Table
          dataSource={userServices.map((service) => ({
            key: service.id,
            id: service.id,
            approveStates: service.approveStates,
            serviceName: service.serviceName,
            serviceGroupName: service.serviceGroupName,
            appName: service.appName,
            servicePrice: service.servicePrice,
          }))}
          columns={columns}
          pagination={{
            pageSize: 5,
            showSizeChanger: false,
            locale: {
              items_per_page: "مورد در صفحه",
              jump_to: "برو به",
              jump_to_confirm: "تایید",
              page: "صفحه",
              prev_page: "صفحه قبل",
              next_page: "صفحه بعد",
              first_page: "صفحه اول",
              last_page: "صفحه آخر",
            },
            itemRender: (page, type, originalElement) => {
              if (type === "page") {
                return <a>{toPersianNumber(page)}</a>;
              }
              if (type === "prev") {
                return <a>صفحه قبل</a>;
              }
              if (type === "next") {
                return <a>صفحه بعد</a>;
              }
              return originalElement;
            },
            style: {
              display: "flex",
              justifyContent: "center",
            },
          }}
          className="w-full"
          style={{
            fontFamily: "IranYekan, sans-serif",
          }}
        />
      ) : (
        <div className="mt-[50px]">
          <span className="text-[16px] font-bold">
            اطلاعاتی برای نمایش موجود نیست
          </span>
        </div>
      )}
    </div>
  );
};

export default TabletUserServicesTable;

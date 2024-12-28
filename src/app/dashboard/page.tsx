"use client";

import { Table, TableProps } from "antd";
import { useState } from "react";
import jsondata from './jsondata.json'

const Page :React.FC = () => {
  interface DataType {
    key: string;
    title: string;
    description: string;
    date: string;
  }
  const [loading, SetLoading] = useState(false);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a:any, b:any)=> new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: "View",
      // dataIndex: "date",
    },
    {
      title: "Edit",
      // dataIndex: "date",
    },
    {
      title: "Delete",
      // dataIndex: "date",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      title: "John Brown",
      description: "New York No. 1 Lake Park",
      date: 'December 07, 2024',
    },
    {
      key: "2",
      title: "John Brown",
      description: "New York No. 2 Lake Park",
      date: 'December 06, 2024',
    },
    {
      key: "3",
      title: "John Brown",
      description: "New York No. 3 Lake Park",
      date: 'December 05, 2024',
    },
  ];

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={jsondata}
        bordered
        loading={loading}
        pagination={{
          className: 'custom-pagination',
        }}
      />
    </>
  );
};
export default Page;

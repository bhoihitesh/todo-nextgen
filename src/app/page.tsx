"use client";
import { Popconfirm, Spin, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { recordType } from "../customeTypes";
import axios from "axios";
import RecordModal from "@/components/RecordModal";
import FilterTab from "@/components/FilterTab";
import moment from "moment";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState<recordType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/records`);
      const { data, status } = res;
      if (status == 200 && data) setRecords(data);
    } catch (error) {
      console.log("Error while fetching records", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecords();
  }, []);

  const columns: TableProps<recordType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      width: "150px",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "180px",
    },
    {
      title: "Record start date",
      dataIndex: "record_start_date",
      render: (_, record) => {
        return moment(record.record_start_date).format("DD-MM-YYYY hh:mm:ss");
      },
      width: "160px",
    },
    {
      title: "Record date",
      dataIndex: "record_date",
      render: (_, record) => {
        return moment(record.record_date).format("DD-MM-YYYY hh:mm:ss");
      },
      width: "160px",
    },
    {
      title: "View",
      render: (_, record) => (
        <EyeOutlined
          className="text-[20px] hover:text-blue-600"
          onClick={() => handleView(record)}
        />
      ),
      width: "50px",
    },
    {
      title: "Edit",
      render: (_, record) => (
        <>
          <EditOutlined
            className="text-[20px] hover:text-blue-600"
            onClick={() => handleEdit(record)}
          />
        </>
      ),
      width: "50px",
    },

    {
      title: "Delete",
      render: (_, record) => (
        <Popconfirm
          title="Delete the record"
          description="Are you sure to delete this record?"
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{ className: "deletebtn" }}
          cancelButtonProps={{ className: "cancelbtn" }}
          onConfirm={() => handledelete(record._id)}
        >
          <DeleteOutlined className="text-[20px] hover:text-red-700" />
        </Popconfirm>
      ),
      width: "50px",
    },
  ];

  const handleView = (record: recordType) => {
    setEditRecord(record);
    setIsEdit(false);
    setIsModalOpen(true);
  };
  const handleEdit = (record: recordType) => {
    setEditRecord(record);
    setIsEdit(true);
    setIsModalOpen(true);
  };
  const handledelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/delete-record/${id}`
      );
      if (res.status === 200) {
        handleCloseModal();
      }
    } catch (error) {
      console.error("Error while deleting record", error);
    }
  };

  const handleOpenAddModal = () => {
    setIsModalOpen(false);
    setAddModal(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAddModal(false);
    fetchRecords();
  };
  
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[80vh] overflow-hidden">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 34, color: 'black' }} spin />} />
        </div>
      ) : (
        <>
          <div className="float-end" style={{ paddingBottom: "10px" }}>
            <FilterTab
              onOpen={handleOpenAddModal}
              reload={fetchRecords}
            />
          </div>
          <div>
            <Table<recordType>
              columns={columns}
              dataSource={records}
              bordered
              pagination={{
                className: "custom-pagination",
              }}
            />
            {(isModalOpen || addModal) && (
              <RecordModal
                record={editRecord}
                editable={isEdit}
                onClose={() => handleCloseModal()}
                isOpen={addModal}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Home;

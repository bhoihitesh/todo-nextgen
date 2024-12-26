"use client";
import { Popconfirm, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import  { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import {recordType} from "../../../src/customeTypes"
import axios from "axios";
import RecordModal from "@/components/RecordModal";
import FilterTab from "@/components/FilterTab";

const page = () => {
  const [records,setRecords] = useState([]);
  const [editRecord,setEditRecord] = useState<recordType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);


    const fetchRecords = async() =>{
      try {
        setLoading(true);
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/records`)
        const {data,status} = res;
        console.log(data)
        if( status == 200 ) setRecords(data?.records);
      } catch (error) {
        console.log('Error while fetching records',error)
      } finally {
        setLoading(false);
      }
    }
    useEffect(()=>{
      fetchRecords();
    },[]);

  const columns: TableProps<recordType>["columns"] = [
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
      sorter: (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: "View",
      render: (_, record) => (
        <EyeOutlined
          className="text-[20px] hover:text-blue-600"
          onClick={() => handleView(record)}
        />
      ),
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
    },
    
    {
      title: "Delete",
      render: (_, record) => (
        <Popconfirm
        title="Delete the record"
        description="Are you sure to delete this record?"
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{className:"deletebtn"}}
        cancelButtonProps={{className:"cancelbtn"}}
        onConfirm={()=>handledelete(record._id)}
        >
          <DeleteOutlined
            className="text-[20px] hover:text-red-700"
          />
        </Popconfirm>
      ),
    },
  ];
  
  const handleView = (record: recordType) => {
    console.log(record)
    setIsEdit(false);
    setIsModalOpen(true);
  }
  const handleEdit = (record: recordType) => {
    console.log(record)
    setEditRecord(record);
    setIsEdit(true);
    setIsModalOpen(true);
  }
  const handledelete = (id: string) => {
    console.log(id)
  }

  const handleOpenAddModal = () =>{
    setIsModalOpen(true);
    setAddModal(true);
  }

  const handleCloseModal=()=>{
    setIsModalOpen(false);
    setAddModal(false);
    fetchRecords();
  }

  return (
    <>
      <div className="float-end" style={{paddingBottom: '10px'}}>
      <FilterTab onOpen={handleOpenAddModal} isOpen={addModal}/>
      </div>
      <div>
      <Table<recordType>
        columns={columns}
        dataSource={records}
        bordered
        loading={loading}
        pagination={{
          className: 'custom-pagination',
        }}
      />
      { isModalOpen &&
        <RecordModal record={editRecord} editable={isEdit} onClose={() => handleCloseModal()}  isOpen={addModal}/>
        
      }
      </div>
    </>
  );
};
export default page;

"use client";
import { recordType } from "@/customeTypes";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

interface RecordModalProps {
  record: recordType | undefined;
  editable: boolean;
  onClose: () => void;
  isOpen: boolean;
}

interface fieldType {
  title: string;
  description: string;
  date: string;
  _id: string;
}
const RecordModal: React.FC<RecordModalProps> = ({
  record,
  editable,
  onClose,
  isOpen,
}) => {
  const [form] = useForm();
  const [currentRecord, setCurrentRecord] = useState([record])

  const handleSubmit = async () => {
    const recordDate = moment(new Date()).format(
      "YYYY-MM-DD hh:mm:ss"
    );
    const recordStartDate = moment(form.getFieldValue("record_start_date")).format(
      "YYYY-MM-DD hh:mm:ss"
    );
    const taskname = form.getFieldValue("title");
    const taskdescription = form.getFieldValue("description");

    const submitObject = {
      record_date: recordDate,
      record_start_date: recordStartDate,
      title: taskname,
      description: taskdescription,
    };
    
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/add-record`,
        submitObject
      );
      if (res.status == 201) {
        onClose();
      }
    } catch (error) {
      console.error("Error while inserting record", error);
    }
  };
  
  const handleCloseModal =()=>{
    onClose();
    form.resetFields();
  }

  const handleUpdateModal = async()=>{
    const _id = record?._id;
    const payloadToUpdate = form.getFieldsValue();
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/update-record/${_id}`,{payloadToUpdate}
      );
      if (res.status == 200) {
        onClose();
      }
    } catch (error) {
      console.log("Error while updating record",error)
    }
  }

  useEffect(()=>{
    if(!isOpen) {
      let fieldValues: Record<string, any> = {};
      currentRecord.forEach((item:any)=>{
        Object.entries(item).forEach(([key, value])=>{
          if(key.includes("date") && value){
            fieldValues[key] = moment(value);
          } else if(value) {
            fieldValues[key] = value;
          }
        })
        form.setFieldsValue(fieldValues);
      })
    }
  },[editable, record])
  return (
    <>
      <Modal
        title={<span className="text-[18px]">{ isOpen ? "Add Record" : editable ? "Edit record" : "View record" }</span>}
        centered
        open={true}
        onOk={handleCloseModal}
        footer={
          isOpen
            ? [
                <Button key="cancel" className="bg-black text-white" onClick={handleCloseModal}>
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  className="bg-black text-white"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>,
              ]
            : editable
            ? [
                <Button key="cancel" className="bg-black text-white" onClick={handleCloseModal}>
                  Cancel
                </Button>,
                <Button
                  key="update"
                  className="bg-black text-white"
                  onClick={handleUpdateModal}
                >
                  Update
                </Button>,
              ]
            : null
        }
        onCancel={handleCloseModal}
        cancelText={"Cancel"}
      >
        <Form
          form={form}
          onFinish={() => handleSubmit()}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item<fieldType> name="title" label="Task">
            <Input disabled={!editable && !isOpen}/>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input  disabled={!editable && !isOpen}/>
          </Form.Item>
          <Form.Item name="record_start_date" label="Record Start Date">
            <DatePicker showTime format={"DD-MM-YYYY hh:mm:ss"} disabled={!editable && !isOpen}/>
          </Form.Item>
          { (!isOpen) && <Form.Item name="record_date" label="Record Date">
            <DatePicker showTime format={"DD-MM-YYYY hh:mm:ss"} disabled={true}/>
          </Form.Item>}
        </Form>
      </Modal>
    </>
  );
};

export default RecordModal;

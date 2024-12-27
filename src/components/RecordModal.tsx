"use client";
import { recordType } from "@/customeTypes";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";

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
}
const RecordModal: React.FC<RecordModalProps> = ({
  record,
  editable,
  onClose,
  isOpen,
}) => {
  const [form] = useForm();
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
    console.warn(submitObject);
    
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
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={true}
        onOk={onClose}
        footer={
          isOpen
            ? [
                <Button className="bg-black text-white" onClick={onClose}>
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
                <Button className="bg-black text-white" onClick={onClose}>
                  Cancel
                </Button>,
                <Button
                  key="update"
                  className="bg-black text-white"
                  onClick={onClose}
                >
                  Update
                </Button>,
              ]
            : null
        }
        onCancel={onClose}
        cancelText={"Cancel"}
      >
        <Form
          form={form}
          onFinish={() => handleSubmit()}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item<fieldType> name="title" label="Task">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item name="record_start_date" label="Record Start Date">
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default RecordModal;

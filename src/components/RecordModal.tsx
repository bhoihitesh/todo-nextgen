"use client";
import { recordType } from "@/customeTypes";
import { Button, DatePicker, Form, Input, Modal, TimePicker } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
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
  const [currentRecord, setCurrentRecord] = useState([record]);

  const handleSubmit = async () => {
    const startDate = moment(form.getFieldValue("record_start_date")?.$d).format('DD-MM-YYYY');
    const startTime = moment(form.getFieldValue("record_start_time")?.$d).format('hh:mm A');
    const taskname = form.getFieldValue("title");
    const taskdescription = form.getFieldValue("description");
    
    const submitObject = {
      title: taskname,
      description: taskdescription,
      record_start_date: startDate,
      record_start_time: startTime,
      created_by: {
        date: moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"),
        user: "hitesh",
        email: "bhoihitesh183@gmail.com",
        fcm_token: "cpSuQdzwfeP8F6ikltluSf:APA91bGyTi77M4HBMIyWAL_iKr_62bE8nmVwkqf0mIzBVH4-g-6PKpBrwPD9cwx21CS3amg6t6a3YZQ0E3EPcd1cYFJbpbkEqNe_1kjNfp"
      }
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/add-record`,
        submitObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status == 200) {
        onClose();
      }
    } catch (error) {
      console.error("Error while inserting record", error);
    }
  };

  const handleCloseModal = () => {
    onClose();
    form.resetFields();
  };

  const handleUpdateModal = async () => {
    const _id = record?._id;
    const payloadToUpdate = form.getFieldsValue();
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}update-record/${_id}`,
        { payloadToUpdate }
      );
      if (res.status == 200) {
        onClose();
      }
    } catch (error) {
      console.log("Error while updating record", error);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      let fieldValues: Record<string, any> = {};
      currentRecord.forEach((item: any) => {
        Object.entries(item).forEach(([key, value]) => {
          if (key.includes("date") && value) {
            fieldValues[key] = moment(value);
          } else if (value) {
            fieldValues[key] = value;
          }
        });
        form.setFieldsValue(fieldValues);
      });
    }
  }, [editable, record]);
  return (
    <>
      <Modal
        title={
          <span className="text-[18px]">
            {isOpen ? "Add Record" : editable ? "Edit record" : "View record"}
          </span>
        }
        centered
        open={true}
        onOk={handleCloseModal}
        footer={
          isOpen
            ? [
                <Button
                  key="cancel"
                  className="bg-black text-white"
                  onClick={handleCloseModal}
                >
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
                <Button
                  key="cancel"
                  className="bg-black text-white"
                  onClick={handleCloseModal}
                >
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
          layout="vertical"
        >
          <Form.Item<fieldType> name="title" label="Task">
            <Input disabled={!editable && !isOpen} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input disabled={!editable && !isOpen} />
          </Form.Item>
          <div className="flex gap-2">
          <Form.Item name="record_start_date" label="Record Start Date">
            <DatePicker format={"DD-MM-YYYY"} disabled={!editable && !isOpen} />
          </Form.Item>
          <Form.Item name="record_start_time" label="Record Start Time">
            <TimePicker type={"time"} use12Hours format={"hh:mm A"} disabled={!editable && !isOpen} />
          </Form.Item>
          </div>
          {!isOpen && (
            <>
            {/* <div className="flex gap-2">
              <Form.Item name="record_date" label="Record Date">
                <DatePicker format={"DD-MM-YYYY"} disabled={true} />
              </Form.Item>
              <Form.Item name="record_time" label="Record Time">
                <TimePicker type={"time"} disabled={true} />
              </Form.Item>
              </div> */}
            </>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default RecordModal;

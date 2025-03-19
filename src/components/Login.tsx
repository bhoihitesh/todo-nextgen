"use client";
import { getUsers } from "@/customeAPIs/page";
import { userType } from "@/customeTypes";
import { showAlert } from "@/store/slices/alertSlice";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [alert, setAlert] = useState("null");
  const [users, setUsers] = useState<userType[]>([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchUserData = async() =>{
    const {data} = await getUsers()
    setUsers(data)
  }
  useEffect(()=>{
    fetchUserData();
  },[])
  console.log(users)

  const handleSUbmit = async() => {
    const { username, password } = form.getFieldsValue();
    users.forEach((item,i)=>{
      if(item.username === username && item.password === password) {
        dispatch(showAlert({ message: "Login successfull", type: "success" }));
        setTimeout(()=>{
          router.push("/");
        },2000)
      };
    });
  };
  return (
    <>
      <Form
        form={form}
        name="login-form"
        layout="vertical"
        onFinish={handleSUbmit}
        className="form-container"
      >
        <h1 className="login-title">Login</h1>
        <Form.Item className="main-container">
          <Form.Item 
          label="Username" 
          name="username"
          rules={[
            {required: true, message: "Username is required"},
            { min: 5, message: "Username must be at least 5 characters" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
          label="Password" 
          name="password"
          rules={[
            {required: true, message: "Password is required"},
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;

"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
    const router = useRouter()
  const handleSUbmit = () => {
    console.warn("submit called");
    router.push("/");
  };
  return (
    <>
      <Form 
      name="login-form"
      layout="vertical"
      onFinish={handleSUbmit}>
        
        <Form.Item
        label="Username"
        name="username"
        >
          <Input/>
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        >
          <Input/>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;

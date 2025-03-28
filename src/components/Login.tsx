"use client";
import { login } from "@/customeAPIs/page";
import { setAuth } from "@/localStorage/GetLocalData";
import { showAlert } from "@/store/slices/alertSlice";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSUbmit = async () => {
    try {
      const { data } = await login(form.getFieldsValue());
      dispatch(
        showAlert({
          message: data.message,
          type: "success",
        })
      );
      setTimeout(() => {
        router.push("/");
      }, 3000);
      setAuth(form.getFieldValue('username'));
    } catch (error: any) {
      dispatch(
        showAlert({
          message: error?.response?.data?.message || "Something went wrong",
          type: "danger",
        })
      );
    }
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
        <Form.Item className="main-container w-100 px-3">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Username is required" },
              { min: 5, message: "Username must be at least 5 characters" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
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

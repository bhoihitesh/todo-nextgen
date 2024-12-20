import React, { ReactNode } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

const { Content } = Layout;

const BasicLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Layout className="flex flex-row">
        <Sidebar />
        <Content className="p-5 overflow-x-auto">
          {children}
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
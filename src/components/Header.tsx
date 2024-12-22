"use client";
import Image from "next/image";
import React from "react";
import hello from "../../public/hello.png";
import { Avatar, Button, Dropdown, Input, MenuProps } from "antd";
import { MenuOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { handleSidebarToggle } from "@/store/slices/counterSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  
  const dispatch = useDispatch()

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <UserOutlined className="mr-2" />
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          <SettingOutlined className="mr-2" />
          Setting
        </a>
      ),
    },
  ];

  return (
    <div className="header-container flex justify-between items-center bg-slate-900 w-full gap-[10px]">

      <div className="flex items-center justify-between md:w-[330px] sm:w-[350px]">
      <div><Image src={hello} alt="logo" width={100} height={200} /></div>
        <div><Button
          type="text"
          className="text-white border-white"
          icon={<MenuOutlined />}
          size={"middle"}
          onClick={()=>dispatch(handleSidebarToggle())}
        />
        </div>
      </div>

      <div className="flex items-center justify-end md:w-[100%] sm:w-[50%] gap-[10px]">
      <div className="md:w-[100%] sm:w-[30%]">
        <Input placeholder="Search your records..." className="md:w-[400px] sm:w-[10px] float-end"/>
        </div>
          
        <div className="w-[50px]">
        <Dropdown menu={{ items }} placement="bottom">
          <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>USER</Avatar>
        </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;

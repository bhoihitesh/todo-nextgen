"use client";
import Image from "next/image";
import React from "react";
import hello from "../../public/hello.png";
import { Avatar, Button, Dropdown, Input, MenuProps } from "antd";
import { MenuOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
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
    <div className="header-container flex justify-between items-center bg-slate-900 w-full">

      <div className="flex items-center justify-between w-[330px]">
      <Image src={hello} alt="logo" width={100} height={200} />
        <Button
          type="text"
          className="text-white border-white"
          icon={<MenuOutlined />}
          size={"middle"}
        />
      </div>

      <div className="flex items-center justify-end w-[100%] gap-[10px]">
      <div className="w-[100%]">
        <Input placeholder="Search your records..." className="w-[400px] float-end"/>
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

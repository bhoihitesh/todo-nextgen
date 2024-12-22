"use client";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const router = useRouter();

  const { isSidebarOpen } = useSelector((state: any) => state.myslice);
  return (
    <div
      className={`${
        isSidebarOpen
          ? " lg:d-block lg:w-[250px] md:w-[350px] w-[700px] sidebar-container text-white bg-gray-900 transition-all ease-in"
          : "w-[0px] d-none transition-all ease-linear"
      }`}
    >
      {isSidebarOpen && (
        <ul className="text-center w-full px-1">
          <li
            className="cursor-pointer py-2 bg-gray-600 rounded-md"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

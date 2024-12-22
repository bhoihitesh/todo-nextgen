"use client";
import { Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const router = useRouter()

  const {isSidebarOpen} = useSelector((state: any)=>state.myslice);
  return (
    <div className={`${isSidebarOpen ? ' lg:d-block lg:w-[250px] md:w-[350px] w-[700px] sidebar-container text-white bg-gray-900 transition-all ease-in' : 'w-[0px] d-none transition-all ease-linear'}`}>
      { isSidebarOpen && 
      <Row>
        <Col>
        <h1 className='cursor-pointer' onClick={()=>router.push('/dashboard')}>Dashboard</h1>  
        </Col>
      </Row>
      }
    </div>
  )
}

export default Sidebar
"use client";
import { Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className='sidebar-container bg-slate-400 w-[250px]'>
      <Row>
        <Col className=''>
        {/* <h1 className='cursor-pointer' onClick={()=>router.push('/')}>Home</h1> */}
        <h1 className='cursor-pointer' onClick={()=>router.push('/dashboard')}>Dashboard</h1>  
        </Col>
      </Row>
    </div>
  )
}

export default Sidebar
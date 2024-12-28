"use client";
import { Col, Row } from 'antd';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
    <Row>
    <Col span={24} className='text-center text-white bg-gray-900 p-[10px]'>
    <p className='p-0 m-0'>Designed & developed by Bhoi Hitesh</p>
    </Col>
    </Row>
  </div>
  )
}

export default Footer
"use client";
import React from 'react'
import { Button, DatePicker } from 'antd';
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons"

const { RangePicker } = DatePicker;

interface modalOpen {
  onOpen : () => void;
  reload: () => void;
}
const FilterTab: React.FC<modalOpen> = ({onOpen, reload}) => {
  return (
    <div className='flex gap-2'>
    <RangePicker/>
    <Button onClick={()=>onOpen()}>
      <PlusOutlined/>
    </Button>
    <Button onClick={()=>reload()}>
      <ReloadOutlined/>
    </Button>
    </div>
  )
}

export default FilterTab
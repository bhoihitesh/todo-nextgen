import React from 'react'
import { Button, DatePicker } from 'antd';
import { PlusOutlined } from "@ant-design/icons"

const { RangePicker } = DatePicker;

interface modalOpen {
  onOpen : () => void;
  isOpen: boolean;
}
const FilterTab: React.FC<modalOpen> = ({onOpen, isOpen}) => {
  console.log({isOpen})
  return (
    <div className='flex gap-2'>
    <RangePicker/>
    <Button onClick={()=>onOpen()}>
      <PlusOutlined/>
    </Button>
    </div>
  )
}

export default FilterTab
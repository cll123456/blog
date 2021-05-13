import { Spin, Space } from 'antd';
import React from 'react'
import './index.less'

export default function Loading() {
  return (
    <div className='loading-container'>
      <Space size="middle" >
        <Spin size="large" tip="Loading..." />
      </Space>
    </div>
  )
}

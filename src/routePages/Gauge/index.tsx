import React from 'react'
import './index.less'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import GaugeList from './GaugeList';

export default function Gauge() {
  return (
    <div className="gauge-container">
      <GaugeList />
    </div>
  )
}

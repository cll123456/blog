import React from 'react'
import Star from '../../components/common/particles/Star'
import './index.less'
export default function FirstScreen() {
  return (
    <div className='firstScreen-container'>
      {/* 动画 */}
      <div className="atom">
        <div className="electron"></div>
        <div className="electron-alpha"></div>
        <div className="electron-omega"></div>
      </div>
      {/* 粒子 */}
      <Star/>
    </div>

  )
}

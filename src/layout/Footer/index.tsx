import React from 'react'
import './index.less'
import img from './../../assets/imgs/footer/icp.webp'
export default function Footer() {
  return (
    <div className='footer-container'>
      <p> © 2021 - to now | 本站部分图片资源来源于网络，如有侵权联系删除</p>
      <p><img src={img} />
        <span>赣ICP备2020013006号</span>
      </p>
    </div>
  )
}

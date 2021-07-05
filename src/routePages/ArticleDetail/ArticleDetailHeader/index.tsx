import { Tag } from 'antd'
import React from 'react'
import './index.less'

export default function ArticleDetailHeader() {
  return (
    <div className='articleDetailHeader-container'>
      <div className="title-container">
        <h1>文章标题1</h1>
        <Tag color="magenta">magenta</Tag>
      </div>
      <div className="articleDetail-container">
        <span>时间：2021-12-2 18：00：00</span>
        <span>阅读量： 1200</span>
        <span>点赞量： 1200</span>
      </div>

    </div>
  )
}

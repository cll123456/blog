import { Tag } from 'antd'
import React from 'react'
import { IArticleDetailObj } from '../../../types/store/action/articleDetail'
import { renderTime } from '../../../utils/dateUtil'
import './index.less'

export default function ArticleDetailHeader(prop: IArticleDetailObj) {
  const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime'];
  return (
    <div className='articleDetailHeader-container'>
      <div className="title-container">
        <h1>{prop.title}</h1>
        <Tag  color={colors[Math.floor(Math.random() * colors.length)]}>{prop.tags}</Tag>
      </div>
      <div className="articleDetail-container">
        <span>时间：{renderTime(prop.createdAt)}</span>
        <span>阅读量： {prop.readNum}</span>
        <span>点赞量：{prop.likeNum}</span>
      </div>

    </div>
  )
}

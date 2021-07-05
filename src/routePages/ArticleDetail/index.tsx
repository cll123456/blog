import React from 'react'
import ArticleDetailBody from './ArticleDetailBody'
import ArticleDetailComment from './ArticleDetailComment'
import ArticleDetailHeader from './ArticleDetailHeader'
import './index.less'

export default function ArticleDetail() {
  return (
    <div className='articleDetail-container'>
      <ArticleDetailHeader></ArticleDetailHeader>
      <ArticleDetailBody></ArticleDetailBody>
      <ArticleDetailComment></ArticleDetailComment>
    </div>
  )
}

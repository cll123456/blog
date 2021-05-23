import React from 'react'
import MyCard from '../../../components/core/MyCard'
import { IArticleListProps } from '../../../types/page/article'
import './index.less'

export default function ArticleList(props: IArticleListProps) {

  const dom = props.articleList.map(p => {
    return (
      <MyCard {...p} key={p.id}></MyCard>
    )
  })
  return (
    <div className='articleList-container'>
      {dom}
    </div>
  )
}

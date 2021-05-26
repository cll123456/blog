import React from 'react'
import ArticleCard from '../ArticleCard'
import { IArticleListProps } from '../../../types/page/article'
import './index.less'

export default function ArticleList(props: IArticleListProps) {

  const dom = props.articleList.map(p => {
    return (
      <ArticleCard {...p} key={p.id}></ArticleCard>
    )
  })
  return (
    <div className='articleList-container'>
      {dom}
    </div>
  )
}

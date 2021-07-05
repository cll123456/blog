import React from 'react'
import ArticleCard from '../ArticleCard'
import { IArticleListProps } from '../../../types/page/article'
import './index.less'

export default function ArticleList(props: IArticleListProps) {

  const dom = props.articleList.map((p,index) => {
    return (
      <ArticleCard {...p} key={p.id}  {...props}></ArticleCard>
    )
  })
  return (
    <div className={` ${props.articleList.length % 4 === 0 || props.articleList.length % 4 === 1 ? 'equal4ClassName' : 'articleList-container'}`}>
      {dom}
    </div>
  )
}

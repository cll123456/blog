import React from 'react'
import { IProCardListProps } from '../../../types/page/project'
import ProCard from '../ProCard'
import './index.less'

export default function ProCardList(props: IProCardListProps) {
  const dom = props.cardList.map((p, i) => {
    return (
      <ProCard key={p.imgUrl && p.imgUrl + i} {...p}></ProCard>
    )
  })
  return (
    <div className='proCardList-container'>
      {dom}
    </div>
  )
}

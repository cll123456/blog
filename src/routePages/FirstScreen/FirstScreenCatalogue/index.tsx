import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

interface ICatalogueObj {
  path: string,
  target: string,
  title: string,
}


export default function FirstScreenCatalogue() {
  // 目录数组
  const catalogueArr: ICatalogueObj[] = [
    {
      path: '/Article',
      target: '_self',
      title: '文章'
    },
    {
      path: '/Project',
      target: '_self',
      title: '项目'
    },
    {
      path: 'https://github.com/cll123456',
      target: '_blank',
      title: 'Gitup'
    },
    {
      path: 'https://blog.csdn.net/qq_41499782',
      target: '_blank',
      title: 'CSDN'
    },
  ]

  // 节点对象
  const res = catalogueArr.map(p => (
  <a href={p.path} key={p.path} target={p.target}>
   {p.title}
  </a>)
  )
  return (
    <div className="container">
      {res}
    </div>
  )
}

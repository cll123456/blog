import React from 'react'
import { IMyTipsProps } from '../../types/layout/myTips';
import './index.less';
export default function MyTips(props: IMyTipsProps) {
  // gen dom https://img-blog.csdnimg.cn/20210413163532791.jpg?x-oss-process=image/resize,m_fixed,h_64,w_64
  const liDom = props.dataList?.map((p, i) => {
    return (
      <li key={p.imgUrl + i}>
        <div className="img-title">
          <img src={p.imgUrl} alt={p.title} />
          <span>{p.title}</span>
        </div>
        <div className="num">
          {p.num}篇
        </div>
      </li>
    )
  })

  return props.dataList && props.dataList.length > 0 ?
    (
      <div className='myTips-container'>
        <h4>标签云</h4>
        <div className="tips-body">
          <ul>
            {liDom}
          </ul>
        </div>
      </div>
    ) :
    (<div><h4></h4><div></div></div>)
}

// 默认值
MyTips.defaultProps = {
  dataList: []
}
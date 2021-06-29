import { Tooltip, Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react'
import './index.less'
import { IProCarouselProps } from '../../../types/page/project';
let proCarouselTimer: number;
export default function ProCarousel(props: IProCarouselProps) {
  // 启动定时器
  const genTimer = () => {
    clearTimer();
    proCarouselTimer = window.setInterval(() => {
      props.onPre(props.curIndex - 1)
    }, props.timer)
  }
  // 清楚定时器
  const clearTimer = () => {
    if (proCarouselTimer) {
      window.clearInterval(proCarouselTimer)
    }
  }
  // 启动定时器
  useEffect(() => {
    return clearTimer
  }, [])

  genTimer();
  // gen dom
  const dom = props.data.map((p, i) => {
    return (
      <li key={p.imgUrl && p.imgUrl + i} className={`${i === 0 ? 'showPre' : ''}`}
        style={{
          backgroundImage: `url(${p.imgUrl})`
        }}>
      </li>
    )
  })
  return (
    <div className='pro-carousel-container' onMouseLeave={genTimer} onMouseEnter={clearTimer}>
      <div className="bg-img" style={{ backgroundImage: `url(${props.data[props.curIndex] && props.data[props.curIndex].imgUrl})` }}></div>
      <div className="desc-container show">
        <h4>{props.data[props.curIndex] && props.data[props.curIndex].title}</h4>
        <div className="detail">
          {props.data[props.curIndex] && props.data[props.curIndex].desc}
        </div>
        <div className="btn">
          <Button type="dashed" shape="round" onClick={() => {
            window.open(props.data[props.curIndex].projectUrl || 'www.baidu.com', "_blank")
          }}> 项目预览 {`>`} </Button>
        </div>
      </div>
      <div className="img-container">
        <ul>
          {dom}
        </ul>
      </div>
      <div className="btn-group">
        <Tooltip title="上一张">
          <Button shape="circle" icon={<UpOutlined />} onClick={() => props.onPre(props.curIndex - 1)} />
        </Tooltip>
        <Tooltip title="下一张">
          <Button shape="circle" icon={<DownOutlined />} onClick={() => props.onNext(props.curIndex + 1)} />
        </Tooltip>
      </div>
    </div>
  )
}

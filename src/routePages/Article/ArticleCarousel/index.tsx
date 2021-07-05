import { Button, Tooltip } from 'antd';
import { DownOutlined, UpOutlined, BookOutlined, FolderOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react'
import './index.less'
import { IArticleCarouselProps, ICarouselData } from '../../../types/page/article';
// 定时器
let carouselTimer: (number | null) = null;

export default function ArticleCarousel(props: IArticleCarouselProps) {

  // 启动一个计时器
  const handleTimer = () => {
    cancelTimer();
    carouselTimer = window.setInterval(() => {
      props.onNext(props.curIndex + 1)
    }, props.timer)
  }

  // 取消定时器
  const cancelTimer = () => {
    if (carouselTimer) {
      window.clearInterval(carouselTimer)
    }
  }

  useEffect(() => {
    // 返回定时器清理函数
    return cancelTimer;
  }, [])
  // 启动一个定时器
  handleTimer();

  // generate dom
  const carouselDom = props.data.map((p: ICarouselData, index: number) => {
    return (
      <li className={`${index === 0 ? 'showNext' : ''}`} key={p.id}>
        <div className="file-icons">
          <FolderOutlined />
        </div>
        <div className='img' style={{
          backgroundImage: `url(${p.imgUrl})`
        }}></div>
      </li>
    )
  })

  const genCloud = props.data[props.curIndex] && props.data[props.curIndex].tagNames?.split(',').join(' / ')
  return (
    <div className='carousel-container' onMouseEnter={cancelTimer} onMouseLeave={handleTimer}>
      {/* 背景 */}
      <div className="bg-img" style={{
        backgroundImage: `url(${props.data[props.curIndex] && props.data[props.curIndex].imgUrl})`
      }}></div>
      {/* 按钮 */}
      <div className="btn-group">
        <Tooltip title="上一张">
          <Button shape="circle" icon={<UpOutlined />} onClick={() => props.onPre(props.curIndex - 1)} />
        </Tooltip>
        <Tooltip title="下一张">
          <Button shape="circle" icon={<DownOutlined />} onClick={() => props.onNext(props.curIndex + 1)} />
        </Tooltip>
      </div>
      {/* 翻页的卡片 */}
      <div className="box">
        <ul className="box-ul">
          {carouselDom}
        </ul>
      </div>
      {/* 标题 */}
      <div className="content show">
        <div className="title">{props.data[props.curIndex] && props.data[props.curIndex].title}</div>
        <div className="label">
          <BookOutlined />
          <span>{genCloud}</span>
        </div>
        <div className="btn">
          <Button type="dashed" shape="round" onClick={() => {
            props.goToArticleDetail(props.data[props.curIndex].id as string)
          }}> 阅读全文 {`>`} </Button>
        </div>
      </div>
    </div>
  )
}

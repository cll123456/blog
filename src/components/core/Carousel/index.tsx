import { Button, Tooltip } from 'antd';
import { DownOutlined, UpOutlined, BookOutlined, FolderOutlined } from '@ant-design/icons';
import React from 'react'
import { ICarouselData, ICarouselProps } from '../../../types/layout/carousel'
import './index.less'

export default function Carousel(props: ICarouselProps) {

  // generate dom
  const carouselDom = props.data.map((p: ICarouselData, index: number) => {
    return (
      <li className={`${index === 0 ? 'showNext' : ''}`} key={p.imgUrl}>
        <div className="file-icons">
          <FolderOutlined />
        </div>
        <div className='img' style={{
          backgroundImage: `url(${p.imgUrl})`
        }}></div>
      </li>
    )
  })

  return (
    <div className='carousel-container'>
      {/* 背景 */}
      <div className="bg-img" style={{
        backgroundImage: `url(${props.data[props.curIndex].imgUrl})`
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
        <div className="title">ArchLinux/Manjaro使用独显驱动造成的系统无法启动</div>
        <div className="label">
          <BookOutlined />
          <span>Arch / Arch Linux / 问题汇总</span>
        </div>
        <div className="btn">
          <Button type="dashed" shape="round" > 阅读全文 {`>`} </Button>
        </div>
      </div>
    </div>
  )
}

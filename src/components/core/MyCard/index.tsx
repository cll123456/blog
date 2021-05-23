import { Button, Tooltip } from 'antd'
import React from 'react'
import './index.less';
import { ReadOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { IMyCardProps } from '../../../types/components/myCard';


export default function MyCard(props: IMyCardProps) {
  return (
    <div className='myCard-container'>
      <h4>
        <span>{props.title}</span>
      </h4>
      <div className="img-container">
        <img src={props.imgUrl} alt="图片" />
      </div>
      <div className="hidden-content">
        <div className="date">
          {props.date}
        </div>
        <div className="operator">
          <Tooltip title="阅读量">
            <ReadOutlined /><address className='anticon-read'>{props.reading}</address>
          </Tooltip>
          <Tooltip title="点赞量">
            <LikeOutlined /><address className='anticon-like'>{props.like}</address>
          </Tooltip>
          <Tooltip title="评论">
            <MessageOutlined /><address className='anticon-message'>{props.msg}</address>
          </Tooltip>
        </div>
        <div className="btn">
          <Button type="primary" shape="round" > 阅读全文 </Button>
        </div>
      </div>
    </div>
  )
}

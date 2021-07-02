import { Button, Tooltip } from 'antd'
import React from 'react'
import './index.less';
import { ReadOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { IMyCardProps } from '../../../types/components/myCard';
import { renderTime } from '../../../utils/dateUtil';


export default function ArticleCard(props: IMyCardProps) {
  
  return (
    <div className='articleCard-container' style={props.style}>
      <h4>
        <span>{props.title}</span>
      </h4>
      <div className="img-container">
        <img src={props.imgUrl} alt="图片" />
      </div>
      <div className="hidden-content">
        <div className="date">
          {props.createdAt && props.createdAt.length > 0 ? renderTime(props.createdAt as string) : ''}
        </div>
        <div className="operator">
          <Tooltip title="阅读量">
            <ReadOutlined /><address className='anticon-read'>{props.readNum}</address>
          </Tooltip>
          <Tooltip title="点赞量">
            <LikeOutlined /><address className='anticon-like'>{props.likeNum}</address>
          </Tooltip>
          <Tooltip title="评论">
            <MessageOutlined /><address className='anticon-message'>{props.comentNum}</address>
          </Tooltip>
        </div>
        <div className="btn">
          <Button type="primary" shape="round" > 阅读全文 </Button>
        </div>
      </div>
    </div>
  )
}

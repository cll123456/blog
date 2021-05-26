import React from 'react'
import './index.less'
import Img from '../../../components/common/Img'
import { Tooltip, Button } from 'antd'
import { GithubOutlined, EyeOutlined } from '@ant-design/icons';
import { IProCardProps } from '../../../types/page/project';


export default function ProCard(props: IProCardProps) {
  return (
    <div className='proCard-container'>
      <div className="left">
        <Img src={props.imgUrl} alt="项目图片"></Img>
      </div>
      <div className="right">
        <h4>{props.title}</h4>
        <div className="desc">{props.desc}</div>
        <div className="btn-group">
          <Tooltip title="gitup地址">
            <Button shape="circle" icon={<GithubOutlined />} />
          </Tooltip>
          <Tooltip title="项目预览">
            <Button shape="circle" icon={<EyeOutlined />} />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

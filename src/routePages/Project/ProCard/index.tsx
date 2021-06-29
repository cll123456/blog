import React from 'react'
import './index.less'
import Img from '../../../components/common/Img'
import { Tooltip, Button } from 'antd'
import { GithubOutlined, EyeOutlined } from '@ant-design/icons';
import { IProjectObj } from '../../../types/store/action/project';


export default function ProCard(props: Partial<IProjectObj>) {
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
            <Button shape="circle" icon={<GithubOutlined />} onClick={() => {
              window.open(props.gitupUrl || 'www.baidu.com', "_blank")
            }} />
          </Tooltip>
          <Tooltip title="项目预览">
            <Button shape="circle" icon={<EyeOutlined />} onClick={() => {
              window.open(props.projectUrl || 'www.baidu.com', "_blank")
            }} />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

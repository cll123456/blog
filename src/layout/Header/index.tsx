import React, { useState } from 'react'
import './index.less'
import { Switch } from 'antd';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {ILayoutHeader } from '../../types/layout/header';


export default function Header(props: ILayoutHeader) {
const [curSkin, setCurSkin] = useState(true)
  return (
    <div className='header-container'>
      <div className="inner-container">
        <div className="header-img">头像</div>
        <div className="header-search">
          <Input size="large" placeholder="搜索您想要的……" allowClear  prefix={<SearchOutlined />} />
        </div>
        <div className="header-changeSkin">
          <Switch
            checkedChildren={<>🌞</>}
            unCheckedChildren={<>🌜</>}
            defaultChecked={curSkin}
            onChange={props.changeSkin}
          />
        </div>
      </div>
    </div>
  )
}

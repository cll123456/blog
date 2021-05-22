import React, { Ref, useImperativeHandle, useState } from 'react'
import './index.less'
import { Switch } from 'antd';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IHeaderRef, ILayoutHeader } from '../../types/layout/header';
import { IStore } from '../../types/store/action';
import { useStore } from 'react-redux';


export default function Header(props: ILayoutHeader, ref: Ref<IHeaderRef>) {
  // 获取store全部数据
  const [check, setCheck] = useState(true);
  // 获取状态
  const state:IStore = useStore().getState();
  document.body.style.setProperty('--header-bg-hover-color', state.header.headerBgColor);
  document.body.style.setProperty('--main-comp-bg-color', state.header.bodyCompBgColor);
  
  return (
    <div className='header-container'>
      <div className="inner-container">
        <div className="header-img">
          <img src='./../../src/assets/imgs/header/atvar.jpg'></img>
        </div>
        <div className="header-search">
          <Input size="large" placeholder="搜索您想要的……" allowClear prefix={<SearchOutlined />} />
        </div>
        <div className="header-changeSkin">
          <Switch
            checkedChildren={<>🌞</>}
            unCheckedChildren={<>🌜</>}
            defaultChecked={check}
            onChange={props.changeSkin}
          />
        </div>
      </div>
    </div>
  )
}

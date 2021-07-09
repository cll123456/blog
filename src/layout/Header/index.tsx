import React, { Dispatch, Ref, useState } from 'react'
import './index.less'
import { Select, Switch, Tooltip } from 'antd';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IHeaderRef, ILayoutHeader } from '../../types/layout/header';
import { IStore } from '../../types/store/action';
import { connect, useStore } from 'react-redux';
import { push } from 'connected-react-router';
import { getTotalProjectData, setTotalProjectCondition } from '../../store/actions/project';
import { getTotalArticleData, setTotalArticleCondition } from '../../store/actions/article';
import imgHeader from './../../assets/imgs/header/atvar.jpg';
const { Option } = Select;

function Header(props: ILayoutHeader, ref: Ref<IHeaderRef>) {

  // 获取store全部数据
  const [check, setCheck] = useState(true);
  // 获取状态
  const state: IStore = useStore().getState();
  // 默认选中的类型
  const [defaultCheckedType, setDefaultCheckedType] = useState('/Project')
  // 输入框默认值
  const [defaultInputVal, setDefaultInputVal] = useState(props.store.router.location.query.title || '')
  document.body.style.setProperty('--header-bg-hover-color', state.header.headerBgColor);
  document.body.style.setProperty('--main-comp-bg-color', state.header.bodyCompBgColor);

  return (
    <div className='header-container'>
      <div className="inner-container">
        <div className="header-img">
          <img src={imgHeader}></img>
        </div>
        <div className="header-search">
          <Input.Group compact>
            <Select
              defaultValue={defaultCheckedType}
              size="large"
              onChange={
                (val) => {
                  props.onClickPressEnter('', val)
                  setDefaultInputVal('')
                  setDefaultCheckedType(val);
                }
              }
            >
              <Option value="/Project"> 项 目 </Option>
              <Option value="/Article"> 文 章 </Option>
            </Select>
            <Input
              style={{ width: 'calc(100% - 120px)' }}
              value={defaultInputVal}
              onChange={
                (e) => {
                  setDefaultInputVal(e.target.value)
                }
              }
              size="large"
              allowClear
              prefix={<SearchOutlined />}
              onPressEnter={(e: any) => {
                props.onClickPressEnter(e.target.value, defaultCheckedType)
              }
              }
              placeholder={`搜索您想要的${defaultCheckedType === '/Project' ? ' 项 目 ' : ' 文 章 '}，按enter进行搜索`}
            />
          </Input.Group>
        </div>
        <div className="header-changeSkin">
          <Tooltip title={`切换${!check ? ' 明亮 ' : '暗黑'}主题`}>
            <Switch
              checkedChildren={<>🌞</>}
              unCheckedChildren={<>🌜</>}
              defaultChecked={check}
              onChange={props.changeSkin}
            />
          </Tooltip>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (store: IStore) => ({
  store
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onClickPressEnter(title: string, defaultCheckedType: string) {
    if (defaultCheckedType === '/Project') {
      dispatch(push(`/Project?pageNo=1&title=${title}`) as never);
      dispatch(setTotalProjectCondition({ title: title }) as never);
      dispatch(getTotalProjectData() as never);
    } else {
      dispatch(push(`/Article?pageNo=1&title=${title}&tagCloudId=`) as never);
      dispatch(setTotalArticleCondition({ title: title }) as never);
      dispatch(getTotalArticleData() as never);
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
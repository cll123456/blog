import React, { Dispatch } from 'react'
import { Unsubscribe } from 'redux-saga';
import { apiGetMyTips } from '../../api/layout';
import store from '../../store';
import { setTipData, setTipIsLoading } from '../../store/actions/myTips';
import { IMyTipsProps, IMyTipStore, tipObj } from '../../types/layout/myTips';
import { IStore } from '../../types/store/action';
import './index.less';
import { Affix, Skeleton } from 'antd';
import { useHistory } from 'react-router-dom';
import * as H from 'history';
/**
 * 标签云数组展示组件
 * @param props 
 * @returns 
 */
function MyTips(props: IMyTipsProps) {
  const history = useHistory();
  const liDom = props.dataList?.map((p, i) => {
    return (
      <li key={p.imgUrl + i} onClick={() => props.onClickTips(p.id, history)}>
        <div className="img-title">
          <img src={p.imgUrl} alt={p.title} />
          <span>{p.title}</span>
        </div>
        <div className="num">
          {p.num}篇
        </div>
      </li>
    )
  })

  return props.dataList && props.dataList.length > 0 ?
    (
      <Affix offsetTop={50} >
        <div className='myTips-container'>
          <h4>标签云</h4>
          <hr />
          <div className="tips-body">
            <Skeleton loading={props.loading}>
              <ul>
                {liDom}
              </ul>
            </Skeleton>
          </div>
        </div>
      </Affix>
    ) :
    (<div><h4></h4><div></div></div>)
}

// 默认值
MyTips.defaultProps = {
  dataList: []
}
/**
 * 映射状态
 * @param state 
 * @returns 
 */
const mapStateToProps = (state: IStore) => {
  return state.myTips
}

/**
 * 映射事件
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onClickTips(id: string, history: H.History) {
      history.push('/Article?tagCloudId=' + id)
    }
  }
}

/**
 * 标签云的数组容器组件
 */

export default class extends React.PureComponent<any, IMyTipStore>{
  
  // 初始化state
  state = mapStateToProps(store.getState() as any);
  // 取消监听
  onCancelListener!: Unsubscribe
  // 组件挂载获取数据
  async componentDidMount() {
    
    // 需要先写监听store变化的函数
    this.onCancelListener = store.subscribe(() => {
      this.setState(mapStateToProps(store.getState() as any))
    })
    // 判断数据不存在，获取数据
    if (this.state.dataList.length === 0) {
      store.dispatch(setTipIsLoading(true) as never);
      // 获取数据
      const res: tipObj[] = await apiGetMyTips().then(res => res.data);
      store.dispatch(setTipData(res.concat(res).concat(res).concat(res)) as never)
      // 关闭loading
      store.dispatch(setTipIsLoading(false) as never);
    }
  }

  componentWillUnmount() {
    // 取消监听
    this.onCancelListener();
  }

  render() {
    return (
      <MyTips {...this.state} {...mapDispatchToProps(store.dispatch as any)}></MyTips>
    )
  }
}
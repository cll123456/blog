import React, { Dispatch, useLayoutEffect } from 'react'
import store from '../../store';
import { getTipData, } from '../../store/actions/myTips';
import { IMyTipsProps } from '../../types/layout/myTips';
import { IStore } from '../../types/store/action';
import './index.less';
import { Affix, Skeleton, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import * as H from 'history';
import { push } from 'connected-react-router';
import { getTotalArticleData, setTotalArticleCondition } from '../../store/actions/article';
import { connect } from 'react-redux';
/**
 * 标签云数组展示组件
 * @param props 
 * @returns 
 */
function Tip(props: IMyTipsProps) {
  const history = useHistory();

  useLayoutEffect(() => {
    if (props.myTips.dataList.length === 0) {
      props.initTipData();
    }
  }, [])
  const liDom = props.myTips.dataList?.map((p, i) => {
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
  let dom = (<div className='loading-div'></div>);
  if (props.myTips.dataList && props.myTips.dataList.length > 0) {
    if (props.router.location.pathname === '/ArticleDetail') {
      dom = (
        <div className='myTips-container'>
          <h4>标签云</h4>
          <hr />
          <div className="tips-body">
            <Skeleton loading={props.myTips.loading}>
              <ul>
                {liDom}
              </ul>
            </Skeleton>
          </div>
        </div>
      )
    } else {
      dom = (
        <Affix offsetTop={50} >
          <div className='myTips-container'>
            <h4>标签云</h4>
            <hr />
            <div className="tips-body">
                <ul>
                  {liDom}
                </ul>
            </div>
          </div>
        </Affix>
      )
    }
  } else {
    dom = (<div className='loading-div'><h4></h4><div></div></div>)
  }

  return (
    <Spin spinning={props.myTips.loading}>
        {dom}
    </Spin>
  );
}

/**
 * 映射状态
 * @param state 
 * @returns 
 */
const mapStateToProps = (state: IStore) => {
  return { myTips: state.myTips, router: state.router }
}

/**
 * 映射事件
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onClickTips(id: string, history: H.History) {
      const storeData = store.getState() as IStore;
      dispatch(setTotalArticleCondition({ tagCloudId: id }));
      dispatch(getTotalArticleData());
      dispatch(push(`/Article?pageNo=1&title=${storeData.article.totalArticleCondition.title}&tagCloudId=${id}`));
    },
    // 初始化数据
    initTipData() {
      dispatch(getTipData())
    }
  }
}

/**
 * 标签云的数组容器组件
 */

export default connect(mapStateToProps, mapDispatchToProps)(Tip)
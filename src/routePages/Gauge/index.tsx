import React, { Dispatch, useLayoutEffect } from 'react'
import './index.less'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import GaugeList from './GaugeList';
import { IStore } from '../../types/store/action';
import { connect } from 'react-redux';
import { IGaugeProps } from '../../types/page/gauge';
import { getGaugeData, setGaugeReqParam } from '../../store/actions/gauge';
import { IGaugeStore } from '../../types/store/action/gauge';

function Gauge(props: IGaugeProps) {
  useLayoutEffect(() => {
    if (props.gaugeData.length === 0) {
      props.getGaugeData();
    }
  }, []);
  return (
    <div className="gauge-container">
      <GaugeList  {...props} />
    </div>
  )
}


const mapStateToProps = (store: IStore) => {
  return ({
    /**
    * 归档是否加载中
    */
    gaugeLoading: store.gauge.gaugeLoading,
    /**
     * 归档文章数据
     */
    gaugeData: store.gauge.gaugeData,
    /**
     * 归档的文章总数
     */
    gaugeCount: store.gauge.gaugeCount,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  // 获取归档数据
  getGaugeData() {
    dispatch(getGaugeData())
  },
  // 设置查询参数
  setGaugeReqParam(pageNo: number, gaugeStore: IGaugeStore) {

    dispatch(setGaugeReqParam({ pageNo }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Gauge)
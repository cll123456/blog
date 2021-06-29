import React from 'react'
import './index.less'
import { Divider, Typography } from 'antd';
import { IGaugeListProps } from '../../../types/page/gauge';
const { Text, Paragraph, Title } = Typography;
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { renderTime } from '../../../utils/dateUtil';

export default function GaugeList(props: IGaugeListProps) {

  const liDom = props.gaugeData.map(p => {
    return (
      <li key={p.id}>
        <div className="circle"></div>
        <div className="content">
          <div className="date">
            <Text type="secondary">{renderTime(p.createdAt)}
            </Text>
          </div>
          <div className="title">
            <Title level={3}>
              <Paragraph copyable>{p.title}</Paragraph>
            </Title>
          </div>
          <Divider dashed></Divider>
        </div>
      </li>
    )
  })

  const antIcon = props.gaugeLoading
    ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    : '';
  return (
    <div className='gaugeList-container'>
      <ul>
        <div className="circle mainCircle"></div>
        <div className="allTitle">
          <Title level={3}>总共{props.gaugeCount}篇文章，加油</Title>
        </div>
        {liDom}
      </ul>
      {/* loading 中 */}
      <div className="gaugeList-loading">
        {antIcon}
      </div>
    </div>
  )
}

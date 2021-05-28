import React from 'react'
import './index.less'
import { Divider, Typography } from 'antd';
const { Text, Paragraph, Title } = Typography;

export default function GaugeList() {
  return (
    <div className='gaugeList-container'>
      <ul>
        <div className="circle mainCircle"></div>
        <div className="allTitle">
          <Title level={3}>总共100篇文章，加油</Title>
        </div>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <div className="date">
              <Text type="secondary">2021年9月18日 12：00
            </Text>
            </div>
            <div className="title">
              <Title level={3}>
                <Paragraph copyable>h3. Ant Design</Paragraph>
              </Title>
            </div>
            <Divider dashed></Divider>
          </div>
        </li>
      </ul>
    </div>
  )
}

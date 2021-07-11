import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

ReactDOM.render(
  // <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>,
  document.getElementById('root')
)
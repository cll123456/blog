import React, { useState } from 'react'
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import './App.less'
import Header from './layout/Header';
import { Provider } from 'react-redux'
import store from './store';
import { changeBgColor, changeHeaderBgColor } from './store/actions/header';
import { EbgColor, EHeaderBgColor } from './types/store/action/header';


function App() {
  // 刷新组件
  const [, reloadComp] = useState({});
  
  // 改变皮肤的方法
  const handleSkin = (checked: boolean) => {
      // 修改背景颜色
      store.dispatch(changeBgColor(checked ? EbgColor.Sun : EbgColor.Moon));
      // 改变头部背景颜色
      store.dispatch(changeHeaderBgColor(checked ? EHeaderBgColor.Sun : EHeaderBgColor.Moon));
      reloadComp({});
    }
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header changeSkin={handleSkin}></Header>
          <div>
            {renderRoutes(routes)}
          </div>
        </div>
      </Provider>
    </BrowserRouter >

  )
}

export default App

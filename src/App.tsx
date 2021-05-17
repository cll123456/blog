import React, { useCallback, useState } from 'react'
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import './App.less'
import Header from './layout/Header';
function App() {
  // 刷新组件
  const [, reloadComp] = useState({});
  // 改变皮肤的方法
 const handleSkin = useCallback(
    (checked:boolean) => {
      console.log(checked,'-----');
      
    },
   []
  )
  return (
    <BrowserRouter>
      <div className="App">
        <Header changeSkin={handleSkin}></Header>
        <div>
          {renderRoutes(routes)}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

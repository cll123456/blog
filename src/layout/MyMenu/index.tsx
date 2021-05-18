import React, { useCallback } from 'react'
import './index.less'
import { Menu } from 'antd';
import { routes } from '../../routes';
import { useHistory, useLocation } from 'react-router';


export default function MyMenu() {
  // 组装菜单
  const menuList = routes.map(p => {
    // 需要组转的路由，首屏不需要
    if (p.path !== '*') {
      return (
        <Menu.Item key={(p.path as string)} icon={p.meta.icon}>
          {p.name}
        </Menu.Item>
      )
    }
  })
  // 获取当前的路径名称
  const { pathname } = useLocation();
  // 获取当前的路由history对象
  const history = useHistory()

  // 点击跳转页面
  const handleGotoPage = useCallback(
    ({ item, key, keyPath }) => {
      // 回到首页
      if (key === '/Home') {
        window.location.href = '/';
      } else {
        history.push(key)
      }
    },
    [],
  )

  return (
    <div>
      <Menu
        style={{ width: 256 }}
        mode="inline"
        defaultSelectedKeys={[pathname]}
        onClick={handleGotoPage}
      >
        {menuList}
      </Menu>
    </div>
  )
}

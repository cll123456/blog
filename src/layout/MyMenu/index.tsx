import React, { Dispatch, useCallback } from 'react'
import './index.less'
import { Menu } from 'antd';
import { routes } from '../../routes';
import { useHistory, useLocation } from 'react-router';
import { push } from 'connected-react-router'
import { connect, useStore } from 'react-redux'
import { IStore } from '../../types/store/action';

function MyMenu(prop: { dispatchMenu: (path: string, store: IStore) => void }) {
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
  // 获取仓库
  const store: IStore = useStore().getState();

  // 点击跳转页面
  const handleGotoPage = useCallback(
    ({ item, key, keyPath }) => {
      // 回到首页
      if (key === '/Home') {
        window.location.href = '/';
      } else {
        prop.dispatchMenu(key, store);
      }
    },
    [],
  )

  return (
    <div className='myMenu-container'>
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchMenu(path: string, store: IStore) {
    // 如果当前是项目
    if (path === '/Project') {
      
      dispatch(push(`${path}?pageNo=${store.project.totalProjectCondition.pageNo}&title=${store.project.totalProjectCondition.title}`))
    } else {
      dispatch(push(path));
    }
  }
})

export default connect(null, mapDispatchToProps)(MyMenu)

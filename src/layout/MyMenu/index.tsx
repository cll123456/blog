import React, { Dispatch, useCallback } from 'react'
import './index.less'
import { Menu } from 'antd';
import { routes } from '../../routes';
import { push } from 'connected-react-router'
import { connect, useStore } from 'react-redux'
import { IStore } from '../../types/store/action';
import store from '../../store';

function MyMenu(prop: { dispatchMenu: (path: string, store: IStore) => void, pathname: string }) {
  // 组装菜单
  const menuList = routes.map(p => {
    // 需要组转的路由，首屏不需要
    if (!p.hidden) {
      return (
        <Menu.Item key={(p.path as string)} icon={p.meta.icon}>
          {p.name}
        </Menu.Item>
      )
    }
  })

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
        selectedKeys={[prop.pathname]}
        onClick={handleGotoPage}
      >
        {menuList}
      </Menu>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchMenu(path: string) {
    const storeData = store.getState() as IStore
    // 如果当前是项目
    if (path === '/Project') {
      dispatch(push(`${path}?pageNo=${storeData.project.totalProjectCondition.pageNo}&title=${storeData.project.totalProjectCondition.title}`))
    } else if (path === '/Article') {
      dispatch(push(`${path}?pageNo=${storeData.article.totalArticleCondition.pageNo}&title=${storeData.article.totalArticleCondition.title}&tagCloudId=${storeData.article.totalArticleCondition.tagCloudId}`))
    } else {
      dispatch(push(path));
    }
  }
})

const mapStateToProps = (store: IStore) => ({
  pathname: store.router.location.pathname
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMenu)

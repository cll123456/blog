import React, { useEffect, useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IStore } from '../../types/store/action'
import * as CRR from 'connected-react-router'
import './index.less'
import { Affix, Anchor } from 'antd'
import { debounce } from '../../utils/otherUtil'
import { ILinkObj } from '../../types/layout/articleDetail'

function ArticleDialog(props: { menuArr: ILinkObj[], router: CRR.RouterState }) {
  // 当前选中的目录锚点
  const [currentChooseIndex, setCurrentChooseIndex] = useState(0);
  // 鼠标滚动事件
  const mouseScroll = debounce((e: Event) => {
    const scrollTopDis = document.documentElement.scrollTop;
    // 计算所有节点的距离并且放入数组,哪个值的绝对值最接近0，就要显示那个锚点
    const disToTop = props.menuArr.map(p => Math.abs(Number(document.getElementById(p.idName)?.offsetTop) - scrollTopDis));
    const index = disToTop.indexOf(Math.min(...disToTop))
    setCurrentChooseIndex(index)
  }, 500)

  useEffect(() => {
    if (props.router.location.pathname === '/ArticleDetail') {
      window.addEventListener('scroll', mouseScroll)
    }
    return () => {
      window.removeEventListener('scroll', mouseScroll)
    }
  }, [props.menuArr, props.router.location.pathname])

  const menuDialog = props.menuArr.map((p, index) => {
    return (<div
      onClick={() => {
        let anchorElement = document.getElementById(p.idName);
        if (anchorElement) {
          setCurrentChooseIndex(index);
          window.scrollTo({ left: 0, top: anchorElement.offsetTop, behavior: 'smooth' })
        }
      }}
      className={p.level + `container aLinkClass ${index === currentChooseIndex ? 'currentChooseAnchor' : ''}`}
      key={p.level + index}>{p.idName}
    </div>)

  })


  return props.router.location.pathname === '/ArticleDetail'
    ? (
      <Affix offsetTop={50}>
        <div className='articleDialog-container'>
          <h4> 目 录 </h4>
          <hr />
          <div className="articleDialog-body">
            {menuDialog}
          </div>
        </div>
      </Affix>
    )
    :
    (
      <>
      </>
    )
}

const mapStateToProps = (store: IStore) => ({
  menuArr: store.articleDetail.articleDetailDialog,
  router: store.router
})
export default connect(mapStateToProps, {})(ArticleDialog);
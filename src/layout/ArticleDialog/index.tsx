import React from 'react'
import { connect } from 'react-redux'
import { IStore } from '../../types/store/action'
import { IArticleDetailDialogObj } from '../../types/store/action/articleDetail'
import * as CRR from 'connected-react-router'
import './index.less'

function ArticleDialog(props: { menuArr: IArticleDetailDialogObj[], router: CRR.RouterState }) {
  console.log(1232,props,'--====---');
  
  const menuDialog = props.menuArr.map((p,index) => {
    for (const key in p) {
      if (Object.prototype.hasOwnProperty.call(p, key)) {
        const element = p[key];
        return (<a href={'#' + element} className={key + 'container aLinkClass'} key={key + element + index}>{element}</a>)
      }
    }
  })
  return props.router.location.pathname === '/ArticleDetail'
    ? (
      <div className='articleDialog-container'>
        <h4> 目 录 </h4>
        <hr />
        <div className="articleDialog-body">
          {menuDialog}
        </div>
      </div>
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
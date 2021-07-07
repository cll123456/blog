import React, { Dispatch, useState } from 'react'
import { LikeOutlined } from '@ant-design/icons';
import './index.less';
import { connect } from 'react-redux';
import { setArticleLikeNum } from '../../store/actions/articleDetail';
import { IStore } from '../../types/store/action';

function Like(props: { setLike: () => void, router: any }) {
  const [isLike, setIsLike] = useState(false);
  // 是否第一次点赞
  const [isFirst, setIsFirst] = useState(false);

  return (<>
    {props.router.location.pathname === '/ArticleDetail'
      ?
      <div
        onClick={() => {
          setIsLike(!isLike);
          if (!isFirst) {
            // 发送点赞请求
            props.setLike();
            setIsFirst(true);
          }
        }}
        className=" ant-back-top ant-back-top-icon ant-fade-enter ant-fade-enter-active ant-fade ant-back-top-content like-container">
        <LikeOutlined style={{ color: isLike ? '#f40' : '' }} />
      </div>
      : <div></div>}
  </>)
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setLike() {
    dispatch(setArticleLikeNum())
  }
})

const mapStateToProps = (store: IStore) => ({
  router: store.router
})

export default connect(mapStateToProps, mapDispatchToProps)(Like)

import React, { Dispatch,  useCallback, useEffect } from 'react'
import { Comment, Avatar, } from 'antd';
import './index.less'
import { IArticleCommentProps, IArticleDetailCommentObj } from '../../../types/store/action/articleDetail';
import { composeTree } from '../../../utils/otherUtil';
import { renderTime } from '../../../utils/dateUtil';
import { connect } from 'react-redux';
import { IStore } from '../../../types/store/action';
import MyComment from '../../../components/common/MyComment';
import { setArticleCommentList } from '../../../store/actions/articleDetail';

function ArticleDetailComment(props: IArticleCommentProps) {

  // 注册监听事件
  useEffect(() => {
    document.addEventListener('click', hiddenReplayCommentFun)
    return () => {
      document.removeEventListener('click', hiddenReplayCommentFun)
    }
  }, [props.commentData]);
  // 打开评论
  const showReplayCommentFun = useCallback(
    (id: string | number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      e.nativeEvent.stopImmediatePropagation();
      // 找到当前评论的数据
      const res = props.commentData.map(p => {
        if (p.id === id) {
          p.hasShowCommentComp = true;
        } else {
          p.hasShowCommentComp = false;
        }
        return p;
      });
      props.setArticleCommentData(res)
    },
    [props.commentData],
  )
  // 隐藏评论
  const hiddenReplayCommentFun = useCallback(
    () => {
      const res = props.commentData.map(p => ({ ...p, hasShowCommentComp: false }));
      props.setArticleCommentData(res)
    },
    [props.commentData],
  )


  // 获取树形评论的数据
  const treeComments = composeTree<IArticleDetailCommentObj>(props.commentData);
  let res;
  if (treeComments && treeComments.length > 0) {
    // 生成评论节点
    const genDom = function (list: IArticleDetailCommentObj[]) {
      return list.map(p => {
        if (!p.children || p.children.length === 0) {
          return (
            <Comment
              key={p.id + p.createdAt}
              style={{ background: 'transparent' }}
              author={<a>{p.nickName}</a>}
              datetime={renderTime(p.createdAt)}
              avatar={
                <Avatar
                  src={p.avatar}
                  alt={p.nickName}
                />
              }
              content={
                <div onClick={(e) => showReplayCommentFun(p.id, e)}>
                  <p>
                    {p.content}<span className='replay-span' > 回 复 </span>
                  </p>
                  {p.hasShowCommentComp ? <MyComment pid={p.id}></MyComment> : ''}
                </div>
              }
            >
            </Comment>
          )
        } else {
          return (
            <Comment
              key={p.id + p.createdAt}
              style={{ background: 'transparent' }}
              author={<a>{p.nickName}</a>}
              datetime={renderTime(p.createdAt)}
              avatar={
                <Avatar
                  src={p.avatar}
                  alt={p.nickName}
                />
              }
              content={
                <div onClick={(e) => showReplayCommentFun(p.id, e)}>
                  <p>
                    {p.content}<span className='replay-span' > 回 复 </span>
                  </p>
                  {p.hasShowCommentComp ? <MyComment pid={p.id}></MyComment> : ''}
                </div>
              }
            >
              {genDom(p.children)}
            </Comment>
          )
        }
      })
    }
    res = genDom(treeComments)
  }

  return (
    <div className='articleDetailComment-container'>
      {/* 评论弹框 */}
      <MyComment pid={0} />
      {/* 评论的详情 */}
      {res}
    </div>
  )
}

const mapStateToProps = (store: IStore) => ({
  commentData: store.articleDetail.articleDetailComments
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  /**
   * 设置评论数据
   * @param arr 
   */
  setArticleCommentData(arr: IArticleDetailCommentObj[]) {
    dispatch(setArticleCommentList(arr));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailComment)
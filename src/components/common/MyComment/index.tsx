import { Avatar, Button, message, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { Dispatch, useLayoutEffect, useState } from 'react'
import './index.less'
import { ELoginType } from '../../../types/store/action/user'
import { connect } from 'react-redux'
import { IStore } from '../../../types/store/action'
import { IMyCommentProps } from '../../../types/components/myComment'
import { getUserInitInfo, setLoginType } from '../../../store/actions/user'
import { CheckCircleFilled } from '@ant-design/icons'
import { IArticleCommentObj } from '../../../types/store/action/articleDetail'
import { setArticleComment } from '../../../store/actions/articleDetail'


function MyComment(props: IMyCommentProps) {
  // 评论组件内容
  const [commentVal, setCommentVal] = useState('');
  // 初始化获取用户信息
  useLayoutEffect(() => {

    if (Object.keys(props.user.userInfo).length === 0) {
      props.getUserInfo();
    }
    return () => {
    };
  }, [props.user])
  // 打开选择登录方式的弹框
  const [isModalVisible, setIsModalVisible] = useState(false);
  //  当前选择的登录类型
  const [curLoginType, setCurLoginType] = useState<ELoginType>(ELoginType.loginByGitee)
  // 确定
  const handleOk = () => {
    sessionStorage.setItem('@@loginType', curLoginType);
    sessionStorage.setItem('@@lastPage', props.router.location.pathname + props.router.location.search);
    props.setUserLoginType(curLoginType);
    setIsModalVisible(false);
  };
  // 取消
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 点击评论组件判断当前是否登录，没有登录需要进行授权登录
  const commentClickFun = () => {
    if (Object.keys(props.user.userInfo).length === 0) {
      setIsModalVisible(true);
    }
  }
  // 提交评论
  const submitComment = () => {
    if (!props.user.userInfo.id || props.user.userInfo.id === '') {
      message.warning('请登录后在评论哦！');
      return
    } else {
      if (commentVal === '' || commentVal.trimStart().trimEnd() === '') {
        message.warning('请输入留言内容！');
        return
      }
      props.setCommentParam({ pid: props.pid as string, userId: props.user.userInfo.id as string, articleId: props.articleId as string, content: commentVal })
      setCommentVal('');
    }
  }

  return (
    <div className="commentDiv-container">
      <div className="header">
        <Avatar src={props.user.userInfo.avatar} />
      </div>
      <div className="inputContent">
        <TextArea
          value={commentVal}
          onChange={(e) => {
            setCommentVal(e.target.value)
          }}
          autoSize={{ minRows: 2, maxRows: 5 }}
          allowClear showCount maxLength={1000}
          onClick={commentClickFun}
          placeholder='快来占沙发呀！！！' />
        <div className='btn-div'>
          <Button type="dashed" shape="round" onClick={submitComment}>
            提 交
          </Button>
        </div>
      </div>
      {/* 登录方式 */}
      <Modal width="450px"
        title="请选择登录方式"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="login-container">
          <div className="logo-container" title="通过gitee授权登录"
            onClick={() => {
              setCurLoginType(ELoginType.loginByGitee);
            }}>
            {curLoginType === ELoginType.loginByGitee ? <CheckCircleFilled style={{ fontSize: '30px', color: 'greenyellow' }} /> : ''}
            <svg width="90px" height="90px" viewBox="0 0 90 90" version="1.1">
              <g id="Group">
                <circle id="Combined-Shape" fill="#C71D23" cx="44.8544363" cy="44.8544363" r="44.8544363" />
                <path d="M67.558546,39.8714292 L42.0857966,39.8714292 C40.8627004,39.8720094 39.8710953,40.8633548 39.8701949,42.0864508 L39.8687448,47.623783 C39.867826,48.8471055 40.8592652,49.8390642 42.0825879,49.8393845 C42.0827874,49.8393846 42.0829869,49.8393846 42.0831864,49.8387862 L57.5909484,49.838657 C58.8142711,49.8386283 59.8059783,50.830319 59.8059885,52.0536417 C59.8059885,52.0536479 59.8059885,52.053654 59.8059701,52.0536602 L59.8059701,52.6073539 L59.8059701,52.6073539 L59.8059701,53.161115 C59.8059701,56.8310831 56.8308731,59.80618 53.160905,59.80618 L32.1165505,59.80618 C30.8934034,59.806119 29.9018373,58.8145802 29.9017425,57.5914331 L29.9011625,36.5491188 C29.9008781,32.8791508 32.8758931,29.9039718 36.5458611,29.9038706 C36.5459222,29.9038706 36.5459833,29.9038706 36.5460443,29.9040538 L67.5523638,29.9040538 C68.77515,29.9026795 69.7666266,28.9118177 69.7687593,27.6890325 L69.7721938,22.1516997 C69.774326,20.928378 68.7832423,19.9360642 67.5599198,19.9353054 C67.5594619,19.9353051 67.5590039,19.935305 67.558546,19.9366784 L36.5479677,19.9366784 C27.3730474,19.9366784 19.935305,27.3744208 19.935305,36.549341 L19.935305,67.558546 C19.935305,68.7818687 20.927004,69.7735676 22.1503267,69.7735676 L54.8224984,69.7735676 C63.079746,69.7735676 69.7735676,63.079746 69.7735676,54.8224984 L69.7735676,42.0864509 C69.7735676,40.8631282 68.7818687,39.8714292 67.558546,39.8714292 Z" id="G" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
          <div className="logo-container" title="通过github授权登录"
            onClick={() => {
              setCurLoginType(ELoginType.loginByGithub)
            }}>
            {curLoginType === ELoginType.loginByGithub ? <CheckCircleFilled style={{ fontSize: '30px', color: 'greenyellow' }} /> : ''}
            <svg className="octicon octicon-mark-github v-align-middle"
              height="90px"
              viewBox="0 0 16 16"
              version="1.1"
              width="90px"
              aria-hidden="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </div>
        </div>
        <p>温馨提示：个人推荐使用gitee登录，GitHub可能有的人访问不了哦！！！</p>
      </Modal>
    </div>
  )
}

const mapStateToProps = (store: IStore, ownProps: { pid: string | number }) => ({
  user: store.user,
  articleId: store.articleDetail.currentArticleId,
  router: store.router,
  ...ownProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  // 一开始获取用户信息
  getUserInfo() {
    dispatch(getUserInitInfo())
  },
  // 选择登录类型
  setUserLoginType(type: ELoginType) {
    dispatch(setLoginType(type))
  },
  // 设置文章参数
  setCommentParam(commentObj: IArticleCommentObj) {
    dispatch(setArticleComment(commentObj))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(MyComment)
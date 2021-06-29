import React, { Dispatch, useLayoutEffect } from 'react'
import { Unsubscribe } from 'redux-saga';
import { apiGetAboutMe } from '../../api/about';
import store from '../../store';
import { getAsyncData, setData, setIsLoading } from '../../store/actions/about';
import { IAboutProp } from '../../types/page/about';
import { IStore } from '../../types/store/action';
import { IAboutStore } from '../../types/store/action/about';
import { Skeleton, Card, Tag } from 'antd';
import './index.less'
import { connect } from 'react-redux'

/**
 * 获取标签
 * @param str 
 * @returns 
 */
function getTags(str: string | undefined) {
  const colors = ['success', 'processing', 'error', 'warning', 'default'];
  return str && str.split(',').map(p => {
    return (
      <Tag key={p} color={colors[Math.floor(Math.random() * colors.length)]}>{p}</Tag>
    )
  })
}
/**
 * 关于我的展示组件
 * @param props 
 * @returns 
 */
function About(props: IAboutStore & { getAboutData: () => void }) {
  const { loading } = props;

  useLayoutEffect(() => {
    if (Object.keys(props.dataObj).length === 0) {
      props.getAboutData();
    }
  }, [])
  return (
    <div className='about-container'>
      {/* 个人基本信息 */}
      <Card
        title='个人基本信息'
        size='small'
        headStyle={{ fontSize: 18, fontWeight: 600 }}
      >
        <Skeleton loading={loading} active>
          <ul className='about-ul-container'>
            <li>
              <div className='content-show-l'>英文名称</div>
              <div className='content-show-r'>{props.dataObj.enName}</div>
            </li>
            <li>
              <div className='content-show-l'>中文名称</div>
              <div className='content-show-r'>{props.dataObj.znName}</div>
            </li>
            <li>
              <div className='content-show-l'>出生日期</div>
              <div className='content-show-r'>{props.dataObj.birthday}</div>
            </li>
            <li>
              <div className='content-show-l'>
                <span>性</span>
                <span>别</span>
              </div>
              <div className='content-show-r'>
                <img data-v-60b18741="" src="data:image/png;base64,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" alt=""></img>
              </div>
            </li>
            <li>
              <div className='content-show-l'>个人简介</div>
              <div className='content-show-r'>{props.dataObj.selfIntroduce}</div>
            </li>
            <li>
              <div className='content-show-l'>开始工作</div>
              <div className='content-show-r'>{props.dataObj.startWork}</div>
            </li>
          </ul>
        </Skeleton>
      </Card>
      {/* 教育信息 */}
      <Card
        title='教育基本信息'
        size='small'
        headStyle={{ fontSize: 18, fontWeight: 600 }}
        style={{ marginTop: 5 }}
      >
        <Skeleton loading={loading} active>
          <ul className='about-ul-container'>
            <li>
              <div className='content-show-l'>学校名称</div>
              <div className='content-show-r'>{props.dataObj.schoolName}</div>
            </li>
            <li>
              <div className='content-show-l'>
                <span>学</span>
                <span>历</span>
              </div>
              <div className='content-show-r'>{props.dataObj.mayjor}</div>
            </li>
            <li>
              <div className='content-show-l'>
                <span>学</span>
                <span>历</span>
              </div>
              <div className='content-show-r'>{props.dataObj.education}</div>
            </li>
          </ul>
        </Skeleton>
      </Card>

      {/* 教育信息 */}
      <Card
        title='工作信息'
        size='small'
        headStyle={{ fontSize: 18, fontWeight: 600 }}
        style={{ marginTop: 5 }}
      >
        <Skeleton loading={loading} active>
          <ul className='about-ul-container'>
            <li>
              <div className='content-show-l'>公司名称</div>
              <div className='content-show-r'>{props.dataObj.companyName}</div>
            </li>
            <li>
              <div className='content-show-l'>
                <span>职</span>
                <span>位</span>
              </div>
              <div className='content-show-r'>{props.dataObj.postName}</div>
            </li>
            <li>
              <div className='content-show-l'>所属行业</div>
              <div className='content-show-r'>{props.dataObj.industry}</div>
            </li>
          </ul>
        </Skeleton>
      </Card>
      {/* 兴趣标签 */}
      <Card
        title='兴趣标签'
        size='small'
        headStyle={{ fontSize: 18, fontWeight: 600 }}
        style={{ marginTop: 5 }}
      >
        <Skeleton loading={loading} active>
          <ul className='about-ul-container'>
            <li>
              <div className='content-show-l'>
                <span>技</span>
                <span>能</span>
              </div>
              <div className='content-show-r'>{getTags(props.dataObj.skill)}</div>
            </li>
            <li>
              <div className='content-show-l'>
                <span>爱</span>
                <span>好</span>
              </div>
              <div className='content-show-r'>{getTags(props.dataObj.hobby)}</div>
            </li>

          </ul>
        </Skeleton>
      </Card>
    </div>
  )

}

/**
 * 获取映射的属性
 * @returns 
 */
const mapStateToProps = (state: IStore) => {
  return state.about
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    // 获取关于我的数据
    getAboutData() {
      dispatch(getAsyncData())
    }
  }
}

/**
 * 关于我的容器组件
 */
// export default class extends React.PureComponent<any, IAboutStore> {
//   // 初始化state
//   state = mapStateToProps(store.getState() as any)
//   // 取消监听store的事件
//   onCancelListener!: Unsubscribe
//   // 获取初始化数据
//   async componentDidMount() {
//     // 需要先设定监听
//     this.onCancelListener = store.subscribe(() => {
//       this.setState(mapStateToProps(store.getState() as any))
//     })
//     // 判断数据是否存在，不存在则发送请求获取数据
//     if (Object.keys(this.state.dataObj).length === 0) {
//       store.dispatch(setIsLoading(true) as never)
//       try {
//         // 获取数据
//         const res: IAboutProp = await apiGetAboutMe().then(res => res.data);
//         store.dispatch(setData(res) as never)
//       } catch (err) {
//         store.dispatch(setData({}) as never)
//       } finally {
//         store.dispatch(setIsLoading(false) as never)
//       }
//     }
//   }
//   // 组件卸载
//   componentWillUnmount() {
//     // 取消监听
//     this.onCancelListener();
//   }

//   render() {
//     return (
//       <About {...this.state}></About>
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(About)
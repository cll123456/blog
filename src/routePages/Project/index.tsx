import React, { Dispatch, useEffect, useLayoutEffect, useState } from 'react'
import ProCarousel from './ProCarousel'
import './index.less';
import { Divider, Pagination, Spin } from 'antd';
import ProCardList from './ProCardList';
import { IProjectProps } from '../../types/page/project';
import { getHotProjectData, getTotalProjectData, setTotalProjectCondition } from '../../store/actions/project';
import { IProjectStore } from '../../types/store/action/project';
import { connect } from 'react-redux';
import store from '../../store';
import { push } from 'connected-react-router';
import { IStore } from '../../types/store/action';

function Project(prop: IProjectProps) {
  // 获取store的数据
  const storeData = store.getState() as unknown as IStore;
  const state = storeData.project as IProjectStore;


  // 处理轮播
  const [proCarouselObj, setProCarouselObj] = useState({
    timer: 5000,
    curIndex: 0,
  });

  const hotProjectData = state.hotProjectData;
  // 轮播图的lidom
  const [liDom, setLiDom] = useState<HTMLCollectionOf<HTMLLIElement>>();

  const cardList = state.totalProjectData;
  // 轮播图内容dom
  const [descContDom, setDescContDom] = useState<Element>()
  // 获取轮播图的dom
  useEffect(() => {
    // 获取li dom
    setLiDom(document.getElementsByClassName('img-container')[0].getElementsByTagName('ul')[0].getElementsByTagName('li'))
    // 获取描述的dom
    setDescContDom(document.getElementsByClassName('pro-carousel-container')[0].getElementsByClassName('desc-container')[0])
  }, [liDom, descContDom]);

  useLayoutEffect(() => {
    if (hotProjectData.length === 0) {
      prop.getHotProjectData();
    }
    if (cardList.length === 0) {
      // 获取热门项目
      prop.setTotalCondition({ pageNo: storeData.router.location.query.pageNo, title: storeData.router.location.query.title })
    }

  }, [])

  /**
   * 上一张图片
   */
  const handlePre = (nextIndex: number) => {
    let n = nextIndex < 0 ? hotProjectData.length - 1 : nextIndex;
    liDom![n].className = 'showPre';
    addDescContAnimation();
    setProCarouselObj((obj: any) => {
      liDom![obj.curIndex].className = 'hidePre';
      return {
        ...proCarouselObj,
        curIndex: n
      }
    })

  }
  /**
   * 下一张图片
   */
  const handleNext = (nextIndex: number) => {
    let n = nextIndex > hotProjectData.length - 1 ? 0 : nextIndex;
    liDom![n].className = 'showNext';
    addDescContAnimation();
    setProCarouselObj((obj: any) => {
      liDom![obj.curIndex].className = 'hideNext';
      return {
        ...proCarouselObj,
        curIndex: n
      }
    })
  }
  /**
   * 添加内容描述区域的动画
   */
  const addDescContAnimation = () => {
    descContDom!.classList.remove('show');
    const timer = window.setTimeout(() => {
      descContDom!.classList.add('show');
      window.clearTimeout(timer)
    }, 0)
  }

  return (
    <div className='project-container'>
      {/* 轮播图 */}
      <Spin spinning={state.totalProjectLoading}  >
        <ProCarousel {...proCarouselObj} data={hotProjectData} onPre={handlePre} onNext={handleNext}></ProCarousel>
      </Spin>
      {/* 全部文章 */}
      <Divider dashed orientation="left">全部项目</Divider>
      {/* 文章列表 */}
      <Spin spinning={state.totalProjectLoading}  >
        <ProCardList cardList={cardList}></ProCardList>
        {/* 分页 */}
        <div className="page-container">
          <Pagination
            hideOnSinglePage={true}
            current={Number(state.totalProjectCondition.pageNo) || 1}
            pageSize={Number(state.totalProjectCondition.pageSize) || 6}
            total={state.count}
            onChange={(page: number) => prop.setTotalCondition({ pageNo: page })}
          />
        </div>
      </Spin>
    </div>
  )
}


const mapStateToProps = (store: IStore) => {
  return store.project
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  // 获取全部项目
  getHotProjectData() {
    dispatch(getHotProjectData());
  },
  // 改变参数获取数据
  setTotalCondition(condition: object) {
    dispatch(setTotalProjectCondition(condition));
    const conditions = (store.getState().project as IProjectStore).totalProjectCondition
    dispatch(push(`/Project?pageNo=${conditions.pageNo}&title=${conditions.title}`))
    dispatch(getTotalProjectData())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Project);
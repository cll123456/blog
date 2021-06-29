import React, { Dispatch, useEffect, useState } from 'react'
import ProCarousel from './ProCarousel'
import './index.less';
import { Divider, Pagination } from 'antd';
import ProCardList from './ProCardList';
import { IProjectProps } from '../../types/page/project';
import { getHotProjectData, getTotalProjectData, setTotalProjectCondition } from '../../store/actions/project';
import { IProjectStore } from '../../types/store/action/project';
import { connect } from 'react-redux';
import store from '../../store';
import { Skeleton } from 'antd';


function Project(prop: IProjectProps) {

  // 获取store的数据
  const state = store.getState().project as IProjectStore;

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
    if (hotProjectData.length === 0) {
      // 获取热门项目
      prop.getHotProjectData();
    }
    if (cardList.length === 0) {
      // 获取全部项目
      prop.getTotalProjectData();
    }

  }, [liDom, descContDom]);



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
      <Skeleton loading={prop.totalProjectLoading}>
        {/* 轮播图 */}
        <ProCarousel {...proCarouselObj} data={hotProjectData} onPre={handlePre} onNext={handleNext}></ProCarousel>
        {/* 全部文章 */}
        <Divider dashed orientation="left">全部项目</Divider>
        {/* 文章列表 */}

        <ProCardList cardList={cardList}></ProCardList>
        {/* 分页 */}
        <div className="page-container">
          <Pagination 
          hideOnSinglePage={true} 
          current={Number(state.totalProjectCondition.pageNo) || 1} 
          pageSize={Number(state.totalProjectCondition.pageSize) || 6}
          total={state.count} 
          onChange={prop.onChangePage}
          />
        </div>
      </Skeleton>
    </div>
  )
}


const mapStateToProps = (store: IProjectStore) => ({
  ...store
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  // 获取热门项目
  getHotProjectData() {
    dispatch(getHotProjectData() as never);
  },
  // 获取全部项目
  getTotalProjectData() {
    dispatch(getTotalProjectData() as never);
  },
  // 改变页面数
  onChangePage(page:Number){
    dispatch(setTotalProjectCondition({pageNo: page}));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Project);
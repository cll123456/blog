import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import ProCarousel from './ProCarousel'
import './index.less';
import { Divider, Pagination } from 'antd';
import ProCard from './ProCard';
import ProCardList from './ProCardList';
import { IProCardListProps, IProCardProps } from '../../types/page/project';

export default function Project() {
  // 轮播图的lidom
  const [liDom, setLiDom] = useState<HTMLCollectionOf<HTMLLIElement>>();
  // 轮播图内容dom
  const [descContDom, setDescContDom] = useState<Element>()
  // 获取轮播图的dom
  useEffect(() => {
    // 获取li dom
    setLiDom(document.getElementsByClassName('img-container')[0].getElementsByTagName('ul')[0].getElementsByTagName('li'))
    // 获取描述的dom
    setDescContDom(document.getElementsByClassName('pro-carousel-container')[0].getElementsByClassName('desc-container')[0])
  }, [liDom, descContDom])

  // 处理轮播
  const [proCarouselObj, setProCarouselObj] = useState({
    data: [{
      imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/07/DSC00208-2.jpg',
    },
    {
      imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/04/IMG_20200403_172936.jpg',
    },
    {
      imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/06/IMG_20200613_000004.jpg',
    },
    {
      imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/5675b08eebbf679e9c0d1c023a2db549.jpg',
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
    timer: 5000,
    curIndex: 0,
  });


  /**
   * 上一张图片
   */
  const handlePre = (nextIndex: number) => {
    let n = nextIndex < 0 ? proCarouselObj.data.length - 1 : nextIndex;
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
    let n = nextIndex > proCarouselObj.data.length - 1 ? 0 : nextIndex;
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

  const cardList: IProCardProps[] = [{
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: '项目名称1',
    desc: '项目描述信息，最多三行ds'
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: '项目名称2',
    desc: '项目描述信息，最多三行ds'
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: '项目名称3',
    desc: '项目描述信息，最多三行ddd'
  },{
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: '项目名称4',
    desc: '项目描述信息，最多三行sd'
  },
  {
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: '项目名称5',
    desc: '项目描述信息，最多三行3443'
  }
]


  return (
    <div className='project-container'>
      {/* 轮播图 */}
      <ProCarousel {...proCarouselObj} onPre={handlePre} onNext={handleNext}></ProCarousel>
      {/* 全部文章 */}
      <Divider dashed orientation="left">全部项目</Divider>
      {/* 文章列表 */}
      <ProCardList cardList={cardList}></ProCardList>
      {/* 分页 */}
      {/* 分页 */}
      <div className="page-container">
          <Pagination defaultCurrent={1} total={50} />
        </div>
    </div>
  )
}

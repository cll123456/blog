import React, { PureComponent } from 'react'
import Carousel from '../../components/core/Carousel'
import { IArticleState } from '../../types/page/article'
import './index.less'
import { Divider, Pagination } from 'antd';
import MyCard from '../../components/core/MyCard';
import ArticleList from './ArticleList';

export default class Article extends PureComponent<{}, IArticleState> {
  state: IArticleState = {
    carouselArr: [
      {
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/02/convertkit-jQio01Aydt4-unsplash-scaled.jpg',
      },
      {
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2021/01/01.png',
      },
      {
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/06/04c691008a80225516c912b857eabd6c.jpg',
      },
      {
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/02/3f12e7af3a6d99f54ad316fca80ff32e.jpg',
      },
    ],
    curIndex: 0,
    // 文章列表
    articleArr: [
      {
        title: 'java爬虫练习|爬取京东上的手机商品数据',
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/1a2de4413ec1dd60ba8cc08c27ea0926.jpg',
        date: '2020年2月15日',
        reading: 3093,
        like: '100',
        msg: 8,
        id: 2
      },
      {
        title: 'vue迁都xxx',
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/1a2de4413ec1dd60ba8cc08c27ea0926.jpg',
        date: '2020年2月15日',
        reading: 323,
        like: '545',
        msg: 2,
        id: 1
      },
      {
        title: 'dfsa十分士大夫|爬取京东上爬取京东上的手机商品数据爬取京东上的手机商品数据的手机商品数据',
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/1a2de4413ec1dd60ba8cc08c27ea0926.jpg',
        date: '2020年2月15日',
        reading: 3093,
        like: '100',
        msg: 8,
        id: 4
      },
      {
        title: 'dfsa十分士大夫',
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/1a2de4413ec1dd60ba8cc08c27ea0926.jpg',
        date: '2020年2月15日',
        reading: 323,
        like: '545',
        msg: 2,
        id: 5
      },
      {
        title: 'dfsa十分士大夫',
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/1a2de4413ec1dd60ba8cc08c27ea0926.jpg',
        date: '2020年2月15日',
        reading: 323,
        like: '545',
        msg: 2,
        id: 6
      },
      {
        title: 'dfsa十分士大夫',
        imgUrl: 'https://file.blog.xgblack.cn/wp-content/uploads/2020/01/1a2de4413ec1dd60ba8cc08c27ea0926.jpg',
        date: '2020年2月15日',
        reading: 323,
        like: '545',
        msg: 2,
        id: 7
      }
    ]
  }
  /**
   * li dom
   */
  private liDom!: HTMLCollectionOf<HTMLLIElement>;
  /**
   * 轮播内容dom,为了添加动画
   */
  private carouselContDom!: Element;

  /**
   * 定时器
   */
  private timer!: number;
  /**
   * 上一张图片
   * @param curIndex 
   */
  onPre = (curIndex: number) => {
    this.liDom[this.state.curIndex].className = 'preHide';
    let n = curIndex < 0 ? this.liDom.length - 1 : curIndex;
    this.liDom[n].className = "preShow";
    this.addContentAnimation();
    this.setState({
      ...this.state,
      curIndex: n
    })
  }
  // 下一张
  onNext = (curIndex: number) => {
    this.liDom[this.state.curIndex].className = "hideNext";
    let n = curIndex > this.liDom.length - 1 ? 0 : curIndex
    this.liDom[n].className = "showNext";
    this.addContentAnimation();
    this.setState({
      ...this.state,
      curIndex: n
    })
  }
  /**
   * 添加轮播内容动画
   */
  addContentAnimation = () => {
    this.carouselContDom.classList.remove('show');
    const timer = setTimeout(() => {
      this.carouselContDom.classList.add('show');
      clearTimeout(timer)
    }, 0);
  }

  /**
   * 组件挂载完成获取lidom
   */
  componentDidMount() {
    this.liDom = document.getElementsByClassName('box-ul')[0].getElementsByTagName('li')
    this.carouselContDom = document.getElementsByClassName('carousel-container')[0].getElementsByClassName('content')[0]
  }


  render() {
    return (
      <div className='article-container'>
        {/* 文章轮播图 */}
        <Carousel timer={5000} data={this.state.carouselArr} curIndex={this.state.curIndex} onPre={this.onPre} onNext={this.onNext} />
        {/* 全部文章 */}
        <Divider dashed orientation="left">全部文章</Divider>
        {/* 全部文章列表 */}
        <ArticleList articleList={this.state.articleArr}></ArticleList>
        {/* 分页 */}
        <div className="page-container">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    )
  }

}

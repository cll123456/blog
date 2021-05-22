import React, { PureComponent } from 'react'
import Carousel from '../../components/core/Carousel'
import { IArticleState } from '../../types/page/article'
import './index.less'

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
    curIndex: 0
  }
  /**
   * li dom
   */
  private liDom!: HTMLCollectionOf<HTMLLIElement>;
  /**
   * 轮播内容dom,为了添加动画
   */
  private carouselContDom!: Element
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
        <Carousel data={this.state.carouselArr} curIndex={this.state.curIndex} onPre={this.onPre} onNext={this.onNext} />
      </div>
    )
  }

}

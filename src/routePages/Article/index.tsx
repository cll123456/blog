import React, { Dispatch, PureComponent } from 'react'
import ArticleCarousel from './ArticleCarousel'
import { IArticleProps, IArticleState } from '../../types/page/article'
import './index.less'
import { Divider, Pagination } from 'antd';
import ArticleList from './ArticleList';
import { connect } from 'react-redux';
import { IStore } from '../../types/store/action';
import { getHotArticleData, getTotalArticleData } from '../../store/actions/article';

class Article extends React.PureComponent<IArticleProps, IArticleState> {
  state: IArticleState = {
    carouselObj: {
      carouselArr: this.props.hotArticleData,
      curIndex: 0,
    },
    // 文章列表
    articleArr: this.props.totalArticleData
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
    this.liDom[this.state.carouselObj.curIndex].className = 'preHide';
    let n = curIndex < 0 ? this.liDom.length - 1 : curIndex;
    this.liDom[n].className = "preShow";
    this.addContentAnimation();
    this.setState({
      ...this.state,
      carouselObj: {
        curIndex: n,
        carouselArr: this.state.carouselObj.carouselArr
      }
    })
  }
  // 下一张
  onNext = (curIndex: number) => {
    this.liDom[this.state.carouselObj.curIndex].className = "hideNext";
    let n = curIndex > this.liDom.length - 1 ? 0 : curIndex
    this.liDom[n].className = "showNext";
    this.addContentAnimation();
    this.setState({
      ...this.state,
      carouselObj: {
        curIndex: n,
        carouselArr: this.state.carouselObj.carouselArr
      }
    })
  }
  /**
   * 添加轮播内容动画
   */
  addContentAnimation = () => {
    this.carouselContDom.classList.remove('show');
    this.timer = window.setTimeout(() => {
      this.carouselContDom.classList.add('show');
      window.clearTimeout(this.timer)
    }, 0);
  }

  /**
   * 组件挂载完成获取lidom
   */
  componentDidMount() {
    // 获取数据
    if (this.state.carouselObj.carouselArr.length === 0) {
      this.props.getHotArticleData();
    }
    if (this.state.articleArr.length === 0) {
      this.props.getTotalArticleData();
    }

    this.liDom = document.getElementsByClassName('box-ul')[0].getElementsByTagName('li')
    this.carouselContDom = document.getElementsByClassName('carousel-container')[0].getElementsByClassName('content')[0]
  }

  render() {
    return (
      <div className='article-container'>
        {/* 文章轮播图 */}
        <ArticleCarousel timer={5000} data={this.props.hotArticleData} curIndex={this.state.carouselObj.curIndex} onPre={this.onPre} onNext={this.onNext} />
        {/* 全部文章 */}
        <Divider dashed orientation="left">全部文章</Divider>
        {/* 全部文章列表 */}
        <ArticleList articleList={this.props.totalArticleData}></ArticleList>
        {/* 分页 */}
        <div className="page-container">
          <Pagination 
           hideOnSinglePage={true}
           current={Number(this.props.totalArticleCondition.pageNo) || 1} 
           pageSize={Number(this.props.totalArticleCondition.pageSize) || 12}
          total={Number(this.props.articleTotal)} 
          />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (store: IStore) => ({
  ...store.article
});


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  /**
   * 获取所热门项目
   */
  getHotArticleData() {
    dispatch(getHotArticleData())
  },
  /**
   * 获取所有的项目
   */
  getTotalArticleData() {
    dispatch(getTotalArticleData())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Article)
import { IMyCardProps } from "../components/myCard";
import { IStore } from "../store/action";
import { IArticleObjParams, IArticleParams, IArticleStore } from "../store/action/article";


export interface IArticleState {

  /**
   * 轮播对象
   */
  carouselObj: {
    /**
      * 当前第几张
      */
    curIndex: number,
    /**
    * 轮播图片
    */
    carouselArr: ICarouselData[],
  }
  /**
   * 文章列表
   */
  articleArr: IMyCardProps[]
}

export interface IArticleProps extends IArticleStore {
  // 获取热门项目
  getHotArticleData: () => void;
  /**
   * 改变参数获取数据
   */
  onChangeArticleParam: (param: Partial<IArticleParams>) => void;
  /**
   * 跳转到文章详情
   */ 
  goToArticleDetail: (id: string | number) => void;
}

/**
 * 文章列表
 */
export interface IArticleListProps {
  
  articleList: IMyCardProps[],
  /**
   * 跳转到文章详情
   */ 
   goToArticleDetail: (id: string | number) => void;
}

/**
 * 轮播图所需要的数据类型
 */
export interface ICarouselData extends IArticleObjParams {

}

/**
 * 文章轮播组件所需要的参数
 */
export interface IArticleCarouselProps {
  /**
   * 轮播图所需要的数据
   */
  data: ICarouselData[],
  /**
   * 当前显示第几个，
   */
  curIndex: number,
  /**
   * 上一张
   */
  onPre: (curIndex: number) => void,
  /**
   * 下一张
   */
  onNext: (curIndex: number) => void,
  /**
   * 跳转到文章详情
   */ 
   goToArticleDetail: (id: string | number) => void;
  /**
   * 定时器的时间
   */
  timer: number
}
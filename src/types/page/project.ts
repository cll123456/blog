import { IProjectObj, IProjectStore } from "../store/action/project";

/**
 * 项目轮播组件属性
 */
export interface IProCarouselProps {
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
    * 定时器的时间
    */
   timer: number,

   data: Partial<IProjectObj>[]
}



/**
 * 卡片list
 */
export interface IProCardListProps {
  cardList: Partial<IProjectObj>[]
}




/**
 * 项目属性
 */
export interface IProjectProps extends IProjectStore {
  // 获取热门项目
  getHotProjectData: () => void
  // 设置条件
  setTotalCondition(condition:object): void
}
import { IStore } from "../store/action";

/**
 * 头部header类中
 */
export interface ILayoutHeader{
  changeSkin:  (checked: boolean, event: MouseEvent) => void
  // enter进行搜索
  onClickPressEnter:  (title: string, defaultCheckedType: string) => void,
  // 仓库数据
  store: IStore
}

/**
 * header组件的ref转发
 */
export interface IHeaderRef{
  reload: (obj:{}) => void;
}
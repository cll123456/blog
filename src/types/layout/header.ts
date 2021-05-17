/**
 * 头部header类中
 */
export interface ILayoutHeader{
  changeSkin:  (checked: boolean, event: MouseEvent) => void
}

/**
 * header组件的ref转发
 */
export interface IHeaderRef{
  reload: (obj:{}) => void;
}
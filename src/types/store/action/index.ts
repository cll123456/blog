import { IMyTipStore } from "../../layout/myTips";
import { IAboutStore } from "./about";
import { IHeaderStore } from "./header";

export interface IStore{
  header: IHeaderStore,
  about: IAboutStore,
  myTips: IMyTipStore
}
import { IMyTipStore } from "../../layout/myTips";
import { IAboutStore } from "./about";
import { IHeaderStore } from "./header";
import { IProjectStore } from "./project";
import * as CRR from 'connected-react-router';
export interface IStore {
  header: IHeaderStore,
  about: IAboutStore,
  myTips: IMyTipStore,
  project: IProjectStore,
  router: CRR.RouterState
}
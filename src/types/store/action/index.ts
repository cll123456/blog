import { IMyTipStore } from "../../layout/myTips";
import { IAboutStore } from "./about";
import { IHeaderStore } from "./header";
import { IProjectStore } from "./project";
import * as CRR from 'connected-react-router';
import { IGaugeStore } from "./gauge";
import { IArticleStore } from "./article";
import { IArticleDetailStore } from "./articleDetail";
export interface IStore {
  header: IHeaderStore,
  about: IAboutStore,
  myTips: IMyTipStore,
  project: IProjectStore,
  router: CRR.RouterState,
  gauge: IGaugeStore,
  article: IArticleStore,
  articleDetail: IArticleDetailStore,
  [key: string]: any
}
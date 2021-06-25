import { IAboutStore } from "./about";
import { IHeaderStore } from "./header";

export interface IStore{
  header: IHeaderStore,
  about: IAboutStore
}
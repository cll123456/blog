//  预计规划以下几个模块， 首页 文章 热门 归档 项目 关于

import { lazy } from 'react'
import { RouteConfig } from 'react-router-config';
import withLazyComp from '../components/hoc/withLazyComp'
const Home = lazy(() => import('./../routePages/Home'));
const About = lazy(() => import('./../routePages/About'));
const Article = lazy(() => import('./../routePages/Article'));
const Gauge = lazy(() => import('./../routePages/Gauge'));
const Hot = lazy(() => import('./../routePages/Hot'));
const Project = lazy(() => import('./../routePages/Project'));
const FirstScreen = lazy(() => import('./../routePages/FirstScreen'))

export const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: withLazyComp(FirstScreen),
    name: '首屏'
  },
  {
    path: "/Home",
    exact: true,
    component: withLazyComp(Home),
    name: '首页'
  },
  {
    path: "/Project",
    exact: true,
    component: withLazyComp(Project),
    name: '项目'
  },
  {
    path: "/Article",
    exact: true,
    component: withLazyComp(Article),
    name: '文章'
  },
  {
    path: "/Gauge",
    exact: true,
    component: withLazyComp(Gauge),
    name: '归档'
  },
  {
    path: "/Hot",
    exact: true,
    component: withLazyComp(Hot),
    name: '热门'
  },
  {
    path: "/About",
    exact: true,
    component: withLazyComp(About),
    name: '我的简历'
  },
]
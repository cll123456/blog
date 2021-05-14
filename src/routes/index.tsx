//  预计规划以下几个模块， 首页 文章 热门 归档 项目 关于

import { lazy } from 'react'
import { RouteConfig } from 'react-router-config';
import withLazyComp from '../components/hoc/withLazyComp'
import { genParticlesRoute } from '../utils/routesUtils';

const Home = lazy(() => import('../routePages/Home'));
const About = lazy(() => import('../routePages/About'));
const Article = lazy(() => import('../routePages/Article'));
const Gauge = lazy(() => import('../routePages/Gauge'));
const Hot = lazy(() => import('../routePages/Hot'));
const Project = lazy(() => import('../routePages/Project'));
const FirstScreen = lazy(() => import('../routePages/FirstScreen'))

/**
 * 路由配置
 */
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
    name: '项目',
    render: genParticlesRoute(Project)
  },
  {
    path: "/Article",
    exact: true,
    name: '文章',
    render: genParticlesRoute(Article)
  },
  {
    path: "/Gauge",
    exact: true,
    name: '归档',
    render: genParticlesRoute(Gauge)
  },
  {
    path: "/Hot",
    exact: true,
    name: '热门',
    render: genParticlesRoute(Hot)
  },
  {
    path: "/About",
    exact: true,
    name: '我的简历',
    render: genParticlesRoute(About)
  },
]
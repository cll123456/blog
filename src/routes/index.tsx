//  预计规划以下几个模块， 首页 文章 热门 归档 项目 关于

import { lazy } from 'react'
import { RouteConfig } from 'react-router-config';
import withLazyComp from '../components/hoc/withLazyComp'
import { genParticlesRoute } from '../utils/routesUtils';
import { HomeOutlined, FundProjectionScreenOutlined, ContainerOutlined, InsertRowAboveOutlined, UserOutlined, FireOutlined } from '@ant-design/icons'
import React from 'react';

const Home = lazy(() => import('../routePages/Home'));
const About = lazy(() => import('../routePages/About'));
const Article = lazy(() => import('../routePages/Article'));
const Gauge = lazy(() => import('../routePages/Gauge'));
const ArticleDetail = lazy(() => import('../routePages/ArticleDetail'));
const Project = lazy(() => import('../routePages/Project'));
const FirstScreen = lazy(() => import('../routePages/FirstScreen'));
const Login = lazy(() => import('../routePages/Login'));

/**
 * 路由配置
 */
export const routes: RouteConfig[] = [
  
  {
    path: "/Home",
    exact: true,
    hidden: false,
    component: withLazyComp(FirstScreen),
    name: '首页',
    meta: {
      icon: <HomeOutlined />
    }
  },
  {
    path: "/Article",
    exact: true,
    name: '文章',
    component: withLazyComp(Article as any),
    hidden: false,
    meta: {
      icon: <ContainerOutlined />
    }
  },
  {
    path: "/Project",
    exact: true,
    name: '项目',
    hidden: false,
    render: withLazyComp(Project),
    sensitive: false,
    meta: {
      icon: <FundProjectionScreenOutlined />
    }
  },    
  
  {
    path: "/Gauge",
    exact: true,
    name: '归档',
    render: withLazyComp(Gauge),
    sensitive: false,
    hidden: false,
    meta: {
      icon: <InsertRowAboveOutlined />
    }
  },
  {
    path: "/Login",
    exact: true,
    name: '登录页面',
    render: withLazyComp(Login),
    hidden: true,
    sensitive: false,
    meta: {
      icon: <InsertRowAboveOutlined />
    }
  },
  {
    path: "/ArticleDetail",
    exact: true,
    hidden: true,
    name: '详情',
    render: withLazyComp(ArticleDetail),
    meta: {
      icon: <FireOutlined />
    }
  },
  {
    hidden: false,
    path: "/About",
    exact: true,
    name: '关于我',
    render: withLazyComp(About),
    meta: {
      icon: <UserOutlined />
    }
  },
  {
    path: "*",
    exact: true,
    hidden: true,
    component: withLazyComp(FirstScreen),
    name: '首屏'
  },
]
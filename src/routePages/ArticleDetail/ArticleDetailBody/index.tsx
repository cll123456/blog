import React, { useLayoutEffect } from 'react'
import './index.less'
import MarkdownPreview from '@uiw/react-markdown-preview';
export default function ArticleDetailBody() {

  useLayoutEffect(() => {
    // 获取目录
    const childrenEle = document.getElementsByClassName('wmde-markdown')[0].children;
    let arr = [];
    for (const key in childrenEle) {
      if (Object.prototype.hasOwnProperty.call(childrenEle, key)) {
        const element = childrenEle[key];
        if (element.hasAttribute('id')) {
          const idName = element.id;
          const nodeName = element.nodeName;
          arr.push({ [nodeName]: idName })
        }
      }
    }
    console.log(arr,'---===---');
    
  }, [])

  const source = "> 最近在使用react 写个人站点，发现项目一开始加载有很大一段白屏，觉得这样不是很好，需要优化一下，然后项目里面使用的是 `antd` 的 spin, 所以首页就使用 `html + css` 来实现一个\r\n\r\n# 效果\r\n\r\n![ant-loading.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc104436a430491b8d49c73312292226~tplv-k3u1fbpfcp-watermark.image)\r\n\r\n# 分析\r\n主要分为以下几个部分：\r\n## 1.loading 需要居中\r\n居中的方法有很多，`父相子绝`, `弹性盒模型` 等。\r\nantd 官方是这么实现的：\r\n\r\n```css\r\n     position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 0;\r\n      right: 0;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      background-color: #f0ebeb;\r\n      width: 100%;\r\n      height: 100%;\r\n      cursor: pointer;\r\n```\r\n\r\n## 2.内容区域\r\n> 内容区域分为两个部分，一个 旋转的部分， 另一个是文字区域，这里布局也很简单，直接两个`block`, 或者 `inline-block`，就行\r\n### 旋转区域\r\n> 看到是在旋转，那么肯定是需要一个容器包裹着四个标签，然后最外面的容器来进行旋转，这个旋转角度我们可以看到是`45deg`, 但是如果你直接写旋转 `45deg` 的话，会发现动画是非常硬，一点也不平滑\r\n\r\n**解决办法**\r\n\r\n解决办法也有多种： \r\n\r\n1. 在旋转的时候加上transition来进行过渡\r\n2. 旋转的角度是`（360 + 45）deg` 这样来旋转就会平滑了，时间的话，平均每个0.4s, 那么就是 1.2s, 这里为啥要0.4s呢， 因为等一下还有一个闪烁的动画\r\n\r\n**闪烁怎么做**\r\n\r\n闪烁的话其实就是一开始 `opacity` 小一点,然后在旋转到当前的时候 `opacity为1`。 这里有一个细节，那就是每一个点执行动画的时间是不一样的， 所以每一个点都要基于上一个点执行动画延迟 0.4s 就可以实现了\r\n\r\n### 文字区域\r\n> 文字区域相信没有难度\r\n\r\n# 源码如下：\r\n\r\n\r\n```html\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>手动实现antd spin 的一个loading</title>\r\n  <style>\r\n    .my-loading-container {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      bottom: 0;\r\n      right: 0;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      background-color: #f0ebeb;\r\n      width: 100%;\r\n      height: 100%;\r\n      cursor: pointer;\r\n      font-size: 14px;\r\n    }\r\n\r\n    .my-loading-span {\r\n      position: relative;\r\n      display: inline-block;\r\n      font-size: 32px;\r\n      width: 1em;\r\n      height: 1em;\r\n      transform: rotateZ(45deg);\r\n      transition: transform .3s cubic-bezier(.78, .14, .15, .86);\r\n      animation: Rotate45 1.2s infinite linear;\r\n    }\r\n\r\n    .my-loading-span>i {\r\n      height: 14px;\r\n      width: 14px;\r\n      background-color: #00D8FF;\r\n      display: block;\r\n      position: absolute;\r\n      border-radius: 100%;\r\n      transform: scale(.75);\r\n      transform-origin: 50% 50%;\r\n      opacity: .3;\r\n      animation: myAnimationMove 1s infinite linear alternate;\r\n    }\r\n\r\n    .my-loading-span:nth-child(1) {\r\n      top: 0;\r\n      left: 0;\r\n    }\r\n\r\n    .my-loading-span :nth-child(2) {\r\n      top: 0;\r\n      right: 0;\r\n      animation-delay: .4s;\r\n    }\r\n\r\n    .my-loading-span :nth-child(3) {\r\n      bottom: 0;\r\n      right: 0;\r\n      animation-delay: .8s;\r\n    }\r\n\r\n    .my-loading-span :nth-child(4) {\r\n      left: 0;\r\n      bottom: 0;\r\n      animation-delay: 1.2s;\r\n    }\r\n\r\n    .my-loading-container>.my-text-container {\r\n      padding-top: 5px;\r\n      text-shadow: 0 1px 2px #fff;\r\n      color: #00D8FF;\r\n      font-variant: tabular-nums;\r\n      font-feature-settings: 'tnum';\r\n      font-size: 14px;\r\n    }\r\n\r\n    @keyframes Rotate45 {\r\n      to {\r\n        transform: rotate(405deg);\r\n      }\r\n    }\r\n\r\n    @keyframes myAnimationMove {\r\n      to {\r\n        opacity: 1;\r\n      }\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"my-loading-container\" id=\"myLoadingContainer\">\r\n    <span class=\"my-loading-span\">\r\n      <i></i>\r\n      <i></i>\r\n      <i></i>\r\n      <i></i>\r\n    </span>\r\n    <div class=\"my-text-container\">\r\n      Loading...\r\n    </div>\r\n  </div>\r\n</body>\r\n\r\n</html>\r\n```\r\n\r\n";
  return (
    <div className='articleDetailBody-container'>
      <MarkdownPreview source={source} />
    </div>
  )
}

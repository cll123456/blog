import React, { useState } from 'react'
import { IImagProps } from '../../../types/components/img';
import loadImg from './../../../assets/imgs/loading/load.gif';
import errorImg from './../../../assets/imgs/loading/error.png'
export default function Img(props: IImagProps<any>) {
  // 图片地址
  const [src, setSrc] = useState(props.loadingImg as string)
  // 是否第一次加载，如果不使用这个会加载两次
  const [isFlag, setIsFlag] = useState(false)
  /**
   * 图片加载完成
   */
  const handleOnLoad = () => {
    // 判断是否第一次加载
    if (isFlag) return;
    // 创建一个img标签
    const imgDom = new Image();
    imgDom.src = props.src || errorImg;
    // 图片加载完成使用正常的图片
    imgDom.onload = function () {
      setIsFlag(true)
      setSrc(props.src || errorImg)
    }
    // 图片加载失败使用图片占位符
    imgDom.onerror = function () {
      setIsFlag(true)
      setSrc(props.errorImg as string)
    }
  }
  
  return (
    <>
      <img src={src}
        onLoad={handleOnLoad}
        style={{
          height: 'inherit',
        }}
      ></img>
    </>
  )
}
// 设置默认的图片加载中的样式
Img.defaultProps = {
  loadingImg: loadImg,
  errorImg: errorImg
}
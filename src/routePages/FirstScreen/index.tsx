import React from 'react'
import Star from '../../components/common/particles/Star'
import FirstScreenCatalogue from './FirstScreenCatalogue'
import './index.less'
import StartLoading from './StarLoading'
import TypeWriter from './TypeWriter'
export default function FirstScreen() {
  const typeWriterData = ['More interest, less interests! —— Jerry',
    '仰望星空，你我皆是繁星点点。—— Twinkle'];
  return (
    <div className='firstScreen-container'>
      {/* 动画 */}
      <StartLoading/>
      {/* 粒子 */}
      <Star />
      {/* 首屏目录 */}
      <FirstScreenCatalogue />
      {/* 键盘打字效果 */}
      <TypeWriter data={typeWriterData} duration={4000} />
    </div>

  )
}

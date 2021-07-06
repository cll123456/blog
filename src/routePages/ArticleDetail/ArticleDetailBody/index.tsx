import React, { useLayoutEffect } from 'react'
import './index.less'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { IArticleDetailDialogObj } from '../../../types/store/action/articleDetail';
export default function ArticleDetailBody(prop: { content: string, setArticleDetailDialog: (arr: IArticleDetailDialogObj[]) => void }) {

  // useLayoutEffect(() => {
  //   // 获取目录
  //   const childrenEle = document.getElementsByClassName('wmde-markdown')[0].children;
  //   let arr = [];
  //   for (const key in childrenEle) {
  //     if (Object.prototype.hasOwnProperty.call(childrenEle, key)) {
  //       const element = childrenEle[key];
  //       if (element.hasAttribute('id')) {
  //         const idName = element.id;
  //         const nodeName = element.nodeName;
  //         arr.push({ [nodeName]: idName })
  //       }
  //     }
  //   }
  //   console.log(arr,childrenEle, ' -----arr');

  //   prop.setArticleDetailDialog(arr);
  // }, [])

  return (
    <div className='articleDetailBody-container'>
      <MarkdownPreview source={prop.content} />
    </div>
  )
}

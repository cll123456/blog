import React from 'react'
import './index.less'
import marked from 'marked';
import hljs from "highlight.js"; // 引入 highlight.js
import "highlight.js/styles/stackoverflow-light.css"; // 引入高亮样式 这里我用的是sublime样式
import './markdown.less'
export default function ArticleDetailBody(prop: { content: string }) {

  marked.setOptions({
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  })
  const res = marked(prop.content)
  return (
    <div className='articleDetailBody-container'>
      <div dangerouslySetInnerHTML={{ __html: res }} className="wmde-markdown" >

      </div>
    </div>
  )
}

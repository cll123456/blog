import React, { ReactNode } from 'react'
import { Comment, Avatar } from 'antd';
import './index.less'

export default function ArticleDetailComment() {
  const ExampleComment = ({ children }: { children?: ReactNode }) => (
    <Comment
    style={{background: 'transparent'}}
      author={<a>小明</a>}
      datetime={'2021-12-08'}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          评论123.
        </p>
      }
    >
      {children}
    </Comment>
  );

  return (
    <div className='articleDetailComment-container'>
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </div>
  )
}

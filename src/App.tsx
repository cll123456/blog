import React from 'react';
import Layout from './Layout';
import './App.less'

class App extends React.PureComponent{
  // 删除掉loading
  componentDidMount(){
    document.getElementById('myLoadingContainer')?.remove();
  }
  render(){
    return (
      <Layout></Layout>
    )
  }
}

export default App

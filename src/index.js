/*
 * @Author: cxp 
 * @Date: 2020-08-25 23:26:02 
 * @Last Modified by: cxp
 * @Last Modified time: 2020-08-26 22:57:17
 */

import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
// React类 负责逻辑控制，比如修改数据 成vdom
// reactDom 负责渲染，vdom->dom
// babel-loader 可以转换jsx 成vdom ,这里实际上是把html标签语法使用 React.createElement() 转化
// import App from './App'


ReactDom.render(
  <App/>,
  document.getElementById('root')
)
/*
 * @Author: your name
 * @Date: 2020-08-31 09:54:45
 * @LastEditTime: 2020-08-31 19:17:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myReactTest\src\App.js
 */
import React from 'react'
import Left from "./components/Left"
import Right from "./components/Right"
import MyHoc from "./components/MyHoc"
import { Provider } from './selfContext'
import Mycomposition from "./components/Mycomposition"
import MyButton from "./components/Button"
import MyForm from "./components/MyForm"

// 创建一个上下文组件
// console.log(Provider)
// const Context = React.createContext();

// const Provider = Context.Provider;
// const Consumer = Context.Consumer;
const testVal = { name: "App", content: "123456" };
const testVal2 = { name: "TestVal2", content: "89023" }
export default function App() {
  return (
    <div>
      {/* <Provider value={testVal}>
        <Left/>
      </Provider>
      <Provider value={testVal2}>
        <Right/>
      </Provider>
      <MyHoc/> */}
      {/* <Mycomposition/> */}
      {/* <MyButton/> */}
      <MyForm />
    </div>
  )
}

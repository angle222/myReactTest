/*
 * @Author: cxp
 * @Date: 2020-08-31 09:54:45
 * @LastEditTime: 2020-08-31 19:02:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myReactTest\src\components\Right.js
 */
import React, { Component } from 'react'
import "./index.css"
import { Consumer } from '../selfContext'
const name = "hello,jerry";
const list = ['a', 'b', 'c'].map(l => <li key={l}>{l}</li>)
const val = 0;
const jsx = <div>
  <h1>{name}</h1>
  {val}
  <ul>
    {list}
  </ul>
</div>;
function RightItem(prop) {
  console.log(prop)
  const { item } = prop
  return (
    <div>
      <li>
        {item.id == 11 && <img src={require('../logo.png')} alt="图片" />}
        <p>{item.item}</p>
      </li>
    </div>
  )
}

export default class Right extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 生命周期
  componentWillMount() {
    console.log('生命周期将要挂载')
  }
  componentDidMount() {
    console.log('生命周期已经挂载')
  }
  componentWillUpdate() {
    console.log('生命周期将要更新')
  }
  componentDidUpdate() {
    console.log('生命周期已经更新')
  }

  //自定义事件
  pDelaget = (e) => {
    let { count } = this.state;
    // setState接受三种形式的参数，第一种接受一个对象
    // this.setState({
    //   count:count+1
    // })
    // 第二种，接受一个函数，一般可以
    this.setState((state) => {
      console.log('这里是更新之前要做的事情:', state.count)
      return {
        count: state.count + 1
      }

    })
    console.log('第二种更新:', this.state.count);
    // 第三中，接受两个参数，第一个是要更新的值的对象，第二个相当于是更新之后的回调函数
    this.setState({ count: 1000 }, () => {
      console.log('这里是更新之后要做的事情', this.state.count)
      // console.log(this.state)

    })
    console.log('第三种更新:', this.state.count);
  }
  render() {
    console.log('调用了render', this.state.count)
    const listItem = [{ id: 11, item: 'this is a title1' }, { id: 32, item: 'this is a title3' }, { id: 35, item: 'this is a title4' }]
    const myObj = { type: 123 }
    return (
      <div>
        {
          listItem.map(list => <RightItem {...myObj} key={list.id} item={list} />)
        }

        <div onClick={this.pDelaget}>
          <p>段落1 {this.state.count}</p>
          <p>段落1</p>
          <p>段落1</p>
          <p>段落1</p>
        </div>
        <Consumer>
          {(item) =>
            <div>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
            </div>
          }

        </Consumer>
      </div>
    )
  }
}
console.log(new Right())
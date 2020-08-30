import React, { Component } from 'react'
const gloable = {
  getData(id){
    return this.comments
  },
  comments:[{id:1,content:"范冰冰在二手店铺卖东西"},{id:2,content:"李晨送给范冰冰了一个熊"},{id:3,content:"张馨予结婚了"}]
}

// 高阶组件就是一个函数，这个函数接受一个组件，然后再返回一个组件
// 高阶组件就是要给当前传入的组件进行数据处理，传入的组件是一个纯函数，要在告诫组件的函数中做数据处理，然后把处理好的数据放在传入组件的属性中，这样的设计符合了编程中的单一职责模式，也就是传入的组件只负责一件事，如果需要有其他的事件处理，那么就在另一个函数中加工
const myHoc = Comp=>props=>{
  console.log('高阶函数',props)
  let conm = gloable.getData(props.id)
  return <Comp {...gloable} />
  // 在这里可以定义需要对原来组件操作的地方
}
// CommenList 只接受相应的属性并展示，不做数据的处理
class CommenList extends Component{
  constructor(props){
    super(props)
    console.log(Array.isArray(this.props) )
  }
  render(){
    const {comments} = this.props;
    console.log(comments)
    return (
      <div>
        {comments.map(comen=>(
          <p key={comen.id}><span>{comen.id}</span> 、{comen.content}</p>
        ))}
      </div>
    )
  }
}
let Test = myHoc(CommenList)
export default class MyHoc extends Component {
  render() {
    return (
      <div>
        <Test id='1'/>
      </div>
    )
  }
}
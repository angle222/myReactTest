import React, {useState, Component} from 'react'
import { Consumer } from '../selfContext'
function Clock(){
  // useState 是一个方法，返回一个两位的数组，第一个是我们传进去的值，第二个是一个可以修改第一个数据的方法
  const [state, setState] = useState(0)
  
  return (
    <div>
      {/* <button onClick={myClick(state, setState)}>点击</button> */}
      <button onClick={()=>myClick(state, setState)}>点击</button>
      {new Date().toLocaleDateString()}
      <p>状态:{state}</p>
    </div>
  )
}
function myClick(state, setState){
  console.log(state, setState)
  setState(state+1)
  return function(){
    setState(state+1)
  }
  
}

class MyForm extends Component{
  constructor(props){
    super(props)
    this.state= {
      name:"",
      age:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  formSubmit=(e)=>{
    alert('提交的名字: ' + this.state.name);
    e.preventDefault();
  }
  handleChange(e){
    console.log(e)
    e.persist()
    this.setState({
      name:e.target.value
    })
  }
  render(){
    const {name,age} = this.state;
    return (
      <form onSubmit={this.formSubmit}>
  <label>
    名字:
    
  </label>
  <input value={name} onChange={this.handleChange} type="text" name="name" />
  <label>
    年龄:
    
  </label>
  <input type="text" name="age" />
  <input type="submit" value="提交" />
</form>
    )
  }
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event)
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
export default function Left() {
  return (
    <div>
      <h1>这是left.js</h1>
      <Consumer>
      {(item)=>
        <div>
          <h3>{item.name}</h3>
      <p>{item.content}</p>
        </div>
      }
    
    </Consumer>
    </div>
    
  )
}


// function Animal(){
//   this.name = "animal"
// }
// Animal.prototype.run = function(){
//   console.log('run')
// }
// function Dog(name){
//   Animal.call(this,name)
// }
// // Dog.prototype = new Animal()
// // Dog.prototype = Animal.prototype
// let props = Object.create(Animal.prototype)
// Dog.prototype = props
// Dog.prototype.constructor = Dog
// Dog.prototype.eat = function(){
//   console.log('eat')
// }
// // console.log(new Dog(),new Animal())
// var p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('1')
//   },1000)
  
// })
// var p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('2')
//   },1001)
// })
// var p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject('3')
//   },90)
// })
// // all,接受一个数组必须是所有promise对象都resolve的状态才会执行then,如果遇见reject就会中断执行进入catch,按照传进来的数组值的顺序，只要遇见reject状态就中断执行
// Promise.all([p1,p2,p3]).then((res)=>{
//   // console.log(res)
// }).catch((err)=>{
//   // console.log(err);
// })
// // race 遇见resolve状态，会中断执行进入then里面，遇见reject,会中断执行进入catch里面
// // 只要有一个resolve状态就会执行
// Promise.race([p1,p2,p3]).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log('err',err);
// })

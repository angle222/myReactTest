import React, { Component } from 'react';
import { Input, Button } from 'antd';


// 创建高阶组件
function MyFormCreate(Comp) {
    return class extends Component {
        constructor(props){
            super(props)
            this.state = {}
            this.options = {}
            // {name:{rules:[{required:true}]}}
        }
        validateFiles=()=> {
            console.log('我是校验')
        }
        // 字段校验
        validateFile=(name)=> {
            console.log('校验',name)
            const rules = this.options[name].rules;//得到是一个数组
            const result = rules.some(rule=>{
                if(rule.required){
                    if(!this.state[name]){
                        // 必填项为false
                        this.setState({
                            // 错误信息设置              
                            [name + "Message"]: rule.message
                        })
                        return true
                    }
                }
            })
            console.log(result)
            if(!result){
                this.setState({
                    // 错误信息设置              
                    [name + "Message"]: ''
                })
            }
        }
        changeHandle = (e)=>{
            console.log('change')
            const {name,value} = e.target
            // 把表单里面的值放在state中,在设置完值之后进行校验
            this.setState({
                [name]:value
            },()=>{
                // 在回调函数中进行校验
                this.validateFile(name)
            })

        }
        // 给每个input框进行装饰
        getFileDecorator=(filed, option)=> {
            // 返回一个装饰器（高阶组件）
            // 存一下options里面的数据
            this.options[filed] = option
            return (InputComp)=> {
                return (
                    <div>
                        {/* 注意这里不能修改传递进来的组件，需要React.clone */}
                        {
                            React.cloneElement(InputComp, {
                                name: filed,
                                value:this.state[filed],
                                onChange:this.changeHandle
                            })
                        }
                        {
                            this.state[filed + "Message"]&& <p>{this.state[filed + "Message"]}</p>
                        }
                    </div>
                )
            }
        }
        render() {
            return (
                <Comp {...this.props}
                getFileDecorator={this.getFileDecorator}
                 validateFiles={this.validateFiles}></Comp>
            )

        }
    }
}
// 使用装饰器的方式
// 使用装饰器工厂的方式，装饰器是自下往上执行的
@MyFormCreate
class MyForm extends Component {
    // 登录
    login() {
        console.log(this.props)
    }
    render() {
        const { getFileDecorator } = this.props;
        return (
            <div>
                {
                    getFileDecorator('name', {
                        rules: [{ required: true,message:"请输入name" }]
                    })(
                        <Input></Input>
                    )
                }
                {
                    getFileDecorator('password', {
                        rules: [{ required: true ,message:"请输入密码"}]
                    })(
                        <Input></Input>
                    )
                }



                <Button onClick={() => this.login()}>登录</Button>
            </div>
        );
    }
}

export default MyForm;

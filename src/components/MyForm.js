import React, { Component } from 'react';
import { Input, Button } from 'antd';


// 创建高阶组件
function MyFormCreate(Comp) {
    return class extends Component {
        // 字段校验
        validateFile() {
            console.log('我是校验')
        }
        // 给每个input框进行装饰
        getFileDecorator(filed, options) {
            // 返回一个装饰器（高阶组件）
            return function (InputComp) {
                return (
                    <div>
                        {/* 注意这里不能修改传递进来的组件，需要React.clone */}
                        {
                            React.cloneElement(InputComp, {
                                name: filed
                            })
                        }
                    </div>
                )
            }
        }
        render() {
            return (
                <Comp {...this.props} validateFile={this.validateFile}></Comp>
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
                        rules: [{ required: true }]
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

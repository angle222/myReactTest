import React, { Component } from 'react'


function Dialog(props) {
  console.log(props)
  let r = props.children('这是内容')
  console.log(r)
  return (
    <div>
      
      <div style={{color:'#ff0000',fontSize:'28px'}}>{r.content}</div>
      <div className="footer">{r.footer}</div>
    </div>
  )
}


export default class Mycomposition extends Component {
 
  render() {
    const content = {
      content:"this is dialog contentAAA",
      footer: <div><button>确定</button><button>取消</button></div> 
    }
    return (
      <div>
        <Dialog>
          {
            (cont)=>({
              content: <div>{cont}</div>,
              footer: <div><button>确定</button><button>取消</button></div>
            })
          }


        </Dialog>
      </div>
    )
  }
}

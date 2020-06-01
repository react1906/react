import { Modal, Button, Input  } from 'antd';
import React from 'react'
class Tancukuang extends React.Component {
   constructor(){
     super()
     this.state = { visible: false }
     this.handleOk=this.handleOk.bind(this)
     this.showModal=this.showModal.bind(this)
     this.handleCancel=this.handleCancel.bind(this)
   }

  showModal(){
    this.setState({
      visible: true,
    });
  };

  handleOk(e){
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel(e){
    console.log(e);
    this.setState({
      visible: false,
    });
  };
 
  render() {
    return (
      <div>
        <a style={{color:"0079FE",marginRight:"5px",display:"inline-block"}} onClick={this.showModal}>
          编辑
        </a>
        <a style={{color:"0079FE",display:"inline-block"}}>删除</a>
        <Modal style={{background:"gray !important"}}
          okText="保存"
          cancelText="取消"
          title="新增选项"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{color:"#CCC",textAlign:"center"}}>选项值名:<Input placeholder="" style={{width:"50%"}}/></div>
        </Modal>
      </div>
    );
  }
}

export default Tancukuang
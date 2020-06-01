import React from 'react'
import {
FileExclamationOutlined,
ProfileOutlined,
FolderOpenOutlined,
PlusOutlined,
EditOutlined,
ZoomInOutlined
} from '@ant-design/icons';


import Tables from '../pages/no7_table'


import { Layout,Input,Button,Modal} from 'antd'
const { Header, Content, Footer} = Layout;
const { TextArea } = Input;
class LocalizedModal extends React.Component {
    constructor(){
        super()
        this.state = { visible: false };
    }
    
    showModal () {
      
      this.setState({
        visible: true,
      });
    };
  
    hideModal () {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showModal.bind(this)}>
            <PlusOutlined />新增产品
          </Button>
          <Modal
            title="新增产品"
            visible={this.state.visible}
            onOk={this.hideModal.bind(this)}
            onCancel={this.hideModal.bind(this)}
            okText="保存"
            cancelText="取消"
            style={{zIndex:'9999'}}
          >
            <div style={{marginBottom:'15px'}}>
                上级部门:<Input placeholder="选择部门" />
            </div>
            <div style={{marginBottom:'15px'}}>
                部门名称:<Input placeholder="选择部门" />
            </div>
            <div>
                部门描述:<TextArea placeholder="请输入描述信息" allowClear />
            </div>
          </Modal>
        </div>
      );
    }
}
class LocalizedModal1 extends React.Component {
    constructor(){
        super()
        this.state = { visible: false };
    }
    
    showModal () {
      
      this.setState({
        visible: true,
      });
    };
  
    hideModal () {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div>
          <Button onClick={this.showModal.bind(this)}>
            <EditOutlined />修改分类
          </Button>
          <Modal
            title="修改分类"
            visible={this.state.visible}
            onOk={this.hideModal.bind(this)}
            onCancel={this.hideModal.bind(this)}
            okText="保存"
            cancelText="取消"
            style={{zIndex:'9999'}}
          >
            <div style={{marginBottom:'15px'}}>
                所属分类:<Input placeholder="选择分类" />
            </div>
          </Modal>
        </div>
      );
    }
}
class LocalizedModal2 extends React.Component {
    constructor(){
        super()
        this.state = { visible: false };
    }
    
    showModal () {
      
      this.setState({
        visible: true,
      });
    };
  
    hideModal () {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div>
          <Button onClick={this.showModal.bind(this)}>
            <EditOutlined />修改状态
          </Button>
          <Modal
            title="修改状态"
            visible={this.state.visible}
            onOk={this.hideModal.bind(this)}
            onCancel={this.hideModal.bind(this)}
            okText="保存"
            cancelText="取消"
            style={{zIndex:'9999'}}
          >
            <div style={{marginBottom:'15px'}}>
                选择状态:<Input placeholder="选择状态" />
            </div>
          </Modal>
        </div>
      );
    }
}


class Content1 extends React.Component{
  render(){
    return (
      <div className="site-layout-background" style={{height:1200 }}>
          <div>
              <div style={{border:'1px solid rgb(231, 225, 225)',height:1200,width:'20%',float:'left'}}>
                  <div style={{borderBottom:'1px solid rgb(231, 225, 225)',width:'100%',height:60,lineHeight:'60px',paddingLeft:'18px'}}>
                      <h3 style={{fontSize:'16px'}}><ProfileOutlined style={{marginRight:'8px'}}/>产品分类</h3>
                  </div>
                  <ul style={{fontSize:'16px',lineHeight:'42px',color:'#666',listStyle:'none'}}>
                      <li style={{color:'#0079FE'}}><FolderOpenOutlined style={{marginRight:'5px'}}/>一级分类</li>
                      <div style={{paddingLeft:'22px'}}>
                          <li>二级分类</li>
                          <li>二级分类</li>
                          <li>二级分类</li>
                      </div>
                      <li><FolderOpenOutlined style={{marginRight:'5px'}}/>一级分类</li>
                      <div style={{paddingLeft:'22px'}}>
                          <li>二级分类</li>
                          <li>二级分类</li>
                          <li>二级分类</li>
                      </div>
                      <li><FolderOpenOutlined style={{marginRight:'5px'}}/>一级分类</li>
                      <div style={{paddingLeft:'22px'}}>
                          <li>二级分类</li>
                          <li>二级分类</li>
                          <li>二级分类</li>
                      </div>
                      <li><FolderOpenOutlined style={{marginRight:'5px'}}/>一级分类</li>
                      <div style={{paddingLeft:'22px'}}>
                          <li>二级分类</li>
                          <li>二级分类</li>
                          <li>二级分类</li>
                      </div>
                  </ul>
              </div>
              <div style={{border:'1px solid rgb(231, 225, 225)',height:1200,width:'78%',float:'right'}}>
                  <div style={{padding:'20px'}}>
                      <div style={{float:'left',marginRight:'10px'}}>
                          <LocalizedModal/>
                      </div>
                      <div style={{float:'left',marginRight:'10px'}}>
                          <LocalizedModal1/>
                      </div>
                      <div style={{float:'left',marginRight:'10px'}}>
                          <LocalizedModal2/>
                      </div>
                      <div style={{float:'right'}}>
                          <Input placeholder="名称/编号" suffix={<ZoomInOutlined />} style={{width:180}}/>
                      </div>
                      <div>
                          <Tables/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}





class No7 extends React.Component{
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><FileExclamationOutlined style={{marginRight:'10px'}}/>产品管理</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <Content1/>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No7
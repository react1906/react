import React from 'react'
import {
    FileExclamationOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteFilled,
    BookOutlined
} from '@ant-design/icons';


import { Layout,Input,Button,Modal,Popconfirm,Row,Col} from 'antd'
const { Header, Content, Footer} = Layout;
const { TextArea } = Input;
import Tables from'../pages/chan_table'

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
          <Button onClick={this.showModal.bind(this)}>
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

class Chan extends React.Component{
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><FileExclamationOutlined style={{marginRight:'10px'}}/>产品管理</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{height:1500 }}>
                        <div style={{border:'1px solid rgb(231, 225, 225)',height:1500,width:'100%'}}>
                            <div style={{height:120,borderBottom:'1px solid rgb(231, 225, 225)',width:'100%'}}>
                                <div style={{width:300,float:'left',marginTop:'30px',marginLeft:'20px'}}>
                                    <div style={{width:60,float:'left',marginRight:'20px'}}>
                                        <img src='http://pic4.zhimg.com/50/v2-f5c59ac2bbf4a83da1819eed1e8eb9c8_hd.jpg' width='60px' style={{borderRadius:'50%'}}/>
                                    </div>
                                    <div>
                                        <p style={{marginBottom:'8px'}}><span style={{fontWeight: '700',fontSize: '18px',marginRight:'10px'}}>产品名称</span><span style={{fontWeight: '400',color: '#4BD863',marginRight:'4px'}}>●</span><span style={{color:'rgba(0, 0, 0, 0.42745',fontSize:'12px'}}>上架</span></p>
                                        
                                        <p style={{color:'#999',fontSize:'12px'}}>产品分类：分类名称    产品编号：CP001</p>
                                    </div>
                                </div>
                                <div style={{float:'right',marginTop:'45px'}}>
                                    <div style={{float:'left',marginRight:'10px'}}>
                                        <LocalizedModal/>
                                    </div>
                                    <div style={{float:'left',marginRight:'10px'}}>
                                        <LocalizedModal2/>
                                    </div>
                                    <div style={{float:'left',marginRight:'10px'}}>
                                        <Popconfirm title='确认删除吗' okText="Yes" cancelText="No">
                                            <Button><DeleteFilled />删除产品</Button>
                                        </Popconfirm>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding:'20px'}}>
                                <p style={{color:'#666',fontSize:'14px',marginBottom:'15px',fontWeight: '700'}}><BookOutlined />基本信息</p>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>产品名称:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>产品名称</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>所属分类:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>产品分类</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>产品编号:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>CP001</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>标椎单价:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>¥ 10,000.00</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>产品规格:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>套</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>备注信息:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>产品描述</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>创建时间:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>2019-08-25 14:54</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>创建人员:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>李小明</Col>
                                </Row>
                                <Row style={{border:'1px solid rgb(231, 225, 225)'}}>
                                    <Col flex='120px' style={{height:40,backgroundColor:'rgb(219, 221, 226)',textAlign:'center',lineHeight:'40px',fontSize:'12px',fontWeight:'700'}}>更新时间:</Col>
                                    <Col flex='auto' style={{height:40,lineHeight:'40px',marginLeft:'15px',fontSize:'12px',fontWeight:'700'}}>2019-08-25 14:54</Col>
                                </Row>
                            </div>
                            <div style={{padding:'20px'}}>
                                <p style={{color:'#666',fontSize:'14px',marginBottom:'15px',fontWeight: '700'}}><BookOutlined />基本信息</p>
                                <Tables/>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px'}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}

export default Chan
import React from 'react'
import Tables from '../pages/no4_table'
import {
UserSwitchOutlined,
PlusOutlined,
ZoomInOutlined,
QuestionCircleOutlined
} from '@ant-design/icons';
import { Layout,Button,Modal,Input,Radio} from 'antd'
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
            <PlusOutlined />新增职务
          </Button>
          <Modal
            title="新增职务"
            visible={this.state.visible}
            onOk={this.hideModal.bind(this)}
            onCancel={this.hideModal.bind(this)}
            okText="保存"
            cancelText="取消"
            style={{zIndex:'9999'}}
          >
            <div style={{marginBottom:'15px'}}>
                职务名称:<Input />
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
  
    handleOk (e) {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel (e) {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div>
          <Button type="link" onClick={this.showModal.bind(this)}>
            <QuestionCircleOutlined />帮助提示
          </Button>
          <Modal
            title="帮助提示"
            visible={this.state.visible}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}
            footer={null}
            style={{zIndex:'9999'}}
          >
            <p style={{lineHeight:'24px'}}>1、公司组织架构非常重要，部分管理功能以及数据权限是依赖于公司组织架构的，因此建议在正式使用产品前进行相关配置。<br/>2、部门组织架构支持多级、最多支持5级，点击左侧层级列表可切换至查看对应部分的子级部门；<br/>3、需要删除部门时必须先清除该部分下的所有成员；</p>
          </Modal>
        </div>
      );
    }
  }


class No4 extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><UserSwitchOutlined style={{marginRight:'10px'}}/>职务权限</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ height:'auto' }}>
                        <div style={{padding:'20px',border:'1px solid rgb(231, 225, 225)',width:'100%'}}>
                            <div style={{height:1200,width:'100%'}}>
                              <div style={{overflow:'hidden'}}>
                                <div style={{float:'left',marginRight:'10px'}}>
                                    <LocalizedModal/>
                                </div>
                                <div style={{float:'left',marginRight:'10px'}}>
                                    <Input placeholder="请输入职务名称" suffix={<ZoomInOutlined />} style={{width:180}}/>
                                </div>
                                <div style={{float:'left'}}>
                                    <LocalizedModal1/>
                                </div>
                                <div style={{float:'right'}}>
                                    <Radio.Button value="default" style={{marginRight:'10px'}}>手动排序</Radio.Button>
                                    <Radio.Button value="default">按字母排序</Radio.Button>
                                </div>
                              </div>
                              <div>
                                  <Tables/>
                              </div>
                                
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No4
import React from 'react'
import {
WalletOutlined,
EditOutlined
} from '@ant-design/icons';
import { Layout,Row, Col, Switch,Modal} from 'antd'
const { Header, Content, Footer} = Layout;

import '../css/no6.css'

class No6 extends React.Component{
    constructor(){
        super()
        this.state={
            arr1:{
                title:'模块名称',
                content:['客户','商机','订单','财务','审批','统计','工单','申请','办公','营销']
            },
            arr2:{
                title:'显示名称',
                content:['客户','商机','订单','财务','审批','统计','工单','申请','办公','营销']
            },
            visible: false
        }
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
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><WalletOutlined style={{marginRight:'10px'}}/>模块管理</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ height:'auto' }}>
                        <div className='conBox'>
                            <div className='btnBox'>
                                <button>手动排序</button>
                                <button>按字母排序</button>
                            </div>
                            <Row className='conTable'>
                                <Col span={5}>
                                    <div className='conTitle'>{this.state.arr1.title}</div>
                                    {this.state.arr1.content.map((item,index)=><div className='conText' key={index}>{item}</div>)}
                                </Col>
                                <Col span={5}>
                                    <div className='conTitle1'>{this.state.arr2.title}</div>
                                    {this.state.arr2.content.map((item,index)=><div className='conText1' key={index}>{item}</div>)}
                                </Col>
                                <Col span={5}>
                                    <div className='conTitle1'>模块概述</div>
                                    {this.state.arr1.content.map((item,index)=><div className='conText1' key={index}>暂无相关描述</div>)}
                                </Col>
                                <Col span={5}>
                                    <div className='conTitle1'>启用</div>
                                    {this.state.arr1.content.map((item,index)=><div className='conText1' key={index}>
                                        <Switch defaultChecked/>
                                    </div>)}
                                </Col>
                                <Col span={4}>
                                    <div className='conTitle1'>操作</div>
                                    {this.state.arr1.content.map((item,index)=><div className='conText1' key={index}>
                                        <span className='bianji' onClick={this.showModal.bind(this)}>
                                            <EditOutlined />编辑
                                        </span>
                                    </div>)}
                                </Col>
                            </Row>
                            <div>
                                <Modal className='kuang'
                                    title="编辑模块"
                                    visible={this.state.visible}
                                    onOk={this.handleOk.bind(this)}
                                    onCancel={this.handleCancel.bind(this)}
                                    >
                                    <div>
                                        模块名称：
                                        <input type="text" placeholder="客户"/>
                                    </div>
                                    <div style={{marginTop:'30px',marginBottom:'30px'}}>
                                        显示名称：
                                        <input type="text"/>
                                    </div>
                                    <div>
                                        模块描述：
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No6
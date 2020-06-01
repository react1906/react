import React from 'react'
import List from './list'
import {
    CopyOutlined
} from '@ant-design/icons';

import {
    Modal, Input, Select, Radio, Form, Button,
    Upload, message, Pagination, Menu, Dropdown,Layout
} from 'antd';
import '../css/xi.css'

import {
    ClockCircleOutlined,
    UserAddOutlined,
    SearchOutlined,
    RedoOutlined,
    PlusOutlined,
    UploadOutlined,
    ProfileOutlined,
    RightCircleFilled,
    DeleteFilled,
    DownOutlined
} from '@ant-design/icons';
const { Header, Content, Footer} = Layout;


const { Option, OptGroup } = Select;

const menu = (
    <Menu>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);

//上传
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class Shan extends React.Component {

    render() {
        return (
            <Upload {...props}>
                <Button>
                    <UploadOutlined /> 选择附件
            </Button>
            </Upload>
        )
    }
}



const { TextArea } = Input;

class In extends React.Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Select defaultValue="选择栏目" style={{ width: '200px' }} onChange={this.handleChange.bind(this)}>
                <OptGroup label="Manager">
                    <Option value="选择栏目">选择栏目</Option>
                    <Option value="企业动态">企业动态</Option>
                </OptGroup>
            </Select>
        )
    }
}



class Xi extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 1, visible: false,
            visibl: false,
        }
    }

    showModal() {
        this.setState({
            visible: true,
        });
    };
    handleOk() {
        this.setState({
            visible: false,
        });
    };

    handleCancel() {
        this.setState({
            visible: false,
        });
    };

    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    showModall() {
        this.setState({
            visibl: true,
        });
    };
    handleOkl() {
        this.setState({
            visibl: false,
        });
    };

    handleCancell() {
        this.setState({
            visibl: false,
        });
    };


    render() {
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><CopyOutlined style={{ marginRight: '10px' }} />系统公告</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{height:'auto' }}>
                        <div className='con'>
                            <div className="inp">
                                <In></In>
                                <Input placeholder="搜索关键词" />
                                <Input placeholder="发布时间" />
                                <Input placeholder="发布人员" />
                                <Button type="primary"><SearchOutlined />查询</Button>
                                <Button><RedoOutlined />Default</Button>
                            </div>
                            <div className='fen'>
                                <div>
                                    <Button onClick={this.showModal.bind(this)} style={{ marginRight: '20px' }}> <PlusOutlined /> 发布公告
                                    </Button>
                                    <Button onClick={this.showModall.bind(this)}> <ProfileOutlined /> 分类管理
                                    </Button>
                                </div>
                                <div>
                                    <List></List>
                                </div>
                                <div className='nnc'>
                                    <div>
                                        <Button type="primary">全选</Button>
                                        <Button style={{marginRight:'10px',marginLeft:'10px'}}>反选</Button>
                                        <Dropdown overlay={menu}>
                                            <Button>
                                                更多操作 <DownOutlined />
                                            </Button>
                                        </Dropdown>
                                    </div>
                                    <div><Pagination defaultCurrent={6} total={500} /></div>
                                </div>
                            </div>
                        </div>
                        <Modal
                            title="发布公告"
                            visible={this.state.visible}
                            onOk={this.handleOk.bind(this)}
                            onCancel={this.handleCancel.bind(this)}
                            className='bnm-d'
                        >
                            <div>* 选择栏目：<In></In></div>
                            <div className='bnm'>* 公告标题：<Input placeholder="Basic usage" /></div>
                            <div>* 接收人员:<Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                                <Radio value={1}>全体员工</Radio>
                                <Radio value={2}>指定人员</Radio>
                            </Radio.Group></div>
                            <div>* 公告详情:<TextArea rows={4} /></div>
                            <div>* 文件上传：<Shan></Shan>
                                <div style={{ color: "#ccc,fontSize:14" }}>支持格式：.rar .zip .doc .docx .pdf ，单个文件不能超过20MB</div>
                            </div>
                            <div>
                                其他设置：<Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                                    <Radio value={1}> 允许评论</Radio>
                                    <Radio value={2}>允许下载附件</Radio>
                                </Radio.Group>
                            </div>
                            <div>
                                提醒方式<Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                                    <Radio value={1}> 系统消息</Radio>
                                    <Radio value={2}>邮件通知</Radio>
                                    <Radio value={3}>短信通知</Radio>
                                </Radio.Group>
                            </div>
                        </Modal>
                        <Modal
                            title="发布公告"
                            visible={this.state.visibl}
                            onOk={this.handleOkl.bind(this)}
                            onCancel={this.handleCancell.bind(this)}
                            className='bnm-d'
                        >
                            <div>123</div>
                        </Modal>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default Xi
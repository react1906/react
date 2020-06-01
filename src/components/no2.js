import React from 'react'
import '../css/no2.css'
import { Input, Select, Upload, message, Button, Radio ,Layout} from 'antd';
import Chan from './childrens/chan'
import {
    EditFilled
} from '@ant-design/icons';
import {
    CopyOutlined,
    HomeOutlined,
    VerticalAlignBottomOutlined,
    ClockCircleOutlined,
    UploadOutlined,
    CheckCircleFilled
} from '@ant-design/icons';
const { Header, Content, Footer} = Layout;

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

const { Option, OptGroup } = Select;
class In extends React.Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Select defaultValue="国有企业" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                <OptGroup label="Manager">
                    <Option value="国有企业">国有企业</Option>
                    <Option value="企业动态">企业动态</Option>
                </OptGroup>
            </Select>
        )
    }
}

class No2 extends React.Component{
    constructor() {
        super()
        this.state = {
            value: 1,
        }
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><CopyOutlined style={{marginRight:'10px'}}/>企业设置</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{height:'auto' }}>
                        <div className='qi'>
                            <div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '14px' }}><EditFilled />  企业信息</div>
                                    <div>* 为必填</div>
                                </div>

                                <div className='ben'>
                                    <div>
                                        <h2>* 基本信息</h2>
                                        <div>
                                            <div>* 企业简称：<Input /></div>
                                            <div>* 企业电话：<Input /></div>
                                            <div>* 企业类型：<In style={{width:'400px'}}/></div>
                                            <div>* 所属行业：<Input size="large" placeholder="large size" suffix={<HomeOutlined />} /></div>
                                            <div>所在地区：<Input size="large" placeholder="large size" suffix={<VerticalAlignBottomOutlined />} /></div>
                                            <div>详细地址：<Input /></div>
                                            <div>邮政编码：<Input /></div>
                                            <div>企业传真：<Input /></div>
                                            <div>企业网址：<Input /></div>
                                            <div>成立时间：<Input size="large" placeholder="large size" suffix={<ClockCircleOutlined />} /></div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2>* 公司Logo：</h2>
                                        <div> * 公司Logo：<Shan></Shan>
                                            <div style={{ paddingLeft: '30px' }}>
                                                <p>支持 JPG、JPEG、PNG、BMP 格式，图片小于10M</p>
                                                <div>
                                                    <Chan></Chan>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2>企业联系人</h2>
                                        <div>
                                            <div>* 联系人姓名： <Input /></div>
                                            <div>尊称：
                                            <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                                                    <Radio value={1}>A</Radio>
                                                    <Radio value={2}>B</Radio>
                                                    <Radio value={3}>C</Radio>
                                                    <Radio value={4}>D</Radio>
                                                </Radio.Group>
                                            </div>
                                            <div>部门职务：<Input /></div>
                                            <div>* 手机号码：<Input /></div>
                                            <div>电子邮箱：<Input /></div>
                                        </div>
                                    </div>
                                    <div style={{paddingTop:'30px'}}>
                                        <div style={{margin:'auto',width:'100px'}}>
                                            <Button type="primary" icon={<CheckCircleFilled />}> Search
                                            </Button>
                                        </div>
                                    </div>
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
export default No2
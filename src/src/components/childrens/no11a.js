
import React,{Component} from 'react'
import {
    ScheduleOutlined,MailOutlined, AppstoreOutlined, SettingOutlined ,UserOutlined,SnippetsOutlined,SearchOutlined,ReloadOutlined
    } from '@ant-design/icons';
    import { Menu,Row, Col,Input, Button,Select,Table, InputNumber, Popconfirm, Form} from 'antd';
import Gong from './gong'
export default class extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
       
        var td=document.getElementsByClassName('ant-table-content')[0]
        console.log(td)
        td.style.width="100%"
        td.style.overflowY="hidden"
        td.style.overflowX="scroll"
        var ta=td.getElementsByTagName('table')[0]
        ta.style.width="140%"
    }
    render(){
         console.log(this.props)
        return (
            <div>
                   <Row style={{height:"40px"}}>
                        <Col span={24} xs={24} sm={24} md={24}></Col>
                    </Row>
                    <Row>
                        <Col span={2} xs={2} sm={2} md={2}></Col>
                        <Col style={{background:"#FFF",color:"#999999",width:"100%",lineHeight:"80px",border:"1px solid #CCC"}} span={21}  xs={21} sm={21} md={21} >
                                <span style={{display:"inline-block",padding:"0 8px",width:"15%",boxSizing:"border-box"}}><Input placeholder="关键词搜索" /></span>
                                <span style={{display:"inline-block",padding:"0 8px",width:"15%",boxSizing:"border-box"}}>
                                    <Select style={{width:"100%"}} placeholder="操作类型 ">
                                        <Select.Option value="lucy">lucy</Select.Option>
                                    </Select>
                                </span>
                                <span style={{display:"inline-block",padding:"0 8px",width:"15%",boxSizing:"border-box"}}><Input placeholder="操作人员" suffix={<UserOutlined />}/></span>
                                <span style={{display:"inline-block",padding:"0 8px",width:"15%",boxSizing:"border-box"}}><Input placeholder="操作时间" suffix={<SnippetsOutlined />}/></span>
                                <span style={{display:"inline-block",padding:"0 8px",width:"15%",boxSizing:"border-box"}}>
                                    <Select style={{width:"100%"}} placeholder="终端类型 ">
                                        <Select.Option value="lucy">lucy</Select.Option>
                                    </Select>
                                </span>
                                <span style={{display:"inline-block",boxSizing:"border-box"}}><Button type="primary" icon={<SearchOutlined />}>查询</Button></span>
                                <span style={{display:"inline-block",boxSizing:"border-box"}}><Button icon={<ReloadOutlined />}>重置</Button></span>
                        </Col>
                        <Col span={1}  xs={1} sm={1} md={1}></Col>
                    </Row>
                    <Row style={{height:"40px"}}>
                        <Col span={24} xs={24} sm={24} md={24}></Col>
                    </Row>
                    
                    <Row>
                        <Col span={2} xs={2} sm={2} md={2} ></Col>
                        <Col span={21}   xs={21} sm={21} md={21} >
                            <div style={{padding:"20px",border:"1px solid #CCC",background:"#FFF"}}>
                                <Gong/>
                            </div>
                        </Col>
                        <Col span={1} xs={1} sm={1} md={1}></Col>
                    </Row>  
            </div>
        )
    }
}
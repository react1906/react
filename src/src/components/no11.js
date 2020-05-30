import React from 'react'
import {
ScheduleOutlined,MailOutlined, AppstoreOutlined, SettingOutlined ,UserOutlined,SnippetsOutlined,SearchOutlined,ReloadOutlined
} from '@ant-design/icons';
import {Router,Route,Switch,Link} from 'react-router-dom'
import { Menu,Row, Col,Input, Button,Select} from 'antd';
const { SubMenu } = Menu;
 import No11a from './childrens/no11a'  
 import No11b from './childrens/no11b'  
 import No11c from './childrens/no11c'  
 import No11d from './childrens/no11d'   
import '../css/no11.css'
class No11 extends React.Component{
    componentDidMount(){
        var no10Style=document.getElementsByClassName('no11Style')[0]
        no10Style.style.position="fixed"
        no10Style.style.left="0"
        no10Style.style.zIndex="3"
        no10Style.style.top="0"
    }
    render(){
        return (
            <div style={{background:"#FCFCFC",}}>
                {/*使用固定定位进行页面滚动*/}
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',background:"#FFF",lineHeight:'70px',position:"fixed",top:"0px",right:"0",zIndex:"2",paddingLeft:"200px",boxSizing:"border-box"}}>
                    <p className='no_p' style={{display:"inline-block"}}><ScheduleOutlined style={{marginRight:'10px'}}/>日志管理</p>
                        <Menu mode="horizontal" style={{display:"inline-block",paddingLeft:"40px",lineHeight:"70px",background:"#FFF"}}>
                            <Menu.Item><Link to="/no11/" style={{display:"block"}}>操作日志</Link></Menu.Item>
                            <Menu.Item><Link to="/no11/no11b" style={{display:"block"}}>审批日志</Link></Menu.Item>
                            <Menu.Item><Link to="/no11/no11c" style={{display:"block"}}>审批日志</Link></Menu.Item>
                            <Menu.Item><Link to="/no11/no11d" style={{display:"block"}}>审批日志</Link></Menu.Item>
                        </Menu>
                </div>
                <div style={{width:"100%",position:"relative",top:"100px"}}>
                    <div>
                        <Route exact path="/no11/"><No11a/> </Route>
                        <Route path="/no11/:d"> <No11b/></Route>
                        <Route path="/no11/no11c"> <No11c/></Route>
                        <Route path="/no11/no11d"> <No11d/></Route>
                    </div>
                    <div style={{marginTop:"50px"}}>
                        <Row style={{height:"101px",position:"relative",bottom:"0",zIndex:"1"}}>
                            <Col span={2} xs={2} sm={2} md={2} ></Col>
                            <Col span={21}   xs={21} sm={21} md={21} >
                            <span style={{textAlign:"center",display:"block",color:"#CCC",fontSize:"12px"}}>Copyright © www.AxureUX.com, All Rights Reserved.</span>
                            <span style={{textAlign:"center",display:"block",color:"#CCC",fontSize:"12px"}}>助你快速打造友好美观的交互原型</span>
                            </Col>
                            <Col span={1} xs={1} sm={1} md={1}></Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default No11
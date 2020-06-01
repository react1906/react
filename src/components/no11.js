import React from 'react'
import {
ScheduleOutlined
} from '@ant-design/icons';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import { Menu,Layout} from 'antd';
 import No11a from './childrens/no11a'  
 import No11b from './childrens/no11b'  
 import No11c from './childrens/no11c'  
 import No11d from './childrens/no11d'
 const { Header, Content, Footer} = Layout;
class No11 extends React.Component{
    ComponentDidMount(){
        var no10Style=document.getElementsByClassName('no11Style')[0]
        no10Style.style.position="fixed"
        no10Style.style.left="0"
        no10Style.style.zIndex="3"
        no10Style.style.top="0"
    }
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p' style={{display:"inline-block"}}><ScheduleOutlined style={{marginRight:'10px'}}/>日志管理</p>
                    <Menu mode="horizontal" style={{display:"inline-block",paddingLeft:"40px",lineHeight:"70px",background:"#FFF"}}>
                        <Menu.Item><Link to="/no11/" style={{display:"block"}}>操作日志</Link></Menu.Item>
                        <Menu.Item><Link to="/no11/no11b" style={{display:"block"}}>审批日志</Link></Menu.Item>
                        <Menu.Item><Link to="/no11/no11c" style={{display:"block"}}>审批日志</Link></Menu.Item>
                        <Menu.Item><Link to="/no11/no11d" style={{display:"block"}}>审批日志</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                        <div style={{width:"100%"}}>
                            <div>
                                <Route exact path="/no11/"><No11a/> </Route>
                                <Route path="/no11/no11b"> <No11b/></Route>
                                <Route path="/no11/no11c"> <No11c/></Route>
                                <Route path="/no11/no11d"> <No11d/></Route>
                            </div>
                        </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No11
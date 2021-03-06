import React from 'react'
import {
FormOutlined
} from '@ant-design/icons';
import { Layout} from 'antd'
const { Header, Content, Footer} = Layout;
import Text from '../pages/text'
class No8 extends React.Component{
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><FormOutlined style={{marginRight:'10px'}}/>业务设置</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{height:'auto',width:'100%' }}>
                        <Text/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No8
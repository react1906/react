import React from 'react'
import {
    UserAddOutlined,
    SearchOutlined,
    RedoOutlined,
    PlusOutlined,
    VerticalAlignBottomOutlined,
    VerticalAlignTopOutlined,
    UserSwitchOutlined,
    UserOutlined,
    CoffeeOutlined,
    DisconnectOutlined,
    UnlockOutlined,
    BorderOutlined,
    SettingOutlined,
    ClearOutlined,
    CheckOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Layout,Button,Row, Col,Modal,Pagination} from 'antd'


import '../css/no5.css'


const { Header, Content, Footer} = Layout;
class No5 extends React.Component{
    constructor(){
        super()
        this.state={
            num:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
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
                    <p className='no_p'><UserAddOutlined style={{marginRight:'10px'}}/>员工管理</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ height:'auto'}}>
                        <div className='searchBox'>
                            <input type="text" placeholder="姓名/手机/邮箱"/>
                            <select>
                                <option value="选择部门">选择部门</option>
                            </select>
                            <select>
                                <option value="选择职务">选择职务</option>
                            </select>
                            <select>
                                <option value="账号类型">账号类型</option>
                            </select>
                            <input type="text" placeholder="添加时间"/>
                            <div className='searchBtn'>
                                <Button type="primary" icon={<SearchOutlined />} style={{height:'100%',width:'48%'}}>查询</Button>
                                <Button icon={<RedoOutlined />} style={{height:'100%',width:'48%'}}>重置</Button>
                            </div>
                        </div>
                        <div className="contBox">
                            <div className="btn_Box">
                                <Row>
                                    <Col span={16}>
                                        <Button type="primary" icon={<PlusOutlined />} className='xinzengBtn'>新增员工</Button>
                                        <Button icon={<VerticalAlignBottomOutlined />} className='daoruBtn'>导入</Button>
                                        <Button icon={<VerticalAlignTopOutlined />} className='daochuBtn'>导出</Button>
                                        <Button onClick={this.showModal.bind(this)} icon={<UserSwitchOutlined />} className='xiugaiBtn'>修改部门</Button>
                                        <Button onClick={this.showModal.bind(this)} icon={<UserOutlined />} className='xiugaiBtn'>修改职务</Button>
                                        <Button onClick={this.showModal.bind(this)} icon={<CoffeeOutlined />} className='xiugaiBtn'>停用员工</Button>
                                        <Button onClick={this.showModal.bind(this)} icon={<DisconnectOutlined />} className='xiugaiBtn'>冻结员工</Button>
                                        <Button onClick={this.showModal.bind(this)} icon={<UnlockOutlined />} className='xiugaiBtn'>重置密码</Button>
                                    </Col>
                                    <Col span={6} offset={2}>
                                        <Button className='paixuBtn'>手动排序</Button>
                                        <Button className='paixuBtn'>按字母排序</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="xinxiBox">
                                <Row style={{marginBottom:'20px'}}>
                                    <Col span={1}>
                                        <div className="everyTitle"><BorderOutlined /></div>
                                        {this.state.num.map((item,idx)=><div className="everyText" key={idx}><BorderOutlined /></div>)}
                                    </Col>
                                    <Col span={1}>
                                        <div className="everyTitle3">头像</div>
                                        {this.state.num.map((item,idx)=><div className="everyText1" key={idx}>
                                            <div className='touxiang'><UserOutlined /></div>
                                        </div>)}
                                    </Col>
                                    <Col span={2}>
                                        <div className="everyTitle3">姓名</div>
                                        {this.state.num.map((item,idx)=><div className="everyText3" key={idx}>李小明</div>)}
                                    </Col>
                                    <Col span={1}>
                                        <div className="everyTitle3">性别</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>男</div>)}
                                    </Col>
                                    <Col span={2}>
                                        <div className="everyTitle3">部门</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>销售部</div>)}
                                    </Col>
                                    <Col span={2}>
                                        <div className="everyTitle3">职务</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>销售总监</div>)}
                                    </Col>
                                    <Col span={3}>
                                        <div className="everyTitle3">手机</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>1327664216</div>)}
                                    </Col>
                                    <Col span={2}>
                                        <div className="everyTitle3">账号状态</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>正常</div>)}
                                    </Col>
                                    <Col span={2}>
                                        <div className="everyTitle3">在线登录</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>在线</div>)}
                                    </Col>
                                    <Col span={3}>
                                        <div className="everyTitle3">最后登录</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>2019-08-08 15:04</div>)}
                                    </Col>
                                    <Col span={5}>
                                        <div className="everyTitle3">操作</div>
                                        {this.state.num.map((item,idx)=><div className="everyText4" key={idx}>
                                            <Row style={{padding:'0 30px',boxSizing:'border-box'}}>
                                                <Col onClick={this.showModal.bind(this)} span={6} className='caozuoBtn'><SettingOutlined />设置</Col>
                                                <Col onClick={this.showModal.bind(this)} span={6} className='caozuoBtn'><CoffeeOutlined />停用</Col>
                                                <Col onClick={this.showModal.bind(this)} span={6} className='caozuoBtn'><DisconnectOutlined />冻结</Col>
                                                <Col onClick={this.showModal.bind(this)} span={6} className='caozuoBtn'><ClearOutlined />删除</Col>
                                            </Row>
                                        </div>)}
                                    </Col>
                                </Row>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <div>
                                        <Button icon={<CheckOutlined />} style={{marginRight:'10px'}}>全选</Button>
                                        <Button icon={<BorderOutlined />} style={{marginRight:'10px'}}>反选</Button>
                                        <Button icon={<DownOutlined />}>更多操作</Button>
                                    </div>
                                    <Pagination defaultCurrent={6} total={500} />
                                </div>
                            </div>
                            <div>
                                <Modal
                                    title="修改部门"
                                    visible={this.state.visible}
                                    onOk={this.handleOk.bind(this)}
                                    onCancel={this.handleCancel.bind(this)}
                                    >
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
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
export default No5
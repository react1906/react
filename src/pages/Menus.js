import React from 'react'
import 'antd/dist/antd.css';

import {HashRouter as Router,Link} from 'react-router-dom'

import { Menu } from 'antd';
import {
SettingOutlined,
CopyOutlined,
ClusterOutlined,
UserSwitchOutlined,
UserAddOutlined,
ScheduleOutlined,
HddOutlined,
ProfileOutlined,
FormOutlined,
WalletOutlined,
FileExclamationOutlined,
PoweroffOutlined
} from '@ant-design/icons';

import '../css/style.css'


class Sider extends React.Component {
    constructor(){
        super()
        this.state = {
            data:[
                {
                    key: '1',
                    link: '/',
                    text: '管理中心',
                    icon: <SettingOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '2',
                    link: '/no2',
                    text: '企业设置',
                    icon: <CopyOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '3',
                    link: '/no3',
                    text: '组织架构',
                    icon: <ClusterOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '4',
                    link: '/no4',
                    iconType: 'tag',
                    text: '职务权限',
                    icon: <UserSwitchOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '5',
                    link: '/no5',
                    text: '员工管理',
                    icon: <UserAddOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '6',
                    link: '/no6',
                    text: '模块管理',
                    icon: <WalletOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '7',
                    link: '/no7',
                    text: '产品管理',
                    icon: <FileExclamationOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '8',
                    link: '/no8',
                    text: '业务设置',
                    icon: <FormOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '9',
                    link: '/no9',
                    text: '字段管理',
                    icon: <ProfileOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '10',
                    link: '/no10',
                    text: '字典管理',
                    icon: <HddOutlined style={{fontSize:'17px'}}/>
                }, {
                    key: '11',
                    link: '/no11',
                    text: '日志管理',
                    icon: <ScheduleOutlined style={{fontSize:'17px'}}/>
                }
            ],
            mode: 'inline',
        }
    }
    render() {
        return (
        <>
            <div style={{width:'100%',backgroundColor:'rgba(236, 239, 244, 1)',paddingBottom:'12px',paddingTop:'15px'}}>
                <div style={{backgroundColor:'cornflowerblue',width:60,height:60,borderRadius:'5px',lineHeight:'70px',textAlign:'center',marginLeft:'70px',marginBottom:'15px'}}>
                    <SettingOutlined style={{fontSize:'28px',color:'#fff'}}/>
                </div>
                <h3 className='h3'>系统管理中心</h3>
            </div>
            <Menu
            style={{ width: '100%' , textAlign: 'center'}}
            defaultSelectedKeys={['1']}
            mode={this.state.mode}
            >
                {
                    this.state.data.map((route) =>
                        <Menu.Item key={route.key} style={{height:44,lineHeight:'48px',fontSize:'14px',color: '#666666'}} icon={route.icon}>
                            <Router>
                                <Link to={route.link}>{route.text}</Link>
                            </Router>
                        </Menu.Item>
                    )
                }
            </Menu>
            <div style={{width: '100%',height:'50px',backgroundColor:'rgba(236, 239, 244, 1)',borderTop:'1px solid #ccc',fontSize:'14px',color: '#666666',textAlign: 'center',lineHeight:'50px',cursor: 'pointer'}}><PoweroffOutlined style={{marginRight:'6px'}}/>退出登录</div>
        </>
    );
  }
}
export default Sider
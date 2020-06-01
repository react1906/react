import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom'
import {
    Modal, Input, Select, Radio, Form, Button,
    Upload, message,Layout
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Option, OptGroup } = Select;

const { TextArea } = Input;

import {
    SettingOutlined,
    UserOutlined,
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
    PlusOutlined,
    RightOutlined,
    EyeOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

import '../css/no1.css'

const { Header, Content, Footer} = Layout;


class In extends React.Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Select defaultValue="企业动态" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                <OptGroup label="Manager">
                    <Option value="企业动态2">企业动态2</Option>
                    <Option value="企业动态">企业动态</Option>
                </OptGroup>
            </Select>
        )
    }
}


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


class No1 extends React.Component{
    constructor() {
        super()
        this.state = {
            value: 1,
            arr: [
                {
                    key: '2',
                    text: '企业设置',
                    link: '/no2',
                    icon: <CopyOutlined />
                }, {
                    key: '3',
                    link: '/no3',
                    text: '组织架构',
                    icon: <ClusterOutlined />
                }, {
                    key: '4',
                    link: '/no4',
                    iconType: 'tag',
                    text: '职务权限',
                    icon: <UserSwitchOutlined />
                }, {
                    key: '5',
                    link: '/no5',
                    text: '员工管理',
                    icon: <UserAddOutlined />
                }, {
                    key: '6',
                    link: '/no6',
                    text: '模块管理',
                    icon: <WalletOutlined />
                }, {
                    key: '7',
                    link: '/no7',
                    text: '产品管理',
                    icon: <FileExclamationOutlined />
                }, {
                    key: '8',
                    link: '/no8',
                    text: '业务设置',
                    icon: <FormOutlined />
                }, {
                    key: '9',
                    link: '/no9',
                    text: '字段管理',
                    icon: <ProfileOutlined />
                }, {
                    key: '10',
                    link: '/no10',
                    text: '字典管理',
                    icon: <HddOutlined />
                }, {
                    key: '11',
                    link: '/no11',
                    text: '日志管理',
                    icon: <ScheduleOutlined />
                }
            ],
            content: [
                {
                    id: 1,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                    cont: '客户关系长期持久，源于让客户感受到价值和重要，是非常有利可图的。满足并保留您的客户群，确保未来获得丰厚的收入和利润。口碑也是强大的力量，忠诚的顾客会把你推荐给别人。通过提供优质的服务，保持联系并建立客户关系，改善和维护客户关系。',
                    cont1: ' 让顾客感到自己受到了重视从而建立持久的客户关系，能为你带来丰厚的回报。让顾客满意并维持好客户基数能为将来的收入和利润提供重要的保障。口碑也是一个杀手锏，忠诚的顾客会向其他人推荐你。所以你需要通过提供优质的服务，持续的客户沟通及建立良好的客户关系来改善和维持客户关系。',
                    cont2: '把重点放在质量上。赢得忠实客户和商业的最好方式是提供比竞争对手更高质量的产品或服务。其他策略只是为了保留客户已经对您的产品质量印象深刻。不断优化您的产品，确保它们尽可能接近完美。关注质量将导致更多的建议，重复销售和品牌的忠诚度比任何其他战略。因此，首先要确保在这方面的客户保留。',
                    cont3: '重视产品和服务质量。赢得忠诚的顾客和订单的最佳方式就是提供比竞争对手更加优质的产品质量和服务。其他的策略只是帮助维持已经被产品和服务吸引的现有客户。要不断改善服务，确保它们总在向完美靠近。专注于产品的质量会比其他策略为你带来更多的老客户推荐，回购以及品牌忠诚度。所以，一定要在维护老客户方面进行努力。',
                    cont4: '即使是最高质量的服务或产品也不会导致高销售额，如果只有几个客户实际上获得这样的质量水平。一致性是建立质量和可靠性的声誉的关键，这将导致客户的忠诚度。努力确保与客户的每一个接触点，从店内互动到在线响应，都代表着您的品牌和您提供的质量水平。这也适用于可能需要过度测试或质量控制以确保一致性的产品。',
                    cont5: '即使是最优质的服务品质，如果仅有几个客户获得了这种级别的服务品质，也不会带来高销售额。始终如一的高品质服务和产品是带来良好声誉和客户忠诚度的关键所在。不论在店内销售还是在线答疑，每次接触客户时的表现都代表你所追求的品牌价值和服务水准。对于需要进行大量测试或者质量管控才能维持一贯水准的产品来说，这点同样适用。'
                },
                {
                    id: 2,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                    cont: '客户关系长期持久，源于让客户感受到价值和重要，是非常有利可图的。满足并保留您的客户群，确保未来获得丰厚的收入和利润。口碑也是强大的力量，忠诚的顾客会把你推荐给别人。通过提供优质的服务，保持联系并建立客户关系，改善和维护客户关系。',
                    cont1: ' 让顾客感到自己受到了重视从而建立持久的客户关系，能为你带来丰厚的回报。让顾客满意并维持好客户基数能为将来的收入和利润提供重要的保障。口碑也是一个杀手锏，忠诚的顾客会向其他人推荐你。所以你需要通过提供优质的服务，持续的客户沟通及建立良好的客户关系来改善和维持客户关系。',
                    cont2: '把重点放在质量上。赢得忠实客户和商业的最好方式是提供比竞争对手更高质量的产品或服务。其他策略只是为了保留客户已经对您的产品质量印象深刻。不断优化您的产品，确保它们尽可能接近完美。关注质量将导致更多的建议，重复销售和品牌的忠诚度比任何其他战略。因此，首先要确保在这方面的客户保留。',
                    cont3: '重视产品和服务质量。赢得忠诚的顾客和订单的最佳方式就是提供比竞争对手更加优质的产品质量和服务。其他的策略只是帮助维持已经被产品和服务吸引的现有客户。要不断改善服务，确保它们总在向完美靠近。专注于产品的质量会比其他策略为你带来更多的老客户推荐，回购以及品牌忠诚度。所以，一定要在维护老客户方面进行努力。',
                    cont4: '即使是最高质量的服务或产品也不会导致高销售额，如果只有几个客户实际上获得这样的质量水平。一致性是建立质量和可靠性的声誉的关键，这将导致客户的忠诚度。努力确保与客户的每一个接触点，从店内互动到在线响应，都代表着您的品牌和您提供的质量水平。这也适用于可能需要过度测试或质量控制以确保一致性的产品。',
                    cont5: '即使是最优质的服务品质，如果仅有几个客户获得了这种级别的服务品质，也不会带来高销售额。始终如一的高品质服务和产品是带来良好声誉和客户忠诚度的关键所在。不论在店内销售还是在线答疑，每次接触客户时的表现都代表你所追求的品牌价值和服务水准。对于需要进行大量测试或者质量管控才能维持一贯水准的产品来说，这点同样适用。'
                },
                {
                    id: 3,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                    cont: '客户关系长期持久，源于让客户感受到价值和重要，是非常有利可图的。满足并保留您的客户群，确保未来获得丰厚的收入和利润。口碑也是强大的力量，忠诚的顾客会把你推荐给别人。通过提供优质的服务，保持联系并建立客户关系，改善和维护客户关系。',
                    cont1: ' 让顾客感到自己受到了重视从而建立持久的客户关系，能为你带来丰厚的回报。让顾客满意并维持好客户基数能为将来的收入和利润提供重要的保障。口碑也是一个杀手锏，忠诚的顾客会向其他人推荐你。所以你需要通过提供优质的服务，持续的客户沟通及建立良好的客户关系来改善和维持客户关系。',
                    cont2: '把重点放在质量上。赢得忠实客户和商业的最好方式是提供比竞争对手更高质量的产品或服务。其他策略只是为了保留客户已经对您的产品质量印象深刻。不断优化您的产品，确保它们尽可能接近完美。关注质量将导致更多的建议，重复销售和品牌的忠诚度比任何其他战略。因此，首先要确保在这方面的客户保留。',
                    cont3: '重视产品和服务质量。赢得忠诚的顾客和订单的最佳方式就是提供比竞争对手更加优质的产品质量和服务。其他的策略只是帮助维持已经被产品和服务吸引的现有客户。要不断改善服务，确保它们总在向完美靠近。专注于产品的质量会比其他策略为你带来更多的老客户推荐，回购以及品牌忠诚度。所以，一定要在维护老客户方面进行努力。',
                    cont4: '即使是最高质量的服务或产品也不会导致高销售额，如果只有几个客户实际上获得这样的质量水平。一致性是建立质量和可靠性的声誉的关键，这将导致客户的忠诚度。努力确保与客户的每一个接触点，从店内互动到在线响应，都代表着您的品牌和您提供的质量水平。这也适用于可能需要过度测试或质量控制以确保一致性的产品。',
                    cont5: '即使是最优质的服务品质，如果仅有几个客户获得了这种级别的服务品质，也不会带来高销售额。始终如一的高品质服务和产品是带来良好声誉和客户忠诚度的关键所在。不论在店内销售还是在线答疑，每次接触客户时的表现都代表你所追求的品牌价值和服务水准。对于需要进行大量测试或者质量管控才能维持一贯水准的产品来说，这点同样适用。'
                },
            ],
            visible: false
        }
    }

    add(a, e, props) {
        const p = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        const div = document.createElement('div')
        p.appendChild(div)

        div.className = 'act'
        div.innerHTML += `
        <div class='actl'>
            <div class='actl-i'>
                <div>公告详情</div>
                <div class="del">x</div>
            </div>
            <div class='actl-l'>
                <div>
                    <h2>${props.text}</h2>
                </div>
                <div class='actl-f'>
                    <div>发布人员:${props.name}</div>
                    <div>发布时间:${props.time}</div>
                    <div>接受成员:${props.qu}</div>
                    <div>浏览次数:${props.ci}</div>
                    <div>查看浏览记录</div>
                </div>
                <div class='actl-t'>
                    <div>${props.cont}</div>
                    <div>${props.cont1}</div>
                    <div>${props.cont2}</div>
                    <div>${props.cont3}</div>
                    <div>${props.cont4}</div>
                    <div>${props.cont5}</div>
                </div>
                <div>
                    <div>评论记录</div>
                    <div class='bh'>    
                        <div class='bg'>
                            <div>
                                ${props.name} ${props.time} 
                            </div>
                            <div>x</div>
                        </div>
                        <div>非常不错对我们的工作有价值</div>
                    </div>
                </div>
                <div class='put'>
                    <div><input type="text" placeholder="请输入评论内容"></div>
                    <div>发布</div>
                </div>
            </div>
        </div>
        `

        const de = document.querySelector('.del')
        de.addEventListener('click', this.del)
    }

    del() {
        const sd = document.querySelector('.cont')
        const d = this.parentNode.parentNode.parentNode
        d.remove()

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
    render(){
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><SettingOutlined style={{marginRight:'10px'}}/>管理中心</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{height:'auto' }}>
                        <div className="cont">
                            <div>
                                <div className="ti">
                                    <div>
                                        <div className="bi icons-list"><UserOutlined /></div>
                                        <div style={{ lineHeight: '26' + 'px', paddingLeft: 20 }}>
                                            <p>李小明，欢迎进入设置中心！</p>
                                            <p>上次登录：2019年7月10日 星期三 20:30:23</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link className='t-r' to="/no5">
                                            <div>
                                                <p>员工数量</p>
                                                <h5>100</h5>
                                            </div>
                                        </Link>
                                        <Link className='t-r' to='/no7'>
                                            <div>
                                                <p>产品数量</p>
                                                <h5>100</h5>
                                            </div>
                                        </Link>
                                        <Link className='t-r' to="/no5">
                                            <div >
                                                <p>在线用户</p>
                                                <h5>100</h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="do">
                                    {this.state.arr.map(rout => {
                                        return (
                                            <div key={rout.key}>
                                                <div>
                                                    <div className='icons-list'>
                                                        {rout.icon}
                                                    </div>
                                                    <p>
                                                        <Link to={rout.link}>
                                                            {rout.text}
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        )

                                    })}
                                </div>

                                {/*  */}
                                <div className='xi'>
                                    <div> <EyeOutlined />
                                        系统公告
                                    </div>
                                    <div className='xi-l'>
                                        <div type="primary" onClick={this.showModal.bind(this)}> <PlusOutlined />发布公告</div>
                                        <div><Link to='/xi'>查看更多 <RightOutlined /></Link></div>
                                    </div>
                                </div>

                                <div>
                                    {this.state.content.map(con => {
                                        return (
                                            <div className='nei' key={con.id}>
                                                <div onClick={() => { this.add(this, event, con) }}>【内部分享】{con.text}</div>
                                                <div>
                                                    <div><span><UserOutlined /></span>{con.name}</div>
                                                    <div><ClockCircleOutlined />{con.time}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
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
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No1
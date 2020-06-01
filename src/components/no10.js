import React from 'react'
import {
    HddOutlined
} from '@ant-design/icons';
import {  Row, Col,Layout } from 'antd';
import No10to from './childrens/no10To'

const { Header, Content, Footer} = Layout;

class No10 extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [{
                id: 0,
                title: "客户",
                arr1: [
                    {
                        title1: "所属行业",
                        arr2: [
                            {
                                key: '1',
                                name: '家用电器',
                            },
                            {
                                key: '2',
                                name: '交通运输',
                            },
                            {
                                key: '3',
                                name: '商务服务',
                            },
                            {
                                key: '4',
                                name: '家居用品',
                            },
                            {
                                key: '5',
                                name: '电工电气',
                            },
                            {
                                key: '6',
                                name: '数码产品',
                            },
                            {
                                key: '6',
                                name: '通信产品',
                            },
                            {
                                key: '7',
                                name: '办公文教',
                            },
                            {
                                key: '8',
                                name: '运动休闲',
                            },
                            {
                                key: '9',
                                name: '传媒广电',
                            },
                        ]
                    },
                    {title1:"客户类型",arr2:[
                        {key:'1',name: '企业客户'},
                        {key:'2',name: '个人客户'},
                    ]
                    },
                    {title1:"客户状态",arr2:[
                        {key:'1',name: '了解产品'},
                        {key:'2',name: '正在跟进'},
                        {key:'3',name: '正在试用'},
                        {key:'4',name: '准备购买'},
                        {key:'5',name: '已经购买'},
                        {key:'6',name: '暂时搁置'},
                    ]
                    },
                    {title1:"客户来源",arr2:[
                        {key:'1',name: '电话营销'},
                        {key:'2',name: '主动来电'},
                        {key:'3',name: '客户介绍'},
                        {key:'4',name: '朋友介绍'},
                        {key:'5',name: '独立开发'},
                        {key:'6',name: '网络搜索'},
                        {key:'7',name: '广告杂志'},
                        {key:'8',name: '展会促销'},
                        {key:'9',name: '其它途径'},
                    ]
                    },
                    {title1:"企业规模",arr2:[
                        {key:'1',name: '10人以内'},
                        {key:'2',name: '10-20人'},
                        {key:'3',name: '21人-50人'},
                        {key:'4',name: '51人-200人'},
                        {key:'5',name: '201人-500人'},
                        {key:'6',name: '500人以上'},
                    ]
                    },
                ]
            },
            {
                id: 2,
                title: "线索",
                arr1:[
                    {title1:"角色",arr2:[
                        {key:'1',name: '普通人'},
                        {key:'2',name: '决策人'},
                        {key:'3',name: '分项决策人'},
                        {key:'4',name: '商务决策'},
                        {key:'5',name: '财务决策'},
                        {key:'6',name: '使用人'},
                        {key:'7',name: '意见影响人'},
                    ]},
                    {title1:"尊称",arr2:[
                        {key:'1',name: '未知'},
                        {key:'2',name: '先生'},
                        {key:'3',name: '女士'},
                    ]},
                    {title1:"线索来源",arr2:[
                        {key:'1',name: '电话营销'},
                        {key:'2',name: '主动来电'},
                        {key:'3',name: '客户介绍'},
                        {key:'4',name: '朋友介绍'},
                        {key:'5',name: '独立开发'},
                        {key:'6',name: '网络搜索'},
                        {key:'7',name: '广告杂志'},
                        {key:'8',name: '展会促销'},
                        {key:'9',name: '其它途径'},
                    ]},
                    {title1:"线索来源",arr2:[
                        {key:'1',name: '初步意向'},
                        {key:'2',name: '下次邀约'},
                        {key:'3',name: '正在沟通'},
                    ]},
                ]
            },
            {
                id: 3,
                title: "商机",
                arr1:[
                    {title1:"订单类型",arr2:[
                        {key:'1',name: '普通人'},
                        {key:'2',name: '深入沟通'},
                        {key:'3',name: '流失商机'},
                    ]},
                    {title1:"成交机率",arr2:[
                        {key:'1',name: '10%'},
                        {key:'2',name: '20%'},
                        {key:'3',name: '30%'},
                        {key:'4',name: '40%'},
                        {key:'5',name: '50%'},
                        {key:'6',name: '60%'},
                        {key:'7',name: '70%'},
                        {key:'8',name: '80%'},
                        {key:'9',name: '90%'},
                        {key:'10',name: '100%'},
                    ]},
                    {title1:"商机来源",arr2:[
                        {key:'1',name: '电话营销'},
                        {key:'2',name: '主动来电'},
                        {key:'3',name: '客户介绍'},
                        {key:'4',name: '朋友介绍'},
                        {key:'5',name: '独立开发'},
                        {key:'6',name: '网络搜索'},
                        {key:'7',name: '广告杂志'},
                        {key:'8',name: '展会促销'},
                        {key:'9',name: '其它途径'},
                    ]},
                ]
            },
            {
                id: 4,
                title: "角色",
                arr1:[
                    {title1:"角色",arr2:[
                        {key:'1',name: '普通人'},
                        {key:'2',name: '决策人'},
                        {key:'3',name: '分项决策人'},
                        {key:'4',name: '商务决策'},
                        {key:'5',name: '财务决策'},
                        {key:'6',name: '使用人'},
                        {key:'7',name: '意见影响人'},
                    ]},
                    {title1:"尊称",arr2:[
                        {key:'1',name: '未知'},
                        {key:'2',name: '先生'},
                        {key:'3',name: '女士'},
                    ]},
                ]
            },
            {
                id: 6,
                title: "订单",
                arr1:[
                    {title1:"订单类型",arr2:[
                        {key:'1',name: '直销订单'},
                        {key:'2',name: '电销订单'},
                        {key:'3',name: '分销订单'},
                    ]},
                    {title1:"付款方式",arr2:[
                        {key:'1',name: '对公账户'},
                        {key:'2',name: '对私账户'},
                        {key:'3',name: '现金支付'},
                    ]},
                ]
            },
            {
                id: 7,
                title: "财务",
                arr1:[
                    {title1:"付款方式",arr2:[
                        {key:'1',name: '对公账户'},
                        {key:'2',name: '对私账户'},
                        {key:'3',name: '现金支付'},
                    ]},
                    {title1:"回款类型",arr2:[
                        {key:'1',name: '订金'},
                        {key:'2',name: '正常回款'},
                        {key:'3',name: '其它'},
                    ]},
                    {title1:"票据类型",arr2:[
                        {key:'1',name: '增值税专用发票'},
                        {key:'2',name: '增值税普通发票'},
                        {key:'3',name: '国税通用机打发票'},
                        {key:'4',name: '地税通用机打发票'},
                    ]},
                    {title1:"费用类型",arr2:[
                        {key:'1',name: '招待费'},
                        {key:'2',name: '交通费'},
                        {key:'3',name: '酒店费'},
                        {key:'4',name: '物流费'},
                        {key:'5',name: '礼品费'},
                        {key:'6',name: '其他'},
                    ]},
                ]
            },
            {
                id: 8,
                title: "其他",
                arr1:[
                    {title1:"跟进类型",arr2:[
                        {key:'1',name: '到访'},
                        {key:'2',name: '电话'},
                        {key:'3',name: '微信'},
                        {key:'4',name: '短信'},
                        {key:'5',name: '邮件'},
                        {key:'6',name: 'QQ'},
                        {key:'7',name: '其它'},
                    ]},
                    {title1:"请假类型",arr2:[
                        {key:'1',name: '事假'},
                        {key:'2',name: '病假'},
                        {key:'3',name: '产假'},
                        {key:'4',name: '年假'},
                        {key:'5',name: '调休假'},
                    ]},
                    {title1:"业绩目标类型",arr2:[
                        {key:'1',name: '成交金额'},
                        {key:'2',name: '回款金额'},
                        {key:'3',name: '跟进次数'},
                        {key:'4',name: '新增客户'},
                        {key:'5',name: '新增商机'},
                    ]},
                    {title1:"业绩目标单位",arr2:[
                        {key:'1',name: '次'},
                        {key:'2',name: '万'},
                        {key:'3',name: '亿'}
                    ]},
                    {title1:"营销活动类型",arr2:[
                        {key:'1',name: '促销活动'},
                        {key:'2',name: '品牌活动'},
                        {key:'3',name: '会议营销'}
                    ]},
                    {title1:"竞争对手企业规模",arr2:[
                        {key:'1',name: '10人以内'},
                        {key:'2',name: '10-20人'},
                        {key:'3',name: '21人-50人'},
                        {key:'4',name: '51人-200人'},
                        {key:'5',name: '201人-500人'},
                        {key:'6',name: '500人以上'}
                    ]},
                    {title1:"产品规格",arr2:[
                        {key:'1',name: '个'},
                        {key:'2',name: '箱'},
                        {key:'3',name: '套'},
                        {key:'4',name: '条'},
                        {key:'5',name: '盒'},
                        {key:'6',name: '块'},
                        {key:'7',name: '只'},
                        {key:'8',name: '把'},
                        {key:'9',name: '枚'},
                    ]},
                ]
            },
            ],
            dataType:[
                {
                    title1: "所属行业",
                    arr2: [
                        {
                            key: '1',
                            name: '家用电器',
                        },
                        {
                            key: '2',
                            name: '交通运输',
                        },
                        {
                            key: '3',
                            name: '商务服务',
                        },
                        {
                            key: '4',
                            name: '家居用品',
                        },
                        {
                            key: '5',
                            name: '电工电气',
                        },
                        {
                            key: '6',
                            name: '数码产品',
                        },
                        {
                            key: '6',
                            name: '通信产品',
                        },
                        {
                            key: '7',
                            name: '办公文教',
                        },
                        {
                            key: '8',
                            name: '运动休闲',
                        },
                        {
                            key: '9',
                            name: '传媒广电',
                        },
                    ]
                },
                {title1:"客户类型",arr2:[
                    {key:'1',name: '企业客户'},
                    {key:'2',name: '个人客户'},
                ]
                },
                {title1:"客户状态",arr2:[
                    {key:'1',name: '了解产品'},
                    {key:'2',name: '正在跟进'},
                    {key:'3',name: '正在试用'},
                    {key:'4',name: '准备购买'},
                    {key:'5',name: '已经购买'},
                    {key:'6',name: '暂时搁置'},
                ]
                },
                {title1:"客户来源",arr2:[
                    {key:'1',name: '电话营销'},
                    {key:'2',name: '主动来电'},
                    {key:'3',name: '客户介绍'},
                    {key:'4',name: '朋友介绍'},
                    {key:'5',name: '独立开发'},
                    {key:'6',name: '网络搜索'},
                    {key:'7',name: '广告杂志'},
                    {key:'8',name: '展会促销'},
                    {key:'9',name: '其它途径'},
                ]
                },
                {title1:"企业规模",arr2:[
                    {key:'1',name: '10人以内'},
                    {key:'2',name: '10-20人'},
                    {key:'3',name: '21人-50人'},
                    {key:'4',name: '51人-200人'},
                    {key:'5',name: '201人-500人'},
                    {key:'6',name: '500人以上'},
                ]
                },
            ],
            toindex:0,
        }
        this.click=this.click.bind(this)
    }
    ComponentDidMount() {
        var ant1 = document.querySelectorAll('.ant-pagination')
        ant1.forEach(item=>{
            item.remove()
        })
        var all = document.querySelectorAll('.allspan>span')
        all.forEach(item => {
            item.style.color = "gray"
            item.style.display = "inline-block"
            item.style.padding = "0 40px"
            item.style.boxSizing = "border-box"
        })
        var no10Style=document.getElementsByClassName('no11Style')[0]
        no10Style.style.position="fixed"
        no10Style.style.left="0"
        no10Style.style.zIndex="3"
        no10Style.style.top="0"
    }
    click(item,index){
       this.setState({
         dataType:item,
         toindex:index
       })
    }
    render() {
        return (
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, position:'fixed',left:'200px',top:'0',height:70,width:'100%',boxShadow: '1px 1px 10px #ccc',zIndex:'999'}}>
                    <p className='no_p'><HddOutlined style={{marginRight:'10px'}}/>字典管理</p>
                </Header>
                <Content style={{ margin: '94px 16px 0', overflow: 'initial' }}>
                    <div style={{ width: "100%" }}>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} >
                                <div style={{ border: "1px solid #CCC", background: "#FFF" }}>
                                    <div className="allspan" style={{ lineHeight: "80px", borderBottom: "1px solid #CCC" }}>
                                        {this.state.arr.map((item,index) => <span style={{color:index==this.state.toindex?'#0079FE':''}} onClick={this.click.bind(this,item.arr1,index)} key={item.id}>{item.title}</span>)}
                                    </div>
                                    <div style={{ padding: "20px", }}>
                                        <No10to propsdata={this.state.dataType}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' ,color:'#ccc',lineHeight:'25px',marginTop:"50px"}}>Copyright © www.AxureUX.com, All Rights Reserved.<br/>助你快速打造友好美观的交互原型</Footer>
            </Layout>
        )
    }
}
export default No10
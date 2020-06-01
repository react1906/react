import React,{Component} from 'react'


import '../css/no9.css'

import { Row, Col, Divider } from 'antd';
import { UnorderedListOutlined ,CheckSquareOutlined,EditOutlined,DeleteOutlined,CheckCircleOutlined,LoadingOutlined} from '@ant-design/icons';
//编辑的弹框
import { Modal} from 'antd';
import { Input } from 'antd'




//字段管理页面路由对应的模板2 (主要内容部分)

const style = {
     background: 'rgba(0,0,0,.03)', 
     padding: '8px 0',
     lineHeight:'23px',
     textAlign:'center',
     fontSize:'14px',
     height:'41px',
     color:'#666',
     margin:'0px',
     border:'1px solid #ccc',
     fontWeight:'bold'   
    };
const styleTow = {
    padding: '8px 0',
    lineHeight:'23px',
    textAlign:'center',
    fontSize:'14px',
    height:'41px',
    color:'#666',
    margin:'0px',
    border:'1px solid #ccc',
    a:{
        padding: '8px 0',
        lineHeight:'23px',
        textAlign:'center',
        fontSize:'13px',
        height:'41px',
        color:'#ff6a00',
        margin:'0px',
        border:'1px solid #ccc',
    },
    b:{
        padding: '8px 0',
        lineHeight:'23px',
        textAlign:'center',
        fontSize:'13px',
        height:'41px',
        color:'#ccc',
        margin:'0px',
        border:'1px solid #ccc',
    },
    c:{
        padding: '8px 0',
        lineHeight:'23px',
        textAlign:'center',
        fontSize:'13px',
        height:'41px',
        color:'#1E90FF',
        margin:'0px',
        border:'1px solid #ccc', 
    },
    d:{
        padding: '8px 0',
        lineHeight:'23px',
        textAlign:'center',
        fontSize:'13px',
        height:'41px',
        color:'#1E90FF',
        margin:'0px',
        border:'1px solid #ccc',
    },
}

class serviceTow extends Component{

    constructor(){
        super()
        this.state = { visible: false };
    }

    showModal(){
        this.setState({
            visible:true
        })
      }
      handleOk(){
          this.setState({
            visible: false,
          });
      }
      
      handleCancel(){
      this.setState({
          visible: false,
          });
      }  

    render(){
        return(
            <div className="service-tow">
              <Row justify="start">
                    <Col span={4} style={style}>字段名称</Col>
                    <Col span={4} style={style}>字段类型</Col>
                    <Col span={4} style={style}>排序</Col>
                    <Col span={4} style={style}>启用</Col>
                    <Col span={4} style={style}>必填</Col>
                    <Col span={4} style={style}>操作</Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={style}>基础信息</Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>客户名称
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.c}>
                         <EditOutlined />
                         <a className="mr" onClick={this.showModal.bind(this)}>编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>助计名称
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                        所属行业
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    客户类型
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    客户状态
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    客户星级
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    客户星级
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    客户星级
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              {/* 附加信息 */}
              <Row justify="start">
                    <Col span={4} style={style}>附加信息</Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    所在地区
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>详细信息
                    </Col>
                    <Col span={4} style={styleTow} className="text">
                            多行文本
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.c}>
                         <EditOutlined />
                         <a className="mr" onClick={this.showModal.bind(this)}>编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    企业规模
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    上级客户
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>详细信息
                    </Col>
                    <Col span={4} style={styleTow} className="text">
                            单行文本
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.c}>
                         <EditOutlined />
                         <a className="mr" onClick={this.showModal.bind(this)}>编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              {/* 下次跟进任务 */}
              <Row justify="start">
                    <Col span={4} style={style}>下次跟进任务</Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    跟进时间
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                        跟进内容
                    </Col>
                    <Col span={4} style={styleTow} className="text">
                            多行文本
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.c}>
                         <EditOutlined />
                         <a className="mr" onClick={this.showModal.bind(this)}>编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    跟进人员
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                    任务提醒
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>           
                        提醒方式
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              {/* 首要联系人 */}
              <Row justify="start">
                    <Col span={4} style={style}>首要联系人</Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
                    <Col span={4} style={style}></Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>    
                        尊称
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>          
                        联系人姓名
                    </Col>
                    <Col span={4} style={styleTow} className="text">
                            多行文本
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.c}>
                         <EditOutlined />
                         <a className="mr" onClick={this.showModal.bind(this)}>编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>
                    跟进人员
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                    任务提醒
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <Row justify="start">
                    <Col span={4} style={styleTow}>           
                    生日
                    </Col>
                    <Col span={4} style={styleTow.a} className="text">
                            特殊字段
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <UnorderedListOutlined />
                    </Col>
                    <Col span={4} style={styleTow.d}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                        <CheckSquareOutlined />
                    </Col>
                    <Col span={4} style={styleTow.b}>
                         <EditOutlined />
                         <a className="mr2" >编辑</a>
                         <DeleteOutlined />
                         <span>删除</span>
                    </Col>
              </Row>
              <div>

                  {/* 编辑的弹框 */}
              <Modal
                    title="新增区域"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <div className="message">
                    用于姓名、公司名称等文字信息的输入
                    </div>
                    <div>
                        <span>*显示名称:</span> 
                        <Input placeholder="最多显示10个字符" />
                    </div>
                    <div className="mb">
                        <span>*提示名称:</span> 
                        <Input placeholder="最多显示20个字符" />
                    </div>
                    <div className="mb2">
                        显示在输入框里面的提示用户输入的灰色文字
                    </div>
                    <div className="mb">
                        <span>*字段描述:</span> 
                        <Input placeholder="字段描述最长20个字符" />
                    </div>
                    <div className="mb2">
                          显示在输入框下方的描述文字
                    </div>
                    <div className="mb">
                        <span>*字段长度:</span> 
                        <Input placeholder="" />
                    </div>
                    <div className="mb2">
                          字段可输入的最大长度
                    </div>
                    <div className="mb">
                        <span>*默认值:</span> 
                        <Input placeholder="" />
                    </div>
                    <div className="mb">
                        <span>信息类型:</span>
                        <span>
                            <CheckCircleOutlined  className="span-icon" />
                            主要信息(可用于搜索)
                        </span>
                        <span>
                        <LoadingOutlined className="span-icon2" />
                            附加信息(减轻搜索引擎压力)
                        </span>
                    </div>
                    <div className="mb">
                        <span>是否查重:</span>
                        <LoadingOutlined className="span-icon2" />
                        <span>是</span>
                        <CheckCircleOutlined  className="span-icon" />
                        <span>否</span>
                    </div>
                </Modal>
                {/* 弹框结束 */}
              </div>
            </div>
        )
    }

}

export default serviceTow

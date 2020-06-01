//业务设置
import React,{component, Component} from 'react'

import '../css/no8.css'

import { FormOutlined ,DownCircleOutlined,DownSquareOutlined,PlusOutlined,CheckCircleOutlined} from '@ant-design/icons';
import { Row, Col } from 'antd';


let style = {
    background:'rgba(0,0,0,.03)',
    height:'46px',
    border:'1px solid #ccc',
    textAlign:'center',
    lineHeight:'46px',
    b:{
        border:'1px solid #ccc',
        textAlign:'center',
        lineHeight:'46px',
    }
}


class Text extends Component{


    click(){
        alert('数据保存成功')
    }

    render(){
        return(
            <div className='parent'>
                <div className='text-icon'>
                    <FormOutlined />
                    <span>业务参数</span>
                </div>
                <div className="content">
                    <p className="p1">公海规则设置</p>
                    <p className='p2'>
                    超过N天"未跟进"的客户，由系统定时划入公海
                    </p>
                    <p className="p3">
                    说明：从开启公海或获得客户（新增、转移、从公海抢到客户）开始，对客户和客户的商机、订单写跟进以及新增商机、订单都视为跟进了客户。
                    </p>
                    <div className="icon-text">
                        <span className="raduis-span"></span>不启用
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        <p>
                            <DownCircleOutlined  className='icon-children2' />
                            所有客户统一设置
                        </p>
                        <Row>
                            <Col span={3} style={style}>
                                客户类型
                            </Col>
                            <Col span={4} style={style}>
                                未跟进天数
                            </Col>
                            <Col span={8} style={style}>
                                划入公海时间
                            </Col>
                            <Col span={8} style={style}>
                                销售人员提醒时间
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} style={style.b}>
                                所有客户
                            </Col>
                            <Col span={4} style={style.b}>
                                超过
                                <span className="int-span">
                                    <span>30</span>
                                </span>天未跟进
                            </Col>
                            <Col span={8} style={style.b}>
                            系统会在每天  
                            <span className="int-span">
                                    <span>17:00</span>
                                </span>                   
                            将客户划入公海
                            </Col>
                            <Col span={8} style={style.b}>
                            并在划入公海前  
                            <span className="int-span">
                                    <span>1</span>
                            </span>  
                            天提醒销售人员及时跟进
                            </Col>
                        </Row>
                    </div>

                    <div className="icon-text">
                        <p>
                           <span className="spans"></span>
                            根据客户类型设置
                        </p>
                        <Row>
                            <Col span={3} style={style}>
                                客户类型
                            </Col>
                            <Col span={4} style={style}>
                                未跟进天数
                            </Col>
                            <Col span={8} style={style}>
                                划入公海时间
                            </Col>
                            <Col span={8} style={style}>
                                销售人员提醒时间
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} style={style.b}>
                                普通客户
                            </Col>
                            <Col span={4} style={style.b}>
                                超过
                                <span className="int-span">
                                    <span>60</span>
                                </span>天未跟进
                            </Col>
                            <Col span={8} style={style.b}>
                            系统会在每天  
                            <span className="int-span">
                                    <span>17:00</span>
                                </span>                   
                            将客户划入公海
                            </Col>
                            <Col span={8} style={style.b}>
                            并在划入公海前  
                            <span className="int-span">
                                    <span>1</span>
                            </span>  
                            天提醒销售人员及时跟进
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} style={style.b}>
                                重点客户
                            </Col>
                            <Col span={4} style={style.b}>
                                超过
                                <span className="int-span">
                                    <span>90</span>
                                </span>天未跟进
                            </Col>
                            <Col span={8} style={style.b}>
                            系统会在每天  
                            <span className="int-span">
                                    <span>17:00</span>
                                </span>                   
                            将客户划入公海
                            </Col>
                            <Col span={8} style={style.b}>
                            并在划入公海前  
                            <span className="int-span">
                                    <span>1</span>
                            </span>  
                            天提醒销售人员及时跟进
                            </Col>
                        </Row>
                    </div>
                    <div>
                    <p className='p2'>
                    超过N天"未跟进"的客户，由系统定时划入公海
                    </p>
                    <p className="p3">
                    说明：从开启公海或获得客户（新增、转移、从公海抢到客户）开始，对客户和客户的商机、订单写跟进以及新增商机、订单都视为跟进了客户。
                    </p>
                    
                    </div>
                    <div className="icon-text">
                    <span className="raduis-span"></span>不启用
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        <p>
                            <DownCircleOutlined  className='icon-children2' />
                            所有客户统一设置
                        </p>
                        <Row>
                            <Col span={3} style={style}>
                                客户类型
                            </Col>
                            <Col span={4} style={style}>
                                未跟进天数
                            </Col>
                            <Col span={8} style={style}>
                                划入公海时间
                            </Col>
                            <Col span={8} style={style}>
                                销售人员提醒时间
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} style={style.b}>
                                所有客户
                            </Col>
                            <Col span={4} style={style.b}>
                                超过
                                <span className="int-span">
                                    <span>30</span>
                                </span>天未跟进
                            </Col>
                            <Col span={8} style={style.b}>
                            系统会在每天  
                            <span className="int-span">
                                    <span>17:00</span>
                                </span>                   
                            将客户划入公海
                            </Col>
                            <Col span={8} style={style.b}>
                            并在划入公海前  
                            <span className="int-span">
                                    <span>1</span>
                            </span>  
                            天提醒销售人员及时跟进
                            </Col>
                        </Row>
                        <p>
                           <span className="spans"></span>
                            根据客户类型设置
                        </p>
                        <Row>
                            <Col span={3} style={style}>
                                客户类型
                            </Col>
                            <Col span={4} style={style}>
                                未跟进天数
                            </Col>
                            <Col span={8} style={style}>
                                划入公海时间
                            </Col>
                            <Col span={8} style={style}>
                                销售人员提醒时间
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} style={style.b}>
                                普通客户
                            </Col>
                            <Col span={4} style={style.b}>
                                超过
                                <span className="int-span">
                                    <span>60</span>
                                </span>天未跟进
                            </Col>
                            <Col span={8} style={style.b}>
                            系统会在每天  
                            <span className="int-span">
                                    <span>17:00</span>
                                </span>                   
                            将客户划入公海
                            </Col>
                            <Col span={8} style={style.b}>
                            并在划入公海前  
                            <span className="int-span">
                                    <span>1</span>
                            </span>  
                            天提醒销售人员及时跟进
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} style={style.b}>
                                重点客户
                            </Col>
                            <Col span={4} style={style.b}>
                                超过
                                <span className="int-span">
                                    <span>90</span>
                                </span>天未跟进
                            </Col>
                            <Col span={8} style={style.b}>
                            系统会在每天  
                            <span className="int-span">
                                    <span>17:00</span>
                                </span>                   
                            将客户划入公海
                            </Col>
                            <Col span={8} style={style.b}>
                            并在划入公海前  
                            <span className="int-span">
                                    <span>1</span>
                            </span>  
                            天提醒销售人员及时跟进
                            </Col>
                        </Row>
                    </div>
                    <div className="tt">
                        <p className="pp">公海中超过N天“未跟进”的客户，由系统定时转为垃圾客户</p>
                        <p className="pp2">
                        说明：从划入公海时间开始来计算客户多久未达到“跟进”状态。
                        </p>
                        <div className="icon-text">
                        <span className="raduis-span"></span>不启用
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        </div>
                       <div className="row">
                       <Row>
                        <Col span={3} style={style}>
                           客户类型
                        </Col>
                        <Col span={7} style={style}>
                             未跟进天数
                        </Col>
                        <Col span={14} style={style}>
                            划入垃圾客户时间
                        </Col>
                        </Row>
                        <Row>
                        <Col span={3} style={style.b}>
                          所有客户
                        </Col>
                        <Col span={7} style={style.b}>
                            超过  
                            <span className="int-span">
                                <span>30</span>
                            </span>  
                             未跟进
                        </Col>
                        <Col span={14} style={style.b}>
                           系统会在每天
                           <span className="int-span">
                                <span>17:00</span>
                            </span> 
                            将客户划入垃圾客户池
                        </Col>
                        </Row>
                       </div>
                    </div>
                    <div className='div'>
                        <p>客户领取限制</p>
                        <p>说明： 客户被转移或者系统定时划入公海后，前负责人在N天内不能领取。</p>
                        <div className="icon-text">
                        <span className="raduis-span"></span>不启用
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        <span>30天内不能领取同一个客户</span>
                        </div>
                    </div>
                    <div className="amount">
                        <span className='inline'></span>
                        <span className="span">客户数量限制</span>
                        <p style={{marginTop:'10px',marginLeft:'13px'}}>限制每个员工拥有的最大客户数</p>
                        <p style={{color:'#ccc',marginLeft:'13px'}}>• 当员工拥有客户数超过规定上限时，新增客户无法成功。</p>
                        <p style={{color:'#ccc',marginLeft:'13px'}}>• 如果在设置最大客户数前，员工所拥有客户数已超过上限，则原有客户不会影响，但是该员工无法再继续添加新客户。。</p>
                        <div className="icon-text">
                        <span className="raduis-span" style={{marginLeft:'13px'}}></span>不启用
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        <span> <DownSquareOutlined  style={{color:"#1E90FF",marginLeft:'20px'}} />
                        此规则仅限制“未成交”客户</span>
                        </div>
                        <div className="icon-text">
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        <span>按员工设置不同的客户数上限</span>
                        </div>

                        <div style={{marginTop:'20px'}}>
                            <Row>
                            <Col span={10} style={style.b}>
                            每个员工拥有的最大客户数为
                                <span className="int-span">
                                    <span>50</span>
                                </span>  
                                个
                            </Col>
                            <Col span={14} style={style.b}>
                            此规则针对：所有员工（特殊员工除外）
                            </Col>
                            </Row>
                            <Row>
                            <Col span={10} style={style.b}>
                            每个员工拥有的最大客户数为
                                <span className="int-span">
                                    <span>100</span>
                                </span>  
                                个
                            </Col>
                            <Col span={14} style={style.b}>
                            此规则针对：所有员工（特殊员工除外）
                            </Col>
                            </Row>
                            <Row>
                            <Col span={10} style={style.b}>
                            每个员工拥有的最大客户数为
                                <span className="int-span">
                                    <span>150</span>
                                </span>  
                                个
                            </Col>
                            <Col span={14} style={style.b}>
                            此规则针对：所有员工（特殊员工除外）
                            </Col>
                            </Row>
                        </div>
                        <div className="divs">
                        <PlusOutlined />新增特殊员工
                        </div>
                        <div className="aa">
                            <span className="ss"></span>根据客户类型分别设置客户数上限
                            <div style={{marginTop:'20px'}}>
                            <Row>
                            <Col span={10} style={style.b}>
                            每个员工拥有的最大客户数为
                                <span className="int-span">
                                    <span>50</span>
                                </span>  
                                个
                            </Col>
                            <Col span={14} style={style.b}>
                            此规则针对：普通员工
                            </Col>
                            </Row>
                            <Row>
                            <Col span={10} style={style.b}>
                            每个员工拥有的最大客户数为
                                <span className="int-span">
                                    <span>50</span>
                                </span>  
                                个
                            </Col>
                            <Col span={14} style={style.b}>
                            此规则针对：普通员工
                            </Col>
                            </Row>
                            </div>
                        </div>
                    </div>
                    <div className="bb">
                       <span className="ss"></span> 
                       <span className="text">客户保护设置</span>
                       <p style={{marginLeft:'13px',marginTop:'10px'}}>客户保护期时长设置</p>
                       <p style={{marginLeft:'13px',marginTop:'10px',color:'#ccc'}}>
                       说明： 保护期内客户不可进行移入公海、转移、删除等操作，保护期开始时间从客户获取时间开始计算。
                       </p>
                       <div className="icon-text">
                       <span className="raduis-span"></span>不启用
                        <span>
                             <DownCircleOutlined  className='icon-children' />
                        </span>
                        启用
                        <span>客户保护期时长30天</span>
                       </div>
                    </div>
                    <div className="bottom-inline"></div>
                    <div className="btn" onClick={this.click.bind(this)}>
                    <CheckCircleOutlined /> 保存
                    </div>

                </div>
            </div>
        )
    }
}


export default Text
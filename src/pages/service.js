import React,{Component} from 'react'
import {HashRouter as Router,Route,Switch, Link} from'react-router-dom'
 
import '../css/no9.css'
import ServiceTow from './serviceTow'

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { Input } from 'antd'


//路由对应的模板
class Index extends Component{

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
            <div>
                <div className="prent">
                    <div className="pre">
                        <span>客户</span>
                        <span>拖拽排序可以调整区块和字段显示位置，特殊字段部分设置选项为灰色，不能进行修改</span>
                    </div>
                    {/* 弹框部分 */}
                    <div className='div'>
                        
                        <div onClick={this.showModal.bind(this)}>
                            <PlusOutlined></PlusOutlined>
                            新增区块
                        </div>
                        <div onClick={this.showModal.bind(this)}>
                            <PlusOutlined />
                            新增字段
                        </div>
                        <Modal
                            title="新增区域"
                            visible={this.state.visible}
                            onOk={this.handleOk.bind(this)}
                            onCancel={this.handleCancel.bind(this)}
                        >
                          *区块名称 <Input placeholder="Basic usage" />
                        </Modal>
                    </div>
                    {/* 弹框结束 */}
                </div>
               
            </div>
        )
    }
}
//字段管理页面的路由
class Service extends Component{

    constructor(){
        super()
    }

   componentDidUpdate(){
   
       console.log(location)
   }
    
    render(){
        return(
            <div className="no9">
                <div className="a">
                    <Link to='/no9' style={{color:location.hash == '#/no9'?'#1E90FF':''}}>客户</Link>
                    <Link to={{pathname:'/no9/a',state:{id:10}}} style={{color:location.hash == '#/no9/a'?'#1E90FF':''}}>线索</Link>
                    <Link to='/no9/b' style={{color:location.hash == '#/no9/b'?'#1E90FF':''}}>商机</Link>
                    <Link to='/no9/c' style={{color:location.hash == '#/no9/c'?'#1E90FF':''}}>联系人</Link>
                    <Link to='/no9/d' style={{color:location.hash == '#/no9/d'?'#1E90FF':''}}>订单</Link>
                    <Link to='/no9/e' style={{color:location.hash == '#/no9/e'?'#1E90FF':''}}>产品</Link>
                    <Link to='/no9/f' style={{color:location.hash == '#/no9/f'?'#1E90FF':''}}>汇款</Link>
                    <Link to='/no9/g' style={{color:location.hash == '#/no9/g'?'#1E90FF':''}}>发票</Link>
                    <Link to='/no9/h' style={{color:location.hash == '#/no9/h'?'#1E90FF':''}}>费用</Link>
                    <Link to='/no9/y' style={{color:location.hash == '#/no9/y'?'#1E90FF':''}}>工具</Link>

                </div>
                <div>
                    <Route path='/no9'exact component={Index}/>
                    <Route path='/no9/a' component={Index} />
                    <Route path='/no9/b' component={Index} />
                    <Route path='/no9/c' component={Index} />
                    <Route path='/no9/d' component={Index} />
                    <Route path='/no9/e' component={Index} />
                    <Route path='/no9/f' component={Index} />
                    <Route path='/no9/g' component={Index} />
                    <Route path='/no9/h' component={Index} />
                    <Route path='/no9/y' component={Index} />
                </div>
                {/* 路由对应模板的主要内容部分 */}
                <ServiceTow/>
            </div>
        )
    }

}

export default Service


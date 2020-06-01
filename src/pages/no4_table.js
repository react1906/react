import React from 'react'
import { Table ,Button,Tooltip,Modal,Input,Popconfirm,notification} from 'antd';
import { PlusCircleOutlined, DeleteFilled,QuestionCircleFilled,CloseOutlined,EditFilled,MinusCircleFilled,StarFilled,CheckCircleOutlined,CopyFilled} from '@ant-design/icons';


class Buttons extends React.Component{
    constructor(){
        super()
    }
    openNotification () {
        notification.open({
          message: '职务复制成功',
          description:
            '职务复制成功',
          icon: <CheckCircleOutlined style={{ color: '#4BD863' }} />,
        })
    }
    render(){
        return (
            <Button type="link" onClick={this.openNotification.bind(this)}>
                <CopyFilled />复制职务
            </Button>
        )
    }
}


class Tables extends React.Component{
    constructor(){
        super()
        this.state={
            data:[{
                key:'1',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'2',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'3',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'4',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'5',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'6',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'7',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'8',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'9',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'10',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'11',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'12',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'13',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'14',
                name:'销售总监',
                num:'30',
                value:'',
                time:'2019-08-25 14:54',
                operation:''
            }],
            visible: false
        }
        this.columns=[{
            title:'职务名称',
            dataIndex:'name'
        },{
            title:'成员数量',
            dataIndex:'num',
            render: text => <a href='#/no5'>{text}</a>
        },{
            title:'职务描述',
            dataIndex:'value',
            render:value=>{return value==''?'暂无相关描述':value}
        },{
            title:'更新时间',
            dataIndex:'time'
        },{
            title:'操作',
            dataIndex:'operation',
            render:()=>{
                return (
                    <>
                        <Button type="link" onClick={this.showModal.bind(this)}><PlusCircleOutlined />添加人员</Button>
                        
                        <Button type="link"><EditFilled />编辑职务</Button>
                        <Button type="link"><StarFilled />设置权限</Button>
                        <Popconfirm title="确认停用吗？" okText="Yes" cancelText="No">
                            <a href="#"><MinusCircleFilled />停用服务</a>
                        </Popconfirm>
                        <Buttons/>
                        <Popconfirm title="确认删除吗？" okText="Yes" cancelText="No">
                            <a href="#"><DeleteFilled />删除职务</a>
                        </Popconfirm>
                        
                        <Tooltip title="成员数量为0时才能执行删除操作">
                            <QuestionCircleFilled style={{color:'blue',paddingLeft:'10px'}}/>
                        </Tooltip>
                    </>
                )
            }
        }]
    }
    showModal () {
        this.setState({
          visible: true,
        });
    };
    
    hideModal () {
        this.setState({
            visible: false,
        });
    };
    render(){
        return (
            <>
                <Table
                    columns={this.columns}
                    dataSource={this.state.data}
                    bordered
                    pagination={{
                        pageSize:this.state.data.length,
                        total:620
                    }}
                    style={{marginTop:'60px'}}
                    />
                    
                <Modal
                    title="新增部门"
                    visible={this.state.visible}
                    onOk={this.hideModal.bind(this)}
                    onCancel={this.hideModal.bind(this)}
                    okText="保存"
                    cancelText="取消"
                    style={{zIndex:'9999'}}
                >
                    <div style={{marginBottom:'15px'}}>
                        职务名称:<Input placeholder="销售经理" />
                    </div>
                    <div style={{marginBottom:'15px'}}>
                        添加成员:<span style={{width:66,height:25,border:'1px solid rgb(231, 225, 225)',display:'inline-block',fontSize:'14px',textAlign:'center',lineHeight:'20px',marginRight:'10px',marginLeft:'15px'}}>李小明<CloseOutlined style={{marginLeft:'5px',color:'#000'}}/></span><span style={{width:66,height:25,border:'1px solid rgb(231, 225, 225)',display:'inline-block',fontSize:'14px',textAlign:'center',lineHeight:'20px'}}>李小红<CloseOutlined style={{marginLeft:'5px',color:'#000'}}/></span>
                    </div>
                    <div>
                        <p style={{fontSize:'12px',color:'rgb(255, 106, 0)',textAlign:'center'}}>如果该员工已被分配其它职务，添加后员工将被修改职务</p>
                    </div>
                </Modal>
            </>
        )
    }
}

export default Tables
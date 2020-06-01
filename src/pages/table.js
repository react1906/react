import React from 'react'
import { Table ,Switch,Button,Tooltip,Modal,Input,Popconfirm} from 'antd';
import { EditFilled, DeleteFilled,QuestionCircleFilled,CloseOutlined} from '@ant-design/icons';
const { TextArea } = Input;

class Tables extends React.Component{
    constructor(){
        super()
        this.state={
            data:[{
                key:'1',
                name:'环保局',
                num:'30',
                m_name:'姚小涛',
                value:'环境卫生管理',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'2',
                name:'劳动局',
                num:'30',
                m_name:'张小庆',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'3',
                name:'民政局',
                num:'30',
                m_name:'傅小杰',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'4',
                name:'司法局',
                num:'30',
                m_name:'杨小巍',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'5',
                name:'执法局',
                num:'30',
                m_name:'张小钉',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'6',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'7',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'8',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'9',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'10',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'11',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'12',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'13',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'14',
                name:'财政局',
                num:'30',
                m_name:'未知',
                value:'',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            }],
            visible: false
        }
        this.columns=[{
            title:'部门名称',
            dataIndex:'name'
        },{
            title:'成员数量',
            dataIndex:'num',
            render:num=>{return <a href='#/no5'>{num}</a>}
        },{
            title:'负责人员',
            dataIndex:'m_name'
        },{
            title:'部门描述',
            dataIndex:'value',
            render:value=>{return value==''?'暂无相关描述':value}
        },{
            title:'启用',
            dataIndex:'add',
            render:add=>{return add=='true'?<Switch defaultChecked/>:<Switch defaultChecked={false}/>}
        },{
            title:'更新时间',
            dataIndex:'time'
        },{
            title:'操作',
            dataIndex:'operation',
            render:()=>{
                return (
                    <>
                        <Button type="link" style={{width:70}} onClick={this.showModal.bind(this)}><EditFilled />编辑</Button>
                        <Popconfirm title="确认删除吗？" okText="Yes" cancelText="No">
                            <a href="#"><DeleteFilled />删除</a>
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
                        上级部门:<Input placeholder="选择部门" />
                    </div>
                    <div style={{marginBottom:'15px'}}>
                        部门名称:<Input placeholder="选择部门" />
                    </div>
                    <div style={{marginBottom:'15px'}}>
                        负责人员:<span style={{width:66,height:25,border:'1px solid rgb(231, 225, 225)',display:'inline-block',fontSize:'14px',textAlign:'center',lineHeight:'20px',marginRight:'10px',marginLeft:'15px'}}>李小明<CloseOutlined style={{marginLeft:'5px',color:'#000'}}/></span><span style={{width:66,height:25,border:'1px solid rgb(231, 225, 225)',display:'inline-block',fontSize:'14px',textAlign:'center',lineHeight:'20px'}}>李小红<CloseOutlined style={{marginLeft:'5px',color:'#000'}}/></span>
                    </div>
                    <div>
                        部门描述:<TextArea placeholder="请输入描述信息" allowClear />
                    </div>
                </Modal>
                
            </>
        )
    }
}

export default Tables
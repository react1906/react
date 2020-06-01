import React from 'react'
import {HashRouter as Router,Link} from 'react-router-dom'
import { Table ,Switch,Button,Modal,Input,Popconfirm} from 'antd';
import { EditFilled, DeleteFilled,CloseOutlined} from '@ant-design/icons';
const { TextArea } = Input;


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
};



class Tables extends React.Component{
    constructor(){
        super()
        this.state={
            data:[{
                key:'1',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'2',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'3',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'4',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'5',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'6',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'7',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'8',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'9',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'10',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'11',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'12',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'13',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            },{
                key:'14',
                name:'产品名称',
                num:'CP001',
                m_name:'¥ 10,000.00',
                value:'套',
                add:'true',
                time:'2019-08-25 14:54',
                operation:''
            }],
            visible: false
        }
        this.columns=[{
            title:'产品名称',
            dataIndex:'name',
            render: text => {
                return (
                    <>
                        <Router>
                            <Link to='/chan'>{text}</Link>
                        </Router>
                    </>
                )
            }
        },{
            title:'产品编号',
            dataIndex:'num'
        },{
            title:'标椎单价',
            dataIndex:'m_name'
        },{
            title:'产品规格',
            dataIndex:'value',
            render:value=>{return value==''?'暂无相关描述':value}
        },{
            title:'上架状态',
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
                    rowSelection={{
                        ...rowSelection,
                    }}
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
                    <div>
                        部门描述:<TextArea placeholder="请输入描述信息" allowClear />
                    </div>
                </Modal>
            </>
        )
    }
}

export default Tables
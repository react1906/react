import React from 'react'
import { Table ,Button,Popconfirm} from 'antd';
import { DeleteFilled,RightCircleOutlined,DownloadOutlined} from '@ant-design/icons';



class Tables extends React.Component{
    constructor(){
        super()
        this.state={
            data:[{
                key:'1',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'2',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'3',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'4',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'5',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'6',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'7',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'8',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'9',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'10',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            },{
                key:'11',
                time:'2019-3-21 10:23',
                text:'2018年销售数据',
                value:'PDF',
                num:'100KB',
                man:'赵小刚',
                title:'',
                operation:''
            }],
            visible: false
        }
        this.columns=[{
            title:'上传时间',
            dataIndex:'time',
        },{
            title:'附件名称',
            dataIndex:'text',
        },{
            title:'附件格式',
            dataIndex:'value',
        },{
            title:'文件大小',
            dataIndex:'num'
        },{
            title:'上传人员',
            dataIndex:'man'
        },{
            title:'备注信息',
            dataIndex:'title',
            render:value=>{return value==''?'暂无备注信息':value}
        },{
            title:'操作',
            dataIndex:'operation',
            render:()=>{
                return (
                    <>
                        <Button type="link"><RightCircleOutlined />预览</Button>
                        <Button type="link"><DownloadOutlined />下载</Button>
                        <Popconfirm title="确认删除吗？" okText="Yes" cancelText="No">
                            <a href="#"><DeleteFilled />删除职务</a>
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
            <Table
                columns={this.columns}
                dataSource={this.state.data}
                bordered
                pagination={{
                    pageSize:this.state.data.length,
                    total:510
                }}
                style={{marginTop:'-50px'}}
            />
        )
    }
}

export default Tables
import React from 'react'
import { Table,Checkbox} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import Tancukuang from './tancukuang'
import Tancukuang1 from './tancukuang1'
const No10to = ({propsdata}) =>{
  console.log(propsdata)
  const columns = [
    {
      title: '选项值名',
      dataIndex: 'name',
      key: 'name',
      width:"55%"
    },
    {
      title: '排序',
      dataIndex: 'age',
      key: 'age',
      render:p =><div ><MenuOutlined /></div> ,
      width:"20%",
    },
    {
      title:'启用',
      dataIndex:'qiyong',
      key:'qiyong',
      render:input =><Checkbox></Checkbox>,
      width:"12.5%",
   },
    {
      title: '操作',
      dataIndex: 'address',
      key: 'address',
      render:(a,b) => {
          return (
              <div><Tancukuang/></div>
          )
      },
      width:"12.5%",
    }
  ];
    return (
        <div>
          {propsdata.map((item,index)=>{
            return (
              <div key={index}>
                <div style={{color:"#666",lineHeight:"70px",overflowL:"hidden"}}>
                    <span style={{display:"inline-block"}}><i style={{display:"inline-block",pddingTop:"20px", background:"#0079FE",width:"4px",height:"20px",marginRight:"10px"}}></i>{item.title1}</span>
                    <Tancukuang1/>
                </div>
                <Table  columns={columns} style={{color:"gray",fontSize:"12px"}} bordered dataSource={item.arr2}/>
              </div>
            )
          })}
            
        </div>
    )
}


export default No10to


import React from 'react'
import {
HddOutlined
} from '@ant-design/icons';
class No10 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><HddOutlined style={{marginRight:'10px'}}/>字典管理</p>
                </div>
            </div>
        )
    }
}
export default No10
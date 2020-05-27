import React from 'react'
import {
UserAddOutlined
} from '@ant-design/icons';
class No5 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><UserAddOutlined style={{marginRight:'10px'}}/>员工管理</p>
                </div>
            </div>
        )
    }
}
export default No5
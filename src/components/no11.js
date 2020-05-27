import React from 'react'
import {
ScheduleOutlined
} from '@ant-design/icons';
class No11 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><ScheduleOutlined style={{marginRight:'10px'}}/>/>日志管理</p>
                </div>
            </div>
        )
    }
}
export default No11
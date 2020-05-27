import React from 'react'
import {
SettingOutlined,
} from '@ant-design/icons';

class No1 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><SettingOutlined style={{marginRight:'10px'}}/>管理中心</p>
                </div>
            </div> 
        )
    }
}
export default No1
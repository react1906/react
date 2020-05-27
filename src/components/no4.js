import React from 'react'
import {
UserSwitchOutlined
} from '@ant-design/icons';
class No4 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><UserSwitchOutlined style={{marginRight:'10px'}}/>职务权限</p>
                </div>
            </div>
        )
    }
}
export default No4
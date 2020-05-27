import React from 'react'

import {
ProfileOutlined
} from '@ant-design/icons';
class No9 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><ProfileOutlined style={{marginRight:'10px'}}/>字段设置</p>
                </div>
            </div>
        )
    }
}
export default No9
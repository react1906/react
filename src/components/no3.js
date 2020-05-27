import React from 'react'
import {
ClusterOutlined
} from '@ant-design/icons';
class No3 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><ClusterOutlined style={{marginRight:'10px'}}/>组织架构</p>
                </div>
            </div>
        )
    }
}
export default No3
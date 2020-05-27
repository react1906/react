import React from 'react'
import {
WalletOutlined
} from '@ant-design/icons';
class No6 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><WalletOutlined style={{marginRight:'10px'}}/>模块管理</p>
                </div>
            </div>
        )
    }
}
export default No6
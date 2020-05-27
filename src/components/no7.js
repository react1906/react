import React from 'react'
import {
FileExclamationOutlined
} from '@ant-design/icons';
class No7 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><FileExclamationOutlined style={{marginRight:'10px'}}/>产品管理</p>
                </div>
            </div>
        )
    }
}
export default No7
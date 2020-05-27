import React from 'react'
import {
CopyOutlined
} from '@ant-design/icons';
class No2 extends React.Component{
    render(){
        return (
            <div>
                <div style={{width:'100%',height:'70px',boxShadow: '1px 1px 10px #ccc',lineHeight:'70px'}}>
                    <p className='no_p'><CopyOutlined style={{marginRight:'10px'}}/>企业设置</p>
                </div>
            </div>
        )
    }
}
export default No2
import React from 'react'



import {
    ClockCircleOutlined,
    UserAddOutlined,
    SearchOutlined,
    RedoOutlined,
    PlusOutlined,
    UploadOutlined,
    ProfileOutlined,
    RightCircleFilled,
    DeleteFilled,
} from '@ant-design/icons';

import {
    Modal, Input, Select, Radio, Form, Button,
    Upload, message, Pagination, notification
} from 'antd';

const { Option, OptGroup } = Select;



//上传
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class Shan extends React.Component {

    render() {
        return (
            <Upload {...props}>
                <Button>
                    <UploadOutlined /> 选择附件
            </Button>
            </Upload>
        )
    }
}



const { TextArea } = Input;

import '../css/xi.css'


class In extends React.Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Select defaultValue="选择栏目" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                <OptGroup label="Manager">
                    <Option value="选择栏目">选择栏目</Option>
                    <Option value="企业动态">企业动态</Option>
                </OptGroup>
            </Select>
        )
    }
}



class List extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 1,
            visible: false,
            visib: false,
            ModalText: '是否确定删除对应的记录？',
            confirmLoading: false,
            content: [
                {
                    id: 1,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
                {
                    id: 2,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
                {
                    id: 3,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
                {
                    id: 4,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
                {
                    id: 5,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
                {
                    id: 6,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
                {
                    id: 7,
                    text: '如何建立良好的客户关系',
                    name: '李小明',
                    time: '2019-04-10 09:00',
                    content: '1234',
                    qu: '全体成员',
                    ci: 999,
                },
            ],
        }
    }
    showModa() {
        this.setState({
            visib: true,
        });
    };
    handleO() {
        this.setState({
            ModalText: '删除中',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visib: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCance() {
        this.setState({
            visib: false,
        });
    };

    showModal() {
        this.setState({
            visible: true,
        });
    };
    handleOk() {
        this.setState({
            visible: false,
        });
    };

    handleCancel() {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visib, confirmLoading, ModalText } = this.state;
        return (
            <div className='asc'>
                <div>
                    <div style={{ width: '60px' }}></div>
                    <div style={{ width: '310px' }}>公告提示</div>
                    <div style={{ width: '150px' }}>发布人员</div>
                    <div style={{ width: '198px' }}>发布时间</div>
                    <div style={{ width: '200px' }}>所属栏目</div>
                    <div style={{ width: '200px' }}>接收人员</div>
                    <div style={{ width: '200px' }}>浏览人数</div>
                    <div style={{ width: '200px' }}>操作</div>
                </div>
                {this.state.content.map(con => {
                    return (
                        <div key={con.id}>
                            <div style={{ width: '60px' }}></div>
                            <div style={{ width: '310px', color: "#0079FE" }} onClick={this.showModal.bind(this)}>{con.text}</div>
                            <div style={{ width: '150px' }}>{con.name}</div>
                            <div style={{ width: '198px' }}>{con.time}</div>
                            <div style={{ width: '200px' }}>内部分享</div>
                            <div style={{ width: '200px' }}>{con.qu}</div>
                            <div style={{ width: '200px', color: '#0079FE' }} >{con.ci}</div>
                            <div style={{ width: '200px', display: 'flex' }}>
                                <div style={{ paddingLeft: '5px', paddingRight: '5px', color: "#0079FE" }} onClick={this.showModal.bind(this)}>
                                    <RightCircleFilled />
                                    详情
                                        </div>
                                <div style={{ paddingLeft: '5px', paddingRight: '5px', color: "#0079FE" }} onClick={this.showModa.bind(this)}>
                                    <DeleteFilled />
                                    删除
                                </div>
                            </div>
                        </div>
                    )
                })}
               
                <div>
                <Modal
                    title="确定提示"
                    visible={visib}
                    onOk={this.handleO.bind(this)}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCance.bind(this)}
                >
                    <p>{ModalText}</p>
                </Modal>
                   <Modal
                        title="公告详情"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        className='bnm-d'
                    >
                        <div className='actl-l'>
                            <div>
                                <h2>如何建立良好的客户关系</h2>
                            </div>
                            <div className='actl-f'>
                                <div>发布人员:李小明</div>
                                <div>发布时间:2019-04-10 09:00</div>
                                <div>接受成员:全体成员</div>
                                <div>浏览次数:999</div>
                                <div>查看浏览记录</div>
                            </div>
                            <div className='actl-t'>
                                <div>客户关系长期持久，源于让客户感受到价值和重要，是非常有利可图的。满足并保留您的客户群，确保未来获得丰厚的收入和利润。口碑也是强大的力量，忠诚的顾客会把你推荐给别人。通过提供优质的服务，保持联系并建立客户关系，改善和维护客户关系。</div>
                                <div>让顾客感到自己受到了重视从而建立持久的客户关系，能为你带来丰厚的回报。让顾客满意并维持好客户基数能为将来的收入和利润提供重要的保障。口碑也是一个杀手锏，忠诚的顾客会向其他人推荐你。所以你需要通过提供优质的服务，持续的客户沟通及建立良好的客户关系来改善和维持客户关系。</div>
                                <div>把重点放在质量上。赢得忠实客户和商业的最好方式是提供比竞争对手更高质量的产品或服务。其他策略只是为了保留客户已经对您的产品质量印象深刻。不断优化您的产品，确保它们尽可能接近完美。关注质量将导致更多的建议，重复销售和品牌的忠诚度比任何其他战略。因此，首先要确保在这方面的客户保留。</div>
                                <div>重视产品和服务质量。赢得忠诚的顾客和订单的最佳方式就是提供比竞争对手更加优质的产品质量和服务。其他的策略只是帮助维持已经被产品和服务吸引的现有客户。要不断改善服务，确保它们总在向完美靠近。专注于产品的质量会比其他策略为你带来更多的老客户推荐，回购以及品牌忠诚度。所以，一定要在维护老客户方面进行努力。</div>
                                <div>即使是最高质量的服务或产品也不会导致高销售额，如果只有几个客户实际上获得这样的质量水平。一致性是建立质量和可靠性的声誉的关键，这将导致客户的忠诚度。努力确保与客户的每一个接触点，从店内互动到在线响应，都代表着您的品牌和您提供的质量水平。这也适用于可能需要过度测试或质量控制以确保一致性的产品。</div>
                                <div>即使是最优质的服务品质，如果仅有几个客户获得了这种级别的服务品质，也不会带来高销售额。始终如一的高品质服务和产品是带来良好声誉和客户忠诚度的关键所在。不论在店内销售还是在线答疑，每次接触客户时的表现都代表你所追求的品牌价值和服务水准。对于需要进行大量测试或者质量管控才能维持一贯水准的产品来说，这点同样适用。</div>
                            </div>

                            <div>
                                <div>评论记录</div>
                                <div className='bh'>
                                    <div className='bg'>
                                        <div>
                                            李小明 2019-04-10 09:00
                                    </div>
                                        <div>x</div>
                                    </div>
                                    <div>非常不错对我们的工作有价值</div>
                                </div>
                            </div>
                            <div className='put'>
                                <div><input type="text" placeholder="请输入评论内容" />  </div>
                                <div>发布</div>
                            </div>
                        </div>

                    </Modal>
                </div>
            </div>
        )
    }
}
export default List
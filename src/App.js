import React from 'react'
import Sider from'./pages/Menus'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import No1 from'./components/no1'
import No2 from'./components/no2'
import No3 from'./components/no3'
import No4 from'./components/no4'
import No5 from'./components/no5'
import No6 from'./components/no6'
import No7 from'./components/no7'
import No8 from'./components/no8'
import No9 from'./components/no9'
import No10 from'./components/no10'
import No11 from'./components/no11'
import Chan from'./components/chan'
import Xi from './components/xitong'

import { Layout} from 'antd'
const { Header, Content, Footer} = Layout;


class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Layout>
                <Sider/>
                <Router>
                    <Switch>
                        <Route path='/' exact component={No1}/>
                        <Route path='/no2' component={No2}/>
                        <Route path='/no3' component={No3}/>
                        <Route path='/no4' component={No4}/>
                        <Route path='/no5' component={No5}/>
                        <Route path='/no6' component={No6}/>
                        <Route path='/no7' component={No7}/>
                        <Route path='/no8' component={No8}/>
                        <Route path='/no9' component={No9}/>
                        <Route path='/no10' component={No10}/>
                        <Route path='/no11' component={No11}/>
                        <Route path='/chan' component={Chan}/>
                        <Route path='/xi' component={Xi}/>
                    </Switch>
                </Router>
            </Layout>
        )
    }
}

export default App
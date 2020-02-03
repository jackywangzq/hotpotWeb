import {Input} from 'antd';
import axios from '../axios/axios'
// import Error from './error'
// import Success from './success'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter,Link} from 'react-router-dom'
export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.isLogin = false;
        this.login = this.login.bind(this)
    }

    login(){
        let token = ''
        let this_ = this
        let data = {
            username:"wangziqi",
            password:"0000000"
        }
        axios('/login','post',5000,data).then(function(response){
            console.log(response)
            if(response.data.token){
                console.log(1)
                window.localStorage.setItem("token",response.data.token);
                this_.props.history.push({pathname:'/index'})
            }
        })
    }

    logout(){
        window.localStorage.removeItem("token");
    }
    
    render() {
        return (
            <div className="wrapper_login">
                <div>
                    <Input.Password placeholder="输入用户名" />
                    <Input.Password placeholder="输入密码" />
                    <a onClick={this.login}>登陆</a>
                    <a onClick={this.logout}>注销</a>
                <ul>
                    <li>
                        <Link to={'/login/success'}>success</Link>
                    </li>
                    <li>
                        <Link to={'/login/error'}>error</Link>
                    </li>
                    <li>
                        <Link to={'/index'}>index</Link>
                    </li>
                    <li onClick={()=>{
                    console.log("返回主页")
                    this.props.history.push({pathname:'/index'})
                    }}>
                        返回主页
                    </li>
                </ul>
                <Switch>
                    <Route path={'/login/success'}>success</Route>
                    <Route path={'/login/error'}>error</Route>
                </Switch>
                </div>
            </div>
        
        )
    }
}
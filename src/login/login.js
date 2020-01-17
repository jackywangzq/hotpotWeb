import {Input} from 'antd';
import axios from 'axios'
import Error from './error'
import Success from './success'
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
        axios.get("http://106.52.159.25:80/login")
            .then((response)=> {
                                token =response.data
                                console.log(response) 
                                window.localStorage.setItem("token",token);
                                console.log(window.localStorage.getItem('token'))
                                })
            .catch(function (error) {
                console.log(error);
            })
        setTimeout(() => {
            if(!token){
                 this.props.history.push({pathname:'/main'})
            }  
            else{
                this.props.history.push({pathname:'/login'})
            }
         
        }, 1000);
        if(!this.isLogin){
            console.log(1)
            this.props.history.push({pathname:'/login',state : { id : '111' }})
        }
        else{
            this.props.history.push({pathname:'/main'})
        }
        
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
                    <div className="child-router">
                        <Route path={`${this.props.match.path}/error`} component={Error} />
                        <Route path={`${this.props.match.path}/Success`} component={Success} />
                    </div>
                </div>
            </div>
        
        )
    }
}
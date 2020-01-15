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
        if(!this.isLogin){
            console.log(1)
            this.props.history.push({pathname:'/login',state : { id : '111' }})
        }
        else{
            this.props.history.push({pathname:'/main'})
        }
        
    }
    render() {
        return (
            <div>
                <Link to="/login/success">1</Link>
                <Link to="/login/error">2</Link>
                <a onClick={this.login}>main</a>
                 123
                  {this.props.children}
                  <div className="child-router">
                    <Route path={`${this.props.match.path}/error`} component={Error} />
                    <Route path={`${this.props.match.path}/Success`} component={Success} />
                </div>

<div>
                    
                 </div>
            </div>
        
        )
    }
}
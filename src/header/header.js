import React from 'react'
import './header.scss';

export default class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render(){
        return (<div className="wrapper_header">
                    <div>
                        <a href="#" className="logo">
                            <span></span>
                            <b>麻辣小厨</b>
                        </a>
                        <div className="menu">
                            <span><a href="#">首页</a></span>
                            <span><a href="#">优惠券</a></span>
                            <span><a href="#">找餐厅</a></span>
                            <span><a href="#">小知识</a></span>
                        </div>
                    </div>
                </div>
        )
    }
    
}
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
                    <div className="content">
                            {/* <span></span> */}
                            美味小厨
                    </div>
                </div>
        )
    }
    
}
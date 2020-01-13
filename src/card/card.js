import React from 'react'
import './card.scss';

export default class card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starNum: [0,0,0,0,0],
            clicked: 0
        };
        this.score = 0;
        this.clicked = 0;
        this.on = "visible";
        this.off = "hidden";
        this.star_on ="#dd2727";
        this.star_off = "#FFFFFF";
        this.skin = this.skin.bind(this);
        this.scoreValue = this.scoreValue.bind(this);
        this.scoreValueOver =this.scoreValueOver.bind(this);
        this.scoreValueOut =this.scoreValueOut.bind(this);
        this.id = this.props.id;
    }

    componentDidMount() {
        let random = Math.floor(Math.random()*10)-1
        if(random<0){
            random = 0
        }
        let rgb = document.querySelectorAll(".color span")[random].style.backgroundColor
            let color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
            let hex = "#";
            for (let i = 0; i < 3; i++) {
                // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
                // 'color[i]' 是数组，要转换成字符串.
                // 如果结果是一位数，就在前面补零。例如： A变成0A
                hex += ("0" + Number(color[i]).toString(16)).slice(-2);
            }
            console.log(hex)
            // console.log(document.getElementById(this.id))
            document.getElementById(this.id).style.backgroundColor = hex

  }

    scoreValueOut = function(e){
        console.log(this.clicked)
        if(!this.clicked){
            this.setState({
                starNum: [0,0,0,0,0]
            })
        }
        console.log(this.state.starNum)
    }

    scoreValueOver = function(e){
        console.log(this.state.starNum)
        console.log(e.currentTarget.getAttribute("data-index"))
        if(e.currentTarget.getAttribute("data-index")<=1){
            this.star_on ="#737373"
            console.log("#737373")
        }
        else if(e.currentTarget.getAttribute("data-index")<4){
            this.star_on ="#fab54d"
            console.log("#fab54d")
        }
        else{
            this.star_on ="#dd2727"
            console.log("#dd2727")
        }
        for(let i=0; i<5; i++){
            if(i<=e.currentTarget.getAttribute("data-index")){
                this.state.starNum[i]= 1
            }
            else{
                this.state.starNum[i]= 0
            }
        }
        console.log(this.clicked)
        if(this.clicked){
            return
        }
        this.setState({
            starNum: this.state.starNum
        })
    }

    scoreValue = function(e){
        this.clicked = 1;
        this.setState({
            starNum: this.state.starNum
        })
        this.score = e.currentTarget.getAttribute("data-index")
        console.log(this.score)
    }
    
    skin = function(e){
        let  polyline_length = document.getElementsByClassName("color")[0].getElementsByTagName("polyline").length;
        console.log(polyline_length)
        let j=0
        let num = 0
        for (j; j<polyline_length; j++){
            if(j==e.target.getAttribute("data-index")){
                num = j+(parseInt(this.id)-1)*8
                document.getElementsByTagName("polyline")[num].setAttribute("visibility","visible")
            }
            else{
                num = j+(parseInt(this.id)-1)*8
                document.getElementsByTagName("polyline")[num].setAttribute("visibility","hidden")
            }
        }
        if(e.target.getAttribute("data-index")){
            let rgb = document.querySelectorAll(".color span")[e.target.getAttribute("data-index")].style.backgroundColor
            let color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
            let hex = "#";
            for (let i = 0; i < 3; i++) {
                // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
                // 'color[i]' 是数组，要转换成字符串.
                // 如果结果是一位数，就在前面补零。例如： A变成0A
                hex += ("0" + Number(color[i]).toString(16)).slice(-2);
            }
            console.log(hex)
            // console.log(document.getElementById(this.id))
            document.getElementById(this.id).style.backgroundColor = hex
        }
    };  
    render(){
        return (<div className="wrapper" id={this.id}>
                <div className="div1"> <img className="icon" src="https://p0.meituan.net/deal/3df7a54d32c3c852dad3e62ecb8442bf1766882.jpg%40160w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"/>
                </div>
                <div className="div2"> 
                    <h6>
                        香菜牛肉 
                    </h6>
                    <p className="content">
                        选用牛臀(牛霖)肉，取自后退近臀部的肉，臀肉(俗称米龙.黄瓜条.和尚头)，经过去筋膜，分割，切片，腌制等工序加工而成，口感滑嫩而不失肉感
                    </p>
                    <div>
                        优惠价
                        <span className="price">
                            ¥89.9
                        </span>
                        <div>
                            <span className="icon">
                            </span>
                            <span className="icon">
                            </span>
                            <span className="icon">
                            </span>
                            <span className="icon">
                            </span>
                            <span className="icon">
                            </span> 
                        </div>
                        
                    </div>
                </div>
                <div className="toolbar" >
                    <span className="skin" style={{display:"none"}}>
                        <div className="color" onClick={this.skin}>
                            <div>
                                <span style={{background: '#2d555e', textAlign: 'center'}} data-index="0" >
                                    <svg data-index="0">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="0"/>
                                    </svg>
                                </span>
                                <span style={{background: '#3c3f43'}} data-index="1">
                                    <svg data-index="1">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="1"/>
                                    </svg>
                                </span>
                                <span style={{background: '#635d10'}} data-index="2">
                                    <svg data-index="2">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="2"/>
                                    </svg>
                                </span>
                                <span style={{background: '#345920'}} data-index="3">
                                    <svg data-index="3">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="3"/>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <span style={{background: '#16504b'}} data-index="4">
                                    <svg data-index="4">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="4"/>
                                    </svg>
                                </span>
                                <span style={{background: '#1e3a5f'}} data-index="5">
                                    <svg data-index="5">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="5"/>
                                    </svg>
                                </span>
                                <span style={{background: '#42275e'}} data-index="6">
                                    <svg data-index="6">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="6"/>
                                    </svg>
                                </span>
                                <span style={{background: '#5b2245'}} data-index="7">
                                    <svg data-index="7">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={this.off} data-index="7"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </span>
                    <span className="alarm">
                        <div className="alarm">
                            <div className="star">
                                <span className="icon" onClick={this.scoreValue} onMouseOver={this.scoreValueOver} onMouseOut={this.scoreValueOut} data-index="0" style={{color: this.state.starNum[0]?this.star_on:this.star_off}}></span> 
                                <span className="icon" onClick={this.scoreValue} onMouseOver={this.scoreValueOver} onMouseOut={this.scoreValueOut}  data-index="1" style={{color: this.state.starNum[1]?this.star_on:this.star_off}}></span> 
                                <span className="icon" onClick={this.scoreValue} onMouseOver={this.scoreValueOver} onMouseOut={this.scoreValueOut}  data-index="2" style={{color: this.state.starNum[2]?this.star_on:this.star_off}}></span> 
                                <span className="icon" onClick={this.scoreValue} onMouseOver={this.scoreValueOver} onMouseOut={this.scoreValueOut}  data-index="3" style={{color: this.state.starNum[3]?this.star_on:this.star_off}}></span> 
                                <span className="icon" onClick={this.scoreValue} onMouseOver={this.scoreValueOver} onMouseOut={this.scoreValueOut}  data-index="4" style={{color: this.state.starNum[4]?this.star_on:this.star_off}}></span> 
                                <span className="submit">提交</span>
                            </div>
                            
                        </div>
                    </span>
                    {/* <span className="more">
                        <div className="more_">
                           
                        </div>
                    </span> */}
                </div>
            </div>
            

            )
    }
    
}
import React from 'react'
import './card.scss';

export default function card(props) {
    let on = "visible"
    let off = "hidden"
    let style = {
        color: "yellow"
    }
    const skin = function(e){
        let polyline_length = document.getElementsByTagName("polyline").length;
        let j=0
        for (j; j<polyline_length; j++){
            if(j==e.target.getAttribute("data-index")){
                document.getElementsByTagName("polyline")[j].setAttribute("visibility","visible")
                document.getElementsByClassName("wrapper")[0].style.backgroundColor= "#2d555e"
            }
            else{
                document.getElementsByTagName("polyline")[j].setAttribute("visibility","hidden")
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
            document.getElementsByClassName("wrapper")[0].style.backgroundColor = hex
        }
    };  
    return (<div className="wrapper" >
                <div className="div1"> <img className="icon" src="https://p0.meituan.net/deal/3df7a54d32c3c852dad3e62ecb8442bf1766882.jpg%40160w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"/>
                </div>
                <div className="div2"> 
                    <h6>
                        香菜牛肉 
                    </h6>
                    <p className="content">
                        代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张张彤德莱火锅:代金券1张彤德莱火锅:代金券1彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张彤德莱火锅:代金券1张
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
                    <span className="skin" >
                        <div className="color" onClick={skin}>
                            <div>
                                <span style={{background: '#2d555e', textAlign: 'center'}} data-index="0" >
                                    <svg data-index="0">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="0"/>
                                    </svg>
                                </span>
                                <span style={{background: '#3c3f43'}} data-index="1">
                                    <svg data-index="1">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="1"/>
                                    </svg>
                                </span>
                                <span style={{background: '#635d10'}} data-index="2">
                                    <svg data-index="2">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="2"/>
                                    </svg>
                                </span>
                                <span style={{background: '#345920'}} data-index="3">
                                    <svg data-index="3">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="3"/>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <span style={{background: '#16504b'}} data-index="4">
                                    <svg data-index="4">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="4"/>
                                    </svg>
                                </span>
                                <span style={{background: '#1e3a5f'}} data-index="5">
                                    <svg data-index="5">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="5"/>
                                    </svg>
                                </span>
                                <span style={{background: '#42275e'}} data-index="6">
                                    <svg data-index="6">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="6"/>
                                    </svg>
                                </span>
                                <span style={{background: '#5b2245'}} data-index="7">
                                    <svg data-index="7">  
                                        <polyline points="3,14 8,19 20,7" fill="none" stroke="red" stroke-width="3" visibility={off} data-index="7"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </span>
                    <span className="alarm">
                        <div className="alarm">
                            <span className="icon" onClick={(e)=> {console.log(style.color) 
                                                                   console.log(e.currentTarget.getAttribute("data-index"))}
                                } data-index="1" style={style}></span> 
                            <span className="icon" onClick={(e)=>console.log(e.currentTarget.getAttribute("data-index"))} data-index="2"></span> 
                            <span className="icon" onClick={(e)=>console.log(e.currentTarget.getAttribute("data-index"))} data-index="3"></span> 
                            <span className="icon" onClick={(e)=>console.log(e.currentTarget.getAttribute("data-index"))} data-index="4"></span> 
                            <span className="icon" onClick={(e)=>console.log(e.currentTarget.getAttribute("data-index"))} data-index="5"></span> 
                        </div>
                    </span>
                    <span className="more">
                        <div className="more">
                           
                        </div>
                    </span>
                </div>
            </div>)
}
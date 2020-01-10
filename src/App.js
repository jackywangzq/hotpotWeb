import Card from './card/card.js';
import Header from './header/header.js'
import Footer from './footer/footer.js'
import Welcome from './demo/demo.js';
import './App.scss';
import actionCreator from './reduce/actionCreator'
import { connect } from 'react-redux';
import React from 'react';
// import logo, { ReactComponent } from './logo.svg';

let state = {
  num : 1,
}

console.log(Welcome)
class App extends React.Component {
  constructor(props){
    super(props);
    // 不要在这里调用 this.setState()
    this.state = { counter: 0 };
    this.name = "wangziqi"
    this.say = this.say.bind(this)
    this.changeUsername = this.changeUsername.bind(this)

  }

  changeUsername(e){
    console.log(e);
    // console.log(e.target.value);
    this.props.dispatch(actionCreator(e.target.value))
  }
  say(){
    //http请求
    // let api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=?";
    // fetchJsonp(api)
    // .then(function(response) {
    //     return response.json()
    // }).then((json)=> {
    //     console.log(json.result);       
    // }).catch(function(ex) {
    //     console.log('parsing failed', ex)
    // })  
    let person = {name:"wangziqi",
                  age: 33,
                others:[1,2,3,4,5]
    }
    let {name,age} = person;
    console.log(name,age)
  }
  render(){
    console.log(document.documentElement.clientWidth)
    return (
      <div className='App'>
        <Header></Header>
        <main className="main">
            <Card></Card> 
        </main>
        <Footer></Footer>
    </div>
    );
  }
  
}

function mapStateToProps(state){
  return {
    userInfo: state.userInfo
  }
}
export default connect(mapStateToProps)(App);

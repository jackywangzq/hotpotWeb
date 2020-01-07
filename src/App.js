import actionCreator from './reduce/actionCreator'
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp'
import './App.scss';
import Card from './card/card.js';
import Triangle from './triangle/triangle.js';
import Welcome from './demo/demo.js';
import {Button} from 'antd-mobile';
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
        <Button type='primary' className='App-Button'>{document.documentElement.clientWidth}</Button>
        <header className="App-header">
          <Card></Card> 
          <Triangle></Triangle>
          {/* <form>
            <input type="text"  onChange={this.changeUsername.bind(this)}/> 
          </form> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
                 Learn React
        </a>
      </header>
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

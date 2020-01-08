import actionCreator from './reduce/actionCreator'
import { connect } from 'react-redux';
import './App.scss';
import Card from './card/card.js';
import Welcome from './demo/demo.js';
import {Button} from 'antd-mobile';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    // 不要在这里调用 this.setState()
    this.state = { counter: 0 };
    this.name = "wangziqi"
  }

  render(){
    console.log(document.documentElement.clientWidth)
    return (
      <div className='App'>
        <header className="App-header">
          1:wangziqi:
        </header>  
        <main className="App-main">
          <Card></Card> 
        </main>
        <footer className="App-footer">

        </footer>
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

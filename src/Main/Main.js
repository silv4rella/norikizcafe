import React, { Component } from 'react';
import logo from '../image/login1.jpg';
import './Main.css';

import Store from "../store.js";

class Main extends Component {

state = {
    pn: '',
    swipe:'',
    start:''
}

input1 = (e) => {
  this.setState({
    pn: (this.state.pn === null ? '' : this.state.pn) + e.target.value
  })
}

clear = (e) => {
  this.setState({
    pn: null
  })
}

  render() {
    return (
      <div>
        <div className="View1">
          <img src={logo} className="App-logo" alt="login1"/>
          <button className="prevButton" onClick={this.props.swipe}>◀</button>
          <div className="mainCountView">
            <div className="mainTodayCount">
              <div>Today</div>
              <div>&10 &10</div>
            </div>
            <div className="mainNowCount">
              <div>Now</div>
              <div>&1 &1</div>
            </div>
            <div className="mainOutCount">
              <div>Out</div>
              <div>&3 &3</div>
            </div>
          </div>
        </div>
        <div className="View2">
          <input
            type="number"
            id="phonenum"
            name="phonenum"
            readOnly value={this.state.pn ? this.state.pn : ''}/>
        </div>
        <div className="View3">
          <button className="button3" value="7" onClick={this.input1}>7</button>
          <button className="button3" value="8" onClick={this.input1}>8</button>
          <button className="button3" value="9" onClick={this.input1}>9</button>
          <button className="button3" value="4" onClick={this.input1}>4</button>
          <button className="button3" value="5" onClick={this.input1}>5</button>
          <button className="button3" value="6" onClick={this.input1}>6</button>
          <button className="button3" value="1" onClick={this.input1}>1</button>
          <button className="button3" value="2" onClick={this.input1}>2</button>
          <button className="button3" value="3" onClick={this.input1}>3</button>
          <button className="button2" value="" onClick={this.clear}>퇴장</button>
          <button className="button3" value="0" onClick={this.input1}>0</button>
          <Store.Consumer>
            {store => (
              <button className="button1"
                      onClick={()=>{
                        this.props.start();
                        console.log(this.state.pn);
                        store.updateValue("phoneNum", this.state.pn);
                        this.clear();
                      }}
              >
                입장
              </button>
            )}
          </Store.Consumer>
        </div>
      </div>
    );
  }
}

export default Main;

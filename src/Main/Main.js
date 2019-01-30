import React, { Component } from 'react';
import logo from '../image/login1.jpg';
import './Main.css';

class Main extends Component {

state = {
    pn: '',
    swipe:'',
    start:''
}

input1 = (e) => {
  this.setState({
    pn: this.state.pn + e.target.value
  })
}

clear = (e) => {
  this.setState({
    pn: ""
  })
}

  render() {
    return (
      <div>
        <div className="View1">
          <img src={logo} className="App-logo" alt="login1" />
          <button className="prevButton" onClick={this.props.swipe}>◀</button>
        </div>
        <div className="View2">
          <input
            type="number"
            id="phonenum"
            name="phonenum"
            readOnly value={this.state.pn}/>

          <button className="button1" value="false" onClick={()=>this.props.start()}>Start</button>
        </div>
        <div className="View3">
          <button className="button2" value="7" onClick={this.input1}>7</button>
          <button className="button2" value="8" onClick={this.input1}>8</button>
          <button className="button2" value="9" onClick={this.input1}>9</button>
          <button className="button2" value="4" onClick={this.input1}>4</button>
          <button className="button2" value="5" onClick={this.input1}>5</button>
          <button className="button2" value="6" onClick={this.input1}>6</button>
          <button className="button2" value="1" onClick={this.input1}>1</button>
          <button className="button2" value="2" onClick={this.input1}>2</button>
          <button className="button2" value="3" onClick={this.input1}>3</button>
          <button className="button2" value="" onClick={this.clear}>clear</button>
          <button className="button2" value="0" onClick={this.input1}>0</button>
          <button className="button2" value="" onClick={this.clear}>Enter</button>
        </div>
      </div>
    );
  }
}

export default Main;

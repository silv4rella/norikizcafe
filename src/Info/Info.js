import React, { Component } from 'react';
import './Info.css';

class Info extends Component {


  state = {
      pn: '',
      swipe:''
  }


  render() {
    return (
    <div className="info">
      <div className="infoView1">
      </div>
      <div className="infoView2">
      </div>
      <div className="infoView3">
      </div>
      <button className="nextButton" onClick={this.props.swipe}>▶</button>
    </div>
    );
  }
}

export default Info;

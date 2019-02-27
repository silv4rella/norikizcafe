import React, { Component } from 'react';

import Store from "../store.js";

class UserInfo extends Component {

userChildInfo = () =>{
  if (this.props.userChildInfo || this.props.userChildInfo !== null) {
    var componentList = [];
    var childList = this.props.userChildInfo;
    for (var i = 0; i < childList.length; i++) {
      if (i+1 < childList.length) {
        componentList = componentList.concat(
          <div className="userInfo_line" key={i}>
            <div className="userInfo_line1">{'아이'+(i+1)}</div>
            <div className="userInfo_line2">{childList[i].name ? childList[i].name : 'null'}</div>
            <div className="userInfo_line3">{childList[i].day ? childList[i].day : 'null'}</div>
            <button className="userInfo_add-button userInfoButtonImage_minus" onClick={()=>console.log('minus')}></button>
          </div>
        )
      }
      else {
        componentList = componentList.concat(
          <div className="userInfo_line" key={i}>
            <div className="userInfo_line1">{'아이'+(i+1)}</div>
            <div className="userInfo_line2">{childList[i].name ? childList[i].name : 'null'}</div>
            <div className="userInfo_line3">{childList[i].day ? childList[i].day : 'null'}</div>
            <button className="userInfo_add-button userInfoButtonImage_minus" onClick={()=>console.log('minus')}></button>
            <button className="userInfo_add-button userInfoButtonImage_plus" onClick={()=>console.log('plus')}></button>
          </div>
        )
      }
    }
    return componentList;
  } else {
    return(
      <div className="userInfo_line" key={i}>
        <div className="userInfo_line1">아이1</div>
        <div className="userInfo_line2">null</div>
        <div className="userInfo_line3">null</div>
        <button className="userInfo_add-button userInfoButtonImage_plus" onClick={()=>console.log('plus')}></button>
      </div>
    );
  }
}

  render() {

    return (
      <Store.Consumer>
        {store => {return (
          <div className="userInfoView_sub1">
            <div className="userInfo_line">
              <div className="userInfo_line1">보호자</div>
              <div className="userInfo_line2">{this.props.userName ? this.props.userName : 'null'}</div>
              <div className="userInfo_line3">{this.props.userDay ? this.props.userDay : 'null'}</div>
              <div className="userInfo_line4">{this.props.userPhoneNum ? this.props.userPhoneNum : 'null'}</div>
            </div>
            {this.userChildInfo()}
          </div>
        )}}
      </Store.Consumer>
    );
  }
}

export default UserInfo;

import React, { Component } from 'react';
import NumberFormat from "react-number-format";

import Store from "../store.js";

class UserInfo extends Component {

constructor() {
  super();
  this.state = {
    userPhoneNum: null,
    userName: null,
    userDay: null,
  };
}


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

input1_ChangedHandler = e => {
    this.setState({ userName: e.target.value, });
};

input2_ChangedHandler = e => {
    this.setState({ userDay: e.target.value, });
};

input3_ChangedHandler = values => {
    this.setState({ userPhoneNum: values.value, });
};

  render() {
    var userName, userDay, userPhoneNum;

    userName = (this.props.userName === null || this.props.userName === 'null') ? '' : this.props.userName;
    userDay = (this.props.userDay === null || this.props.userDay === 'null') ? '' : this.props.userDay;
    userPhoneNum = (this.props.userPhoneNum === null || this.props.userPhoneNum === 'null') ? '' : this.props.userPhoneNum;


    return (
      <Store.Consumer>
        {store => {return (
          <div className="userInfoView_sub1">
            <div className="userInfo_line">
              <div className="userInfo_line1">보호자</div>
              <input className="userInfo_line2"
                placeholder="이름"
                value={userName}
                onChange={this.input1_ChangedHandler}
              />
              <input className="userInfo_line3"
                placeholder="생년월일"
                value={userDay}
                onChange={this.input2_ChangedHandler}
              />
              <NumberFormat className="userInfo_line4"
                format= "###-####-####"
                placeholder="전화번호"
                value={userPhoneNum ? userPhoneNum : 'null'}
                onValueChange={this.input3_ChangedHandler}
              />
            </div>
            {this.userChildInfo()}
          </div>
        )}}
      </Store.Consumer>
    );
  }
}

export default UserInfo;

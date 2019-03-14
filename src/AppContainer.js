import React, { Component } from 'react';
import App from './App.js';
import Store from "./store.js";

class AppContainer extends Component {
  state = {
    instanceData: {
      name: null,
      day:'1900-01-01',
      startTime: null,
      endTime: null,
      phoneNum: null,
      parentCount: 1,
      childCount: 1,
    },
    usedUserCount:{
      today_parent:0,
      today_child:0,
      now_parent:0,
      now_child:0,
      out_parent:0,
      out_child:0
    },
    usedUserListData:[
    ],
    dumy_UserDB: [
      {
        customerNum : 10000001,
        name:'노리',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'7',
        child:[
          {
            name:'노리11',
            day:'1900-01-01',
          },
          {
            name:'노리12',
            day:'1900-01-01',
          }
        ],
      },
      {
        customerNum : 10000002,
        name:'베가스',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'01022222222',
        child:[
          {
            name:'베가스11',
            day:'1900-01-01',
          },
          {
            name:'베가스12',
            day:'1900-01-01',
          }
        ],
      },
      {
        customerNum : 10000003,
        name:'지니',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'01033333333',
        child:[
          {
            name:'지니11',
            day:'1900-01-01',
          },
        ],
      },
      {
        customerNum : 10000004,
        name:'해리포터',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'01044444444',
        child:[
          {
            name:'해리포터11',
            day:'1900-01-01',
          },
        ],
      }
    ],
  }

  updateValue = (key, val) => {
    this.setState({[key]: val});
  }

  //임시 유저 데이터 일부 변경
  updateInstanceDataValue1 = (key, val) => {
    this.setState(prevState => ({
      ...prevState,
      instanceData: {
        ...prevState.instanceData,
        [key]: val,
      },
    }));
  }

  //임시 유저 데이터 변경
  updateInstanceDataValue2 = (val) => {
    this.setState({
      instanceData: val,
    });
  }

  //카페이용 유저 추가
  addUser_UseCafe = (val1,val2) => {
    this.setState(prevState => ({
      ...prevState,
      usedUserListData: this.state.usedUserListData.concat(val1),
      usedUserCount:{
        today_parent:prevState.usedUserCount.today_parent+1,
        today_child:0,
        now_parent:prevState.usedUserCount.now_parent+1,
        now_child:0,
        out_parent:0,
        out_child:0
      },
      instanceData:{
        ...prevState.instanceData,
        parentCount: val1.parentCount,
        childCount: val1.childCount,
        startTime: val1.startTime,
        endTime: val1.endTime,
      }
    }));
  }

  //카페이용 유저 제거(퇴장)
  exitUser_UseCafe = (index) =>{
    var removedata = this.state.usedUserListData.splice(index, 1);
    console.log(removedata);
    this.setState(prevState => ({
          ...prevState,
          usedUserCount:{
            ...prevState.usedUserCount,
            now_parent:prevState.usedUserCount.now_parent-1,
            now_child:0,
            out_parent:prevState.usedUserCount.out_parent+1,
            out_child:0
          },
        }));
  }

  //Get 현재 로그인 유저 데이터 (ex. getUserData)
  curUser = () => {
    // if(this.state.instanceData === null){
    //   return this.state.dumy_UserDB[this.state.instanceData.loginCustomerNum];
    // }
    // else {
      return this.state.instanceData;
    // }
  }

  //임시 유저 데이터 초기화
  stateClear = () => {
    console.log('stateClear');
    this.setState({
      instanceData: {
        useSlotNum:null,
        name: null,
        day:'1900-01-01',
        startTime: null,
        endTime: null,
        phoneNum: null,
        parentCount: 1,
        childCount: 1,
      },
    });
  }

  render() {
    return (
      <Store.Provider value={{
          state: this.state,
          updateValue: this.updateValue,
          updateInstanceDataValue1: this.updateInstanceDataValue1,
          updateInstanceDataValue2: this.updateInstanceDataValue2,
          addUser_UseCafe:this.addUser_UseCafe,
          exitUser_UseCafe:this.exitUser_UseCafe,
          curUser: this.curUser,
          stateClear: this.stateClear
      }}>
        <App />
      </Store.Provider>
    );
  }
}

export default AppContainer;

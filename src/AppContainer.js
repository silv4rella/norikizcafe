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
      loginCustomerNum: null,
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
        useSlotNum : 1,
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
        useSlotNum : 4,
        customerNum : 10000002,
        name:'베가스',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-2222-2222',
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
        useSlotNum : 3,
        customerNum : 10000003,
        name:'지니',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-3333-3333',
        child:[
          {
            name:'지니11',
            day:'1900-01-01',
          },
        ],
      },
      {
        useSlotNum : 12,
        customerNum : 10000004,
        name:'해리포터',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-4444-4444',
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

  updateInstanceDataValue1 = (key, val) => {
    this.setState(prevState => ({
      ...prevState,
      instanceData: {
        ...prevState.instanceData,
        [key]: val,
      },
    }));
  }

  updateInstanceDataValue2 = (val) => {
    this.setState({
      instanceData: val,
    });
  }

  addUser_UseCafe = (val1,val2) => {
    this.setState(prevState => ({
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
        name: null,
        day:'1900-01-01',
        startTime: val1.startTime,
        endTime: null,
        phoneNum: val1.phoneNum,
        loginCustomerNum:val2,
      }
    }));
  }

  stateClear = () => {
    this.setState({
      instanceData: {
        name: null,
        day:'1900-01-01',
        startTime: null,
        endTime: null,
        phoneNum: null,
        loginCustomerNum: null,
      },
    });
  }

  curUser = () =>{
    if(this.state.instanceData.loginCustomerNum !== null){
      return this.state.dumy_UserDB[this.state.instanceData.loginCustomerNum];
    }
    else {
      return this.state.instanceData;
    }
  }

  render() {
    return (
      <Store.Provider value={{
          state: this.state,
          updateValue: this.updateValue,
          updateInstanceDataValue1: this.updateInstanceDataValue1,
          updateInstanceDataValue2: this.updateInstanceDataValue2,
          addUser_UseCafe:this.addUser_UseCafe,
          curUser: this.curUser,
          stateClear: this.stateClear
      }}>
        <App />
      </Store.Provider>
    );
  }
}

export default AppContainer;

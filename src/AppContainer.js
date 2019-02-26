import React, { Component } from 'react';
import App from './App.js';
import Store from "./store.js";

class AppContainer extends Component {
  state = {
    index: null,
    name: null,
    day:'1900-01-01',
    startTime: null,
    endTime: null,
    phoneNum: null,
    loginCustomerNum: null,
    usedCount:{
      today_parent:0,
      today_child:0,
      now_parent:0,
      now_out:0,
      out_parent:0,
      out_out:0
    },
    listData: [
      {
        useSlotNum : 1,
        customerNum : 10000001,
        name:'노리',
        day:'1900-01-01',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-1111-1111',
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

  addUser_UseCafe = (val1,val2) => {
    this.setState({
      listData: this.state.listData.concat(val1),
      loginCustomerNum:val2
    });

  }

  stateClear = () => {
    this.setState({
      index: null,
      name: null,
      day:'1900-01-01',
      startTime: null,
      endTime: null,
      phoneNum: null,
      loginCustomerNum: null,
    });
    console.log('stateClear');
  }

  curUser = () =>{
      if(this.state.loginCustomerNum !== null){
        return this.state.listData[this.state.loginCustomerNum];
      }
      else {
        return {
          index: null,
          name: null,
          day:'1900-01-01',
          startTime: null,
          endTime: null,
          phoneNum: null,
          loginCustomerNum: null,
        };
      }
  }

  render() {
    return (
      <Store.Provider value={{
          state: this.state,
          updateValue: this.updateValue,
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

import React, { Component } from 'react';
import App from './App.js';
import Store from "./store.js";

class AppContainer extends Component {
  state = {
    index:'null',
    name:'null',
    startTime:'null',
    endTime:'null',
    phoneNum:'null',
    log: null,
    listData: [
      {
        useSlotNum : 1,
        customerNum : 10000001,
        name:'노리',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-1111-1111',
      },
      {
        useSlotNum : 4,
        customerNum : 10000002,
        name:'베가스',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-2222-2222',
      },
      {
        useSlotNum : 3,
        customerNum : 10000003,
        name:'지니',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-3333-3333',
      },
      {
        useSlotNum : 12,
        customerNum : 10000004,
        name:'해리포터',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-4444-4444',
      }
    ],
  }

  updateValue = (key, val) => {
    this.setState({[key]: val});
  }

  addUser_UseCafe = (val) => {
    this.setState({
      listData: this.state.listData.concat(val),
      log:this.state.listData.length
    });

    this.stateClear();
  }

  stateClear = () => {
    this.setState({
      index: null,
      name: null,
      startTime: null,
      endTime: null,
      phoneNum: null,
      log: null,
    });
    console.log('stateClear');
  }

  curUser = () =>{
      if(this.state.log !== null){
        return this.state.listData[this.state.log];
      }
      else {
        return null;
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

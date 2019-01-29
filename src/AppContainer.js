import React, { Component } from 'react';
import App from './App.js';
import Store from "./store.js";

class AppContainer extends Component {
  state = {
    index:'',
    name:'',
    startTime:'',
    endTime:'',
    phoneNum:'null',
    viewStep: 1,
    listData: [
      {
        index:'0',
        name:'0name',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-1111-1111',
      },
      {
        index:'1',
        name:'1name',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-2222-2222',
      },
      {
        index:'2',
        name:'2name',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-3333-3333',
      },
      {
        index:'3',
        name:'3name',
        startTime:'00:00:00',
        endTime:'00:00:00',
        phoneNum:'010-4444-4444',
      }
    ],
  }

  updateValue = (key, val) => {
    console.log([key]);
    this.setState({[key]: val});
  }

  render() {
    return (
      <Store.Provider value={{state: this.state, updateValue: this.updateValue}}>
        <App />
      </Store.Provider>
    );
  }
}

export default AppContainer;

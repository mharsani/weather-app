import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import serviceGet from '../model/service/index';
import endpointGetListHistory from '../model/endpoint/history';
import history from '../model/response/history';

class App extends Component {
  state = {
    list:[]
  }

  componentDidMount() {
    this.getService();
  }

  getService = async () => {
    const response = await serviceGet(endpointGetListHistory('Raleigh,NC', '2019-03-24', '2019-03-25'))
    this.setState({list: history(response).data})
    const { list } = this.state;
    console.log(list)
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

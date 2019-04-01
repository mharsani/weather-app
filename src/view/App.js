import React, { Component } from 'react';
import './App.css';

import serviceGet from '../model/service/index';
import endpointGetListHistory from '../model/endpoint/history';
import responseHistory from '../model/response/history';
import endpointGetCurrent from '../model/endpoint/current';
import responseCurrent from '../model/response/current';
import Search from '../view/search/Search';

class App extends Component {
  state = {
    list:[],
    search: ''
  }


  requestEndpointGetHistory = async (city, startDate, endDate) => {
    const response = await serviceGet(
    endpointGetListHistory(city, startDate, endDate))
    this.setState({list: responseHistory(response).data})
    const { list } = this.state;
    console.log(list)
  }

  requestEndpointGetCurrent = async (city) => {
    const response = await serviceGet(
    endpointGetCurrent(city))
    this.setState({list: responseCurrent(response).data})
    const { list } = this.state;
    console.log(list)
  }

  handleSubmite = e => {
    e.preventDefault();
      let valueTarget = e.target.inputSearchCity.value;
      if (valueTarget.length >= 2) {
        let queryString = encodeURI(valueTarget);
        this.setState({ search: queryString});
        this.requestEndpointGetCurrent(queryString);
      }
  };

  render() { 
    return (
      <div className="App">
        <Search handleSubmite={this.handleSubmite} />
      </div>
    );
  }
}

export default App;

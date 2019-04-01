import React, { Component } from 'react';
import './App.css';

import serviceGet from '../model/service/index';
import endpointGetListHistory from '../model/endpoint/history';
import responseHistory from '../model/response/history';
import endpointGetCurrent from '../model/endpoint/current';
import responseCurrent from '../model/response/current';
import Search from '../view/search/Search';
import Calendar from '../view/calendar/Calendar';
import Navigation from '../view/navigation/Navigation';
import Cards from '../view/card/Cards';
import { Container } from 'react-bootstrap';

class App extends Component {
  state = { 
    list:[],
    search: '',
    from: undefined,
    to: undefined,
    navigation: false
  }
  componentDidMount = () => {
   console.log(this.state)
  }

  requestEndpointGetHistory = async (city, startDate, endDate) => {
    const response = await serviceGet(
    endpointGetListHistory(city, startDate, endDate))
    this.setState({list: await responseHistory(response)})
    const { list } = this.state;
    console.log(list)
  }

  requestEndpointGetCurrent = async (city) => {
    const response = await serviceGet(
    endpointGetCurrent(city))
    this.setState({list: await responseCurrent(response)})
    const { list } = this.state;
    console.log(list)
  }

  handleSubmite = e => {
    e.preventDefault();
      const { navigation } = this.state;
      let valueTarget = e.target.inputSearchCity.value;
      if (valueTarget.length >= 2) {
        let queryString = encodeURI(valueTarget);
        this.setState({ search: queryString});
        if(!navigation) {
          return this.requestEndpointGetCurrent(queryString);
        }
      }
  };

  showFromMonth = () => {
    const { from } = this.state;
    if (!from) {
      return;
    }
  }
  handleFromChange= from => {
    this.setState({ from });
  }

  handleToChange = to => {
    this.setState({ to }, this.showFromMonth);
  }
  
  selectedKey = key => {
    if(key === "History") {
      return this.setState({navigation: true})
    }
    this.setState({navigation: false})
  }

  render() { 
    const { from, to, navigation, list } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Container>
          <Navigation selectedKey={this.selectedKey} />
          {navigation && <Calendar {...this.state } 
              modifiers={ modifiers} 
              handleFromChange={ this.handleFromChange }
              handleToChange={ this.handleToChange }
              />
        }
          <Search handleSubmite={this.handleSubmite} />
        {list.length !== 0 && <Cards list={list} />}
      </Container>
    );
  }
}

export default App;

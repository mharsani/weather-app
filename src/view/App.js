import React, { Component } from 'react';

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
import { formatDate } from '../helper/util/index'

class App extends Component {
  state = { 
    list:[],
    search: '',
    from: undefined,
    to: undefined,
    navigation: false,
    startDate: '',
    endDate: '',
    isSearchFrom: false,
    isSearchTo: false,
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
      const { navigation, startDate, endDate } = this.state;
      let valueTarget = e.target.inputSearchCity.value;
      if (valueTarget.length >= 2) {
        let queryString = encodeURI(valueTarget);
        this.setState({ search: queryString});
        if(!navigation) {
          return this.requestEndpointGetCurrent(queryString);
        }else if (navigation) {
          return this.requestEndpointGetHistory(queryString, startDate, endDate);
        }
      }
  };


  showFromMonth = () => {
    const { from } = this.state;
    if (!from) {
      return;
    }
  }
  handleFromChange= (from) => {
    const formatedFrom =  formatDate(from);
    const { navigation } = this.state;
    if(navigation) {
      let isSearchFrom;
      if(typeof from !== 'undefined') {
        isSearchFrom = from.length !== 0;
     }else {
      isSearchFrom = false;
     }
      return this.setState({ from, startDate: formatedFrom, isSearchFrom });
    }
    this.setState({ from, startDate: formatedFrom });
  }

  handleToChange = to => {
    const formatedTo = formatDate(to);
    const { navigation } = this.state;
    if(navigation) {
      let isSearchTo;
       if(typeof to !== 'undefined') {
         isSearchTo = to.length !== 0;
      }else {
        isSearchTo = false;
      }
      return this.setState({ to, endDate: formatedTo, isSearchTo });
    }
    this.setState({ to, endDate:formatedTo  }, this.showFromMonth);
  }
  
  selectedKey = key => {
    if(key === "History") {
      return this.setState({navigation: true, list:[]})
    }
    this.setState({navigation: false, list:[]})
  }

  render() { 
    const { from, to, navigation, list, isSearchFrom, isSearchTo } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Container>
          <Navigation selectedKey={this.selectedKey}/>
          {navigation && <Calendar {...this.state } 
              modifiers={ modifiers} 
              handleFromChange={ this.handleFromChange }
              handleToChange={ this.handleToChange }
              />
        }
          <Search
          handleSubmite={this.handleSubmite} 
          isSearchFrom={isSearchFrom}
          isSearchTo={isSearchTo}
          navigation={navigation} />
        {list.length !== 0 && <Cards list={list} navigation={navigation}/>}
      </Container>
    );
  }
}

export default App;

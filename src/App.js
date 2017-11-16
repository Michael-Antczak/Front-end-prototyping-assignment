import React, { Component } from 'react';
import SelectPub from './components/SelectPub';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bars: [],
      products: [],
      current_prices: [],
      rounds: [], 
      ordered_beverages: [],
      isPubSelected: false,
      pubSelected: '',
      isOrderSelected: false,

    }
  }

  componentDidMount() {
    console.log('About to mount');
  }

  render() {

    if(!isPubSelected) {
      return <SelectPub />;
    } else if(!isOrderSelected) {
      return <ViewDrinks />
    } else if(isOrderSelected) {
      return <Order />
    }
  }
}

export default App;

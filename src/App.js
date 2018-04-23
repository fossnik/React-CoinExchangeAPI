import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetMarkets from './components/GetMarkets/GetMarkets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CoinExchange API with React</h1>
        </header>
		<GetMarkets />
	  </div>
    );
  }
}

export default App;

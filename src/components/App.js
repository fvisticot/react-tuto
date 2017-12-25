import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddUser from '../containers/AddUser'
import UserFilter from '../containers/UserFilter'
import VisibleUsers from '../containers/VisibleUsers'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my first tuto</h1>
        </header>

          <AddUser/>
          <UserFilter/>
          <VisibleUsers/>

      </div>
    );
  }
}

export default App;

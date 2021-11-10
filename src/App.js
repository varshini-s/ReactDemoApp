import React, { Component } from 'react'
import './App.css';
import logo from './assets/img/logo.png'
class App extends Component 
{
  constructor(props) {
    super(props)
  
    this.state = {

      title:'Hello from bridgelabz'
       
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo}
          alt="The Bridgelabz logo: a Bridge to Employee through lab works"/>
      </div>
    );
  }
}

export default App;

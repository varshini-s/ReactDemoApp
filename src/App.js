import React, { Component } from 'react'
import './App.css';

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
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
import logo from './assets/img/logo.png'
class App extends Component 
{
  url='https://www.bridgelabz.com/'
  constructor(props) {
    super(props)
  
    this.state = {

      title:'Hello from bridgelabz'
       
    }
  }

  onClick=($event)=>{
    console.log("save button is clicked!",$event);
    window.open(this.url,"_blank");
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo: a Bridge to Employee through lab works"/>
      </div>
    );
  }
}

export default App;

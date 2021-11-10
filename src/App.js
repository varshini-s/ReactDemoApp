import React, { Component } from 'react'
import './App.css';
import logo from './assets/img/logo.jpeg'
class App extends Component 
{
  url='https://www.bridgelabz.com/'
  constructor(props) {
    super(props)
  
    this.state = {

      userName:''
       
    }
  }

  onClick=($event)=>{
    console.log("save button is clicked!",$event);
    window.open(this.url,"_blank");
  }

  onNameCHange=(event)=>{
    console.log("value is",event.target.value);
    this.setState({userName:event.target.value})
  }
  
  render() {
    return (
      <>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo: a Bridge to Employee through lab works"/>
      </div>
      <div>
        <input onChange={this.onNameCHange}/>
      </div>
      </>
    );
  }
}

export default App;

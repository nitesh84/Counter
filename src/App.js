import React, { Component } from 'react';
import './Css/App.css';

export default class App extends Component {

  constructor(){
    super()
    this.state={
      count:0,
    }
  }



  render() {
    return (
      <>
        <h1>React Web</h1>
        <p>{this.state.count}</p>

        <button onClick={()=>{
          this.setState({
            count:this.state.count-1
          })
        }}  >Decrement</button>      

        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }} >Increment</button>    
        <br />
        <button onClick={()=>{
          this.setState({
            count:0
          })
        }} >Reset</button>        
      </>
    )
  }
}

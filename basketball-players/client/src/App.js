import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
    super(props);
    this.state = { apiResponse: ""};
}

callAPI(){
    fetch("http://localhost:3000/")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res}))
    .catch(err => err);
}


  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callAPI()
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Basketball Roster API</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
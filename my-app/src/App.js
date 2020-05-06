import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import "./App.css";


class App extends React.Component {

  constructor (){
    super();
    this.state = {
        myData:[],
        hubData:[]
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/rmurdoc90")
      .then(res => {
        this.setState({myData: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err));

    }

    fetchData = e => {
      e.preventDefault()
        axios
        .get("https://api.github.com/users/rmurdoc90/followers")
        .then(res => {
          this.setState({hubData: res.data})
          console.log(res.data)
        })
        .catch(err => console.log(err));
  }



    render(){
      return (
        <div className="App">
          <h1>Welcome to the Thunderdome</h1>
          <Card hubData = {this.state.hubData} myData = {this.state.myData}/>
        </div>
  );
 }
}


export default App;

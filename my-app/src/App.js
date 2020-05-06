import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import "./App.css";


class App extends React.Component {

  constructor (){
    super();
    this.state = {
        user:[],
        followers:[]
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/rmurdoc90")
      .then(res => {
        this.setState({user: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err));

      axios
        .get("https://api.github.com/users/robertmurdoch/followers")
        .then(res => {
          this.setState({followers: res.data})
          console.log(res.data)
        })
        .catch(err => console.log(err));
    }




    render(){
      return (
        <div className="App">
          <h1>Welcome to the Thunderdome</h1>
          <Card data = {this.state}/>
        </div>
  );
 }
}


export default App;

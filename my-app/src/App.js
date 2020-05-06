import React from 'react';
import axios from 'axios';
import Card from './components/Card';


class App extends React.Component {

  constructor (){
    super();
    this.state = {
        hubData:[]
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/robertmurdoch/followers")
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
          <Card  hubData = {this.state.hubData}/>
        </div>
  );
 }
}


export default App;

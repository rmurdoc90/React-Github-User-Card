import React from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor (){
    super();
    this.state = {
        hubData:[]
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/")
      .then(res => {
        this.setState({hubData: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

    render(){
      return (
        <div className="App">
          <h1>Test</h1>
        </div>
  );
 }
}


export default App;

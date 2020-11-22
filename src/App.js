import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UserComponent from './Components/UserComponent';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      contacts: []
    };
  }
  

  componentDidMount = () => {
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(data => this.setState({
      contacts: data.results
    }))   
    .catch(error => console.log(`Error: ${error}`))
  }

  showUserDetails = (index) => {
    if(document.getElementById("button"+index).innerHTML==="Hide Details"){
      document.getElementById("button"+index).innerHTML="Show Details"
      document.getElementById("details"+index).className="hide"
    }else{
    document.getElementById("button"+index).innerHTML="Hide Details";
    document.getElementById("details"+index).className="show"}
  }
  

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < UserComponent contacts={this.state.contacts} showUserDetails={this.showUserDetails}/>
      </header>

    </div>
  );
  }
}

export default App;

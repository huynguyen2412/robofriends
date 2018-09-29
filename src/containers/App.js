import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
// import { robots } from "./robots";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  /* AJAX call to get JSON file and retrieve the set of 'users' */
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
    ;
  }

  /* get a text string from user input */
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }


  /* This render() will display the robot card depend on what user's input string */
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes
        (this.state.searchfield.toLowerCase());
    });
    //check the length of array
    if(this.state.robots.length === 0){
      return <h1 className ='tc'>Loading</h1>
    }
    else{
      return (
        <div className="tc">
          <h1 className='f2' >RoboFriends</h1>
          {/* update the view after the user input */}
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>   
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }

    
  }
}

export default App;

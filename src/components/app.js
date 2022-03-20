import React, { Component } from "react";
import Logo from "./klogo.js";
import "./App.css";
import Sidebar from './components/Sidebar'
import Table from './components/Table'
import Todo from './components/Todo'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      newItem: ""
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
  }
  onRemoveItem = id => {
    this.setState(state => {
      const users = state.users.filter(user => user.id !== id);
      return {
        users
      };
    });
  };
   addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  render() {
    const {users} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>
        <p className="App-intro">
          <Sidebar />
          <Table users={this.state.users}/>
        </p>
      </div>
    );
  }
}

export default App;



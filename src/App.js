import React, { Component } from "react";
import Logo from "./klogo.js";
import "./App.css";
import Sidebar from './components/Sidebar'
import Form from "./components/Form";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  


  addPerson(name, email) {
    this.setState(prevState => ({
      people: [...prevState.people, { name, email }]
    }));
  }

  initialFormState = { id: null, name: '', email: '' }

  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(response => this.setState({ people: response }))
      .catch(error => console.log(error));
  }

  deletePerson(email) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.email !== email)
      }));
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>
        <p className="App-intro">
          <Sidebar />
          <div className='form'>
          <Form addPerson={this.addPerson} />
        <table className='user-info'>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='table'>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.email}>
                  <th>{index + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td><EditIcon /></td>
                  <td>
                    <DeleteOutlineIcon onClick={this.deletePerson(person.email)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> 
        </div>     
          </p>
      </div>
    );
  }
}

export default App;
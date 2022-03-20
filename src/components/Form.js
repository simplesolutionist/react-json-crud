import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements["email"].value;
    const name = form.elements["name"].value;
    this.props.addPerson(name, email);
    form.reset();
  }

  render() {
    return (
      <div className='add-form'>
      <form onSubmit={this.formSubmit}>
        <h1 className='title'>Medical Records</h1>
        <input id="name" type="text" defaultValue="" placeholder="Name..." className='todo-input'/>
        <input id="email" type="text" defaultValue="" placeholder="Email..." className='todo-input'/>
        <button type="submit" value="submit" className='todo-button'>Add Record</button>
      </form>
      </div>
    );
  }
}

export default Form;

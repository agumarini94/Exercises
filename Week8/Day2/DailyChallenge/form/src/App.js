import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '' ,
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietary: false //checked
    };
  }
  handleChange = (event) => { //mi funcion
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value
    });

  };
  
  render() {
    return (
      <div>
        <h1>Daily Challenge </h1>
        <form>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /> 
          <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
          <input type="radio" name="gender" value="male" onChange={this.handleChange} />Male
          <input type="radio" name="gender" value="female" onChange={this.handleChange} /> Female 
           <select name="destination" value={this.state.destination} onChange={this.handleChange}>
            <option value="Rusia">Rusia</option>
            <option value="Argentina">Argentina</option>
          </select>
        <input type="checkbox" name="dietary" checked={this.state.dietary} onChange={this.handleChange} />
        </form>

        {/* ahora muestro los valores  */}
        <h1> lo que usted ingreso:</h1>
        <p>First name = {this.state.firstName}</p>
        <p>Last name = {this.state.lastName}</p>
        <p>Age = {this.state.age}</p>
        <p>Gender = {this.state.gender}</p>
        <p>Destinatio = {this.state.destination}</p>
        <p>Dietary = {this.state.dietary? "Yes" : "No"}</p>



      </div>
    );
  }
}

export default App;

// that retrieves the event.target of the inputs.
// and checks the status of the checkboxes(ie. “checked” or not).Use a ternary operator.


// In the App.js You will create a stateful component with props.
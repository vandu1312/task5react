import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',
      age: '',
    };
  }

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    this.setState({ age: Math.floor(ageInYears) });
  };

  handleInputChange = (event) => {
    this.setState({ birthdate: event.target.value });
  };

  render() {
    return (
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <h2>Enter your age</h2>
        <input
          type="date"
          onChange={this.handleInputChange}
          value={this.state.birthdate}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== '' && (
          <p>You are {this.state.age} years old.</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;

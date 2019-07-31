import React, { Component } from 'react';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      name: '',
      donation: ''
    };
  }

  clearState = () => {
    this.setState({ name: '', donation: '' });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleDonationClick = () => {
    this.props.handleSubmit(this.state);
    this.clearState();
  };

  render = () => {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='number'
          placeholder='Amount'
          name='donation'
          value={this.state.donation}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='button'
          value='Make Donation'
          onClick={this.handleDonationClick}
        />
      </form>
    );
  };
}

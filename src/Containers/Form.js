import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeDonation, setErrorMessage } from '../Actions';
import { postNewDonation } from '../apiCalls';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      donation: ''
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = async () => {
    try {
      const response = await postNewDonation(this.state);
      const parsed = await response.json();
      return parsed;
    } catch (error) {
      this.props.onErroringOut(error.message);
    }
    this.props.onDonation(this.state);
  };

  render = () => {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />
        <imput
          type='text'
          placeholder='Amount'
          name='donation'
          value={this.state.donation}
        />
        <input type='button' value='Make Donation' />
      </form>
    );
  };
}

export const mapDispatchToProps = dispatch => ({
  onDonation: newDonation => dispatch(makeDonation(newDonation)),
  onErroringOut: errorMessage => dispatch(setErrorMessage(errorMessage))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);

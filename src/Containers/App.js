import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAnimals, getDonations } from '../apiCalls';
import { setAllAnimals, setErrorMessage, setDonationData } from '../Actions';
import { Card } from './Card';
import { Donation } from './Donation';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    try {
      const response = await getAllAnimals();
      await this.props.onFetchingAllAnimals(response);
    } catch (error) {
      await this.props.onErroringOut(error.message);
    }
    try {
      const response = await getDonations();
      await this.props.onFetchingDonations(response);
    } catch (error) {
      await this.props.onErroringOut(error.message);
    }
  };

  populateAnimals = () => {
    return this.props.animals.map(animal => {
      return <Card animal={animal} key={animal.id} id={animal.id} />;
    });
  };

  populateDonations = () => {
    return this.props.donations.map(donation => {
      return <Donation donation={donation} key={donation.id} id={donation.id} />;
    });
  }

  render = () => {
    return (
      <main>
        <header></header>
        <aside className='donations_container'>{this.populateDonations()}</aside>
        <section className='animals_container'>{this.populateAnimals()}</section>
      </main>
    );
  };
}

export const mapStateToProps = ({ animals, donations }) => ({
  animals,
  donations
});

export const mapDispatchToProps = dispatch => ({
  onFetchingAllAnimals: allAnimals => dispatch(setAllAnimals(allAnimals)),
  onErroringOut: errorMessage => dispatch(setErrorMessage(errorMessage)),
  onFetchingDonations: donations => dispatch(setDonationData(donations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

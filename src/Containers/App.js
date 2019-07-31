import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAnimals, getDonations } from '../apiCalls';
import { setAllAnimals, setErrorMessage, setDonationData, toggleLoading } from '../Actions';
import { Card } from './Card';
import { Donation } from './Donation';
import Form from './Form';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    try {
      const animalResponse = await getAllAnimals();
      await this.props.onFetchingAllAnimals(animalResponse);
      const donationResponse = await getDonations();
      await this.props.onFetchingDonations(donationResponse);
      await this.props.onLoadFinish(false);
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
        <header>
          <Form />
        </header>
        <div className='display_container'>
          <aside className='donations_container'>{this.populateDonations()}</aside>
          <section className='animals_container'>{this.populateAnimals()}</section>
        </div>
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
  onFetchingDonations: donations => dispatch(setDonationData(donations)),
  onLoadFinish: bool => dispatch(toggleLoading(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

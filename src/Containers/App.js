import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAnimals, getDonations } from '../apiCalls';
import { setAllAnimals, setErrorMessage, setDonationData } from '../Actions';
import { Card } from './Card';
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

  populateCards = () => {
    return this.props.animals.map(animal => {
      return <Card animal={animal} key={animal.id} id={animal.id} />;
    });
  };

  render = () => {
    return (
      <main>
        <header></header>
        <section className='animals-container'>{this.populateCards()}</section>
      </main>
    );
  };
}

export const mapStateToProps = ({ animals }) => ({
  animals
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

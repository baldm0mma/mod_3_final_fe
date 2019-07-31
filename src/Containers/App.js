import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAnimals } from '../apiCalls';
import { setAllAnimals, setErrorMessage } from '../Actions';

export class App extends Component {
  componentDidMount = async () => {
    try {
      const response = await getAllAnimals();
      await this.props.onFetchingAllAnimals(response);
    } catch (error) {
      await this.props.onErroringOut(error.message);
    }
  };

  render = () => {
    return <main>hello world</main>;
  };
}

export const mapStateToProps = ({ animals }) => ({
  animals
});

export const mapDispatchToProps = dispatch => ({
  onFetchingAllAnimals: allAnimals => dispatch(setAllAnimals(allAnimals)),
  onErroringOut: errorMessage => dispatch(setErrorMessage(errorMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from 'react';
import './Card.css';
// import { connect } from 'react-redux';

export const Card = ({ animal }) => {
  return (
    <article className='animal_card'>
      <h2>Name: {animal.name}</h2>
      <img className='animal_image' src={animal.img} alt={`Photo of ${animal.name}`} />
      <h4>Species: {animal.species}</h4>
      <p>Description: {animal.description}</p>
    </article>
  );
};

// export const mapStateToProps = ({ allAnimals }) => ({
//   allAnimals
// });

// export default connect(mapStateToProps, null)(Card);

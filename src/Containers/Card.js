import React from 'react';
import './Card.css';

export const Card = ({ animal }) => {
  return (
    <article className='animal_card'>
      <h2>Name: {animal.name}</h2>
      <img className='animal_image' src={animal.img} alt={animal.name} />
      <h4>Species: {animal.species}</h4>
      <p className='description'>Description: {animal.description}</p>
    </article>
  );
};

import React from 'react';
import { connect } from 'react-redux';

export const Card = () => {

  return (
    <article>
      <h2>Name: {animal.name}</h2>
      <img src={animal.image} alt={`Photo of ${animal.name}`}></img>
      <h4>Species: {animal.species}</h4>
      <p>Description: {animal.description}</p>
    </article>
  )
}

export const mapStateToProps = state => {
  
}
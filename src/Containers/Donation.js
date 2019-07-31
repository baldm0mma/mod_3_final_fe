import React from 'react';
import './Donation.css';

export const Donation = ({ donation }) => {
  return (
    <article className='donation_card'>
      <h2>Name: {donation.name}</h2>
      <p>Donation: ${donation.donation}</p>
    </article>
  );
};

export const getAllAnimals = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/rescue-animals');
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Cannot fetch animals at this time');
  }
};

export const getDonations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/donations');
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Cannot fetch donations at this time');
  }
};

export const postNewDonation = async newDonation => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDonation)
    };
    const response = await fetch(
      'http://localhost:3001/api/v1/donations/',
      options
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Cannot post new donation at this time');
  }
};

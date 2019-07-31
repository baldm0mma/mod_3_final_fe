export const setAllAnimals = allAnimals => ({
  type: 'SET_ALL_ANIMALS',
  allAnimals
});

export const setErrorMessage = message => ({
  type: 'SET_ERROR_MESSAGE',
  message
});

export const toggleLoading = bool => ({
  type: 'TOGGLE_LOADING',
  bool
});

export const setDonationData = donations => ({
  type: 'SET_DONATION_DATA',
  donations
});

export const makeDonation = newDonation => ({
  type: 'MAKE_DONATION',
  newDonation
});

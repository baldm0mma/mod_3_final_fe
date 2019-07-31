export const setDonationsData = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'SET_DONATION_DATA':
      return action.donations;
    case 'MAKE_DONATION':
      return [...state, action.newDonation];
    default:
      return state;
  }
};

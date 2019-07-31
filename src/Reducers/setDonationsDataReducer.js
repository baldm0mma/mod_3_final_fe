export const setDonationsData = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'SET_DONATION_DATA':
      return action.donations;
    default:
      return state;
  }
};

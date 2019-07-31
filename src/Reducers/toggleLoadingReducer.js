export const toggleLoadingReducer = (state = true, action) => {
  const { type } = action;
  switch (type) {
    case 'TOGGLE_LOADING':
      return action.bool;
    default:
      return state;
  }
};

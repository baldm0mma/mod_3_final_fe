export const setErrorMessageReducer = (state = '', action) => {
  const { type } = action;
  switch (type) {
    case 'SET_ERROR_MESSAGE':
      return action.message;
    default:
      return state;
  }
};

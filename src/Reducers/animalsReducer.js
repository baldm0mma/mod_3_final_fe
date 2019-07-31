export const animalsReducer = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'SET_ALL_ANIMALS':
      return [...action.allAnimals];
    default:
      return state;
  }
};

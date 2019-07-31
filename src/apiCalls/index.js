export const getAllAnimals = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/rescue-animals');
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Cannot fetch animals at this time');
  }
};

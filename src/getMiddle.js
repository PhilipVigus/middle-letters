const getMiddle = (word) => {
  const middle = word.length / 2;
  return word.slice(middle, middle + 1);
};

export default getMiddle;

const getMiddle = (word) => {
  const middle = word.length / 2;

  if (word.length % 2 !== 0) {
    return word.slice(middle, middle + 1);
  } else {
    return word;
  }
};

export default getMiddle;

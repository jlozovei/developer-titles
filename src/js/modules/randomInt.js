const randomInt = (min, max, last) => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (last) {
    if (random === last) return randomInt(min, max);
    else return random;
  } else return random;
};

export default randomInt;

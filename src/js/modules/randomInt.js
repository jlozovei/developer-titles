const randomInt = (last, min, max) => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (random === last) return randomInt(min, max);
  else return random;
};

export default randomInt;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("*");
  }, 1000);
});

const twoStars = (star) => {
  return star + star;
};

const oneDot = (star) => {
  return star + ".";
};

const print = (val) => {
  console.log(val);
};

// Chaining them all together
promise
  .then(twoStars)
  .then(oneDot)
  .then(twoStars)
  .then(oneDot)
  .then(oneDot)
  .then(print);

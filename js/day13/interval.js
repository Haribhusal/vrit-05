let time = setInterval(() => {
  let date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(time);
}, 10000);

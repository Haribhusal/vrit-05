const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  let user = [
    { name: "Hari", address: "ktm" },
    { name: "Hari", address: "ktm" },
    { name: "Hari", address: "ktm" },
  ];
  if (res) {
    resolve(user);
  } else {
    reject("Something went wrong");
  }
});
promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);

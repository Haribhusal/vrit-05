const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const success = true; // Simulating success
    if (success) {
      resolve("Operation successful");
    } else {
      reject(new Error("Operation failed"));
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Operation successful
  })
  .catch((error) => {
    console.error(error); // Output: Error: Operation failed
  });

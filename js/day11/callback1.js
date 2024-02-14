// Example using callbacks
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 1000);
}

function processData(data) {
  console.log(data);
}

fetchDataWithCallback(processData);
console.log("Fetching data...");

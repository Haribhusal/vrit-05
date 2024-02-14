let a = 10;

async function fetchData() {
  //   let a = 10;
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
  //   console.log(a);
}

fetchData();
console.log("we can see that a is printed before data", a);

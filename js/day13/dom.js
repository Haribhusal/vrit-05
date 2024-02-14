let header = document.getElementById("header");
// console.dir(header);
// header.children[2].innerText = "Read More";

// header.children

// document.getElementById("myBtn").onclick = function () {
//   header.children[2].style.backgroundColor = "red";
// };

document.getElementById("myBtn").addEventListener("click", function () {
  header.children[2].style.backgroundColor = "red";
});

console.log(document.baseURI);

let name = "Hari";

localStorage.setItem("myname", name);

const button = document.getElementById("btn"); // Changed querySelector to getElementById
const h1 = document.querySelector(".box h1"); // Updated selector to target h1 inside .box
const p = document.querySelector(".box p"); // Updated selector to target p inside .box

button.addEventListener("click", getQuote);
async function getQuote() {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  const quote = data.content;
  const author = data.author;
  h1.innerText = quote;
  p.innerText = author;
//   console.log(data);
}

setInterval(() => {
  getQuote();
},3000);

const quote = document.querySelector(".quote");
const genrateQuote = document.querySelector(".quote-genrator");

const fetchQuote = () => {
  quote.innerHTML = ` <img src="assets/chuck.svg" alt="" />`;

  return fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((res) => {
      quote.innerText = res.value;
    })
    .catch((err) => {
      quote.innerHTML = `OOOPPPSSS! SOMETHING WENT WRONG  <img src="assets/chuck.svg" alt="" />`;
    });
};

window.addEventListener("load", fetchQuote);

genrateQuote.addEventListener("click", fetchQuote);

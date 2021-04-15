//https://type.fit/api/quotes -->>  Hitting this api to get data

const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
// setting up the URL
let realData = "";
const getNewQuotes = () => {
  let randomNumber = Math.floor(Math.random() * 1600);
  quotes.innerHTML = `${realData[randomNumber].text}`;
  author.innerHTML = `${realData[randomNumber].author}`;
};

const getQuotes = async () => {
  const url = "https://type.fit/api/quotes";
  try {
    let data = await fetch(url);
    realData = await data.json();
    getNewQuotes();
  } catch (e) {
    console.log(e);
  }
};
getQuotes();

btn.addEventListener("click", getNewQuotes);

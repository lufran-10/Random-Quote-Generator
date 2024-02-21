const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  displayQuote(data);
}

function displayQuote(data) {
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  let color = randColor();
  document.documentElement.style.setProperty("--color", color);
}

function postOnX() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "----by " +
      author.innerHTML,
    "X Window",
    "width=600",
    "height=300"
  );
}

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

getQuote(apiUrl);

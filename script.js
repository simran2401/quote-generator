const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

const getQuote = async () => {
  const res = await fetch('https://type.fit/api/quotes');
  const quotes = await res.json();
  const num = Math.floor(Math.random() * quotes.length);
  const item = quotes[num];
  const quoteText = item.text;
  const authorText = item.author;
  quote.innerText = quoteText;
  author.innerText = authorText;
};

getQuote();

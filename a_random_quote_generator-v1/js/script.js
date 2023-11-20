/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Each element may contain an additional "status" property, which indicates if the quote and its attribution have been confirmed by the author.
 * The statuses are correct as far as I know!
***/



quotes = [
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
    status: "Unconfirmed"
  }, {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    source: "Oscar Wilde",
    year: "1888",
    citation: "The Happy Prince and Other Stories",
    status: "Confirmed"
  }, {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King, Jr",
    year: 1957,
    citation: "Loving Our Enemies (Sermon)",
  }, {
    quote: "Any boss who sacks anyone for not turning up today is a bum.",
    source: "Bob Hawke",
    year: 1983,
    citation: "Public Speech",
    status: "Confirmed"
  }, {
    quote: "Humans need fantasy to be human. To be the place where the falling angle meets the rising ape.",
    source: "Death",
    citation: "Hogfather",
    year: 1996,
    status: "Confirmed"
  }, {
    quote: "Be the change you want to see in the world.",
    source: "Mahatma Ghandi",
    status: "Unconfirmed"
  }
]

// Returns a random quote object, but will not return the same quote currently displayed on the web page
function getRandomQuote() {
  // Get current quote to prevent re-selecting it
  const currentQuote = document.querySelector('.quote').innerHTML;
  let quoteNum = 0;
  // while-loop always executes at least once
  let newQuoteText = currentQuote;
  while (newQuoteText === currentQuote) { 
    // Generate new random number until non-matching quote is selected
    quoteNum = Math.floor(Math.random() * quotes.length);
    newQuoteText = quotes[quoteNum].quote;
  }
  return quotes[quoteNum];
}

// Return a random valid RGB value, i.e. from 0 to 255
function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

// Set the background color of the web page to a random RGB value
function setRandomBackgroundColor() {
  const newRGB = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
  document.body.style.backgroundColor = newRGB;
}

// Updates web page with new quote, appending citation and year if available
function printQuote() {
  const newQuote = getRandomQuote();
  // Start the HTML string, but don't close the "source" <p> tag yet
  let html = `<p class="quote">${newQuote.quote}</p>`;
  html += `<p class="source">${newQuote.source}`;
  // Append span elements for citation and year, if the quote includes them
  if ('citation' in newQuote && newQuote.citation !== "") {
    html += `<span class="citation">${newQuote.citation}</span>`
  }
  if ('year' in newQuote && newQuote.year !== "") {
    html += `<span class="year">${newQuote.year}</span>`
  }
  if ('status' in newQuote && newQuote.status !== "") {
    html += `<span class="confirmation">${newQuote.status}</span>`
  }
  // Always close out the "source" <p> tag
  html += `</p>`
  // Update HTML on the page
  document.getElementById('quote-box').innerHTML = html;
  // Update the background color every time a new quote is displayed
  setRandomBackgroundColor();
}

// Update quote automatically every ten seconds (also updates background color)
const intervalID = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
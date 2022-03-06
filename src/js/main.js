// Bootstrap JS
var bootstrap = require('bootstrap');

const MOON_POEMS = [
  {
    text: `The moon, dwindled and thinned to the fringe of a finger-nail held to the candle,\n
Or paring of paradisaïcal fruit, lovely in waning but lustreless,\n
Stepped from the stool, drew back from the barrow, of dark Maenefa the mountain;\n
A cusp still clasped him, a fluke yet fanged him, entangled him, not quit utterly …\n`,
  author: 'Gerard Manley Hopkins'
  },
  {
    text: `LEAVES of poplars pick Japanese prints against the west.\n	
Moon sand on the canal doubles the changing pictures.\n
The moon’s good-by ends pictures.\n	
The west is empty. All else is empty. No moon-talk at all now.\n	
Only dark listening to dark.`,
    author: 'Carl Sandburg'
  },
  {
    text: `The Moon was but a Chin of Gold\n
A Night or two ago—\n
And now she turns Her perfect Face\n
Upon the World below—\n
\n
Her Forehead is of Amplest Blonde—\n
Her Cheek—a Beryl hewn—\n
Her Eye unto the Summer Dew\n
The likest I have known—\n`,
  author: 'Emily Dickinson'
  }
]

function initPage() {
  randomMoonPoemOnClick();
  setCopyrightDate();
}

function randomMoonPoemOnClick() {
  const button = document.querySelector('#moon-button');
  button.addEventListener('click', getRandomPoem);
}

function getRandomPoem() {
  const figure = document.querySelector('#moon-quote');
  const randomPoem = MOON_POEMS[Math.floor((Math.random() * MOON_POEMS.length))];
  figure.querySelector('blockquote').innerHTML = randomPoem.text.split('\n').map(line => `<p>${line}</p>`).join('');
  figure.querySelector('figcaption').innerHTML = `— ${randomPoem.author}`;
}

function setCopyrightDate() {
  const year = new Date().getFullYear();
  const element = document.querySelector('#copyright-year');
  element.innerHTML = year;
}

initPage();
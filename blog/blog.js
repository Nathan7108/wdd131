const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap Book One: Magyk',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '★★★★'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase Book One: Sword of Summer',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  }
];

function toISODate(humanDate) {
  const d = new Date(humanDate);
  if (!isNaN(d)) return d.toISOString().split('T')[0];
  return humanDate;
}

function buildArticle(item) {
  const articleEl = document.createElement('article');
  articleEl.className = 'book-review';

  const meta = document.createElement('header');
  meta.className = 'review-meta';

  const timeEl = document.createElement('time');
  timeEl.setAttribute('datetime', toISODate(item.date));
  timeEl.textContent = item.date;
  meta.appendChild(timeEl);

  ['ages', 'genre', 'stars'].forEach(key => {
    const p = document.createElement('p');
    p.className = key === 'ages' ? 'age-range' : key === 'stars' ? 'rating' : 'genre';
    p.textContent = item[key];
    meta.appendChild(p);
  });

  articleEl.appendChild(meta);

  const content = document.createElement('div');
  content.className = 'review-content';

  const h2 = document.createElement('h2');
  h2.textContent = item.title;
  content.appendChild(h2);

  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = item.imgSrc;
  img.alt = item.imgAlt;
  figure.appendChild(img);
  content.appendChild(figure);

  const desc = document.createElement('p');
  desc.textContent = item.description + ' ';
  const more = document.createElement('a');
  more.href = '#';
  more.textContent = 'Read More…';
  desc.appendChild(more);
  content.appendChild(desc);

  articleEl.appendChild(content);
  return articleEl;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.reviews');
  if (!container) return console.error('No .reviews container found');
  articles.forEach(item => container.appendChild(buildArticle(item)));
});

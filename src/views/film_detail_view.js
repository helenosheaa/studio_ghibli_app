const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const FilmDetailView = function (container) {
  this.container = container;
};

FilmDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:selected-film-ready', (evt) => {
    const title = evt.detail;
    this.render(title);
  })
};

FilmDetailView.prototype.render = function (film) {
  this.container.innerHTML = '';

  const title = this.customCreateElement('h2', film.title);
  this.container.appendChild(title);

  const director = this.customCreateElement('p', `Directed by: ${film.director}`);
  this.container.appendChild(director);

  const releaseDate = this.customCreateElement('p', `Released: ${film.release_date}` );
  this.container.appendChild(releaseDate);

  const description = this.customCreateElement('p', `${film.description}` );
  this.container.appendChild(description);
};

FilmDetailView.prototype.customCreateElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;

  return element;
};

module.exports = FilmDetailView;

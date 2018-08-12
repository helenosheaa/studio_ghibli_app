const Films = require('./models/films.js');
const SelectView = require('./views/select_view.js');
const FilmDetailView = require('./views/film_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('select#film-select');
  const filmDropdown = new SelectView(selectElement);
  filmDropdown.bindEvents();

  const filmContainer = document.querySelector('div#film-container');
  const filmDetail = new FilmDetailView(filmContainer);
  filmDetail.bindEvents();

  const films = new Films;
  films.bindEvents();
});

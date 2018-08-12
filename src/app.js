const Films = require('./models/films.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('select#film-select');
  const filmDropdown = new SelectView(selectElement);
  filmDropdown.bindEvents();

  const films = new Films;
  films.bindEvents();
});

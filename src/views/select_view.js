const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:films-ready', (evt) => {
    const allFilms = evt.detail;
    this.populate(allFilms);
  });

  this.element.addEventListener('change', (evt) => {
    const titleIndex = evt.target.value;
    PubSub.publish('SelectView:change', titleIndex);
  });

};

SelectView.prototype.populate = function (allFilmsData) {
  allFilmsData.forEach((film, index) => {
      const option = document.createElement('option');
      option.textContent = film.title;
      option.value = index;
      this.element.appendChild(option);
  });
};

module.exports = SelectView;

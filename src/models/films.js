const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Films = function () {
  this.filmsData = [];
  this.titles = [];
}

Films.prototype.bindEvents = function () {
  this.getData();
  PubSub.subscribe('SelectView:change', (evt) => {
    const titleIndex = evt.detail;
  })
};

Films.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((data) => {
      this.filmsData = data;
      PubSub.publish('Films:films-ready', this.filmsData);
    })
    .catch((err) => {
      console.error(err);
    });

};

module.exports = Films;

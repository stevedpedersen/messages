export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  }

  postMessage() {
    this.$http.post('http://130.212.67.201:5000/api/message', {msg: this.message});
  }
}

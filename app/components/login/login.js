'use strict';

import app from '../app/app';

app.controller('d10loginController', function d10LoginController($scope, d10session, $state, $log) {

  this.login = function () {
    return d10session.login(this.username, this.password)
    .then(function (response) {
      console.log('logged !');
      $state.go('main');
    }, function (err) {
      console.log('Here I should display an error');
    });
  }.bind(this);

  this.username = '';
  this.password = '';
})
.directive('d10Login', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/login/login.html',
    controller: 'd10loginController as login'
  };
});

export default app;

'use strict';

let app = angular.module('d10', [
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'op.dynamicDirective',
  'ui.router',
  'd10-rest'
]).config(function ($stateProvider) {
  $stateProvider
  .state('index', {
    url: '',
    templateUrl: 'components/app/startup.html',
    controller: function ($state, d10API) {
      d10API.getUserinfos().then(function () {
        console.log('should redirect to main page');
        console.log($state.get());
        $state.go('main');
      }, function () {
        console.log('should redirect to login page');
        $state.go('login');
      });
    }
  })
  .state('login', {
    template: '<d10-login></d10-login>'
  });
});

export default app;
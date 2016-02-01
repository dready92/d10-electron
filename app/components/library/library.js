'use strict';

const app = angular.module('d10-library', ['d10-rest', 'op.dynamicDirective'])
.directive('d10SongsMenuEntry', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<a ui-sref="main.listing.titles" href="">Songs by title</a>'
  };
})
.config(function (dynamicDirectiveServiceProvider) {
  let dd = new dynamicDirectiveServiceProvider.DynamicDirective(true, 'd10-songs-menu-entry');

  dynamicDirectiveServiceProvider.addInjection('side-menu-main-links', dd);
});

export default app;

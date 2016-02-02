'use strict';

const app = angular.module('d10-library', ['d10-rest', 'op.dynamicDirective'])
.directive('d10SongsMenuEntry', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<a ui-sref="main.listing.titles" href="">Songs by title</a>'
  };
})
.directive('d10LibraryListingTitles', function (d10API) {
  function d10LibraryListingTitlesController() {
    d10API.listSongsSortedByTitle()
    .then((response) => {
      this.songs = response;
    });
  }

  return {
    restrict: 'E',
    templateUrl: 'components/library/listing-titles.html',
    controller: d10LibraryListingTitlesController,
    controllerAs: 'songsByTitle'
  };

})
.config(function ($stateProvider, dynamicDirectiveServiceProvider) {
  let dd = new dynamicDirectiveServiceProvider.DynamicDirective(true, 'd10-songs-menu-entry');

  dynamicDirectiveServiceProvider.addInjection('side-menu-main-links', dd);

  $stateProvider
  .state('main.listing', {
    url: '',
    templateUrl: 'components/library/listing.html'
  })
  .state('main.listing.titles', {
    template: '<d10-library-listing-titles></d10-library-listing-titles>'
  });
});

export default app;

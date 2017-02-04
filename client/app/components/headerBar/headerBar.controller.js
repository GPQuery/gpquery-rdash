(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .controller('HeaderBarController', HeaderBarController);

  /** @ngInject */
  function HeaderBarController(moment) {
    var vm = this;

    vm.seasonMin = 2012;
    vm.seasonMax = moment().format('YYYY');
    vm.seasonSelected = parseInt(vm.seasonMax);

    vm.seasonList = [];
    vm.locationList = [];

    activate();

    function activate() {
      populateSeasons();
    }

    function populateSeasons() {
      for(var i = vm.seasonMax; i >= vm.seasonMin; i--) {
        vm.seasonList.push(i);
      }
    }

  }

})();

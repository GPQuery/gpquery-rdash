(function() {
  'use strict';

  angular
    .module('gpquery.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(driverStandings) {
    var vm = this;

    activate();

    function activate() {
      getDriverStandings();
    }

    function getDriverStandings() {
      vm.driverStandingsList = driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    }

  }

})();

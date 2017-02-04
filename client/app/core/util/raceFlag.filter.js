(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .filter('raceFlag', raceFlag);

  /** @ngInject */
  function raceFlag(Flag) {
    return raceFlagFilter;

    function raceFlagFilter(race) {
      var result = Flag.getByRaceName(race);
      return angular.isUndefined(result) ? race : result;
    }
  }

})();

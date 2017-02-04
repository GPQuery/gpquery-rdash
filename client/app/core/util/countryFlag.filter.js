(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .filter('countryFlag', countryFlag);

  /** @ngInject */
  function countryFlag(Flag) {
    return countryFlagFilter;

    function countryFlagFilter(country) {
      var result = Flag.getByCountry(country);
      return angular.isUndefined(result) ? country : result;
    }
  }

})();

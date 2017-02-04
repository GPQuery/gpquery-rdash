(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .filter('nationalityFlag', nationalityFlag);

  /** @ngInject */
  function nationalityFlag(Flag) {
    return nationalityFlagFilter;

    function nationalityFlagFilter(input) {
      var result = Flag.getByDemonym(input);
      return angular.isUndefined(result) ? input : result;
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log) {

    $rootScope.app = {
      sidebar: true
    };

    $log.debug('runBlock end');
  }

})();

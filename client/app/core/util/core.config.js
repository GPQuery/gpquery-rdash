(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .config(coreConfig);

  /** @ngInject */
  function coreConfig($logProvider) {

    $logProvider.debugEnabled(true);

  }

})();

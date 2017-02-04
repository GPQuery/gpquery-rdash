(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(routeHelperProvider) {

    /** @ngInject */
    var resolveAlways = {
    //  ready: function(dataservice) {
    //    return dataservice.ready();
    //  }
    };

    routeHelperProvider.configure({
    //  docTitle: '',
      resolveAlways: resolveAlways
    });

  }

})();

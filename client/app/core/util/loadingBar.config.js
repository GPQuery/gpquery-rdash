(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .config(loadingConfig);

  /** @ngInject */
  function loadingConfig(cfpLoadingBarProvider) {

    /**
     * Configure angular-loading-bar
     *
     * @property {object} cfgLoadingBarProvider - Configuration object
     * @link https://github.com/chieffancypants/angular-loading-bar
     */
    cfpLoadingBarProvider.includeSpinner    = true;
    cfpLoadingBarProvider.includeBar        = false;
    //cfpLoadingBarProvider.spinnerTemplate   = '<div id="loading-bar-spinner">' +
    //                                            '<span class="fa fa-7x fa-spinner">' +
    //                                            'Loading...' +
    //                                          '</div>';
    cfpLoadingBarProvider.parentSelector    = 'body';
    cfpLoadingBarProvider.spinnerTemplate   = '<div id="loading-bar-spinner">'+
                                                '<div class="spinner-icon"></div>'+
                                              '</div>';

  }

})();

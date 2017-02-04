(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .config(toastrConfig);

  /** @ngInject */
  function toastrConfig(toastrConfig) {


    /**
     * Container Configuration for Toastr
     *
     * @property {object} toastrConfig - Configuration object
     * @link https://github.com/Foxandxss/angular-toastr#toastr-customization
     */
    angular.extend(toastrConfig, {
      autoDismiss:            false, // true,
      containerId:            'toast-container',
      maxOpened:              0,
      newestOnTop:            true,
      positionClass:          'toast-bottom-right',
      preventDuplicates:      true,
      preventOpenDuplicates:  false,
      target:                 'body'
    });


    /**
     * Global Toast Configuration for Toastr
     *
     * @property {object} toastrConfig - Configuration object
     * @link https://github.com/Foxandxss/angular-toastr#toastr-customization
     */
    angular.extend(toastrConfig, {
      allowHtml:        true,
      closeButton:      true,
      closeHtml:        '<button>&times;</button>',
      extendedTimeOut:  2500,
      iconClasses: {
        error:    'toast-error',
        info:     'toast-info',
        success:  'toast-success',
        warning:  'toast-warning'
      },
      messageClass:     'toast-message',
      progressBar:      false,
      tapToDismiss:     false, // true,
      timeOut:          5000,
      titleClass:       'toast-title',
      toastClass:       'toast gp-toast'
    });

  }

})();

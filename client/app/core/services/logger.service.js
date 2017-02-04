(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('logger', loggerFactory);

  /**
   * @ngdoc service
   * @name logger
   *
   * @description
   * Reusable logging service that displays in browser window with angular-toastr
   *
   * @requires angular-toastr
   * @link https://github.com/Foxandxss/angular-toastr
   */
  /** @ngInject */
  function loggerFactory($log, toastr) {

    var config = {
      extendedTimeOut:  1250,
      progressBar:      true,
      tapToDismiss:     true,
      timeOut:          2500
    };

    var service = {
      showToasts: true,
      error:      error,
      info:       info,
      success:    success,
      warn:       warning,
      warning:    warning,
      log:        $log.log
    };

    return service;

    /**
     * Display error toast
     *
     * @param {string} message
     * @param {*} data
     * @param {string} title
     */
    function error(message, data, title){
      toastr.error(message, title, config);
      $log.error('Error: ' + message, data);
    }

    /**
     * Display info toast
     *
     * @param {string} message
     * @param {*} data
     * @param {string} title
     */
    function info(message, data, title){
      toastr.info(message, title, config);
      $log.info('Info: ' + message, data);
    }

    /**
     * Display success toast
     *
     * @param {string} message
     * @param {*} data
     * @param {string} title
     */
    function success(message, data, title) {
      toastr.success(message, title, config);
      $log.debug('Success: ' + message, data);
    }

    /**
     * Display warning toast
     *
     * @param {string} message
     * @param {*} data
     * @param {string} title
     */
    function warning(message, data, title) {
      toastr.warning(message, title, config);
      $log.warn('Warning: ' + message, data);
    }

  }
})();

(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Driver', DriverFactory);

  /**
   * @ngdoc   service
   * @name    Driver
   * @module  gpquery.core
   *
   * @description
   * Data service for Driver Information
   *
   * @link https://docs.angularjs.org/api/ngResource/service/$resource
   * @link https://docs.angularjs.org/api/ng/service/$http
   * @link http://ergast.com/mrd/methods/drivers/
   */
  /** @ngInject */
  function DriverFactory($q, $log, Ergast) {
    var service = {
      getInfo: getInfo
    };
    return service;

    function getInfo(params) {

    }

  }

})();

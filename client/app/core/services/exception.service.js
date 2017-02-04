(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('exception', exceptionFactory);

  /**
   * @ngdoc service
   * @name  exception
   *
   * @description
   * Reusable exception service for `$resource` that logs exception messages
   *
   * @requires angular-toastr
   * @link https://github.com/Foxandxss/angular-toastr
   */
  /** @ngInject */
  function exceptionFactory($q, logger) {
    var service = {
      catcher: catcher
    };

    return service;

    function catcher(message) {
      return function(e) {
        var thrownDescription;
        var newMessage;
        if (e.data && e.data.description) {
          thrownDescription = '\n' + e.data.description;
          newMessage = message + thrownDescription;
        }
        e.data.description = newMessage;
        logger.error(newMessage);
        return $q.reject(e);
      };
    }

  }
})();

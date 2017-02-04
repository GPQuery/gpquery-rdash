(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('gpInterceptor', gpInterceptorFactory)
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('gpInterceptor');
    });

  /**
   * @ngdoc service
   * @name gpInterceptor
   * @module gpquery.core
   * @description
   * For purposes of global error handling, authentication, or any kind of synchronous or
   * asynchronous pre-processing of request or postprocessing of responses, it is desirable to be
   * able to intercept requests before they are handed to the server and responses before they are
   * handed over to the application code that initiated these requests. The interceptors leverage
   * the promise APIs to fulfill this need for both synchronous and asynchronous pre-processing.
   *
   * The interceptors are service factories that are registered with the `$httpProvider` by adding
   * them to the `$httpProvider.interceptors` array. The factory is called and injected with
   * dependencies (if specified) and returns the interceptor.
   *
   * There are two kinds of interceptors (and two kinds of rejection interceptors):
   *
   *  - `request` - interceptors get called with a http `config` object. The function is free to
   *    modify the `config` object or create a new one. The function needs to return the `config`
   *    object directly, or a promise containing the `config` or a new `config` object.
   *
   *  - `requestError` - interceptor gets called when a previous interceptor threw an error or
   *    resolved with a rejection.
   *
   *  - `response` - interceptors get called with http `response` object. The function is free to
   *    modify the `response` object or create a new one. The function needs to return the
   *    `response` object directly, or as a promise containing the `response` or a new `response`
   *    object.
   *
   *  - `responseError` - interceptor gets called when a previous interceptor threw an error or
   *    resolved with a rejection.
   *
   * @link https://docs.angularjs.org/api/ng/service/$http#interceptors
   * @link https://docs.angularjs.org/api/ng/service/$q
   */
  /** @ngInject */
  function gpInterceptorFactory($q) {
    var service = {
      request: request,
      requestError: requestError,
      response: response,
      responseError: responseError
    };
    return service;

    /**
     * Request interceptor called with an `$http` configuration object.
     * @ngdoc function
     * @description
     * Modifies or creates new `config` object. Returns either: the `config` object directly; a
     * promise containing the `config` object; or a new `config` object.
     * @param {Object} config - an `$http` configuration object
     * @returns {Object} - a `config` object or a promise containing a `config` object
     * @link https://docs.angularjs.org/api/ng/service/$http#usage
     */
    function request(config) {
      // do something on success
      return config;
    }

    /**
     * Request error interceptor that gets called when a previous interceptor threw an error or
     * resolved with a rejection.
     * @ngdoc function
     * @description
     *
     * Attempts to recover the error or rejection and returns a response or new promise. Otherwise
     * it returns a promise that is resolved as rejected with the original reason.
     * @param {*} rejection - error or rejection resolution
     * @returns {Promise} - promise that was already resolved as rejected with the original reason
     * @link https://docs.angularjs.org/api/ng/service/$q#reject
     */
    function requestError(rejection) {
      // do something on error
      //if (rejection.if (canRecover(rejection)) {
        //return responseOrNewPromise;
      //}
      return $q.reject(rejection);
    }

    /**
     * Response interceptor called with an `$http` response object.
     * @ngdoc function
     * @description
     * Modifies or creates new `response` object. Returns either: the `response` object directly;
     * a promise containing the `response` object or a new `response` object.
     * @param {Object} response - an `$http` response object
     * @returns {Object|Promise} - a `response` object or a promise containing a `response` object
     * @link https://docs.angularjs.org/api/ng/service/$http#usage
     */
    function response(response) {
      // do something on success
      return response;
    }

    /**
     * Response error interceptor that gets called when a previous interceptor threw an error or
     * resolved with a rejection.
     * @ngdoc function
     * @description
     *
     * Attempts to recover the error or rejection and returns a response or new promise. Otherwise
     * it returns a promise that is resolved as rejected with the original reason.
     * @param {*} rejection - error or rejection resolution
     * @returns {Promise} - promise that was already resolved as rejected with the original reason
     * @link https://docs.angularjs.org/api/ng/service/$http#general-usage
     */
    function responseError(rejection) {
      // do something on error
      //if (rejection.if (canRecover(rejection)) {
        //return responseOrNewPromise;
      //}
      return $q.reject(rejection);
    }

  }

})();

(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Ergast', ErgastFactory);

  /**
   * Angular-Resource data service for Ergast Developer API
   *
   * @usage
   * ```js
   * // This retrieves the race results for Round 1 of 2012:
   * var params = {
   *   season: '2012',
   *   round: '1',
   *   query: 'results'
   * };
   * Ergast.get(params).$promise.then(function(response) {
   *   $log.info(response);
   * }, function(errorMsg) {
   *   $log.error(errorMsg);
   * });
   * ```
   *
   * @see https://docs.angularjs.org/api/ngResource/service/$resource
   * @see https://docs.angularjs.org/api/ng/service/$http
   * @see http://ergast.com/mrd/
   */
  /** @ngInject */
  function ErgastFactory($resource) {

    // Base URL for `$resource` object
    // ------------------------------

    var url = 'http://ergast.com/api/f1/:season/:round/:query.json';

    // Default parameters for `$resource` object
    // ------------------------------

    var paramDefaults = {
      season: '@season',
      round:  '@round',
      query:  '@query'
      //limit:  '30',   // Default: 30; Maximum: 1000
      //offset: '0'     // Default: 0
    };

    // Custom actions for `$resource` object
    // ------------------------------

    var actions = {};


    //  Query Seasons
    // ------------------------------

    actions.getSeasons = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'seasons'
      }
    };


    //  Query Schedule
    // ------------------------------

    actions.getSchedule = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'schedule'
      }
    };


    //  Query Results
    // ------------------------------

    actions.getResults = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'results'
      }
    };


    //  Query Qualifying
    // ------------------------------

    actions.getQualifying = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'qualifying'
      }
    };


    //  Query DriverStandings
    // ------------------------------

    actions.getDriverStandings = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'driverStandings'
      }
    };


    //  Query ConstructorStandings
    // ------------------------------

    actions.getConstructorStandings = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructorStandings'
      }
    };


    //  Query Drivers
    // ------------------------------

    actions.getDrivers = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'drivers'
      }
    };


    //  Query Constructors
    // ------------------------------

    actions.getConstructors = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructors'
      }
    };


    //  Query Circuits
    // ------------------------------

    actions.getCircuits = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'circuits'
      }
    };


    //  Query Status
    // ------------------------------

    actions.getStatus = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'status'
      }
    };


    //  Query Laps
    // ------------------------------

    actions.getLaps = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'laps'
      }
    };


    //  Query Pitstops
    // ------------------------------

    actions.getPitstops = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'pitstops'
      }
    };

    return $resource(url, paramDefaults, actions);

  }

})();

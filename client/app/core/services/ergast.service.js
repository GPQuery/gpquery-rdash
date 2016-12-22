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


    // Query Seasons
    // ------------------------------

    actions.getSeasons = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'seasons'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/seasons.json'
    };


    // Query Schedule
    // ------------------------------

    actions.getSchedule = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'schedule'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/schedule.json'
    };


    // Query Results
    // ------------------------------

    actions.getResults = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'results'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/results.json'
    };


    // Query Qualifying
    // ------------------------------

    actions.getQualifying = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'qualifying'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/qualifying.json'
    };


    // Query DriverStandings
    // ------------------------------

    actions.getDriverStandings = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'driverStandings'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/driverStandings.json'
    };


    // Query ConstructorStandings
    // ------------------------------

    actions.getConstructorStandings = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructorStandings'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/constructorStandings.json'
    };


    // Query Drivers
    // ------------------------------

    actions.getDrivers = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'drivers'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/drivers.json'
    };


    // Query Constructors
    // ------------------------------

    actions.getConstructors = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructors'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/constructors.json'
    };


    // Query Circuits
    // ------------------------------

    actions.getCircuits = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'circuits'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/circuits.json'
    };


    // Query Status
    // ------------------------------

    actions.getStatus = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'status'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/status.json'
    };


    // Query Laps
    // ------------------------------

    actions.getLaps = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'laps'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/laps.json'
    };


    // Query Pitstops
    // ------------------------------

    actions.getPitstops = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'pitstops'
      }//,
      //url: 'http://ergast.com/api/f1/:season/:round/pitstops.json'
    };

    return $resource(url, paramDefaults, actions);

  }

})();

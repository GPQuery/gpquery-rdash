(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Ergast', ErgastFactory);

  /**
   * `$resource` data service for Ergast Developer API
   *
   * @link https://docs.angularjs.org/api/ngResource/service/$resource
   * @link https://docs.angularjs.org/api/ng/service/$http
   * @link http://ergast.com/mrd/
   */
  /** @ngInject */
  function ErgastFactory($resource) {

    // Base URL for `$resource` object
    // ------------------------------

    //var url = 'http://ergast.com/api/f1/:season/:round/:query.json';
    var url = 'http://ergast.com/api/f1/:season/:round/:query.json';
    //drivers/:driver/constructors/:constructor/circuits/:circuit

    // Default parameters for `$resource` object
    // ------------------------------

    var paramDefaults = {
      season: '@season',
      round:  '@round',
      query:  '@query'
      //limit:  '30',   // Default: 30; Maximum: 1000
      //offset: '0'     // Default: 0
    };

    //  Custom actions for `$resource` object
    // ------------------------------

    var actions = {
      get: {
        method: 'GET',
        cache:  true,
        params: {
          season: '@season',
          round:  '@round',
          query:  '@query'
        },
        transformResponse: function(data) {
          return angular.fromJson(data).MRData;
        }
      }
    };


    //  Seasons
    // ------------------------------

    actions.getSeasons = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'seasons'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Race Schedule
    // ------------------------------

    actions.getSchedule = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'races'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Race Results
    // ------------------------------

    actions.getResults = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'results'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Qualifying Results
    // ------------------------------

    actions.getQualifying = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'qualifying'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Driver Standings
    // ------------------------------

    actions.getDriverStandings = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'driverStandings'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }

    };


    //  Constructor Standings
    // ------------------------------

    actions.getConstructorStandings = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructorStandings'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Driver Information
    // ------------------------------

    actions.getDrivers = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        query:  'drivers'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Constructor Information
    // ------------------------------

    actions.getConstructors = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        query:  'constructors'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Circuit Information
    // ------------------------------

    actions.getCircuits = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'circuits'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Finishing Status
    // ------------------------------

    actions.getStatus = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'status'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Lap Times
    // ------------------------------

    actions.getLaps = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'laps'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Pit Stops
    // ------------------------------

    actions.getPitstops = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'pitstops'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };


    //  Races by Season
    // ------------------------------

    actions.getRaces = {
      method: 'GET',
      cache:  true,
      params: {
        season: '@season',
        query:  'races'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData;
      }
    };

    return $resource(url, paramDefaults, actions);

  }

})();

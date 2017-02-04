(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Race', RaceFactory);

  /**
   * @ngdoc service
   * @name Race
   * @module gpquery.core
   *
   * @description
   * Data service for Race & Results Queries.
   *
   * Query Types:
   *  - circuits
   *  - constructors
   *  - drivers
   *  - qualifying
   *  - results
   *  - races
   *  - seasons
   *  - status
   *
   * Param Types:
   * @param {number=} season
   * @param {number=} round
   * @param {string=} driver      - `/drivers/:driverId`
   * @param {string=} constructor - `/constructors/:constructorId`
   * @param {number=} results     - `/results/:position`
   * @param {number=} grid        - `/grid/:position`
   * @param {number=} fastest     - `/fastest/:rank`
   * @param {string=} circuit     - `/circuit/:circuitId`
   * @param {number=} status      - `/status/:statusId`
   * @link https://docs.angularjs.org/api/ngResource/service/$resource
   * @link https://docs.angularjs.org/api/ng/service/$http
   * @returns {Object} resource class object with default methods and actions
   */
  /** @ngInject */
  function RaceFactory($resource) {

    var url = 'http://ergast.com/api/f1/:season/:round/:key1/:val1/:key2/:val2/:key3/:val3/:key4/:val4/:query.json';

    var paramDefaults = {
      season: '@season',
      round:  '@round',
      query:  '@query',
      key1:   '@key1',
      val1:   '@val1',
      key2:   '@key2',
      val2:   '@val2',
      key3:   '@key3',
      val3:   '@val3',
      key4:   '@key4',
      val4:   '@val4'
    };

    var actions = {};

    /**
     * Seasons
     *
     * @ngdoc   method
     * @name    Race.getSeasons
     *
     * @param {number=} round
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {promise}
     */
    actions.getSeasons = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'seasons'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.SeasonTable;
      }
    };

    /**
     * Circuits Information
     *
     * @ngdoc   method
     * @name    Race.getCircuits
     *
     * @param {number}  season
     * @param {number=} round
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {promise}
     */
    actions.getCircuits = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'circuits'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.CircuitTable;
      }
    };

    /**
     * Constructors Information
     *
     * @ngdoc   method
     * @name    Race.getConstructors
     *
     * @param {number}  season
     * @param {number=} round
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {Promise}
     */
    actions.getConstructors = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructors'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.ConstructorTable;
      }
    };

    /**
     * Drivers Information
     *
     * @ngdoc   method
     * @name    Race.getDrivers
     *
     * @param {number}  season
     * @param {number=} round
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {Promise}
     */
    actions.getDrivers = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'drivers'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.DriverTable;
      }
    };

    /**
     * Race Schedule
     *
     * @ngdoc   method
     * @name    Race.getSchedule
     *
     * @param {number}  season
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {Promise}
     */
    actions.getSchedule = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'races'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.RaceTable;
      }
    };

    /**
     * Race Results
     *
     * @ngdoc   method
     * @name    Race.getResults
     *
     * @param {number}  season
     * @param {number=} round
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {Promise}
     */
    actions.getResults = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'results'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.RaceTable;
      }
    };

    /**
     * Qualifying Results
     *
     * @ngdoc   method
     * @name    Race.getQualifying
     *
     * @param {number}  season
     * @param {number=} round
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {Promise}
     */
    actions.getQualifying = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'qualifying'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.RaceTable;
      }
    };

    /**
     * Finishing Status
     *
     * @ngdoc   method
     * @name    Race.getStatus
     *
     * @param {number}  season
     * @param {number=} round
     * @param {string=} driver      - `/drivers/:driverId`
     * @param {string=} constructor - `/constructors/:constructorId`
     * @param {number=} results     - `/results/:position`
     * @param {number=} grid        - `/grid/:position`
     * @param {number=} fastest     - `/fastest/:rank`
     * @param {string=} circuit     - `/circuit/:circuitId`
     * @param {number=} status      - `/status/:statusId`
     *
     * @returns {Promise}
     */
    actions.getStatus = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'status'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.StatusTable;
      }
    };

    return $resource(url, paramDefaults, actions);

  }

})();

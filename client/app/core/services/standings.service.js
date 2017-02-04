(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('Standings', StandingsFactory);

  /**
   * @ngdoc service
   * @name Standings
   * @module gpquery.core
   *
   * @description
   * `$resource` data service for Ergast Standings Queries
   *
   * @link https://docs.angularjs.org/api/ngResource/service/$resource
   * @link https://docs.angularjs.org/api/ng/service/$http
   * @returns {Object} resource class object with default methods and actions
   */
  /** @ngInject */
  function StandingsFactory($resource) {

    var url = 'http://ergast.com/api/f1/:season/:round/:query.json';

    var paramDefaults = {
      season: '@season',
      round:  '@round',
      query:  '@query'
    };

    var actions = {};

    actions.getDriverStandings = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'driverStandings'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.StandingsTable;
      }
    };

    actions.getConstructorStandings = {
      method:   'GET',
      cache:    true,
      params: {
        season: '@season',
        round:  '@round',
        query:  'constructorStandings'
      },
      transformResponse: function(data) {
        return angular.fromJson(data).MRData.StandingsTable;
      }
    };

    return $resource(url, paramDefaults, actions);

  }

})();

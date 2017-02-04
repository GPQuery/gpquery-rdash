(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .factory('GPQuery', GPQueryFactory);

  /**
   * GPQuery Data Factory to call multiple GET requests
   *
   * @description
   * Custom factory for injection into controllers in order to
   * aggregate data received from multiple `GET` requests
   */
  /** @ngInject */
  function GPQueryFactory() {//($http, $location, $q, $log, Ergast) {
    //var readyPromise;

    //var service = {
      //getOverview: getOverview,
      //ready: ready
    //};

    //return service;

    /**
     * Retrieves data for `overview` state:
     *
     * @query
     * ```
     * //  Previous Round Information
     * // ------------------------------
     * // http://ergast.com/api/f1/current/last/results.json
     *
     * var raceItem = response.MRData.RaceTable.Races[0];
     *
     * // Race & Circuit Info
     * raceItem.season
     * raceItem.round
     * raceItem.raceName
     * raceItem.Circuit.circuitName
     * raceItem.Circuit.Location.locality
     * raceItem.Circuit.Location.country
     * raceItem.date
     * raceItem.time
     *
     * // Race Results
     * var resultList = response.MRData.RaceTable.Races[0].Results[]
     *
     * resultList[i].position                 <= 3      // Podium
     * resultList[i].grid                     == 1      // Pole Position
     * resultList[i].Driver.givenName
     * resultList[i].Driver.familyName
     * resultList[i].Driver.nationality
     * resultList[i].Constructor.name
     * resultList[i].FastestLap.rank          == 1      // Fastest Lap
     * resultList[i].FastestLap.Time.time
     * resultList[i].AverageSpeed.speed       Math.max  // Highest Avg Speed
     * resultList[i].AverageSpeed.units
     *
     *
     * //  Current/Upcoming Schedule
     * // ------------------------------
     * // http://ergast.com/api/f1/2017/races.json
     *
     * var raceList = response.MRData.RaceTable.Races[]
     *
     * // Race & Circuit Info
     * raceList[0].season
     * raceList[0].round
     * raceList[0].raceName
     * raceList[0].Circuit.circuitName
     * raceList[0].Circuit.Location.locality
     * raceList[0].Circuit.Location.country
     * raceList[0].date                       moment()  // Upcoming Race
     * raceList[0].time                       moment()  // Countdown Timer
     *
     *
     * //  Current/Previous Driver Standings
     * // ------------------------------
     * // http://ergast.com/api/f1/current/last/driverStandings.json
     *
     * var driverStandingsList = response.MRData.StandingsTable.StandingsLists.DriverStandings[]
     *
     * driverStandingsList[i].position        Math.max  // Winner
     * driverStandingsList[i].points
     * driverStandingsList[i].wins
     * driverStandingsList[i].Driver
     * driverStandingsList[i].Constructors
     *
     *
     * //  Current/Previous Constructor Standings
     * // ------------------------------
     * // http://ergast.com/api/f1/current/last/constructorStandings.json
     *
     * constructorStandingsList = response.MRData.StandingsTable.StandingsLists.ConstructorStandings[]
     *
     * constructorStandingsList[i].position   Math.max  // Winner
     * constructorStandingsList[i].points
     * constructorStandingsList[i].wins
     * constructorStandingsList[i].Constructors
     * ```
     */
/*    function getOverview() {
      angular.forEach(params, function(value, key) {

      })
      var params = params !== undefined ? params : {};

      return Ergast.get(params).$promise.then(queryComplete, queryFailed);
    }

    function queryComplete(response) {
      $log.info('queryComplete()', response);
      return response;
    }

    function queryFailed(errorMsg) {
      $log.error('XHR failed for query().\n' + angular.toJson(error, true));
    }

    function getReady() {
      if (!readyPromise) {
        $log.info('Primed the app data');
        readyPromise = $q.when(service);
      }
      return readyPromise;
    }

    function ready(promisesArray) {
      return getReady()
      .then(function() {
        return promisesArray ? $q.all(promisesArray) : readyPromise;
      })
      .catch(function() {
        $log.warn('GPQueryFactory ready() function failed');
      });
    }
*/

  }

})();

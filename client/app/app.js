'use strict';

angular.module('gpquery', [


    //  Common & Shared Modules
    // ------------------------------

    'gpquery.core',
    'gpquery.components',
    'gpquery.dashboard',


    //  Feature Area Modules
    // ------------------------------

    'gpquery.current',
    'gpquery.circuits',
    'gpquery.constructors',
    'gpquery.drivers',
    'gpquery.races',
    'gpquery.seasons',
    'gpquery.standings'


])

  /**
   * Configure some application routes
   */
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url:          '/home',
        templateUrl:  'app/dashboard/home/home.html',
        controller:   'HomeController',
        controllerAs: 'main',
        resolve: {
          $title: function() {
            return 'Home';
          },
          $bodyClass: function() {
            return 'home-page';
          },
          data: function(webDevTec) {
            return webDevTec.getTec();
          }
        }
      })
      .state('constructors', {
        url:          '/constructors',
        templateUrl:  'app/constructors/constructors.html',
        controller:   'ConstructorsController',
        controllerAs: 'main',
        resolve: {
          $title: function() {
            return 'Constructors';
          },
          $bodyClass: function() {
            return 'constructors';
          },
          constructors: function(Ergast, logger) {
            return Ergast.getConstructors({season: '2016'}).$promise.then(function(response) {
              return response;
            }, function(errorMsg) {
              logger.warn('Error:', errorMsg);
            })
          }
        }
      })
      .state('seasons', {
        url:          '/seasons',
        templateUrl:  'app/seasons/seasons.html',
        controller:   'SeasonsController',
        controllerAs: 'main',
        resolve: {
          $title: function() {
            return 'Seasons';
          },
          $bodyClass: function() {
            return 'seasons';
          },
          seasons: function(Ergast, logger) {
            return Ergast.getSeasons({season: '2016'}).$promise.then(function(response) {
              return response;
            }, function(errorMsg) {
              logger.warn('Error:', errorMsg);
            })
          }
        }
      })
      .state('standings', {
        url:          '/standings',
        templateUrl:  'app/standings/standings.html',
        controller:   'StandingsController',
        controllerAs: 'main',
        resolve: {
          $title: function() {
            return 'Standings';
          },
          $bodyClass: function() {
            return 'standings';
          },
          standings: function(Ergast, logger) {
            return Ergast.getStandings({standing: '2016'}).$promise.then(function(response) {
              return response;
            }, function(errorMsg) {
              logger.warn('Error:', errorMsg);
            })
          }
        }
      });




    $urlRouterProvider
      .when('',       '/home')
      .when('/main',  '/home')
      .otherwise('/');

    $locationProvider.html5Mode(true);

  });


(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope) {

    $rootScope.app = {
      sidebar: {
        isOpen: true
      },
      navigation: {
      }
    };

    $rootScope.app.navigation.sections = [
      {
        type: 'title'//,
        //name: 'Races & Race Results'
      }, {
        item: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        link: 'current',
        icon: 'fa fa-dashboard'
      }, {
        item: 'seasons',
        name: 'Seasons',
        type: 'link',
        link: 'seasons',
        icon: 'rf rf-wreath',
        tabs: [
          {
            item: 'Information',
            name: 'Driver Information',
            type: 'tab',
            link: 'driverInfo'
          }, {
            item: 'driverStandings',
            name: 'Driver Standings',
            type: 'tab',
            link: 'driverStandings'
          }, {
            item: 'constructorStandings',
            name: 'Constructor Standings',
            type: 'tab',
            link: 'constructorStandings'
          }
        ]
      }, {
        item: 'races',
        name: 'Races',
        type: 'link',
        link: 'races',
        icon: 'rf rf-car-formula',
        tabs: [{
            item: 'results',
            name: 'Race Results',
            type: 'tab',
            link: 'results'
          }, {
            item: 'qualifying',
            name: 'Qualifying Results',
            type: 'tab',
            link: 'qualifying'
          }
        ]
      }, {
        item: 'circuits',
        name: 'Circuits',
        type: 'link',
        link: 'circuits',
        icon: 'rf rf-track'
      }, {
        type: 'title'//,
        //name: 'Drivers & Constructors'
      }, {
        item: 'drivers',
        name: 'Drivers',
        type: 'link',
        link: 'drivers',
        icon: 'rf rf-helmet',
        tabs: [
          {
            item: 'driverInfo',
            name: 'Driver Information',
            type: 'tab',
            link: 'driverInfo'
          }, {
            item: 'driverStandings',
            name: 'Driver Standings',
            type: 'tab',
            link: 'driverStandings'
          }
        ]
      }, {
        item: 'constructors',
        name: 'Constructors',
        type: 'link',
        link: 'constructors',
        icon: 'rf rf-team',
        tabs: [
          {
            item: 'constructorInfo',
            name: 'Constructor Information',
            type: 'tab',
            link: 'constructorInfo'
          }, {
            item: 'constructorStandings',
            name: 'Constructor Standings',
            type: 'tab',
            link: 'constructorStandings'
          }
        ]
      }, {
        type: 'title'//,
        //name: 'Lap Times & Pit Stops'
      }, {
        item: 'lapTimes',
        name: 'Lap Times',
        type: 'link',
        link: 'laps',
        icon: 'rf rf-stopwatch',
        mode: 'disabled'
      }, {
        item: 'pitStops',
        name: 'Pit Stops',
        type: 'link',
        link: 'pitstops',
        icon: 'rf rf-crew',
        mode: 'disabled'
      }
    ];


  }

})();

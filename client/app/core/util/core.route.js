(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .config(routerConfig)
    .run(routerRunBlock);

  /** @ngInject */
  function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {




    /* State Configurations
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    $stateProvider
      .state('dashboard', {
        url:          '/',
        templateUrl:  'app/dashboard/dashboard.html',
        controller:   'DashboardController',
        controllerAs: 'dash',
        resolve: {
          $title: function() {
            return 'Dashboard';
          },
          $bodyClass: function() {
            return 'dashboard';
          },
          driverStandings: function(Ergast) {
            return Ergast.getDriverStandings({season: '2016'}).$promise.then(function(response) {
              return response;
            }, function(errorMsg) {
              $log.warn('Error:', errorMsg);
            })
          }
        }
      })
      .state('home', {
        url:          '/main',
        templateUrl:  'app/main/main.html',
        controller:   'MainController',
        controllerAs: 'main',
        resolve: {
          $title: function() {
            return 'Main';
          },
          $bodyClass: function() {
            return 'main-page';
          },
          data: function(webDevTec) {
            return webDevTec.getTec();
          }
        }
      });




    /* URL Router Configurations
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $urlRouterProvider.otherwise('/');




    /* HTML5 Mode
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    $locationProvider.html5Mode(true);


  }


  /**
   * Allow `ui-router` to change `$rootScope` values
   *
   * @link https://github.com/nonplus/angular-ui-router-title
   *
   * @usage
   * Using `$title`:
   * ```
   * <title ng-bind="($title || 'Home') + ' - My Application'">My Application</title>
   * ```
   *
   * `$title` value, each of which contains:
   *    - `title` - state `$title`
   *    - `state` - state name
   *    - `stateParams` - state `$stateParams`
   *
   * > A state defines its title by declaring a `$title` value in its
   * > resolve block. It's a good idea for the `$title` to include
   * > information from the current state, so it may need to inject
   * > the `$stateParam` or another value that was resolved from them.
   *
   * Specify `$title` in state definitions:
   * ```
   *
   * $stateProvider
   *   .state('home', {
   *     ...
   *     resolve: {
   *       // Constant title
   *       $title: function() { return 'Home'; }
   *     }
   *   })
   *   .state('contacts', {
   *     url: '/contacts',
   *     ...
   *     resolve: {
   *       // List of contacts
   *       contacts: ['Contacts', function(Contacts) {
   *         // Use Contacts service to retrieve list
   *         return Contacts.query();
   *       }],
   *       // Dynamic title showing number of contacts
   *       $title: ['contacts', function(contacts) {
   *         return 'Contacts (' + contacts.length + ')';
   *       }]
   *     }
   *   })
   *   .state('contact', {
   *     url: '/contact/:contactId',
   *     ...
   *     resolve: {
   *       // Single contact
   *       contact: ['Contacts', '$stateParams', function(Contacts, $stateParams) {
   *         // Use Contacts service to retrieve a contact
   *         return Contacts.get({ id: $stateParams.contactId });
   *       }],
   *       // Dynamic title showing the name of contact
   *       $title: ['contact', function(contact) {
   *         return contact.name;
   *       }]
   *     }
   *   })
   *   .state('contact.edit', {
   *     url: '/edit',
   *     ...
   *     resolve: {
   *       // Dynamic title appending to parent state's title
   *       $title: ['$title', function($title) {
   *         return $title + " (edit)";
   *       }]
   *     }
   *   })
   * ```
   */
  /** @ngInject */
  function routerRunBlock($log, $timeout, $rootScope, $state, $stateParams) {


    //  Set reference to `$state` & `$stateParams`
    // ------------------------------

    $rootScope.$state       = $state;
    $rootScope.$stateParams = $stateParams;


    var deregCallback = $rootScope.$on('$stateChangeSuccess', function() {

      // Retrieve values via accessor methods
      var title     = getTitleValue($state.$current.locals.globals.$title);
      var bodyClass = getBodyClassValue($state.$current.locals.globals.$bodyClass);

      // Set references in `$rootScope`
      $timeout(function() {
        $rootScope.$title     = title;
        $rootScope.$bodyClass = bodyClass;
      });

    });

    $rootScope.$on('$destroy', deregCallback);


    //  Accessor method for `title`
    // ------------------------------

    function getTitleValue(title) {
      return angular.isFunction(title) ? title() : title;
    }


    //  Accessor method for `bodyClass`
    // ------------------------------

    function getBodyClassValue(bodyClass) {
      return angular.isFunction(bodyClass) ? bodyClass() : bodyClass;
    }

  }

})();

/* eslint-disable angular/on-watch */
(function() {
  'use strict';

  angular
    .module('gpquery.core')
    .provider('routeHelper', routeHelperProvider);

  /** @ngInject */
  function routeHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    var config = {
      docTitle:     '',
      bodyClass:    '',
      resolveAlways: {}
    };

    $locationProvider.html5Mode(true);

    this.configure = function(cfg) {
      angular.extend(config, cfg);
    };

    this.$get = RouteHelper;

    /** @ngInject */
    function RouteHelper($timeout, $location, $rootScope, $state, $log) {
      var handlingStateChangeError = false;
      var hasOtherwise = false;
      var stateCounts = {
        errors: 0,
        changes: 0
      };

      var service = {
        configureStates: configureStates,
        getStates: getStates,
        stateCounts: stateCounts
      };

      init();

      return service;

      /**
       * Configure States using $stateProvider.state()
       *
       * @param {array}   states        - array of state config objects
       * @param {string}  otherwisePath - $urlRouterProvider.otherwise() string
       */
      function configureStates(states, otherwisePath) {
        states.forEach(function(state) {
          state.config.resolve = angular.extend(state.config.resolve || {}, config.resolveAlways);
          $stateProvider.state(state.state, state.config);
        });
        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }

      /**
       * Route Error Handler
       *
       * @description
       * Route cancellation: on routing error, go to `'/'`; provide an exit
       * clause if it attempts to do so twice.
       */
      function handleRoutingErrors() {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
          if (handlingStateChangeError) {
            return;
          }
          stateCounts.errors++;
          handlingStateChangeError = true;
          var destination = (toState &&
            (toState.docTitle || toState.name || toState.loadedTemplateUrl)) ||
            'unknown target';
          var msg = 'Error routing to ' + destination + '.  ' + (error.data || '') + '.\n' + (error.statusText || '') + ': ' + (error.status || '');
          $log.warning(msg, [toState]);
          $location.path('/');
        });
      }

      function init() {
        handleRoutingErrors();
        updateStateValues();
      }

      /**
       * Get States
       *
       * @returns {array} - array of state config objects
       */
      function getStates() {
        return $state.get();
      }

      /**
       * Update State Values
       *
       * @description
       * Updates state-specific values when `$stateChangeSuccess` occurs
       */
      function updateStateValues() {
        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
          stateCounts.changes++;
          handlingStateChangeError = false;
          var docTitle  = toState.docTitle || config.docTitle || '';
          var bodyClass = toState.bodyClass || config.bodyClass || '';
          $timeout(function() {
            $rootScope.docTitle   = docTitle;
            $rootScope.bodyClass  = bodyClass;
          });
          setBreadcrumbs();
          $log.info('Breadcrumbs:',$rootScope.breadcrumbs);
        });
      }

      /**
       * Retrieve `docTitle` value
       */
      function getTitleValue(title) {
        return angular.isFunction(title) ? title() : title;
      }

      /**
       * Set Breadcrumbs
       */
      function setBreadcrumbs() {
        $rootScope.breadcrumbs = [];
        var state = $state.$current;
        while (state) {
          if (state.resolve && state.resolve.docTitle) {
            $rootScope.breadcrumbs.unshift({
              title: getTitleValue(state.locals.globals.docTitle),
              state: state.self.name,
              stateParams: state.locals.globals.$stateParams
            });
          }
          state = state.parent;
        }
      }

    }


  }
})();

(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .directive('gpHeaderBar', gpHeaderBarDirective);

  /** @ngInject */
  function gpHeaderBarDirective($rootScope, $log) {//, _) {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/headerBar/headerBar.html',
      controller: 'HeaderBarController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        pageTitle: '=',
        breadcrumbs: '='
      },
      compile: function(tElem, tAttrs) {
        tElem.addClass('row header header-bar');
        var $headerBar  = angular.element(tElem);       // gp-header-bar
        var $container  = $headerBar.find('div').eq(0); // div.col-xs-12

        var $meta = angular.element(
          '<div class="meta">' +
            '<div class="page">' +
              tAttrs.pageTitle +
            '</div>' +
            '<div class="breadcrumb-links">' +
              '<span ng-repeat="crumb in vm.breadcrumbs" ng-class="{\'active\' : $last}">' +
                '<span ng-if="!$last">' +
                  '<a ng-click="$state.go(crumb.state, crumb.stateParams)" ng-bind="crumb.title"></a>' +
                '</span>' +
                '<span ng-if="$last" ng-bind="crumb.title"></span>' +
              '</span>' +
            '</div>' +
          '</div>'
        );

        $container.append($meta);

        /*
        var $headerbar  = angular.element(tElem);
        var $container  = $headerbar.find('div').eq(0);
        var $template   = angular.element('<div class="user pull-right">' +
                                            '<div class="item dropdown" uib-dropdown>' +
                                              '<a href class="dropdown-toggle" uib-dropdown-toggle>' +
                                                '<i class="fa fa-sliders"></i>' +
                                              '</a>' +
                                              '<ul class="dropdown-menu dropdown-menu-right" uib-dropdown-menu>' +
                                                '<li class="dropdown-header">State Values</li>' +
                                                '<li class="divider"></li>' +
                                              '</ul>' +
                                            '</div>' +
                                          '</div>'
        );

        $container.prepend($template);
        var $dropdown = $container.children().find('ul').eq(0);
        var debugItems = {
          stateName:  '$rootScope.$state.name',
          stateUrl:   '$rootScope.$state.url',
          bodyClass:  '$rootScope.$bodyClass',
          pageTitle:  '$rootScope.$title'
        };
        _.forEach(debugItems, function(value, key) {
          var $listItem = angular.element('<li>' +
                                            '<a href="#" class="debug-item" uib-tooltip="' + _.startCase(key) + '" name="' + key + '">' +
                                            '</a>' +
                                          '</li>'
          );
          $listItem.children().eq(0).html('{{' + value + '}}');
          $dropdown.append($listItem);
        });

        $dropdown.append(angular.element('<li class="divider"></li>'));
        var $testItem = angular.element('<li class="dropdown-header"></li>');
        var testVar = 'vm.seasonMin';
        $testItem.html('{{' + testVar + '}}');
        $dropdown.append($testItem);
        */

        return postLink;
      }
    };
    return directive;

    function postLink() {

      var deregFunc = $rootScope.$on('$viewContentLoading', onRouted);

      $rootScope.$on('$destroy', deregFunc);

      /**
       * Event listener function for `$stateChangeSuccess`
       *
       * @link https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on
       * @link https://ui-router.github.io/ng1/docs/0.2.18/index.html#/api/ui.router.state.$state#events_$statechangesuccess
       * @param event {Object} - Event object.
       * @param toState {State} - The state being transitioned to.
       * @param toParams {Object} - The params supplied to the toState.
       * @param fromState {State} - The current state, pre-transition.
       * @param fromParams {Object} - The params supplied to the fromState.
       */
      function onRouted() {//(event, toState, toParams, fromState, fromParams) {


      }

    }

  }

})();
/*

vm.debugLinks = [{
  name: $rootScope.$state.name,
  text: 'State Name'
}, {
  name: $rootScope.$state.url,
  text: 'State URL'
}, {
  name: $rootScope.$bodyClass,
  text: 'Body Class'
}, {
  name: $rootScope.$title,
  text: 'Page Title'
}];
*/

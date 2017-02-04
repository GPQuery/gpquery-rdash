(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .directive('gpSidebar', gpSidebarDirective);

  /** @ngInject */
  function gpSidebarDirective() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: 'SidebarController',
      controllerAs: 'vm'
    };

    return directive;
  }
})();

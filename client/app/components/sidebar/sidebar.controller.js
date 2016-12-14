(function() {
  'use strict';

  angular
    .module('gpquery.components')
    .controller('SidebarController', SidebarController);

  /** @ngInject */
  function SidebarController($scope, $window, $cookies, $rootScope) {
    var vm = this;
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    vm.getWidth = getWidth;
    vm.toggleSidebar = toggleSidebar;

    $scope.$watch(vm.getWidth, function(newValue, oldValue) {
      if (newValue >= mobileView) {
        if (angular.isDefined($cookies.get('toggle'))) {
          vm.toggle = ! $cookies.get('toggle') ? false : true;
        } else {
          vm.toggle = true;
        }
      } else {
        vm.toggle = false;
      }
      $rootScope.app.sidebar = vm.toggle;
    });

    $window.onresize = function() {
        $scope.$apply();
    };

    function getWidth() {
      return $window.innerWidth;
    }

    function toggleSidebar() {
      vm.toggle = !vm.toggle;
      $rootScope.app.sidebar = vm.toggle;
      $cookies.put('toggle', vm.toggle);
    }
  }
})();

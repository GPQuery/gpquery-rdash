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

    vm.menu = [];

    vm.getWidth = getWidth;
    vm.toggleSidebar = toggleSidebar;

    $scope.$watch(vm.getWidth, function(newValue) {
      if (newValue >= mobileView) {
        if (angular.isDefined($cookies.get('toggle'))) {
          vm.toggle = ! $cookies.get('toggle') ? false : true;
        } else {
          vm.toggle = true;
        }
      } else {
        vm.toggle = false;
      }
      $rootScope.app.sidebar.isOpen = vm.toggle;
    });

    $window.onresize = function() {
      $scope.$apply();
    };

    activate();

    function activate() {
      getMenuItems();
    }

    function getWidth() {
      return $window.innerWidth;
    }

    function toggleSidebar() {
      vm.toggle = !vm.toggle;
      $rootScope.app.sidebar.isOpen = vm.toggle;
      $cookies.put('toggle', vm.toggle);
    }

    function getMenuItems() {
      vm.menu = $rootScope.app.navigation;

      vm.footerItems = [
        {name: 'GitHub',  icon: 'fa fa-fw fa-github',       link: 'https://github.com/GPQuery/gpquery-rdash'},
        {name: 'About',   icon: 'fa fa-fw fa-info-circle',  link: 'https://github.com/GPQuery/gpquery-rdash/blob/develop/README.md'},
        {name: 'Support', icon: 'fa fa-fw fa-support',      link: 'https://github.com/GPQuery/gpquery-rdash/issues'}
      ];
    }

  }
})();

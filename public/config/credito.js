'use strict';

/* jshint -W098 */

angular.module('mean.credito').controller('CreditoSidebarController', ['$scope', '$menuItemsCredito',
    function($scope, $menuItemsCredito) {

        $scope.menuItems = $menuItemsCredito.prepareSidebarMenu().getAll();

    }
]);
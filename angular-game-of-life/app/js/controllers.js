'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('GridCtrl', function($scope) {
        $scope.grid = [ [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}],
            [{alive: false}, {alive: false}, {alive: false}, {alive: false}]
        ];
        $scope.test = [1, 2, 3, 4];

        $scope.toggleLife = function(cell) {
            cell.alive = !cell.alive;
        };
  })
  .controller('MyCtrl2', [function() {

  }]);

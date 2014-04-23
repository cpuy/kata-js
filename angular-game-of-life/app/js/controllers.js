'use strict';

var Grid = function () {
    this.nbColumn =  12;
    this.nbRows =  12;
    this.cells = buildCells(this.nbColumn, this.nbRows);

    function buildCells(nbColumn, nbRows)  {
        var cells = [], column = [];
        for (var i = 0; i < nbRows; i++) {
            var column = [];
            for (var j = 0; j < nbColumn; j++) {
                column[j] = {alive: false};
            }
            cells[i] = column;
        }
        return cells;
    };
}

Grid.prototype.isAlive = function(column, row) {
    return this.cells[column][row].alive;
};

Grid.prototype.giveLife = function(column, row) {
    this.cells[column][row].alive = true;
};

Grid.prototype.nextGeneration = function () {
    var that = this;
    var newGrid = new Grid();
    var cell;
    for (var i = 0; i< this.nbRows; i++) {
        for (var j = 0; j< this.nbColumn; j++) {
            var neihboors = getNeighboors(i, j);
            var count = countAlive(neihboors);
            if (this.cells[i][j].alive) {

                if (count === 2 || count === 3) {
                    newGrid.cells[i][j].alive = true;
                }
            } else {
                if (count === 3) {
                    newGrid.cells[i][j].alive = true;
                }
            }
        }
    }
    return newGrid;


    function countAlive(cells) {
        var count = 0;
          for (var i = 0; i <cells.length; i++) {
              if (cells[i].alive) {
                  count += 1;
              }
          }
        return count;
    }

    function getNeighboors(i, j) {
        var n = [];
        if (i != 0) {
            n.push(that.cells[i-1][j]);
            if (j != 0) {
                n.push(that.cells[i-1][j-1])
            }
        }
        if (i != that.nbRows - 1) {
            n.push(that.cells[i+1][j]);
            if (j != that.nbColumn - 1) {
                n.push(that.cells[i+1][j+1]);
            }
        }
        if (j != 0) {
            n.push(that.cells[i][j-1]);
            if (i!= 0) {
                n.push(that.cells[i-1][j-1]);
            }
        }
        if (j != that.nbColumn - 1) {
            n.push(that.cells[i][j+1]);
            if (i!= that.nbRows - 1) {
                n.push(that.cells[i+1][j+1]);
            }
        }
        return n;
    }
};

angular.module('myApp.controllers', [])
  .controller('GridCtrl', [ '$scope', 'grid', function($scope, grid) {
        $scope.grid = grid;

        $scope.toggleLife = function(cell) {
            cell.alive = !cell.alive;
        };

        $scope.nextGeneration = function() {
            $scope.grid = $scope.grid.nextGeneration();
        };
  }])
  .service('grid', Grid);

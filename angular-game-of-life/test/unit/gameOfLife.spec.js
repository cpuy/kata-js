var Grid = function (nbColumn, nbRows) {
    this.nbColumn = nbColumn;
    this.nbRows = nbRows;

    this.cells = [];
    for (var i = 0; i < nbColumn; i++) {
        var row = [];
        for (var j = 0; j < nbRows; j++) {
            row[j] = {alive: false};
        }
        this.cells[i] = row;
    }
}

Grid.prototype.nextGeneration = function () {
    return new Grid(this.nbColumn, this.nbRows);
};

describe('a grid', function()  {

    it('should be a two dimensional grid', function() {
        var grid = new Grid(4, 8);

        expect(grid.nbColumn).toBe(4);
        expect(grid.nbRows).toBe(8);
    });

    it('should be created with dead cells', function() {
        var grid = new Grid(2, 2);

        expect(grid.cells).toEqual([[{alive: false}, {alive: false}], [{alive: false}, {alive: false}]]);
    });
});



describe('a cell', function() {

    it('should die if it has fewer than two live neighbours, as if caused by underpopulation', function() {
        var grid = new Grid(2, 2);
        grid.cells[1][1].alive = true;

        grid = grid.nextGeneration();

        expect(grid.cells[1][1].alive).toBeFalsy;
    });
});
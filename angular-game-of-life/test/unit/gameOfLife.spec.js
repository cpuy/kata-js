
var Grid = function(nbColumn, nbRows) {
    this.nbColumn = nbColumn;
    this.nbRows = nbRows;
}

describe('grid', function()  {

    it('should be a two dimensional grid', function() {
        var grid = new Grid(4, 8);

        expect(grid.nbColumn).toBe(4);
        expect(grid.nbRows).toBe(8);
    });

    it('should be created with dead cells', function() {
        // TODO
    });
});
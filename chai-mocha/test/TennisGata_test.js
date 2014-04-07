'use strict';

/*
  ======== A Handy Little Mocha Reference ========
  https://github.com/visionmedia/mocha/

  Test assertions:
    assert.fail(actual, expected, message, operator)
    assert(value, message), assert.ok(value, [message])
    assert.equal(actual, expected, [message])
    assert.notEqual(actual, expected, [message])
    assert.deepEqual(actual, expected, [message])
    assert.notDeepEqual(actual, expected, [message])
    assert.strictEqual(actual, expected, [message])
    assert.notStrictEqual(actual, expected, [message])
    assert.throws(block, [error], [message])
    assert.doesNotThrow(block, [message])
    assert.ifError(value)

    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/

var TennisGame = require('../lib/TennisGame.js');
var Score = require('../lib/Score.js');
require('chai').should();

suite('tennis game suite', function(){
 
  test('new game should start with Love/Love score', function(done){
    var game = new TennisGame();
    game.score.should.be.deep.equal(new Score(0, 0));
    done();
  });
  
  test('new game should start with Love/Love score', function(done){
    var game = new TennisGame();
    
    game.playerOneWinBall().playerOneWinBall().playerOneWinBall();
    game.playerTwoWinBall().playerTwoWinBall().playerTwoWinBall();
    
    game.score.should.be.deep.equal(new Score('DEUCE', 'DEUCE'));
    done();
  });
  
  
});

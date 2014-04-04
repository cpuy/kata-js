'use strict';

var tenniskata = require('../lib/tennis-kata.js');
require('chai').should();

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

var assert = require('assert');

suite('AwesomenessTest', function(){
  test('#awesome()', function(done){
    assert.equal(tenniskata.awesome(), 'awesome');
    done();
  });
  
  test('#userOneWinBall()', function(done){
    var win = tenniskata.userOneWinBall();
    win.should.have.property('playerOneScore').equal(15);
    win.should.have.property('playerTwoScore').equal(0);
    win.should.be.deep.equal({ playerOneScore: 15, playerTwoScore: 0  });
    done();
  });
  
  
});

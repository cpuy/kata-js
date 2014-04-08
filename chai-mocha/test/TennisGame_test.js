/*jslint node: true */
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
require('chai').should();

suite('tennis game suite :', function () {

    test('new game should start with Love/Love score', function (done) {
        var game = new TennisGame();

        game.should.be.deep.equal(new TennisGame(0, 0));
        done();
    });

    test('score should be deuce if both players have 40', function (done) {
        var score = new TennisGame(40, 40);

        score.isDeuce().should.be.true;
        done();
    });

    test('score should be deuce if both players have DEUCE', function (done) {
        var score = new TennisGame('DEUCE', 'DEUCE');

        score.isDeuce().should.be.true;
        done();
    });

    test('TennisGame should be deuce if both players have ADVANTAGE', function (done) {
        var score = new TennisGame('ADVANTAGE', 'ADVANTAGE');

        score.isDeuce().should.be.true;
        done();
    });

    test('score is not deuce if one players has not 40 and not DEUCE', function (done) {
        var score = new TennisGame(40, 15);

        score.isDeuce().should.be.false;
        done();
    });

    test('increment love score for player one', function (done) {
        var score = new TennisGame(0, 0);

        score.playerOneWinBall();

        score.playerOnePoints.should.be.equals(15);
        done();
    });

    test('increment fifteen score for player two', function (done) {
        var score = new TennisGame(0, 15);

        score.playerTwoWinBall();

        score.playerTwoPoints.should.be.equals(30);
        done();
    });

    test('increment thirty score for player one', function (done) {
        var score = new TennisGame(30, 0);

        score.playerOneWinBall();

        score.playerOnePoints.should.be.equals(40);
        done();
    });

    test('player should have advantage when he win ball on a deuce game', function (done) {
        var game = new TennisGame('DEUCE', 'DEUCE');

        game.playerOneWinBall();

        game.playerOnePoints.should.be.equals('ADVANTAGE');
        done();
    });

    test('game should be deuce when player who has advantage loose ball', function (done) {
        var game = new TennisGame('ADVANTAGE', 'DEUCE');

        game.playerTwoWinBall();

        game.should.be.deep.equal(new TennisGame('DEUCE', 'DEUCE'));
        done();
    });

});
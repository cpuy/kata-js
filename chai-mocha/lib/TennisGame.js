/*
 * tennis-kata
 * https://github.com/cpuy/tennis-kata
 *
 * Copyright (c) 2014 Colin PUY
 * Licensed under the MIT license.
 */

'use strict';

var Score = require('./Score.js');

var Game = function() {
  this.score = new Score(0, 0);
};

Game.prototype.playerOneWinBall = function() {
  this.score.incrementPlayerOnePoints();
  this.score = checkIfDeuce(this.score);
  return this;
};

Game.prototype.playerTwoWinBall = function() {
  this.score.incrementPlayerTwoPoints();
  this.score = checkIfDeuce(this.score);
  return this;
};

var checkIfDeuce = function(score) {
   if (score.isDeuce()) {
      return new Score('DEUCE', 'DEUCE');
   }
   return score;
}

module.exports = Game;
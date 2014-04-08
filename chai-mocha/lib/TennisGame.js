/*jslint node: true */
/*
 * tennis-kata
 * https://github.com/cpuy/tennis-kata
 *
 * Copyright (c) 2014 Colin PUY
 * Licensed under the MIT license.
 */

'use strict';

function incrementPoints(playerPoints) {
    if (playerPoints === 0) {
        return 15;
    } else if (playerPoints === 15) {
        return 30;
    } else if (playerPoints === 30) {
        return 40;
    } else {
        return 'ADVANTAGE';
    }
}

var Game = function (playerOnePoints, playerTwoPoints) {
    this.playerOnePoints = playerOnePoints || 0;
    this.playerTwoPoints = playerTwoPoints || 0;
};

Game.prototype.isDeuce = function () {
    var that = this;

    function bothHave(points) {
        return (that.playerOnePoints === points && that.playerTwoPoints === points);
    }

    return bothHave(40) || bothHave('DEUCE') || bothHave('ADVANTAGE');
};

Game.prototype.playerOneWinBall = function () {
    this.playerOnePoints = incrementPoints(this.playerOnePoints);
    if (this.isDeuce()) {
        this.playerOnePoints = 'DEUCE';
        this.playerTwoPoints = 'DEUCE';
    }
    return this;
};

Game.prototype.playerTwoWinBall = function () {
    this.playerTwoPoints = incrementPoints(this.playerTwoPoints);
    if (this.isDeuce()) {
        this.playerOnePoints = 'DEUCE';
        this.playerTwoPoints = 'DEUCE';
    }
    return this;
};

module.exports = Game;
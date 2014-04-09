/*jslint node: true */
/*
 * tennis-kata
 * https://github.com/cpuy/tennis-kata
 *
 * Copyright (c) 2014 Colin PUY
 * Licensed under the MIT license.
 */

'use strict';

var tennisPoint = {
    love: 0,
    fifteen: 15,
    thirty: 30,
    fourty: 40,
    deuce: 'DEUCE',
    advantage: 'ADVANTAGE',
    win: 'WIN'
};

function incrementPoints(playerPoints) {
    if (playerPoints === tennisPoint.love) {
        return tennisPoint.fifteen;
    } else if (playerPoints === tennisPoint.fifteen) {
        return tennisPoint.thirty;
    } else if (playerPoints === tennisPoint.thirty) {
        return tennisPoint.fourty;
    } else if (playerPoints === tennisPoint.fourty || playerPoints === tennisPoint.advantage) {
        return tennisPoint.win;
    } else {
        return tennisPoint.advantage;
    }
}

var Game = function (playerOnePoints, playerTwoPoints) {
    this.playerOnePoints = playerOnePoints || tennisPoint.love;
    this.playerTwoPoints = playerTwoPoints || tennisPoint.love;
};

Game.prototype.isDeuce = function () {
    var that = this;

    function bothHave(points) {
        return (that.playerOnePoints === points && that.playerTwoPoints === points);
    }

    return bothHave(tennisPoint.fourty) || bothHave(tennisPoint.deuce) || bothHave(tennisPoint.advantage);
};

Game.prototype.playerOneWinBall = function () {
    this.playerOnePoints = incrementPoints(this.playerOnePoints);
    if (this.isDeuce()) {
        this.playerOnePoints = tennisPoint.deuce;
        this.playerTwoPoints = tennisPoint.deuce;
    }
    return this;
};

Game.prototype.playerTwoWinBall = function () {
    this.playerTwoPoints = incrementPoints(this.playerTwoPoints);
    if (this.isDeuce()) {
        this.playerOnePoints = tennisPoint.deuce;
        this.playerTwoPoints = tennisPoint.deuce;
    }
    return this;
};

module.exports = Game;
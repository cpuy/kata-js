'use strict';

var Score = function(playerOnePoints, playerTwoPoints) {
  this.playerOnePoints= playerOnePoints;
  this.playerTwoPoints = playerTwoPoints;
};

Score.prototype.isDeuce = function() {
  var that = this;
  return bothHave(40) || bothHave('DEUCE') || bothHave('ADVANTAGE');
  
  function bothHave(points) {
    return (that.playerOnePoints === points && that.playerTwoPoints === points);
  };
};

Score.prototype.incrementPlayerOnePoints = function() {
  this.playerOnePoints = incrementPoints(this.playerOnePoints);
  return this;
};

Score.prototype.incrementPlayerTwoPoints = function() {
  this.playerTwoPoints = incrementPoints(this.playerTwoPoints);
  return this;
};


function incrementPoints(playerPoints) {
   if (playerPoints === 0) {
    return 15;
  } else  if (playerPoints === 15) {
    return 30;
  } else  {
    return 40;
  }
};

module.exports = Score;
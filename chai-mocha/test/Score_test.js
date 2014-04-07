'use strict';

require('chai').should();
var Score = require('../lib/Score.js');

suite('tennis game suite', function(){
 
  test('score is deuce if both players have 40', function(done){
    var score = new Score(40, 40); 
    
    score.isDeuce().should.be.true;
    done();
  });

  test('score is deuce if both players have DEUCE', function(done){
    var score = new Score('DEUCE', 'DEUCE'); 
    
    score.isDeuce().should.be.true;
    done();
  });
  
  test('score is deuce if both players have ADVANTAGE', function(done){
    var score = new Score('ADVANTAGE', 'ADVANTAGE.'); 
    
    score.isDeuce().should.be.true;
    done();
  });
  
  test('score is not deuce if one players has not 40 and not DEUCE', function(done){
    var score = new Score(40, 15); 
    
    score.isDeuce().should.be.false;
    done();
  });
  
  test('increment love score for player one', function(done){
    var score = new Score(0, 0); 
    
    score.incrementPlayerOnePoints();
    
    score.playerOnePoints.should.be.equals(15);
    done();
  });
  
  test('increment fifteen score for player two', function(done){
    var score = new Score(0, 15); 
    
    score.incrementPlayerTwoPoints();
    
    score.playerTwoPoints.should.be.equals(30);
    done();
  });
  
  test('increment thirty score for player one', function(done){
    var score = new Score(30, 0); 
    
    score.incrementPlayerOnePoints();
    
    score.playerOnePoints.should.be.equals(40);
    done();
  });
});
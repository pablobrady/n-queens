// SOLUTION //


var rockPaperScissors = function (rounds) {	
    rounds = rounds || 3;	
    var outcomes = [];
	
    var plays = ['rock', 'paper', 'scissors'];
	
    var combos = function(roundsToGo, playedSoFar) {
      if( roundsToGo === 0 ){
        outcomes.push( playedSoFar );
        return;
      }

      for( var i = 0; i < plays.length; i++ ){
        var currentPlay = plays[i];
        combos( roundsToGo-1, playedSoFar.concat(currentPlay) );
      }
    };
    combos( rounds, [] );

    return outcomes;
};




Sample Stack:
[r,r,s]	2 = 1
[r,r]	i = 0
[r]	i = 0

Sample Output:
[rock, rock, rock]
[rock, rock, paper]
...










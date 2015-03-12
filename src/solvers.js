/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// window.createEmptyRow = function(n) {
//   var tempArray = [];
//   for (var i = 0; i < n; i++) {
//     tempArray.push(i);
//   };
//   return tempArray;
// }


window.findNRooksSolution = function(n) {
  console.log("+++ findNRooksSolution arrival.");
  var solution = [];

  //--------------------------------------------------------//

  var combos = function(xPosToGo, rowSoFar) {
    console.log("-----> combos(" + xPosToGo + ", '" + rowSoFar + "');");
    if( xPosToGo === 0 ){
      testOutcomes.push( testedSoFar );
      return;
    }

    // if( rowSoFar[y] ) { 
    //   // Test for hasAnyColConflicts()/hasAnyRowConflicts().
    //     // No conflict? Save find.
    // }

    for( var i = 0; i < 2; i++ ){
      console.log("----->  i = " + i);
      combos( roundsToGo-1, playedSoFar.concat(i) );
    }

    combos( xPosToGo-1, rowSoFar.concat(currentPlay) );
  };

  //--------------------------------------------------------//


  var board = new Board({"n":n});
  if(n===1) { 
    board.togglePiece(0,0);
    solution = board.rows();
  } else {
    combos( n, [] );
    solution = board.rows();
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

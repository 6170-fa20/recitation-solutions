// 0: empty
// 1: player 1
// 2: player 2
const board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 2],
  [0, 0, 0, 0, 1, 2, 2],
  [0, 0, 0, 1, 1, 2, 2],
]; 
const board2 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 2],
  [0, 0, 0, 0, 0, 2, 2],
  [0, 0, 0, 1, 1, 1, 1],
];
  
// must get 4 in horizontal, vertical, or diagonal of one player to win
const cellsToWin = 4;
const boardHeight = board.length;
const boardWidth = board[0].length;
  
/**
 * @param {string} a, b, c, d - values in four cells
 * @return {boolean} 					 true if the four cells are connected
 */
let connected = function(a, b, c, d) {
  return (a != 0) && (a === b) && (a === c) && (a === d);
}
  
/**
 * @param { int } x - non-inclusive upper to generate numbers 
 * @return { Array[int] } all integers in the range [0, x) in ascending order
 */
const range = (x) => [...Array(x).keys()];

/**
 * @param { Array[int] } cell - cell of the board in the form [i, j]
 * @param { int } di - amount to shift the i coordinate of the cell by
 * @param { int } dj - amount to shift the j coordinate of the cell by
 * @return { int } value of the cell at (i+di, i+dj) if the cell is within
                                         the range of the board, and 0 otherwise
 */
const getCellWithinBoundsOrDefault = (cell, offsetI=0, offsetJ=0) => {
  // shift (i, j) by (offsetI, doffsetJ)
  const i = cell[0] + offsetI;
  const j = cell[1] + offsetJ;

  // determine if the shifted cell is within the board's bounds
  return ((0 <= i && i < boardHeight) 
                  && (0 <= j && j < boardWidth)) ? board[i][j] : 0;
};
  
/**
 * @param { Array[Array[int]] } board - 2D board of connect-4 values as defined 
                                                                                 by the board at the top
 * @return { Array[Array[int]] } array of cell coordinates in the form [..., [i, j], ...]
 */
const getCellCoordinates = (board) => {
  return range(boardHeight)
          .map(i => range(boardWidth).map(j => [i, j]))
          .flat();
};
  
/**
 * @param { Array[Array[int]] } cell - array respresenting coordinates of the connect-4 board [i, j]
                                        by the board at the top
 * @return { boolean } true if this cell, used as an anchor, produces some winning orientation,
                        where the orientations considered are right, down, down right diagonal, 
                        and down left diagonal 
 */
const hasWinningOrientation = (cell) => {
  // get all possible orientations where a player could win
  const right     = range(cellsToWin).map(offset => getCellWithinBoundsOrDefault(cell, offsetI=0, offsetJ=offset));
  const down      = range(cellsToWin).map(offset => getCellWithinBoundsOrDefault(cell, offsetI=offset, offsetJ=0));
  const downRight = range(cellsToWin).map(offset => getCellWithinBoundsOrDefault(cell, offsetI=offset, offsetJ=offset));
  const downLeft  = range(cellsToWin).map(offset => getCellWithinBoundsOrDefault(cell, offsetI=offset, offsetJ=-offset));

  // check if any one of these orientations produces a winning orientation
  return [right, down, downRight, downLeft].some(orientation => connected(...orientation));
};
  
/**
 * @param {Array} board - a 2d Array representing the state of the game
 * @return {number}				true if the game is over
 */
const isGameOver = function(board) {
  return getCellCoordinates(board).some(hasWinningOrientation);
}
  
console.log("Board 1 result: "+isGameOver(board));
console.log("Board 2 result: "+isGameOver(board2));
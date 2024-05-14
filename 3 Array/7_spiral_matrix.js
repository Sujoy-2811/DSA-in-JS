// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

function spiralMatrix(matrix) {
  let output = "";
  let iRow = 0,
    eRow = matrix.length - 1;
  let iCol = 0,
    eCol = matrix[1].length - 1;
  while (iRow <= eRow && iCol <= eCol) {
    //top
    for (let i = iCol; i <= eCol; i++) {
      output += matrix[iRow][i] + " ";
    }
    //right
    for (let i = iRow + 1; i <= eRow; i++) {
      output += matrix[i][eCol] + " ";
    }
    //bottom
    for (let i = eCol - 1; i >= iCol; i--) {
      if (iRow == eRow) {
        break;
      }
      output += matrix[eRow][i] + " ";
    }
    //left
    for (let i = eRow - 1; i > iRow; i--) {
      if (eCol == iCol) break;
      output += matrix[i][iCol] + " ";
    }
    iRow++;
    iCol++;
    eRow--;
    eCol--;
  }

  return output;
}

console.log(spiralMatrix(arr));

// let arr = [
//   [10, 20, 30, 40],
//   [15, 25, 35, 45],
// ];
let arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

function search(matrix, key) {
  let row = 0,
    col = arr[1].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === key) {
      return "key at : " + row + "," + col;
    } else {
      if (matrix[row][col] > key) {
        col--;
      } else {
        row++;
      }
    }
  }
  return "not found";
}

console.log(search(arr, 35));

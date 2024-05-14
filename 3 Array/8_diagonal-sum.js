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
];

function sum_diagonals(arr) {
  let output = 0;
  if (arr.length !== arr[1].length) {
    return null;
  }

  //   //primary
  //   for (let i = 0; i < arr.length; i++) {
  //     output += arr[i][i];
  //   }
  //   //secondary
  //   for (let i = 0; i < arr.length; i++) {
  //     output += arr[i][arr.length - i - 1];
  //   }

  //diagonals
  for (let i = 0; i < arr.length; i++) {
    output += arr[i][i];
    if (i === arr.length - i - 1) continue;
    output += arr[i][arr.length - i - 1];
  }

  return output;
}

console.log(sum_diagonals(arr));

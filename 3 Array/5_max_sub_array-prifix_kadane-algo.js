const arr = [2, 5, -4, 54, -1, 12];
// const arr = [1, 2, 3, -43, 56, 1];

function kadanes(arr) {
  let maxSum = -Infinity,
    currSum = 0;

  //for prifix array
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum < 0) {
      currSum = 0;
    } else {
      if (currSum > maxSum) maxSum = currSum;
    }
  }

  console.log(maxSum);
}

kadanes(arr);

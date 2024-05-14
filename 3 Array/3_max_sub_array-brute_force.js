const arr = [2, 5, -4, 54, -1, 12];
// const arr = [1, 2, 3, -43, 56, 1];

function maxSubArray(arr) {
  let maxSubArray = -Infinity,
    currSum;

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      currSum = 0;
      for (let index = start; index <= end; index++) {
        currSum += arr[index];
      }
      if (currSum > maxSubArray) {
        maxSubArray = currSum;
      }
    } // end
  } // start
  console.log(maxSubArray);
}

maxSubArray(arr);

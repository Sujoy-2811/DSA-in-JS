const arr = [2, 5, -4, 54, -1, 12];
// const arr = [1, 2, 3, -43, 56, 1];

function maxSubArray(arr) {
  let maxSubArray = -Infinity,
    currSum,
    prifixArray = [];
  prifixArray[0] = arr[0];

  //for prifix array
  for (let i = 1; i < arr.length; i++) {
    prifixArray[i] = prifixArray[i - 1] + arr[i];
  }

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      currSum =
        start === 0
          ? prifixArray[end]
          : prifixArray[end] - prifixArray[start - 1];
      if (currSum > maxSubArray) {
        maxSubArray = currSum;
      }
    } // end
  } // start
  console.log(maxSubArray);
}

maxSubArray(arr);

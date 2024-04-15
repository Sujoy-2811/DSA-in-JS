const arr = [2, 5, 64, 54, 23, 12];

function maxSubArray(arr) {
  let count = 0;
  for (let start = 0; start < arr.length; start++) {
    let output = "";
    for (let end = start; end < arr.length; end++) {
      for (let index = start; index <= end; index++) {
        if (index == start) output += "[ ";
        output += arr[index] + " ";
        if (index !== end) output += ", ";
        if (index == end) output += "]";
      }

      count++;
      output += "\n";
    }
    console.log(output);
  }
  console.log("total sub arrays : " + count);
}

maxSubArray(arr);

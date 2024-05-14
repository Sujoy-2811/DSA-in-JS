const arr = [2, 5, 64, 54, 23, 12];

function maxSubArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let output = "";
    for (let j = i + 1; j < arr.length; j++) {
      output += `(${arr[i]},${arr[j]}) `;
    }
    console.log(output);
    output = "";
  }
}

maxSubArray(arr);
Number.max;

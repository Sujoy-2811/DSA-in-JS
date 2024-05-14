function compression(str) {
  const output = [];
  let count = 1;
  output.push(str[0]);
  const arr = str.split("");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      output.push(count);
      output.push(arr[i]);

      count = 1;
    }
  }
  output.push(count);
  return output.join("");
}

const str = "aabbbbccccdde";
console.log(str);
console.log(compression(str));

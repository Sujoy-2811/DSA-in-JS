function findLargestString(str) {
  return str.sort()[str.length - 1];
}

arr = ["mango", "banana", "apple"];

console.log(findLargestString(arr));

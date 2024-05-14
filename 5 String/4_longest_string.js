function findLongestString(str) {
  return str.sort((a, b) => b.length - a.length)[0];
}

arr = ["mango", "banana", "apple"];

console.log(findLongestString(arr));

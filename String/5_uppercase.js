function upperCase(str) {
  arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

str = "hi, i am sujoy";
console.log(upperCase(str));

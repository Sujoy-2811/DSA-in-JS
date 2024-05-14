// const arr = [5, 1, 3, 0, 6];
// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const arr = [4, 2, 0, 3, 2, 5];
const arr = [1, , 3, 5, 67];
let water = 0;

function rainDroplets(arrHeight) {
  let leftHeight = [],
    rightHeight = [];
  if (arr.length <= 2) return 0;

  //left array
  for (let i = 0; i < arrHeight.length; i++) {
    if (i == 0) leftHeight[i] = arrHeight[i];
    else {
      leftHeight[i] =
        arrHeight[i] > leftHeight[i - 1] ? arrHeight[i] : leftHeight[i - 1];
    }
  }
  //   right array
  for (let i = arrHeight.length - 1; i >= 0; i--) {
    if (i == arrHeight.length - 1) rightHeight[i] = arrHeight[i];
    else {
      rightHeight[i] =
        arrHeight[i] > rightHeight[i + 1] ? arrHeight[i] : rightHeight[i + 1];
    }
  }
  for (let i = 0; i < arrHeight.length; i++) {
    let count = Math.min(leftHeight[i], rightHeight[i]) - arrHeight[i];
    if (count > 0) water += count;
  }
}

rainDroplets(arr);
console.log(water);

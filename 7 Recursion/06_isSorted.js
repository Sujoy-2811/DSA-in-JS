function isSorted(arr, i = 0) {
  if (i === arr.length - 1) {
    return true;
  }
  if (arr[i] > arr[i + 1]) {
    return false;
  }

  return isSorted(arr, i + 1);
}

console.log(isSorted([1, 2, 3, 4, 5, 6]));

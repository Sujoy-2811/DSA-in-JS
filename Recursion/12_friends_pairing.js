function friendPairing(n) {
  if (n == 2 || n == 1) {
    return n;
  }

  return friendPairing(n - 1) + (n - 1) * friendPairing(n - 2);
}

console.log(friendPairing(1));
console.log(friendPairing(2));
console.log(friendPairing(3));
console.log(friendPairing(4));

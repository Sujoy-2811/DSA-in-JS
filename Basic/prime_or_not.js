let num = 7;
function checkPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPrime(num) ? "It is prime number" : "It is not prime number.");

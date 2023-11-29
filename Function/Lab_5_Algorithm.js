// Lab-5:Algorithm
function printPrime(n) {
    function isPrime(number) {
      if (number < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    // Print prime numbers from 2 to n
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  printPrime(7);
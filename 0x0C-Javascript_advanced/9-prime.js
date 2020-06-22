function countPrimeNumbers () {
  let prime = 0;
  for (let num = 2; num <= 100; num++) {
    let isprime = true;
    let limit = Math.round(Math.sqrt(num));
    for (let mod = 2; mod <= limit; mod++) {
      if (num % mod == 0) {
        isprime = false;
        break;
      }
    }

    if (isprime) {
      prime += 1;
    }
  }
  return prime;
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);

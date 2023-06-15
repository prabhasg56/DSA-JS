const sortAcrdToDistPrimeNumber = (arr) => {
  let len = arr.length;
  let res = new Array(len);

  for (let i = 0; i < len; i++) {
    res[i] = countDistPrime(arr[i]) * 1001 + arr[i];
  }

  res.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    res[i] %= 1001;
  }
  console.log(res);
};

const countDistPrime = (num) => {
  let count = 0;

  if (isPrime(num)) {
    return 1;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      if (isPrime(i)) {
        count += 1;
      }
    }
  }

  return count;
};

const isPrime = (num) => {

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

 return true;
};

let arr = [7, 18, 5, 25, 10];

sortAcrdToDistPrimeNumber(arr);

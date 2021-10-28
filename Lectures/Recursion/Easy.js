
// 1. Count number of zeros in a number
function helper(n, c) {
  if (n == 0) {
    return c;
  }
  let rem = n % 10;
  if (rem == 0) {
    return helper(parseInt(n / 10), c + 1);
  }
  return helper(parseInt(n / 10), c);
}

function countZeros(n) {
  return helper(n, 0);
}

//const ans = countZeros(100)
//console.log(ans)


//2. Find the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//const ans = factorial(3);
//console.log(ans);




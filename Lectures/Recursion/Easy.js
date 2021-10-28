
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


// 2. Find the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const ans = factorial(3);
console.log(ans);

// 3. Print the product of the digits passed in the input
function digitProduct(n){
   if (n%10 == n) {
            return n;
        }
        return (n%10) * digitProduct(parseInt(n/10));
}

const ans = digitProduct(413)
console.log(ans)

// 4. Print the sum of the digits passed in the input
function digitSum(n){
   if (n%10 == n) {
            return n;
        }
        return (n%10) + digitSum(parseInt(n/10));
}

const ans = digitSum(413)
console.log(ans)



// 5. Print the number from N to 1 where N is any number passed in the input


function NtoOneBoth(n){
if (n == 0) {
            return;
        }
        console.log(n);
        NtoOneBoth(n-1);
       console.log(n);
}

NtoOneBoth(10);


// 6. Reverse a number 

function reverseNumber(n){
   if (n == 0) {
            return;
        }
        let rem = n % 10;
        sum = sum * 10 + rem;
        reverseNumber(parseInt(n/10));
}
let sum = 0;
reverseNumber(331002389)
console.log(sum);

//     Main function to perform all required operations on a given number

function analyzeNumber(n) {
    console.log(``);
    console.log(` Analyzing Number: ${n}`);
    console.log(``);

    // 1. Find the sum of first n numbers and use for loop 
    let sumOfFirstN = 0;
    for (let i = 1; i <= n; i++) {
        sumOfFirstN += i;
    }
    console.log(`1. Sum of first ${n} numbers: ${sumOfFirstN}`);

    // 2. Print table of n 
    console.log(`2. Table of ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`   ${n} x ${i} = ${n * i}`);
    }

    // 3. Check if it is a prime number and go else cheac n% i ===0 

 let isPrime = true;
 if (n <= 1) {
        isPrime = false;

} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
if (n % i === 0) {
  isPrime = false;
  break;
 }
    }
    }
    console.log(`3. Is Prime: ${isPrime}`);

    // 4. Print all its factors
    let factors = [];

for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
    factors.push(i);
        }
 }
console.log(`4. Factors: ${factors.join(', ')}`);

    // 5. Find sum of all digits of a number
let tempForSum = n;
let sumOfDigits = 0;

 while (tempForSum > 0) {

    sumOfDigits += tempForSum % 10;
         // Extract the last digit
 tempForSum = Math.floor(tempForSum / 10); 

     // Remove the last digit
 }
 console.log(`5. Sum of digits: ${sumOfDigits}`);

    // 6. Check if it is an Armstrong number
let tempForArmstrong = n;
 let numberOfDigits = String(n).length;
 let armstrongSum = 0;

    while (tempForArmstrong > 0) {
        let digit = tempForArmstrong % 10;

 armstrongSum += Math.pow(digit, numberOfDigits); 
        // Raise to power of total digits

     tempForArmstrong = Math.floor(tempForArmstrong / 10);
    }

    let isArmstrong = (armstrongSum === n);
    console.log(`6. Is Armstrong number: ${isArmstrong}`);
}

// 7. At least 5 variables to check
let num1 = 7;  
  // Prime number
let num2 = 12; 

  // Number with many factors
let num3 = 153;  
// Known Armstrong number
let num4 = 28; 
  // Perfect number (not Armstrong, but good for factors)
let num5 = 9474; 
// 4-digit Armstrong number

// Displaying the results of each operation to the user using console.log
analyzeNumber(num1);
analyzeNumber(num2);
analyzeNumber(num3);
analyzeNumber(num4);
analyzeNumber(num5);

// clear , cls 
//     Main function to perform all required operations on a given number

function Num(n) {
    console.log(``);
    console.log(` Num:  ${n}`);
    console.log(``);

    let FirstN = 0;
    // loop stating 1 and ending n 
    for (let i = 1; i <= n; i++) {
        FirstN += i;
    }
    console.log(`1. Sum of first ${n} numbers: ${FirstN}`);

    // 2. Print table of n 
    console.log(`2. Table of ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`   ${n} x ${i} = ${n * i}`);
    }

    // 3. Check if it is a prime number 
    // 1 and negitive number never a prime number
 let Prime = true;
 if (n <= 1) {
        Prime = false;

} else {
     for (let i = 2; i < n; i++) {
if (n % i === 0) {
  Prime = false;
  break;
 }
    }
    }
    console.log(`3. Is Prime: ${Prime}`);

    // 4. Print all its factors
    let factors = [];

for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
    factors.push(i);
        }
 }
console.log(`4. Factors: ${factors.join(', ')}`);

    // 5. Find sum of all digits of a number
let ForSum = n;
let Digits = 0;

 while (ForSum > 0) {

    Digits +=ForSum % 10;
      
 ForSum = Math.floor(ForSum / 10); 

     // Remove the last digit
 }
 console.log(`5. Sum of digits: ${Digits}`);

    // 6. Check if it is an Armstrong number
let Armstrong = n;
 let Digit = String(n).length;
 let Sum = 0;

    while (Armstrong > 0) {
        let digit = Armstrong % 10;

 Sum += Math.pow(digit); 
        // Raise to power of total digits

     Armstrong = Math.floor(Armstrong / 10);
    }

    let isArmstrong = (Sum === n);
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
Number(num1);
Number(num2);
Number(num3);
Number(num4);
Number(num5);

// clear , cls 
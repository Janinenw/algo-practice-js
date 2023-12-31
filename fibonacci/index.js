//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// const fibonacci = num => {
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(7));

// simplify to




const fibonacci = num => {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(7));

//DECLARATION OF FUNCTION
// const fibonacci = num => 

//BASE CASES

//   if (num === 0) return 0;
//     if (num === 1) return 1;

//RECURSIVE CASE
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(7));
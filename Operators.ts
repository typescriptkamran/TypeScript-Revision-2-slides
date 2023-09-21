// Arithmetic operators:
// Addition
// Example:
let n1 = 1;
let n2 = 2;
console.log(n1 + n2); // ?
let str1 = 1;
let str2 = "2";
console.log(str1 + str2); // ?


console.log(typeof str2)


// Subtraction
// Example:
let subn1 = 5;
let subn2 = 2;
console.log(subn1 - subn2); // ?
// Multiplication
// Example:
let muln1 = 5;
let muln2 = 2;
console.log(muln1 * muln2); // ?

// Division
// Example:
let divn1 = 6;
let divn2 = 2;
console.log(divn1 / divn2); // ?
// Exponentiation
// Example:
let expn1 = 2;
let expn2 = 4;
console.log(`this is result of Exponentiation ${expn1 ** expn2}`); // ?

// Modulus
// Example:
let modn1 = 10;
let modn2 = 3;
console.log(`this is result of modulus ${modn1 % modn2}`); // ans = 1


// In TypeScript, you can use incremental operators such as `++` and `--` to increment or decrement the value of a variable by 1. Here's an example of how you can use the incremental `++` operator:

// ```typescript
let counta: number = 5;

// Increment the 'count' variable by 1
counta++;

console.log(`Count after increment: ${counta}`); // Output: Count after increment: 6
// ```

// In this example, we start with a variable `count` initialized to 5. The `count++` statement increments the value of `count` by 1, so after the increment, `count` becomes 6.

// You can use the `--` operator in a similar way to decrement a variable by 1:

// ```typescript
let countb: number = 10;

// Decrement the 'count' variable by 1
countb--;

console.log(`Count after decrement: ${countb}`); // Output: Count after decrement: 9
// ```

// Here, the `count--` statement decreases the value of `count` by 1, resulting in `count` being equal to 9 after the decrement.

// Assignment operators:
// Assignment operator are used to assigning values to variables.
// Example:
let n = 15;
console.log(n); // 15
n += 5;
console.log(n); // 20
n -= 5;
console.log(n); // 15

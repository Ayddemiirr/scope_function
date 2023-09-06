/// 1.Finding a number that is divisible by 3 and 7

// function checkNumber(n) {
//     if (n % 3 === 0 && n % 7 === 0) {
//         return "Divide 3 and 7";
//     } else {
//         return "Not divide 3 and 7";
//     }
// }
// console.log(checkNumber(21));

// const checkNumber = (n) => {
//     if (n % 3 === 0 && n % 7 === 0) {
//         return "Divide 3 and 7";
//     } else {
//         return "Not divide 3 and 7";
//     }
// };
// console.log(checkNumber(21));

/// 2.Calculating the factorial of a positive number

// function factorialCalculate(n) {
//     if (n > 0) {
//         let factorial = 1;
//         for (let i = 2; i <= n; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     } else {
//         return "Enter a positive number!";
//     }
// }

// console.log(factorialCalculate(5));

// const factorialCalculate = (n) => {
//     if (n > 0) {
//         let factorial = 1;
//         for (let i = 2; i <= n; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     } else {
//         return "Enter a positive number!";
//     }
// };

// console.log(factorialCalculate(5));

/// 3.Sum of the squares of the even numbers in the array

// function evenNumberSquareSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum += arr[i] ** 2;
//         }
//     }
//     return sum;
// }

// const numberArray = [1, 2, 3, 4, 5, 6];
// console.log(evenNumberSquareSum(numberArray));

// const evenNumberSquareSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum += arr[i] ** 2;
//         }
//     }
//     return sum;
// };

// const numberArray = [1, 2, 3, 4, 5, 6];
// console.log(evenNumberSquareSum(numberArray));

/// 4.Check email and password

// function loginCheck(mail, password) {
//     if (mail == "cavid@code.edu.az" && password == "12345") {
//         return "Login success!";
//     } else {
//         return "Email or password incorrect!";
//     }
// }

// const mail = "cavid@code.edu.az";
// const password = "12345";

// console.log(loginCheck(mail, password));

// const loginCheck = (mail, password) => {
//     if (mail == "cavid@code.edu.az" && password == "12345") {
//         return "Login success!";
//     } else {
//         return "Email or password incorrect!";
//     }
// };

// const mail = "cavid@code.edu.az";
// const password = "12345";

// console.log(loginCheck(mail, password));

/// 5.Odd numbers sum

// function oddNumbersSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// const numberArray = [1, 2, 3, 4, 5, 6];
// console.log(oddNumbersSum(numberArray));

// const oddNumbersSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// };

// const numberArray = [1, 2, 3, 4, 5, 6];
// console.log(oddNumbersSum(numberArray));

/// 6.Even numbers count

// function evenNumbersCount(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// const numberArray = [1, 2, 3, 4, 5, 6];
// console.log(evenNumbersCount(numberArray));

// const evenNumbersCount = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// };

// const numberArray = [1, 2, 3, 4, 5, 6];
// console.log(evenNumbersCount(numberArray))
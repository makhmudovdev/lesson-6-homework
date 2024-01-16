// --------------------------------  Funk - 3  --------------------------//
// function sum(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// const n = parseInt(prompt("n sonini kiriting:"));

// console.log(`1 dan ${n} gacha sonlar yig'indisi: ${sum(n)}`);

// ------------------------------ Funk - 6  ---------------------------//

// function getDigitSum(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }

// const number = parseInt(prompt("Sonni kiriting:"));

// console.log(`Sonning raqamlari yig'indisi: ${getDigitSum(number)}`);







//  ------------------------------- homework --------------------------//

// --------------------------------  Funk - 1  ------------------------//

// function power(a, n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 0; i < n; i++) {
//             result *= a;
//         }
//         return result;
//     }
// }

// let result = power(3, 5);
// console.log(result);



// --------------------------------  Funk - 2  ------------------------//

// function mean(a, b) {
//     let arithmeticMean = (a + b) / 2;
//     let geometricMean = Math.pow((a * b), 1 / 2);
//     return [arithmeticMean, geometricMean];
// }

// let result = mean(12, 48);
// console.log(result);



// --------------------------------  Funk - 3  ------------------------//

// function sign(n) {
//     if (n < 0) {
//         return -1;
//     } else if (n > 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let result = sign(10);
// console.log(result);


// --------------------------------  Funk - 4  ------------------------//

// function numberOfRoots(A, B, C) {
//     let discriminant = B * B - 4 * A * C;

//     if (discriminant > 0) {
//         return 2;
//     } else if (discriminant === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let result = numberOfRoots(1, -6, 9);
// console.log(result);



// --------------------------------  Funk - 5  --------------------------//

// function areaCircle(R) {
//     const pi = Math.PI;
//     return pi * Math.pow(R, 2);
// }

// let result = areaCircle(5);
// console.log(result);




// --------------------------------  Funk - 6  --------------------------//

// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }

//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }

//     return sum;
// }

// let result = sumRange(8, 10);
// console.log(result);




// --------------------------------  Funk - 7  -------------------------- /

// function calc(A, B, S) {
//     switch (S) {
//         case "+":
//             return A + B;
//         case "-":
//             return A - B;
//         case "*":
//             return A * B;
//         case "/":
//             return B !== 0 ? A / B : 0;
//         default:
//             return 0;
//     }
// }

// let result1 = calc(10, 15, "*");
// console.log(result1); 

// let result2 = calc(7, 8, "+");
// console.log(result2);


// --------------------------------  Funk - 8  -------------------------- /

// function isEven(K) {
//     return K % 2 === 0;
// }

// let result = isEven(10);
// console.log(result);



// --------------------------------  Funk - 9  -------------------------- /

// function sortABC(a, b, c) {
//     let sortedArray = [a, b, c].sort((x, y) => x - y);

//     let min = sortedArray[0];
//     let mid = sortedArray[1];
//     let max = sortedArray[2];

//     console.log(min + ', ' + mid + ', ' + max);
// }


// sortABC(10, 5, 8);



// --------------------------------  Funk - 10  -------------------------- /

// function isPowerN(K, N) {
//     if (K <= 0 || N <= 0) {
//         return false;
//     }

//     let result = 1;
//     while (result < K) {
//         result *= N;
//     }

//     return result === K;
// }


// let result1 = isPowerN(8, 2);
// console.log(result1); 

// let result2 = isPowerN(27, 3);
// console.log(result2); 

// let result3 = isPowerN(5, 2);
// console.log(result3);




// --------------------------------  Funk - 11  -------------------------- /

// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let result = isPrime(7);
// console.log(result);





// --------------------------------  Funk - 12  -------------------------- /


// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function numberOfPrime(limit) {
//     let count = 0;

//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = numberOfPrime(10);
// console.log(result);




// --------------------------------  Funk - 13  -------------------------- /


// function digitCount(num) {
//     return num.toString().length;
// }

// function digitNth(K, N) {
//     let digitCountK = digitCount(K);

//     if (N > digitCountK) {
//         return -1;
//     }

//     let digitStr = K.toString();
//     let digit = parseInt(digitStr[digitCountK - N]);

//     return digit;
// }

// let result1 = digitNth(105782, 5);
// console.log(result1);

// let result2 = digitNth(1057, 5);
// console.log(result2); 



// --------------------------------  Funk - 14  -------------------------- /


// function inverseNumber(N) {
//     let strN = N.toString();
//     let reversedStr = strN.split('').reverse().join('');
//     let reversedNumber = parseInt(reversedStr);

//     return reversedNumber;
// }

// let result = inverseNumber(56814);
// console.log(result); 




// --------------------------------  Funk - 15  -------------------------- /


// function inverseNumber(N) {
//     let strN = N.toString();
//     let reversedStr = strN.split('').reverse().join('');
//     let reversedNumber = parseInt(reversedStr);

//     return reversedNumber;
// }

// function isPalindrom(N) {
//     return N === inverseNumber(N);
// }

// let result = isPalindrom(1678761);
// console.log(result); 


// --------------------------------  Funk - 16  -------------------------- /


// function factorial(N) {
//     if (N < 0) {
//         return 1;
//     }

//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }

// let result1 = factorial(5);
// console.log(result1);

// let result2 = factorial(-3);
// console.log(result2);



// --------------------------------  Funk - 17  -------------------------- /


// function getSum3(N) {
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// let result = getSum3(15);
// console.log(result); 



// --------------------------------  Funk - 18  -------------------------- /

// function sumOddEven(N) {
//     let sumOdd = 0;
//     let sumEven = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             sumEven += i;
//         } else {
//             sumOdd += i;
//         }
//     }

//     return [sumOdd, sumEven];
// }

// let result = sumOddEven(10);
// console.log(result);



// --------------------------------  Funk - 19  -------------------------- /


// function invertTime(H, M, S) {
//     let hourToSec = H * 3600;
//     let minuteToSec = M * 60;
//     let totalSeconds = hourToSec + minuteToSec + S;

//     return totalSeconds;
// }

// let result = invertTime(0, 6, 40);
// console.log(result);




// --------------------------------  Funk - 20  -------------------------- /

// function decTime(H, M, S) {
//     let totalSeconds = H * 3600 + M * 60 + S;
//     let newTotalSeconds = totalSeconds - 1;
//     let newH = Math.floor(newTotalSeconds / 3600);
//     let newM = Math.floor((newTotalSeconds % 3600) / 60);
//     let newS = newTotalSeconds % 60;

//     let result = `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}:${String(newS).padStart(2, '0')}`;

//     return result;
// }

// let result = decTime(0, 6, 40);
// console.log(result);



// --------------------------------  Funk - 21  -------------------------- /


// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021)); 



// --------------------------------  Funk - 22  -------------------------- /

// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[M - 1];
// }

// let result1 = monthDays(2, 2020);
// console.log(result1);

// let result2 = monthDays(3, 2021);
// console.log(result2);




// --------------------------------  Funk - 23  -------------------------- /

// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[M - 1];
// }

// function prevDate(D, M, Y) {
//     if (D > 1) {
//         return `${String(D - 1).padStart(2, '0')}.${String(M).padStart(2, '0')}.${Y}`;
//     } else {
//         let prevMonth = M === 1 ? 12 : M - 1;
//         let prevYear = M === 1 ? Y - 1 : Y;
//         let prevDay = monthDays(prevMonth, prevYear);
//         return `${String(prevDay).padStart(2, '0')}.${String(prevMonth).padStart(2, '0')}.${prevYear}`;
//     }
// }

// let result = prevDate(10, 3, 2022);
// console.log(result);





// --------------------------------  Funk - 24  -------------------------- /


// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[M - 1];
// }

// function nextDate(D, M, Y) {
//     const daysInCurrentMonth = monthDays(M, Y);

//     if (D < daysInCurrentMonth) {
//         return `${String(D + 1).padStart(2, '0')}.${String(M).padStart(2, '0')}.${Y}`;
//     } else {
//         let nextMonth = M === 12 ? 1 : M + 1;
//         let nextYear = M === 12 ? Y + 1 : Y;
//         return `01.${String(nextMonth).padStart(2, '0')}.${nextYear}`;
//     }
// }

// let result = nextDate(10, 3, 2022);
// console.log(result);




// --------------------------------  Funk - 25  -------------------------- /


// function getDividersNumberAndSum(N) {
//     let dividers = [];
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             dividers.push(i);
//             sum += i;
//         }
//     }

//     return [dividers.length, sum];
// }
// let result = getDividersNumberAndSum(12);
// console.log(result);



// --------------------------------  Homework end  -------------------------- /

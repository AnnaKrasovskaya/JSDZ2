// Задание 1
// let country = "Sweden";
// let access;
// country == "Sweden" ? (access = true) : (access = false);
// console.log(access);

// Задание 2
// let a = 10;
// const a1 = 10;
// for (let i = 0; i < a1; i++) {
//   a = a + 1;
// }
// console.log(a);

// Задание 3
// for (let i = 0; i < 10; i += 2) {
//   let num = +prompt("Введите число");
//   num === 10 ? console.log("Равно 10") : console.log("Не равно 10");
// }

// Задание 4
// let min = +prompt("Введите минимальное число");
// let max = +prompt("Введите максимальное число");
// for (min; min < max; min++) {
//   console.log(min ** 2);
// }

// Задание 5
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Задание 6
// let i = 0;
// while (i < 3) {
//   i++;
//   alert(`number ${i}!`);
// }

// Задание 7
// function squaring(min, max) {
//   for (min; min < max; min++) {
//     console.log(min ** 2);
//   }
// }
// squaring(2, 15);

// Задание 8
// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// function getRandomRGB(num1, num2, num3) {
//   return `rgb(${num1}, ${num2}, ${num3})`;
// }
// console.log(
//   getRandomRGB(
//     getRandomInteger(0, 255),
//     getRandomInteger(0, 255),
//     getRandomInteger(0, 255)
//   )
// );

// Задание 9
// function getNum(n) {
//   for (let i = 1; i <= n; i += 0.5) {
//     Number.isInteger(i)
//       ? console.log(i + " Integer")
//       : console.log(i + " Decimal");
//   }
// }
// getNum(10);

// Задание 10
// function calcPrice(day) {
//   const costPerDay = 40;
//   let sum = day * costPerDay;
//   if (day >= 7) {
//     sum = sum - 50;
//   } else if (day >= 3 && day < 7) {
//     sum = sum - 20;
//   }
//   return sum;
// }
// console.log(calcPrice(7));

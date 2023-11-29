// While

// Lab 3 Print Even
// let i = 1
// while (i <= 100){
//    if( i % 2 === 0){
//     console.log(i);
//    }
//    i++
// }

// Lab 4 Count Digit
// var number = prompt("Your Number:");
// var countDigits = 0;

// while (number !== "") {
//     countDigits++;
//     number = number.slice(1);
// }

// console.log("Count Digit is " + countDigits + " Count");


// Lab 5 Sum Digit
// var number = prompt("Your Number: ");
// var sumOfDigits = 0;

// var i = 0;
// while(i < number.length){
//     sumOfDigits += parseInt(number[i]);
//     i++;
// }

// console.log("Sum Digit is : "+ number +" is "+ sumOfDigits);

// ============================================================
// Do While

// Sentinel, Terminate Condition
// var sum = 0;
// var count = 0;
// var userInput;

// do {
//     userInput = prompt("กรุณากรอกตัวเลข (หากต้องการหยุดกรอก ให้พิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc):");

//     if (userInput === null || userInput === "" || userInput.toLowerCase() === "esc" || userInput.toLowerCase() === "cancel" || parseFloat(userInput) === 0) {
//         break;
//     }

//     var number = parseFloat(userInput);
//     if (!isNaN(number)) {
//         sum += number;
//         count++;
//     }
// } while (true);

// var average = count > 0 ? sum / count : 0;

// console.log("ผลรวม: " + sum);
// console.log("ค่าเฉลี่ย: " + average);

// Guess Number Game
// var guessCount = 0;
// var secretNumber = parseInt(prompt("เลขที่จะนำมาเป็นคำตอบ 1 ถึง 99:"));
// do {
//     var userGuess = prompt("ทายตัวเลขระหว่าง 1 ถึง 99:");

//     // ตรวจสอบการยกเลิก
//     if (userGuess === null) {
//         console.log("เกมถูกยกเลิก");
//         break;
//     }
//     var guess = parseInt(userGuess);
//     if (guess === secretNumber) {
//         guessCount++;
//         console.log("ยินดีด้วย! คุณทายถูก (" + secretNumber + ") ใน " + guessCount + " ครั้ง");
//     } else {
//         guessCount++;
//         console.log("ทายผิด! ตัวเลขที่คุณทาย " + userGuess + " " + (guess > secretNumber ? "มากกว่า" : "น้อยกว่า") + " คำตอบ");
//     }
// } while (guess !== secretNumber);

// ============================================================
// For loop

// Print Number

// for (i = 1; i <= 100; i++){
//     if( i % 2 === 0){
//         console.log(i);
//     }
// }


// Print Sum & Diff

// var sumAll = 0;
// var sumEven = 0;
// var sumOdd = 0;
// var sumSquareEven = 0;

// for (var i = 1; i <= 100; i++) {
//     // ผลรวมทั้งหมด
//     sumAll += i;

//     // ผลรวมเฉพาะเลขคู่
//     if (i % 2 === 0) {
//         sumEven += i;
//     }

//     // ผลรวมเฉพาะเลขคี่
//     if (i % 2 !== 0) {
//         sumOdd += i;
//     }

//     // ผลรวมของเลขที่เป็น 2 ลงตัว ยกกำลัง 2 ลบด้วยผลรวมของเลขที่เป็น 3 ลงตัว ยกกำลัง 2
//     if (i % 2 === 0 && i % 3 === 0) {
//         sumSquareEven += Math.pow(i, 2);
//     }
// }

// // แสดงผลลัพธ์
// console.log("ผลรวมทั้งหมด: " + sumAll);
// console.log("ผลรวมเฉพาะเลขคู่: " + sumEven);
// console.log("ผลรวมเฉพาะเลขคี่: " + sumOdd);
// console.log("ผลรวมของเลขที่หารเป็น 2 ลงตัว ยกกำลัง 2 ลบด้วยผลรวมของเลขที่หารเป็น 3 ลงตัว ยกกำลัง 2: " + sumSquareEven);


// Print Pattern
// var rows = 4;

// for (var i = 1; i <= rows; i++) {
//     var line = "";
//     for (var j = 1; j <= i; j++) {
//         line += "* ";
//     }
//     console.log(line);
// }


// Print Number Pattern
// var rows = 8;

// for (var i = 1; i <= rows; i++) {
//     var line = "";
//     for (var j = 1; j <= i; j++) {
//         line += j + " ";
//     }
//     console.log(line);
// }


// Print Number Pattern
// for (var i = 2; i <= 12; i++) {
//     for (var j = 1; j <= 12; j++) {
//         console.log(i + " x " + j + " = " + (i * j));
//     }
//     console.log();
// }

// Calc. Interest
// ข้อมูลเริ่มต้น
// var initialDeposit = 100000;
// var annualInterestRate = 2.5 / 100;
// var years = 10;

// // คำนวณเงินฝากสะสม
// for (var i = 1; i <= years; i++) {
//     var interest = initialDeposit * annualInterestRate;
//     initialDeposit += interest;

//     console.log("ปีที่ " + i + ": มีเงินฝากสะสม " + initialDeposit.toFixed(2) + " บาท");
// }

// Print Prime
// ตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // แสดงจำนวนเฉพาะในช่วง 1 ถึง 100
// for (var i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

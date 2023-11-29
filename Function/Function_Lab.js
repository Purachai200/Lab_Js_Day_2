// Lab-1:Fundamental
// function sayHelloWorld(){
//     alert("Hello World")
// };
// sayHelloWorld();

// Lab-2:Can you call my name
// function sayHelloUser(){
//     let name = prompt("What you name : ")
//     alert("Hello "+name);
// };
// sayHelloUser();

// Lab-3:Login Feature
// function login(){
//     let username = prompt("Username : ");
//     let password = prompt("Password : ");
//     if(username == "admin" && password == "P@ssw0rd"){
//         alert("Login สำเร็จ");
//     }else{
//         alert("Username หรือ Password ผิดพลาด");
//     }
// }
// login();

// Lab-4:Algorithm
// function isPrime(number) {
//     if (number <= 1){
//         return false;
//     }
//     for (let i = 2; i < number; i++){
//         if (number % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// let number = prompt('กรอกเลข : ');
//     if(isPrime(number)){
//         alert('เป็นจำนวนเฉพาะ');
//     }
//     else{
//         alert('ไม่เป็นจำนวนเฉพาะ')
//     }

// Lab-5:Algorithm
// function printPrime(n) {
//     function isPrime(number) {
//       if (number < 2) {
//         return false;
//       }
//       for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     // Print prime numbers from 2 to n
//     for (let i = 2; i <= n; i++) {
//       if (isPrime(i)) {
//         console.log(i);
//       }
//     }
//   }
//   printPrime(7);

// Lab-6:Fundamental
// function square(w,h){
//     return w * h;
// }
// square(3, 3);

// Lab-7:Fundamental
// function findMin(x, y){
//     return Math.min(x, y);
// }
// findMin(3,4)

// Lab-8:Guess Result
// function squareNum(num) {
//     const result = num * num;
// }
// console.log(squareNum(2));
// คำตอบคือ undefined เพราะไม่มี return result

// Lab-9
// function getLongText() {
//     return 
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//     }
//     console.log(getLongText()); // *
// คือ undefined เพราะ lorem อยู่ข้างล่างของ return ซึ่งไม่ถือว่าเป็น return

// Lab-10
// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
//     }
//     console.log(sayHi); // *
//     console.log(sayHi(10)); // **
    // คำตอบ ** คือออกมาเป็น Hi Kid แต่ ** sayHi ไม่มี Argrument จึงถือว่าเป็น undefined

// Lab-11
// function checkAge(age){
//     if(age >= 18){
//         return true;
//     } if (age < 18){
//         return confirm('Did parents allow you?')
//     }
// }

// function checkAge(age){
//     return (age >= 18) ? true : confirm('Did parents allow you?')
// }
//  checkAge(18);

// function checkAge(age) {
//     return age >= 18 || confirm('Did parents allow you?');
// }


// Lab-12:challenge
function max() {
    if (arguments.length === 0) {
      return undefined;
    }
    let maxNumber = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        if (arguments[i] > maxNumber) {
          maxNumber = arguments[i];
        }
      }
    }
    return maxNumber;
  }
  console.log(max());         
  console.log(max(5, 'abc'));
  


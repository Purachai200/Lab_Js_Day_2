// Lab 5 Sum Digit
var number = prompt("Your Number: ");
var sumOfDigits = 0;

var i = 0;
while(i < number.length){
    sumOfDigits += parseInt(number[i]);
    i++;
}

console.log("Sum Digit is : "+ number +" is "+ sumOfDigits);
// Lab 4 Count Digit
var number = prompt("Your Number:");
var countDigits = 0;

while (number !== "") {
    countDigits++;
    number = number.slice(1);
}

console.log("Count Digit is " + countDigits + " Count");
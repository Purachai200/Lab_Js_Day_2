// Sentinel, Terminate Condition
var sum = 0;
var count = 0;
var userInput;

do {
    userInput = prompt("กรุณากรอกตัวเลข (หากต้องการหยุดกรอก ให้พิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc):");

    if (userInput === null || userInput === "" || userInput.toLowerCase() === "esc" || userInput.toLowerCase() === "cancel" || parseFloat(userInput) === 0) {
        break;
    }

    var number = parseFloat(userInput);
    if (!isNaN(number)) {
        sum += number;
        count++;
    }
} while (true);

var average = count > 0 ? sum / count : 0;

console.log("ผลรวม: " + sum);
console.log("ค่าเฉลี่ย: " + average);
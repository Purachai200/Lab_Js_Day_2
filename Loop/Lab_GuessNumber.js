// Guess Number Game
var guessCount = 0;
var secretNumber = parseInt(prompt("เลขที่จะนำมาเป็นคำตอบ 1 ถึง 99:"));
do {
    var userGuess = prompt("ทายตัวเลขระหว่าง 1 ถึง 99:");

    // ตรวจสอบการยกเลิก
    if (userGuess === null) {
        console.log("เกมถูกยกเลิก");
        break;
    }
    var guess = parseInt(userGuess);
    if (guess === secretNumber) {
        guessCount++;
        console.log("ยินดีด้วย! คุณทายถูก (" + secretNumber + ") ใน " + guessCount + " ครั้ง");
    } else {
        guessCount++;
        console.log("ทายผิด! ตัวเลขที่คุณทาย " + userGuess + " " + (guess > secretNumber ? "มากกว่า" : "น้อยกว่า") + " คำตอบ");
    }
} while (guess !== secretNumber);
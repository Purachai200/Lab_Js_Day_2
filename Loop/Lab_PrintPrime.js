// Print Prime
// ตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// แสดงจำนวนเฉพาะในช่วง 1 ถึง 100
for (var i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

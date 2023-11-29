// Print Sum & Diff

var sumAll = 0;
var sumEven = 0;
var sumOdd = 0;
var sumSquareEven = 0;

for (var i = 1; i <= 100; i++) {
    // ผลรวมทั้งหมด
    sumAll += i;

    // ผลรวมเฉพาะเลขคู่
    if (i % 2 === 0) {
        sumEven += i;
    }

    // ผลรวมเฉพาะเลขคี่
    if (i % 2 !== 0) {
        sumOdd += i;
    }

    // ผลรวมของเลขที่เป็น 2 ลงตัว ยกกำลัง 2 ลบด้วยผลรวมของเลขที่เป็น 3 ลงตัว ยกกำลัง 2
    if (i % 2 === 0 && i % 3 === 0) {
        sumSquareEven += Math.pow(i, 2);
    }
}

// แสดงผลลัพธ์
console.log("ผลรวมทั้งหมด: " + sumAll);
console.log("ผลรวมเฉพาะเลขคู่: " + sumEven);
console.log("ผลรวมเฉพาะเลขคี่: " + sumOdd);
console.log("ผลรวมของเลขที่หารเป็น 2 ลงตัว ยกกำลัง 2 ลบด้วยผลรวมของเลขที่หารเป็น 3 ลงตัว ยกกำลัง 2: " + sumSquareEven);

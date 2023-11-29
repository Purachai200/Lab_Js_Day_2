// Calc. Interest
// ข้อมูลเริ่มต้น
var initialDeposit = 100000;
var annualInterestRate = 2.5 / 100;
var years = 10;

// คำนวณเงินฝากสะสม
for (var i = 1; i <= years; i++) {
    var interest = initialDeposit * annualInterestRate;
    initialDeposit += interest;

    console.log("ปีที่ " + i + ": มีเงินฝากสะสม " + initialDeposit.toFixed(2) + " บาท");
}
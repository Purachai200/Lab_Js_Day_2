const sortNumbersDescending = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
      if (num2 >= num3) {
        return [num1, num2, num3];
      } else {
        return [num1, num3, num2];
      }
    } else if (num2 >= num1 && num2 >= num3) {
      if (num1 >= num3) {
        return [num2, num1, num3];
      } else {
        return [num2, num3, num1];
      }
    } else {
      if (num1 >= num2) {
        return [num3, num1, num2];
      } else {
        return [num3, num2, num1];
      }
    }
  };
  const num1 = parseFloat(prompt("กรุณากรอกเลขตัวแรก:"));
  const num2 = parseFloat(prompt("กรุณากรอกเลขตัวสอง:"));
  const num3 = parseFloat(prompt("กรุณากรอกเลขตัวสาม:"));
  const sortedNumbers = sortNumbersDescending(num1, num2, num3);
  console.log("เลขจากน้อยไปหามากคือ:", sortedNumbers.join(", "));
  
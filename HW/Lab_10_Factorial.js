const factorial = n => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  
  let number = prompt("กรอกเลขที่ต้องการหาแฟคตอเรียล : ");
  alert("แฟคตอเรียลของ "+number+" คือ "+factorial(number));
  
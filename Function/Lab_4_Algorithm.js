// Lab-4:Algorithm
function isPrime(number) {
    if (number <= 1){
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
let number = prompt('กรอกเลข : ');
    if(isPrime(number)){
        alert('เป็นจำนวนเฉพาะ');
    }
    else{
        alert('ไม่เป็นจำนวนเฉพาะ')
    }
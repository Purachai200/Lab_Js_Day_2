// Lab-11
function checkAge(age){
    if(age >= 18){
        return true;
    } if (age < 18){
        return confirm('Did parents allow you?')
    }
}

function checkAge(age){
    return (age >= 18) ? true : confirm('Did parents allow you?')
}
 checkAge(18);

function checkAge(age) {
    return age >= 18 || confirm('Did parents allow you?');
}
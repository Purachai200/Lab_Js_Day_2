const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * (5/9);

let fahrenheit = prompt("กรอกองศาฟาเรนไฮต์ : ")
alert(fahrenheitToCelsius(fahrenheit)+" องศาเซลเซียส")

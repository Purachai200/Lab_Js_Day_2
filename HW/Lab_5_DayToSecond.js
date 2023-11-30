const daysToSeconds = days => 
days * 24 * 60 * 60 
;

let days = prompt("กรุณากรอกวันเพื่อเปลี่ยนเป็นวินาที : ")
alert("เวลา "+days+" วัน = "+daysToSeconds(days)+" วินาที")

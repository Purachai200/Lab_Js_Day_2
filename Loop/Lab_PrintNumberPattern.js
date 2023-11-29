// Print Number Pattern
var rows = 8;

for (var i = 1; i <= rows; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}
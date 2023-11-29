// Demo
// function sing() {
//     console.log('Let it go !!');
//     }
//     sing(); // Let it go !!
//     sing(); // Let it go !!
//     sing(); // Let it go !!

// ==========================================

// function singThreeTime() {
//   for (let i = 0; i < 3; i++) {
//     console.log("Let it go !!");
//   }
// }
// singThreeTime();

// ===========================================

// function scream() {
//     console.log('Arkkkkkkkkkkkkkkkkk !!!!');
//     }
//     function cry() {
//     console.log('I’m crying');
//     }
//     scream() // Arkkkkkkkkkkkkkkkkk !!!!
//     cry()
// function myEmotion() {
//         scream();
//          cry();
//         }
//         myEmotion()

// ============================================

// Parameter & Argument
// function announcement(stationName) {
//     console.log(`Next station ${stationName}`);
//     }
//     let a = "Silom"
//     announcement("Asoke") // Next station Asoke
//     announcement(a) // Next station Silom
//     announcement() // Next station undefined



// Default parameter
// function announcement(stationName, doorSide = "left") {
//   console.log(`next station ${stationName}.`);
//   console.log(`the door will open on the ${doorSide} 
//         hand side`);
// }
// announcement("Asoke");
// next station Asoke.
// The door will open on the left hand side.


// Demo
// function showMessage(from, text = 'Sup!') {
//     // parameters: from, text with default parameter
//     alert(from + ': ' + text);
//     }
//     showMessage('John', 'Hello!'); // John: Hello! (*)
//     showMessage('Mike', "What's up?"); // Mike: What's up? (**)
//     showMessage('John'); // John: Sup! (***)


// function add(a, b) {
//     return a + b;
//     }
// add(5, 3); // 8
// add(15, 205); // 22

// Simple grader function without handle error
// function calculateGrade(point) {
//     if (point >= 80) return 'A';
//     else if (point >= 70 && point < 80) return 'B';
//     else if (point >= 60 && point < 70) return 'C';
//     else if (point >= 50 && point < 60) return 'D';
//     else return 'F';
//     }
// calculateGrade(80); // "A"
// calculateGrade(52); // "D"
// calculateGrade(48); // "F



// Lab-10: Guess Result
function sayHi(age) {
    if (age < 12) alert('Hi kid');
    }
    console.log(sayHi); // *
    console.log(sayHi(10)); // **
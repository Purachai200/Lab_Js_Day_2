// Lab-12:challenge
function max() {
    if (arguments.length === 0) {
      return undefined;
    }
    let maxNumber = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        if (arguments[i] > maxNumber) {
          maxNumber = arguments[i];
        }
      }
    }
    return maxNumber;
  }
  console.log(max());         
  console.log(max(5, 'abc'));
  


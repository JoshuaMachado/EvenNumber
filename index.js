const fs = require('fs');
var converter = require('number-to-words');
let currentNumber = 1; // Replace with that 

while (true) {
    currentNumber++;
    const noinwords = converter.toWords(currentNumber).replace(",", "");
    const nointitlecase = toTitleCase(noinwords);
    const noinuppercase = noinwords.toUpperCase();
    function isEven(n) {
        return n % 2 == 0;
     }
    const eOrO = isEven(currentNumber)
    const endresult = `else if(number === ${currentNumber} || number === "${currentNumber}" || number === "${noinwords}" || number === "${nointitlecase}" || number === "${noinuppercase}") return ${eOrO};\n`
    fs.appendFileSync('./index.js', endresult)
};

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }


var operators = ['x','+','-','/'];
var decimalKey = false;


function keyValue(key) {

 var output = document.getElementById("display");
 var mathOp = key;
 var input = key;

  if(mathOp=="CE") {
    output.innerHTML ='';
  } 
// if equal key is pressed calculate and display result
  else if(mathOp== '=') {
 
        var calculate = input;
        var lastInput = calculate[calculate.length-1];
        }
  if (operators.indexOf(lastInput)>-1 || lastInput == '.')
     calculate = calculate.replace(/.$/,'');
var output = eval(calculate);

  document.getElementById('display').innerHTML = output;
 
  console.log(lastInput, mathOp, output);

};





var operators = ['x','+','-','/'];

var currentVal = "0";  //set initial display to 0 
var opVal = "0";   // set operator index
var storeVal = "0";  // set memory value to 0
var maxDigit = 20; // maximum number before decimal

 //var output = document.getElementById("display");


function keyValue(key) {
  
  document.getElementById("display").innerHTML =innerHTML = key;
  console.log(key);
};

//-----CLEAR ENTRY-------------------
function allClear() { 
 
  currentVal = "0";
  document.getElementById("display").innerHTML = currentVal;
  };
//---- Clear ALL entries--------------

function clearScreen(){

   currentVal = "0";
   OpVal = 0;                //clear operation
   storeVal = "0";          //clear memory
   document.getElementById("display").innerHTML = currentVal;
 }



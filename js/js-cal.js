
var operators = ['x','+','-','/'];

var currentVal = "0";  //set initial display to 0 
var opVal = "0";   // set operator index
var storeVal = "0";  // set memory value to 0
var maxDigit = 20; // maximum number before decimal


 //------ADD A DIGIT TO DISPLAY -----------
function keyValue(key) {          
  //{ if (currentVal.indexOf("!") == -1) { //if not already an error
     if ((eval(currentVal) == 0) && (currentVal.indexOf(".") == -1)) {
          currentVal = parseFloat(key);
      } else {
        currentVal = currentVal + parseFloat(key);
        };
        
  /*  if (currentVal.indexOf("e0") != -1)
     { var epos = currentVal.indexOf("e");
       currentVal = currentVal.substring(0,epos+1) + currentVal.substring(epos+2);
     };*/
  if (currentVal.length > maxDigit){

      currentVal = "Too long"; //don't allow over maxDigit digits before "." ???
     };
    document.getElementById("display").innerHTML = key;
    console.log(key);
  } ;


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

//--------------decimal point condition------
function dot()                  //PUT IN "." if appropriate.
 {
  if ( currentVal.length == 0)     //no leading ".", use "0."
    { currentVal = "0.";
    } else
    {  if ( ( currentVal.indexOf(".") == -1)){
     currentVal = currentVal + ".";
    };
  };
   document.getElementById("display").innerHTML = currentVal;
 };


 
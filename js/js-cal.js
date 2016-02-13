var operators = ['x','+','-','/'];

var currentVal = "";  //set initial display to 0 
var opVal = "0";   // set operator index
var storeVal = "0";  // set memory value to 0
var maxDigit = 20; // maximum number before decimal


 //------ADD A DIGIT TO DISPLAY -----------
function keyValue(key) {          
  //{ if (currentVal.indexOf("!") == -1) { //if not already an error
     if ((currentVal.length === 0) && (currentVal.indexOf(".") === -1)) {
          currentVal = key;
      } else {
        currentVal = currentVal + key;
        };
        
  /*  if (currentVal.indexOf("e0") != -1)
     { var epos = currentVal.indexOf("e");
       currentVal = currentVal.substring(0,epos+1) + currentVal.substring(epos+2);
     };*/
  if (currentVal.length > maxDigit){                          
      alert("Too long. Expressions must be less than 20 characters."); //don't allow over maxDigit digits before "." ???     
      // I Made this an alert because it is easier for the user to understand what has happended. 
      currentVal = '';


     };
    document.getElementById("display").innerHTML = currentVal;
    console.log(currentVal);
 

  } ;


//-----CLEAR ENTRY-------------------
function allClear() {       // I have made this clear the display string
 
  currentVal = "";
  document.getElementById("display").innerHTML = currentVal;
  };
//---- Clear ALL entries--------------

function clearScreen(){ // I have made this delete the last character in the display string

   currentVal = currentVal.substring(0, currentVal.length-1);
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

var currentVal = "";  //set initial display to 0 
var opVal = "0";   // set operator index
var storeVal = "0";  // set memory value to 0
var maxDigit = 18; // maximum number before decimal
var answer  = false;


 //------ADD A DIGIT TO DISPLAY -----------
function keyValue(key) {        

      if (answer === true) { allClear();  
       };     //PUT THIS HERE 
     if ((currentVal.length === 0) && (currentVal.indexOf(".") === -1)) {
          currentVal = key;
      } else {
        currentVal = currentVal + key;
        };
 
  if (currentVal.length > maxDigit){                          
      alert("Too long. Expressions must be less than 18 characters."); //don't allow over maxDigit digits before "." ???     
      // I Made this an alert because it is easier for the user to understand what has happended. 
      currentVal = '';
     };
    document.getElementById("display").innerHTML = currentVal;
   // console.log(currentVal);
} ;


//-----CLEAR ENTRY-------------------
function allClear() {       // I have made this clear the display string
  answer = false;
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
function dot() {               //PUT IN "." if appropriate.
  if ( currentVal.length == 0) {    //no leading ".", use "0."
     currentVal = "0.";
    } else
    {  if ( ( currentVal.indexOf(".") == -1)){
     currentVal = currentVal + ".";
    };
  };
  document.getElementById("display").innerHTML = currentVal;
};

<!-- Operate Function -->

function operate(op)            //Store operation - + * / 
 {
// if (opVal != '') { Calculate(); }; //'Press "="  operation!
  
  
  if (op.indexOf("*") > -1) { opVal = 1; };       // for multiply
  if (op.indexOf("/") > -1) { opVal = 2; };       // division
  if (op.indexOf("+") > -1) { opVal = 3; };       // sum
  if (op.indexOf("-") > -1) { opVal = 4; };       // subtract
  if (op.indexOf("%") > -1) { opVal = 5; };      //percentage
  if (op.indexOf("^") > -1) { opVal = 6; };      //power

  storeVal = currentVal;                 //store value
  currentVal = "";
 document.getElementById("display").innerHTML = currentVal;
 };

//----------------Caclulate funtion------------- 
 function Calculate()  {        
  
  //--- multiply------
  if (opVal == 1) { currentVal = eval(storeVal) * eval(currentVal); };

  //----division------
  if (opVal == 2){
   if (eval(currentVal) != 0)
      { currentVal = eval(storeVal) / eval(currentVal)
      } else
      { currentVal = "Oops! Divide by zero"; 
    }
  };

  //----addition-----
  if (opVal == 3) {   
    currentVal = eval(storeVal) + eval(currentVal); };

    
  //-----subtraction-----
  if (opVal == 4) { 
    currentVal = eval(storeVal) - eval(currentVal); };

  //--------percent-------
  if (opVal == 5) { 
    currentVal = (eval(storeVal) * eval(currentVal))/100; };
 
  // Power Function
if (opVal == 6) { 
    if (currentVal != "" && currentVal != 0 ){
        
        var p=prompt("Enter the power:")
        
        currentVal = Math.pow(currentVal,p)
        }
    else 
        alert("Enter a number first")   
}



  opVal = 0;                          //clear operation
  storeVal = "0";                       //clear memory
  currentVal = currentVal + "";       //FORCE A STRING!
  
  if (currentVal.indexOf("Infinity") != -1)        //eg "1e320" * 1
    { currentVal = "Value too big";
    };
  
  if (currentVal.indexOf("NaN") != -1)        //eg "1e320" / "1e320"
    { currentVal = "Not possible";
    };
  
  answer = true;  
  
  document.getElementById("display").innerHTML = currentVal;
 // NOTE: if no operation, nothing changes, currentVal is left the same!
  
};

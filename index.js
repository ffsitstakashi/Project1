function displayInConsole() {
    var textVal = document.getElementById("textVal").value;
    var numVal = document.getElementById("memId").value;   
    console.log("The text value entered is: "+textVal);
    console.log("The number entered is: "+numVal);

// condition to check number entered by user. If it is equal to 1 then link sends to member 1, if it is 2 then 
// links to member 2 and if it is 3 then links to member 3.
  
if(numVal == 1){
    var myURL = "./member1.html";
    }  
    else if(numVal == 2){
        var myURL = "./member2.html";
    }  
    else if(numVal == 3){
        var myURL = "./member3.html";
    }

// setting values in paragraph element of bottom div
    document.getElementById("display").innerHTML = "The text value entered is : "+textVal+" The number entered is : "+numVal;
// setting href attribute of link
    document.getElementById('link').href = myURL;
}
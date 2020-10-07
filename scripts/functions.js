function hello()
{
	alert("hello from function");
}


var num1 = 10;
num2 = 20
let num3 = 30;
sum = num1 + num2 + num3;
document.write("<br/> The sum of " + num1 + " , " + num2 + " ," + num3 + " is " + sum);
 


num1 = 5;
num2 = 4;
if(num1 === num2) {
	document.write("True")
}
else{
	document.write("False");
}

var username = "manita";
var phone = 9841502050
var email = "pantamanee145@gmail.com";
var password = "p@ssword";

if ( password =="p@ssword" && (username =="manita" || phone == "9841502050")) {
	alert("Login Success");
}
else {
	alert("Credentials not match");
}


counter = 1;
while(counter <= 5){
	document.getElementById("result").innerHTML+=  "Counter: " + counter + "<br>"
	counter++;
}






var num = parseInt(prompt("Enter the number"));
document.getElementById("multable").innerHTML+= "<table border = 1 width= 300px>"; 
for(i = 1; i <=10; i++){

	var mul = i* num ;
	document.getElementById("multable").innerHTML+= "<tr><td>"+ num + "x" + i + "="+ mul +"<br></td></tr>";
}
document.getElementById("multable").innerHTML+= "</table>";






document.write(parseInt(3.1415927))
 var num1 = 5;
 var num2 = "5";
 add = parseInt(num1) + parseInt(num2);
 document.write("<br/>The sum is "+add);


//arrray with date

var da = new Date();
var yr = da.getFullYear();
var dat = da.getDate();
var mon = da.getMonth();
var day = da.getDay();

var tday = new Array("Sunday" , "MOnday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday");
var today = tday[day];
var months = new Array("jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July", "Sep" , "Oct" , "NOv" , "Dec")
var cmonth= months[mon];

document.getElementById("date").innerHTML="Date: "+ today+"," +cmonth + " "+dat + " "+ yr;




function getTotal(){
var qty= document.getElementById("qty").value;
var price= document.getElementById("price").value
var total= qty*price;

document.getElementById("nettotal").innerHTML=total;
return false;
}


function square(y){
	return y*y;
}


function ranImage(){
var myCollection = new Array("images/1.jpg" , "images/2.jpg" , "images/3.jpg" , "images/4.jpg" , "images/5.jpg")
var randomImage = Math.floor(Math.random()*myCollection.length)

document.getElementById("randomImages").src=myCollection[randomImage];
}


//initializing multiidimensional array
function start()
{
	var array1 = [ [ 1, 2, 3], //row 0
	             [4, 5, 6] ]; //row 1
	var array2 = [ [ 1, 2],
	             [3],
	             [4, 5, 6] ];

outputArray("values in array1 by row" , array1,
	document.getElementById("output1") );
outputArray("values in array2 by row" , array2,
	document.getElementById("output2") );

}
//addmission
function admissionOpen(){
  window.open('admissionopen.html','popUpWindow','height=470,width=960,left=100,top=100,resizeable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  //When page loads, open the modal
  document.body.onload = function(){
    modal.style.display = "block";
  }
  // When the user clicks the button, open the modal
  btn.onclick = function(){
    modal.style.display = "block";
  }

   
   // When the user clicks on <span> (x), close tha modal
   span.onclick = function(){
     modal.style.display = "none";
   }

   
   //When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event){
     if (event.target == modal) {
       modal.style.display = "none";
     }
    }

//Email validation
//September 8
// Multidimension Arrya
//JavaScript Live Clock
//Math Object

//String Object
var email = "k@meGmal.com";
//alert(email.charAt(2));

var checkat = email.indexOf("@");
var checkdot = email.lastIndexOf(".")
if(checkat >= 1 && checkdot >=1 ) {
   document.write("<br/> Valid Email" ); }
else {
   document.write("<br>Not valid Email");  }

//
document.write("<br> Total length of email "+ email.length);
document.write ("<br>Substring " + email.substr(-4)) ; 
document.write ("<br>toUpperCase " + email.toUpperCase()) ; 
document.write("<br/>toLowerCase " + email.toLowerCase());

function validateForm(){
  var email = document.login.eml.value;
  var pass =  document.login.password.value;
  var checkat = email.indexOf("@");
  var checkdot = email.lastIndexOf(".")

   if(email == "" && pass == "")
   {
    document.getElementById("errorMessage").innerHTML = "Email and Password Required";  
    document.login.eml.focus();
    return false;
   }
   else if(email == ""){
    document.getElementById("errorMessage").innerHTML = "Email is Required";  
    document.login.eml.focus();
    return false;
   }
   else if(pass == ""){
    document.getElementById("errorMessage").innerHTML = "Password is Required";  
    document.login.password.focus();
    return false;
   }
   else if(checkat <= 2 && checkdot <=2 ) {
    document.getElementById("errorMessage").innerHTML = "Email Not Valid";  
    document.login.eml.focus();
    return false;
   }
 
  else if(email == "manita@gmail.com" && pass == "ma123")
  {
    window.location.href = "/welcome.html";
    return false;
  }
  else {

    document.getElementById("errorMessage").innerHTML = "Username and Password Not Valid";  
    document.login.eml.focus();
    return false;

  }
return true;
}




var model = document.getElementById("myModal");

//Get the button that opens the model
var span = document.getElementById("myBtn");

//Get the <span> element that closes the model
var span= document.getElementsByClassName("close")[0];

//When page loads ,open the model
document.body.onload= function(){
  modal.style.display = "block";
}

//When the user clicks the button , open the model
ByteLengthQueuingStrategy.onclick = function(){
  modal.style.display= "block";
}
//When the user clicks on <span> (x), close the moddal
span.onclick= function(){
  modal.style.display= "none";
}
//When the user clicks anywherw outside of the modal, close it
window.onclick= function(){
  if(event.target == modal){
    modal.style.display= "none";

  }
}

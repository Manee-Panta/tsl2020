

	function ranImage(){
var myCollection = new Array("images/a.jpg" , "images/b.jpg" , "images/c.jpg" , "images/d.jpg" , "images/e.jpg", "images/f.jpg")
var randomImage = Math.floor(Math.random()*myCollection.length)
//alert("Random number is" + randomImage);
document.getElementById("randomImages").src=myCollection[randomImage];
}
 function ranImages(){
	// alert("Do you wanna quite the game");
	// document.getElementById("results").innerHTML=style.font-size="100px";

}
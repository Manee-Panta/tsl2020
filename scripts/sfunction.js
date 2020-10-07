
	
function ranImage(){
        var myCollection = new Array("images/1.jpg" , "images/2.jpg" , "images/3.jpg" , "images/4.jpg" , "images/5.jpg")
        var randomImage = Math.floor(Math.random()*myCollection.length)
        document.getElementById("randomImages").src=myCollection[randomImage];
        }
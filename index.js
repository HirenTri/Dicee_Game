// var n=Math.random();
// n=n*6;// now its value range from 0-5.9 upto 16 decimal place
// n=Math.floor(n)+1;

// alert("Working");
var randomNumber1=(Math.floor(Math.random()*6))+1;//1-6
var randomImage="dice" + randomNumber1 + ".png";//change for attribute
var randomimage="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];//select image 1
image1.setAttribute("src",randomimage);
 
var randomNumber2=(Math.floor(Math.random()*6))+1;
var randomImage="dice" + randomNumber2 + ".png";
var randomimage="images/"+randomImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";

}
else{
    document.querySelector("h1").innerHTML="Draw";
}
function getColor(){
     const randomNumber=Math.floor(Math.random()*16777215);
     const randomColor="#"+randomNumber.toString(16);
     document.body.style.backgroundColor=randomColor;
     document.getElementById("color").innerText=randomColor;
   
     navigator.clipboard.writeText(randomColor);
}

//event call
document.getElementById("btn").addEventListener(
    "click",getColor

)

//calling funcction
getColor();
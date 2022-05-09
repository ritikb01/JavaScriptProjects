const arr=["#B22222","#FF69B4","#FFFACD","#16CF16","#166DCF","#5116CF","#144E9C","#A32492"];

const name=document.querySelector(".name");

btn.addEventListener("click",function(){
const randomNumber=getRandomInt(0,7);
name.textContent=arr[randomNumber];
document.body.style.backgroundColor=arr[randomNumber];
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




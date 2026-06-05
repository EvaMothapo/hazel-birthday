let text= "Happy BirthDay Hazel ❤️  I hope your day is as gorgeous as you are, I love you loads!";
let typeIndex=0;

function typeEffect(){
    if (typeIndex < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeEffect,70); 
    }
}
typeEffect();

let container = document.querySelector(".confetti-container");
let emojis = ["🎈", "✨", "🎉", "🎊", "🎁", "♥️", "🥳", "🎂", "🥂"];
function createConfetti(){
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    
    confetti.innerText=emojis[Math.floor(Math.random() * emojis.length)];
    
    confetti.style.left= Math.random() * 100 + "vw";
    confetti.style.animationDuration= Math.random()* 3 + 2 + "s";
    confetti.style.fontSize = Math.random() * 20 + 10 + "px";
     
    container.appendChild(confetti);

    setTimeout(()=>{
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 200)

window.addEventListener("load", ()=>{
let images= [
    "images/photo-1.jpeg",
    "images/photo-2.jpeg",
    "images/photo-3.jpeg",
    "images/photo-4.jpeg",
    "images/photo-5.jpeg",
    "images/photo-6.jpeg",
    "images/photo-7.jpeg",
    "images/photo-8.jpeg",
];

let slideIndex= 0;
let slide= document.getElementById("slideImage");

function changeSlide(){
    slideIndex++;

    if (slideIndex>= images.length){
        slideIndex=0;
    }
    
    slide.style.opacity=0;
    
    setTimeout(()=>{
        slide.src= images[slideIndex];
        slide.style.opacity = 1;
    }, 300);
}
setInterval(changeSlide, 2000);
});
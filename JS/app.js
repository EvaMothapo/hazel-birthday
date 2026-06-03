let text= "Happy BirthDay Hazel ❤️  I hope your day is as gorgeous as you are, I love you loads!";
let index=0;

function typeEffect(){
    if (index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
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
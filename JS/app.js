window.addEventListener("load", () => {
  let lockScreen = document.getElementById("lockScreen");
  let swipeBar = document.getElementById("swipeBar");

  function unlockScreen() {
    lockScreen.style.transition = "1s ease";
    lockScreen.style.transform = "translateY(-100%)";
    lockScreen.style.opacity = "0";
    setTimeout(() => {
      lockScreen.style.display = "none";
    }, 1000);
  }

  let text =
    "Happy Birthday Bestie!! ❤️ I hope your day is as gorgeous as you are, I love you loads!";
  let typeIndex = 0;

  let typingEl = document.querySelector(".typing");
  let finalSection = document.querySelector(".final-section");

  function typeEffect() {
    if (!typingEl) return;

    if (typeIndex < text.length) {
      typingEl.innerHTML += text.charAt(typeIndex);
      typeIndex++;
      setTimeout(typeEffect, 70);
    } else {
      let button = document.getElementById("revealBtn");
      if (button) {
        button.style.display = "inline-block";

        button.addEventListener("click", () => {
          let finalMessage = document.createElement("h2");
          finalMessage.id = "final-msg";
          finalMessage.innerHTML = "You Mean The World To Me ♥️";

          finalSection.appendChild(finalMessage);

          button.remove();
        });
      }
    }
  }

  typeEffect();

  // CONFETTI
  let container = document.querySelector(".confetti-container");
  let emojis = ["🎈", "✨", "🎉", "🎊", "🎁", "♥️", "🥳", "🎂", "🥂"];

  function createConfetti() {
    if (!container) return;

    let confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.fontSize = Math.random() * 20 + 10 + "px";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }

  setInterval(createConfetti, 300);

  // SLIDESHOW
  let images = [
    "images/photo-1.jpeg",
    "images/photo-2.jpeg",
    "images/photo-3.jpeg",
    "images/photo-4.jpeg",
    "images/photo-5.jpeg",
    "images/photo-6.jpeg",
    "images/photo-7.jpeg",
    "images/photo-8.jpeg",
  ];

  let slideIndex = 0;
  let slide = document.getElementById("slideImage");

  if (slide) {
    function changeSlide() {
      slideIndex++;

      if (slideIndex >= images.length) {
        slideIndex = 0;
      }

      slide.style.opacity = 0;

      setTimeout(() => {
        slide.src = images[slideIndex];
        slide.style.opacity = 1;
      }, 300);
    }

    setInterval(changeSlide, 2000);
  }
});

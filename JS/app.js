window.addEventListener("load", () => {
  let lockScreen = document.getElementById("lockScreen");
  let swipeBar = document.getElementById("swipeBar");

  let music = document.getElementById("bgMusic");
  let toggleBtn = document.getElementById("musicToggle");
  let isPlaying = false;

  let typingEl = document.querySelector(".typing");
  let finalSection = document.querySelector(".final-section");

  let slideIndex = 0;
  let slide = document.getElementById("slideImage");
  let photoMessage = document.getElementById("photoMessage");

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
  let messages = [
    "My pretty girl🦋",
    "My favourite smile ❤️",
    "You looked beautiful here💓",
    "One of my favourite memories📷",
    "You make every moment special👓",
    "I love you baby girl♥️",
    "Forever my favourite person💘💝",
    "Happy Birthday Linea De vida✨🎂 ",
  ];

  let topBar = document.getElementById("topBar");
  let bottomBar = document.getElementById("bottomBar");

  setTimeout(() => {
    topBar.style.opacity = "0";
    bottomBar.style.opacity = "0";

    setTimeout(() => {
      topBar.style.display = "none";
      bottomBar.style.display = "none";
    }, 1000);
  }, 4000);

  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      toggleBtn.innerText = "🔇 Music";
    } else {
      music.play();
      toggleBtn.innerText = "🔊 Music";
    }
    isPlaying = !isPlaying;
  });

  swipeBar.addEventListener("click", unlockScreen);

  function fadeInMusic(audio) {
    audio.volume = 0;
    audio.play();

    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 0.3) {
        vol += 0.02;
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 80);
  }
  function unlockScreen() {
    fadeInMusic(music);

    lockScreen.style.transition = "1.3s ease";
    lockScreen.style.transform = "scale(1.08)";
    lockScreen.style.opacity = "0";

    setTimeout(() => {
      lockScreen.style.display = "none";
      lockScreen.style.pointerEvents = "none";
    }, 1300);
  }

  let text =
    "Happy Birthday Bestie!! ❤️ I hope your day is as gorgeous as you are, I love you loads!";
  let typeIndex = 0;

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

          finalMessage.style.opacity = "0";
          finalMessage.style.transform = "scale(0.8)";
          finalMessage.style.transition = "all 1s ease";

          finalSection.appendChild(finalMessage);

          setTimeout(() => {
            finalMessage.style.opacity = "1";
            finalMessage.style.transform = "scale(1)";
          }, 100);

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

  function changeSlide() {
    slide.style.transition = "opacity 1s ease, transform 1s ease";
    slide.style.opacity = 0;
    slide.style.transform = "scale(1.05)";

    setTimeout(() => {
      slideIndex++;

      if (slideIndex >= images.length) {
        slideIndex = 0;
      }

      slide.src = images[slideIndex];
      photoMessage.innerText = messages[slideIndex];

      slide.style.opacity = 1;
      slide.style.transform = "scale(1)";
    }, 600);
  }

  setInterval(changeSlide, 3000);
});

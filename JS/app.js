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
    "Happy Birthday Bestie!!   I hope your day is as gorgeous as you are, I love you loads!";
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
          finalMessage.innerHTML =
            "As someone who struggled to make friends, I didn't expect I'd manage to have a friend like you ❤️.<br><br>" +
            "I remember the day we started being friends. I thought, 'Oh well! She's gonna break my heart 💔 like others did,' but nope, you proved me wrong.<br><br>" +
            "You showed me that there's still good people ✨ out there who will bring you calmness 😶‍🌫️ in a storm 🌪️, laughter 🤣 on my bad 👎🏼 days, and real warmth into my life 🫠.<br><br>" +
            "It's so crazy how we started as strangers and today we're more like sisters 👯‍♀️ than friends.<br><br>" +
            "And what makes it even more beautiful and meaningful is everything we've been through together; the ups and downs, the stressful days, the moments that felt like we were being tested, and the ones that made us laugh when we shouldn't have.<br><br>" +
            "These experiences built something real, more like a connection ❤️ that actually means a lot for the both of us.<br><br>" +
            "I love how kind but still tough you are, how you know how to walk away from situations that don't serve you. I learnt to know when to remove myself because of you.<br><br>" +
            "You always know how to make my bad days brighter, to make ordinary things feel so special without even doing much.<br><br>" +
            "I'm really glad our paths crossed and I hope we grow stronger and wiser.<br><br>" +
            "Re fetile dilo tse dintshi and we're still strong irregardless. Not even the distance could separate our bond ❤️.<br><br>" +
            "You Mean The World To Me ♥️";
            
            
          finalMessage.style.opacity = "0";
          finalMessage.style.transform = "scale(0.8)";
          finalMessage.style.transition = "all 1s ease";

          finalSection.appendChild(finalMessage);

          setTimeout(() => {
            finalMessage.style.opacity = "1";
            finalMessage.style.transform = "scale(1)";
          }, 100);

          // Birthday age reveal
          let ageReveal = document.createElement("h3");
          ageReveal.innerHTML = "🎂 Level 24 Unlocked! ✨";
          ageReveal.style.opacity = "0";
          ageReveal.style.marginTop = "15px";
          ageReveal.style.color = "white";
          ageReveal.style.transition = "opacity 2s ease";

          finalSection.appendChild(ageReveal);

          setTimeout(() => {
            ageReveal.style.opacity = "1";
          }, 1200);

          // Extra confetti burst
          for (let i = 0; i < 30; i++) {
            setTimeout(createConfetti, i * 100);
          }

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

function startCelebration() {
  document.getElementById("entryScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  const music = document.getElementById("bgMusic");
  music.play();
  music.loop = true;
}
function goToGallery() {
  window.location.href = "gallery.html";
}

// Make "CLICK ME" float randomly
function floatClickMe() {
  const text = document.getElementById("clickText");
  setInterval(() => {
    const x = Math.floor(Math.random() * window.innerWidth * 0.8);
    const y = Math.floor(Math.random() * window.innerHeight * 0.8);
    text.style.position = "absolute";
    text.style.left = `${x}px`;
    text.style.top = `${y}px`;
  }, 1200);
}

window.onload = function () {
  floatClickMe();

  const clickText = document.getElementById("clickText");
  if (clickText) {
    clickText.addEventListener("click", startCelebration);
  }
};

function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 80);
  }
}

function startCelebration() {
  document.getElementById("entryScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  const message = "I LOVE YOU SOOO MUCH PRINCESS, HAPPYYYY BIRTHDAYYYY TO YOUU🥹✨❤️";
  typeWriter(message, 0);

  const music = document.getElementById("bgMusic");
  music.play().catch((e) => console.log("Autoplay failed:", e));
  music.loop = true;
}

function goToNextPage() {
  window.location.href = "second.html";
}


function goToNextPage() {
  window.location.href = "second.html";
}
// Confetti after message
setTimeout(() => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}, 500);
 function showPopup(message) {
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("popupOverlay").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

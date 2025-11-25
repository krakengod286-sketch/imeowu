// RANDOM HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  const size = Math.random() * (32 - 14) + 14;
  heart.style.fontSize = size + "px";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}, 700);

// SPARKLES
setInterval(() => {
  const sp = document.createElement("div");
  sp.className = "sparkle-dot";
  sp.style.left = Math.random() * window.innerWidth + "px";
  sp.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(sp);
  setTimeout(() => sp.remove(), 1200);
}, 250);

// PAGE FADE OUT
document.querySelectorAll(".page-exit").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.add("pixel-transition");
  });
});

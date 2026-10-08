/* =========================================================
   TWO WORLDS — COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {

  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }

  if (cursorRing) {
    cursorRing.style.left = e.clientX + "px";
    cursorRing.style.top = e.clientY + "px";
  }

});


/* =========================================================
   FLOATING PARTICLES
   ========================================================= */

const particleContainer = document.getElementById("particles");

const symbols = [
  "✦",
  "♡",
  "✧",
  "·",
  "🦇",
  "🎀",
  "☾"
];

if (particleContainer) {

  for (let i = 0; i < 55; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.fontSize =
      (Math.random() * 12 + 8) + "px";

    particle.style.animationDuration =
      (Math.random() * 15 + 10) + "s";

    particle.style.animationDelay =
      (Math.random() * 12) + "s";

    particleContainer.appendChild(particle);
  }

}


/* =========================================================
   ENTER BUTTON
   ========================================================= */

function scrollToUniverse() {

  const worlds = document.getElementById("worlds");

  if (worlds) {
    worlds.scrollIntoView({
      behavior: "smooth"
    });
  }

}


/* =========================================================
   OPEN WHEN LETTERS
   ========================================================= */

const letters = {

  sad: {
    icon: "☾",
    title: "When you're sad",

    text: `
      Look up at the sky for a moment and remember your Allah.

      <br><br>

      Allah does not burden a soul beyond what it can bear.

      <br><br>

      <em>“Allah does not burden a soul beyond what it can bear.”</em>

      <br><br>

      — Surah Al-Baqarah 2:286

      <br><br>

      So breathe. Make dua. Keep going.

      <br><br>

      Even when you cannot see the way forward,
      Allah knows the way.
    `
  },


  miss: {
    icon: "🌙",
    title: "When you miss me",

    text: `
      Mujhe pata hai itni toh yaad nahi aaungi hehe,
      but agar kabhi aaun, toh chaand ko dekh lena.

      <br><br>

      It’s the same moon that I look up at too.

      <br><br>

      No matter how far apart we are,
      the moon is still the same for both of us.

      <br><br>

      And even in the darkest night,
      it remains a little bit of light.

      <br><br>

      So maybe you can think of me as your little moon too hehe.

      <br><br>

      Aur haan, zyada emotional mat hona
      warna main bhi ho jaungi. 🎀
    `
  },


  bad: {
    icon: "🖤",
    title: "When you have a terrible day",

    text: `
      Allah tumhara saath hamesha,
      hamesha rahega.

      <br><br>

      Aur har mushkil ke saath aasani ka wada hai na?

      <br><br>

      <em>“Indeed, with hardship comes ease.”</em>

      <br><br>

      — Surah Ash-Sharh 94:5–6

      <br><br>

      Kabhi kabhi bura waqt bhi aata hai,
      lekin iska matlab yeh nahi ke Allah ne tumhein chhor diya.

      <br><br>

      Maybe sometimes the difficult moments
      are what bring us closer to Him.

      <br><br>

      So don't let one terrible day convince you
      that everything is terrible.

      <br><br>

      It's one day.

      <br>

      Not your whole story.
    `
  },


  laugh: {
    icon: "😭",
    title: "When you need to laugh",

    text: `
      Okay fine.

      <br><br>

      I have a secret.

      <br><br>

      Bachpan se main thori si pagal hoon. 😭

      <br><br>

      And yes, I have that absolutely ridiculous
      donkey laugh.

      <br><br>

      Agar kabhi tumhein hasna ho
      aur kuch kaam na aaye,
      Instagram par message kar dena.

      <br><br>

      Main apna donkey laugh suna doon gi.

      <br><br>

      You're welcome. 🎀
    `
  }

};


/* =========================================================
   MODAL ELEMENTS
   ========================================================= */

const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");


/* =========================================================
   OPEN LETTER
   ========================================================= */

function openLetter(type) {

  const letter = letters[type];

  if (!letter) {
    return;
  }

  modalIcon.innerHTML = letter.icon;
  modalTitle.textContent = letter.title;
  modalText.innerHTML = letter.text;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


/* =========================================================
   CLICK OUTSIDE MODAL
   ========================================================= */

if (modal) {

  modal.addEventListener("click", (e) => {

    if (e.target === modal) {
      closeModal();
    }

  });

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    closeModal();
  }

});


/* =========================================================
   GIFT
   ========================================================= */

function openGift() {

  modalIcon.innerHTML = "🎁";

  modalTitle.textContent = "Your actual gift";

  modalText.innerHTML = `
    The gift isn't really this website.

    <br><br>

    It's the fact that I sat here and made
    an unnecessarily elaborate tiny universe
    just for you.

    <br><br>

    From one random Instagram comment...

    <br>

    to Among Us...

    <br>

    to you disappearing and making me think
    you blocked me... 😭

    <br><br>

    somehow, we ended up here.

    <br><br>

    So here's your little corner of the internet.

    <br><br>

    <strong>
      🖤 You brought the darkness. 🎀 I brought the glitter.
    </strong>
  `;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   SECRET LOGO
   CLICK 5 TIMES
   ========================================================= */

const logo = document.querySelector(".nav-logo");

let logoClicks = 0;
let logoTimer;

if (logo) {

  logo.addEventListener("click", () => {

    logoClicks++;

    clearTimeout(logoTimer);

    logoTimer = setTimeout(() => {
      logoClicks = 0;
    }, 2000);


    if (logoClicks === 5) {

      alert(
        "🦇 SECRET UNLOCKED\n\n" +
        "Who does that?? 😭\n\n" +
        "I like you."
      );

      logoClicks = 0;
    }

  });

}


/* =========================================================
   SPARKLE CLICK EFFECT
   ========================================================= */

document.addEventListener("click", (e) => {

  const sparkle = document.createElement("span");

  sparkle.textContent = "✦";

  sparkle.style.position = "fixed";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";

  sparkle.style.fontSize = "14px";

  sparkle.style.animation = "clickSparkle 0.7s ease forwards";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700);

});


/* =========================================================
   CLICK SPARKLE ANIMATION
   ========================================================= */

const sparkleStyle = document.createElement("style");

sparkleStyle.innerHTML = `

@keyframes clickSparkle {

  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -100px) scale(1.5);
  }

}

`;

document.head.appendChild(sparkleStyle);
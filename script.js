  let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        bgMusic.volume = 0.4;
        bgMusic.play();
        musicStarted = true;
    }
}

/* Floating hearts */
function spawnHeart() {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    document.querySelector(".hearts").appendChild(h);
    setTimeout(() => h.remove(), 8000);
}
setInterval(spawnHeart, 300);

/* NO button */
const noTexts = ["No 😳", "No 🥺", "Still no? 😅", "Don’t say no 💔"];
let noIndex = 0;

function handleNoClick() {
    startMusic();

    const noBtn = document.querySelector(".no-button");
    const yesBtn = document.querySelector(".yes-button");

    noBtn.textContent = noTexts[noIndex % noTexts.length];
    noIndex++;

    noBtn.classList.remove("cute");
    void noBtn.offsetWidth;
    noBtn.classList.add("cute");

    yesBtn.classList.add("glow");
}

/* Romantic heart burst */
function romanticBurst() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = 40 + Math.random() * 20 + "vw";
            heart.style.bottom = "20vh";
            heart.style.animationDuration = "4s";
            document.querySelector(".hearts").appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 70);
    }
}

/* Typing effect */
function typeLoveText(text, id) {
    const el = document.getElementById(id);
    el.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        el.textContent += text.charAt(i);
        i++;
        if (i === text.length) clearInterval(interval);
    }, 120);
}

/* YES click */
function handleYesClick() {
    startMusic();

    document.querySelector(".golden-glow").classList.add("active");
    document.querySelector(".container").classList.add("heartbeat");

    romanticBurst();
    typeLoveText("I love you ❤️", "loveText");

    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 4000);
}

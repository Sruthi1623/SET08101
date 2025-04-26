// Load all saved values or fallback to safe defaults
const time1  = Number(localStorage.getItem("timeTakenLevel1")) || 0;
const time2  = Number(localStorage.getItem("timeTakenLevel2")) || 0;
const time3 = Number(localStorage.getItem("timeTakenFinalTwist")) || 0;

const hint1 = Number(localStorage.getItem("hintsUsedLevel1")) || 0;
const hint2 = Number(localStorage.getItem("hintsUsedLevel2")) || 0;
const hint3 = Number(localStorage.getItem("hintsUsedFinalTwist")) || 0;


const coin1 = localStorage.getItem("coinsLevel1");
const coin2 = localStorage.getItem("coinsLevel2");
const coin3 = localStorage.getItem("coinsBonus");


// Calculate totals
const totalTime = time1 + time2 + time3;
const totalHints = hint1 + hint2 + hint3;

const coinEarnedLevel1 = 100;
const coinEarnedLevel2 = 150;
const coinEarnedTwist  = 250;
const coinsEarned = coinEarnedLevel1 + coinEarnedLevel2 + coinEarnedTwist;


let coinsRemaining;
if (coin1 && coin2 && coin3) {
  coinsRemaining = Number(coin1) + Number(coin2) + Number(coin3);
} else {
  coinsRemaining = "--";
}

// Update DOM
document.getElementById("timeTotal").textContent       = `${totalTime}`;
document.getElementById("hintTotal").textContent       = totalHints;
document.getElementById("coinsEarned").textContent     = `${coinsEarned} coins`;
document.getElementById("coinsRemaining").textContent  = coinsRemaining !== "--" ? `${coinsRemaining} coins` : "--";

// Rank logic
let rank = "Field Agent";
if (totalHints <= 2 && totalTime <= 240) {
  rank = "Master Decoder";
} else if (totalHints <= 4) {
  rank = "Strategist";
}
document.getElementById("rank").textContent = rank;

// Confetti + SweetAlert before revealing container
window.onload = () => {
  confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

  Swal.fire({
    title: '🎉 Mission Complete!',
    text: 'You’ve saved the world, Agent Cipher.',
    icon: 'success',
    confirmButtonText: 'View Stats',
    confirmButtonColor: '#00ffcc'
  }).then(() => {
    const box = document.querySelector('.victory-container');
    box.style.display = 'block';
    box.classList.add('fade-in');
  });
};

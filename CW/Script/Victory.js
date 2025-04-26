// Load stats
const time1 = Number(localStorage.getItem("timeTakenLevel1")) || 0;
const time2 = Number(localStorage.getItem("timeTakenLevel2")) || 0;
const time3 = Number(localStorage.getItem("timeTakenFinalTwist")) || 0;

const hint1 = Number(localStorage.getItem("hintsUsedLevel1")) || 0;
const hint2 = Number(localStorage.getItem("hintsUsedLevel2")) || 0;
const hint3 = Number(localStorage.getItem("hintsUsedFinalTwist")) || 0;

// Coin earnings
const earnedL1 = Number(localStorage.getItem("coinsEarnedLevel1")) || 0;
const earnedL2 = Number(localStorage.getItem("coinsEarnedLevel2")) || 0;
const earnedTwist = 250; // Always 250, bonus

// Total Time, Hints, Coins
const totalTime = time1 + time2 + time3;
const totalHints = hint1 + hint2 + hint3;
const coinsEarned = 100 + 150 + 250; // Max coins possible
const coinsRemaining = earnedL1 + earnedL2 + earnedTwist;

// Update DOM
document.getElementById("timeTotal").textContent = `${totalTime}`;
document.getElementById("hintTotal").textContent = `${totalHints}`;
document.getElementById("coinsEarned").textContent = `${coinsEarned} coins`;
document.getElementById("coinsRemaining").textContent = `${coinsRemaining} coins`;

document.getElementById("earnedL1").textContent = earnedL1;
document.getElementById("earnedL2").textContent = earnedL2;

// Rank logic
let rank = "Field Agent";
if (totalHints <= 2 && totalTime <= 240) {
  rank = "Master Decoder";
} else if (totalHints <= 4) {
  rank = "Strategist";
}
document.getElementById("rank").textContent = rank;

// Show SweetAlert and reveal
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

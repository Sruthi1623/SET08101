let timeLeft = 180;
let interval;

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("level2Initialized")) {
    localStorage.setItem("hintsUsedLevel2", "0");
    localStorage.setItem("timeTakenLevel2", "0");

    const earnedFromLevel1 = Number(localStorage.getItem("coinsLevel1")) || 0;
    localStorage.setItem("coinsLevel2Available", earnedFromLevel1.toString());
    sessionStorage.setItem("level2Initialized", "true");
  }

  updateCoinDisplay("Level2Available");

  const timerSpan = document.getElementById("timer");
  timerSpan.textContent = timeLeft;

  interval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      Swal.fire("❌ Mission Failed", "You ran out of time!", "error")
        .then(() => window.location.href = "index.html");
    }
  }, 1000);
});

const level2Hints = [
  "It's Base64 – use a Base64 decoder first.",
  "Decoded text often contains words like 'STOP' or 'ATTACK'.",
  "Try pasting the string into an online Base64 tool."
];

function showLevel2Hint() {
  showHint(level2Hints, "Level2Available");
}

function checkFinalAnswer() {
  const input = document.getElementById("answer2").value.trim().toUpperCase();
  const correct = "STOP THE ATTACK";
  const usedHints = Number(localStorage.getItem("hintsUsedLevel2")) || 0;

  if (input === correct) {
    clearInterval(interval);
    const timeTaken = 180 - timeLeft;

    let earned = 150 - Math.floor(timeTaken / 5) - (usedHints * 5);
    earned = Math.max(0, earned);
    localStorage.setItem("coinsLevel2", earned.toString());

    localStorage.setItem("timeTakenLevel2", timeTaken.toString());
    localStorage.setItem("hintsUsedLevel2", usedHints.toString());
    localStorage.setItem("finalCipherSolved", "true");

    const fromL1 = Number(localStorage.getItem("coinsLevel1")) || 0;
    localStorage.setItem("coinsFinalTwist", (fromL1 + earned).toString());

    Swal.fire("✅ Correct!", "Message decrypted. Stand by...", "success")
      .then(() => window.location.href = "FMlevel2-summary.html");
  } else {
    Swal.fire("❌ Incorrect", "Try again. Decrypt carefully.", "error");
  }
}

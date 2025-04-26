let timeLeft = 180;
let interval;

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("level2Initialized")) {
    const leftoverBase = Number(localStorage.getItem("coinsLevel1")) || 0;
    const earnedL1 = Number(localStorage.getItem("coinsEarnedLevel1")) || 0;

    const totalForL2 = leftoverBase + earnedL1;

    localStorage.setItem("coinsLevel2", totalForL2.toString());

    sessionStorage.setItem("level2Initialized", "true");
  }

  updateCoinDisplay("Level2");

  // your timer etc continues below here...
});


const level2Hints = [
  "It's Base64 – use a Base64 decoder first.",
  "Decoded text often contains words like 'STOP' or 'ATTACK'.",
  "Try pasting the string into an online Base64 tool."
];

function showLevel2Hint() {
  showHint(level2Hints, "Level2");
}

function checkFinalAnswer() {
  const input = document.getElementById("answer2").value.trim().toUpperCase();
  const correct = "STOP THE ATTACK";
  const usedHints = Number(localStorage.getItem("hintsUsedLevel2")) || 0;

  if (input === correct) {
    clearInterval(interval);
    const timeTaken = 180 - timeLeft;

    localStorage.setItem("timeTakenLevel2", timeTaken.toString());
    localStorage.setItem("hintsUsedLevel2", usedHints.toString());

    // ✅ SET THE FLAG BEFORE REDIRECT
    localStorage.setItem("finalCipherSolved", "true");

    Swal.fire("✅ Correct!", "Message decrypted. Stand by...", "success")
      .then(() => {
        window.location.href = "FMlevel2-summary.html";
      });
  } else {
    Swal.fire("❌ Incorrect", "Try again. Decrypt carefully.", "error");
  }
}

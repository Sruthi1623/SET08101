let startTime;

// Reset stats and coins once at start
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("level1Initialized")) {
    localStorage.setItem("hintsUsedLevel1", "0");
    localStorage.setItem("timeTakenLevel1", "0");
    initCoins("Level1", 100); 
    sessionStorage.setItem("level1Initialized", "true");
  }

  updateCoinDisplay("Level1"); 
  startTime = Date.now();
});


// Hint pool for Level 1
const level1Hints = [
  "The message is first encoded with Base64.",
  "After Base64, apply a Caesar cipher with shift 3.",
  "Work in two steps: decode Base64, then shift letters.",
  "Look for '=' or '==' at the end to confirm Base64."
];

function showLevel1Hint() {
  showHint(level1Hints, "Level1");
}

function checkLevel4Answer() {
  const userInput = document.getElementById("level4Answer")
    .value.trim()
    .toUpperCase()
    .replace(/\s+/g, " ");
  const correctAnswer = "SQUAAD PARK AT MIDNIGHT SECRET MEET AT DAWN";
  const usedHints = Number(localStorage.getItem("hintsUsedLevel1")) || 0;
  const endTime = Date.now();
  const elapsed = Math.floor((endTime - startTime) / 1000);

  if (userInput === correctAnswer) {
    localStorage.setItem("timeTakenLevel1", elapsed.toString());
    localStorage.setItem("hintsUsedLevel1", usedHints.toString());

    Swal.fire({
      icon: "success",
      title: " Correct!",
      text: "Message decrypted successfully.",
      confirmButtonColor: "#00ffcc"
    }).then(() => {
      window.location.href = "FMlevel1-summary.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: " Incorrect",
      text: "Check both cipher layers carefully.",
      confirmButtonColor: "#ff4c4c"
    });
  }
}

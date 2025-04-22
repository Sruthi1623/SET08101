// final-mystery-level2.js

let timeLeft = 180, interval;

// reset & start the countdown
document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("hintsUsedLevel2",  "0");
  localStorage.setItem("timeTakenLevel2", "0");

  const timerSpan = document.getElementById("timer");
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

// your hint pool
const level2Hints = [
  "It's Base64 – use a decoder first.",
  "Decoded message might have obvious keywords like 'attack'.",
  "Copy the encoded string into a decoder to verify."
];

// called by “Need a Hint?”
function showLevel2Hint() {
  showHint(level2Hints, "Level2");
}

// called by “Submit Final Answer”
function checkFinalAnswer() {
  const input       = document.getElementById("answer2").value.trim().toUpperCase();
  const correct     = "STOP THE ATTACK";
  const hintsUsed   = Number(localStorage.getItem("hintsUsedLevel2")) || 0;

  if (input === correct) {
    clearInterval(interval);
    localStorage.setItem("timeTakenLevel2", 180 - timeLeft);
    localStorage.setItem("hintsUsedLevel2", hintsUsed);

    Swal.fire("✅ Correct!", "Message decrypted. Stand by...", "success")
      .then(() => window.location.href = "FMlevel2-summary.html");
  } else {
    Swal.fire("❌ Incorrect", "Try again. Decrypt carefully.", "error");
  }
}

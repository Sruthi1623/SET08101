// final-mystery-level1.js

let startTime;

// reset & start the clock
document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("hintsUsedLevel1",  "0");
  localStorage.setItem("timeTakenLevel1", "0");
  startTime = Date.now();
});

// your hint pool
const level1Hints = [
  "The message is first encoded with Base64.",
  "After Base64, apply a Caesar Cipher with shift 3.",
  "Try decoding it in two steps. Think layers.",
  "Look for common Base64 endings like '=' to confirm."
];

// called by your “Need a Hint?” button
function showLevel1Hint() {
  showHint(level1Hints, "Level1");
}

// called by your “Submit Answer” button
function checkLevel4Answer() {
  const input = document
    .getElementById("level4Answer")
    .value
    .trim()
    .toUpperCase()
    .replace(/\s+/g, " ");

  const correctAnswer = "SQUAAD PARK AT MIDNIGHT SECRET MEET AT DAWN";
  const hintsUsed     = Number(localStorage.getItem("hintsUsedLevel1")) || 0;
  const endTime       = Date.now();
  const timeTaken     = Math.floor((endTime - startTime) / 1000);

  if (input === correctAnswer) {
    // store both stats
    localStorage.setItem("timeTakenLevel1",  timeTaken);
    localStorage.setItem("hintsUsedLevel1",  hintsUsed);

    Swal.fire("✅ Correct!", "Message decrypted successfully.", "success")
      .then(() => window.location.href = "FMlevel1-summary.html");
  } else {
    Swal.fire("❌ Incorrect", "Check both cipher layers carefully.", "error");
  }
}

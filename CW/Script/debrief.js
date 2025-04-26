window.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const level = path.includes("level1") ? "Level1" : "Level2";

  const time = localStorage.getItem(`timeTaken${level}`) || "--";
  const hints = localStorage.getItem(`hintsUsed${level}`) || "--";

  let baseCoins = 0;
  if (level === "Level1") baseCoins = 100;
  if (level === "Level2") baseCoins = 150;

  let coinsEarned = baseCoins;
  if (time !== "--") coinsEarned -= Math.floor(Number(time) / 5);
  if (hints !== "--") coinsEarned -= Number(hints) * 5;
  coinsEarned = Math.max(0, coinsEarned);

  // Save coins earned separately, do not overwrite main coin balance
  localStorage.setItem(`coinsEarned${level}`, coinsEarned);

  // Display
  document.getElementById("timeValue").textContent = `${time} seconds`;
  document.getElementById("hintValue").textContent = hints;
  document.getElementById("coinValue").textContent = coinsEarned;

  updateCoinDisplay(level);
});

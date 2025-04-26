window.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const level = path.includes("level1") ? "Level1" : "Level2";

  const time = localStorage.getItem(`timeTaken${level}`) || "--";
  const hints = localStorage.getItem(`hintsUsed${level}`) || "--";
  const baseCoins = level === "Level2" ? 150 : 100;

  let coins = baseCoins;
  if (time !== "--") coins -= Math.floor(Number(time) / 5);
  if (hints !== "--") coins -= Number(hints) * 5;
  coins = Math.max(0, coins);

  localStorage.setItem(`coins${level}`, coins);

  document.getElementById("timeValue").textContent = `${time} seconds`;
  document.getElementById("hintValue").textContent = hints;
  document.getElementById("coinValue").textContent = coins;
  updateCoinDisplay(level);
});

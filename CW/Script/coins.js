// coins.js

function getCoins(levelKey) {
    return Number(localStorage.getItem(`coins${levelKey}`)) || 0;
  }
  
  function setCoins(levelKey, amount) {
    localStorage.setItem(`coins${levelKey}`, amount);
    updateCoinDisplay(levelKey);
  }
  
  function addCoins(levelKey, amount) {
    setCoins(levelKey, getCoins(levelKey) + amount);
  }
  
  function spendCoins(levelKey, amount) {
    const current = getCoins(levelKey);
    if (current >= amount) {
      setCoins(levelKey, current - amount);
      return true;
    }
    return false;
  }
  
  function initCoins(levelKey, initial = 100) {
    const key = `coins${levelKey}`;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, initial.toString());
    }
    updateCoinDisplay(levelKey);
  }
  
  function updateCoinDisplay(levelKey) {
    const coinDisplay = document.getElementById("coinDisplay");
    if (!coinDisplay) return;
  
    const coins = localStorage.getItem(`coins${levelKey}`) || "0";
    coinDisplay.textContent = coins;
  }
  
  function animateCoinBar() {
    const bar = document.querySelector(".coin-bar");
    if (!bar) return;
    bar.classList.add("glow");
    setTimeout(() => bar.classList.remove("glow"), 700);
  }
  
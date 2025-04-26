function showHint(hintArray, levelKey) {
  const hintStorageKey = `hintsUsed${levelKey}`;
  const COST = 10;

  let used  = Number(localStorage.getItem(hintStorageKey)) || 0;
  let coins = getCoins(levelKey); // from coins.js

  function deliverHint() {
    const randomHint = hintArray[Math.floor(Math.random() * hintArray.length)];
    Swal.fire({
      icon: "info",
      title: `💡 Hint #${used + 1}`,
      text: randomHint,
      confirmButtonColor: "#00ffcc"
    });

    used++;
    localStorage.setItem(hintStorageKey, used);
    updateCoinDisplay(levelKey);
  }

  if (used >= 3) {
    Swal.fire({
      icon: "question",
      title: "🔒 Extra Hint Locked",
      text: `You've used ${used} hints.\nSpend ${COST} coins to unlock another?`,
      showCancelButton: true,
      confirmButtonText: "Spend Coins",
      cancelButtonText: "Later",
      confirmButtonColor: "#00ffcc"
    }).then(result => {
      if (result.isConfirmed) {
        if (spendCoins(levelKey, COST)) {  
          deliverHint();
        } else {
          Swal.fire({
            icon: "error",
            title: "Insufficient Coins",
            text: "You need more coins to buy extra hints.",
            confirmButtonColor: "#00ffcc"
          });
        }
      }
    });
  } else {
    deliverHint();
  }
}

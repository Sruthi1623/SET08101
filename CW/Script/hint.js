// hint.js
function showHint(hintArray, levelKey) {
  // pick a random hint
  const hint = hintArray[Math.floor(Math.random() * hintArray.length)];

  Swal.fire({
    icon:    "info",
    title:   "💡 Hint",
    text:    hint,
    confirmButtonColor: "#00ffcc"
  });

  // increment the correct key in localStorage
  const hintStorageKey = `hintsUsed${levelKey}`;
  let current = Number(localStorage.getItem(hintStorageKey)) || 0;
  localStorage.setItem(hintStorageKey, current + 1);

  console.log(`✅ [${levelKey}] hintsUsed →`, localStorage.getItem(hintStorageKey));
}


let twistStart = Date.now();
const correctOrder = [0, 1, 2, 3];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("finalTwistInitialized")) {
    localStorage.setItem("hintsUsedFinalTwist", "0");
    localStorage.setItem("timeTakenFinalTwist", "0");

    const coinsL1 = Number(localStorage.getItem("coinsLevel1")) || 0;
    const coinsL2 = Number(localStorage.getItem("coinsLevel2")) || 0;
    const total = coinsL1 + coinsL2;
    localStorage.setItem("coinsFinalTwist", total.toString());

    sessionStorage.setItem("finalTwistInitialized", "true");
  }

  updateCoinDisplay("FinalTwist");
  blinkHint();
});

window.onload = () => {
  blinkHint();
};

function showTwistHint() {
  showHint([
    "Click the nodes from left to right.",
    "Only one sequence works — try tracing the signal logically.",
    "Don't rush — wrong clicks will reset the trace!"
  ], "FinalTwist");
}

function blinkHint() {
  const order = [0, 1, 2, 3];
  let i = 0;
  const interval = setInterval(() => {
    if (i < order.length) {
      const node = document.getElementById(`bnode${order[i] + 1}`);
      node.style.boxShadow = '0 0 25px #ffff00';
      setTimeout(() => {
        node.style.boxShadow = '0 0 8px #00ffcc';
      }, 300);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 500);
}

function handleNodeClick(nodeIndex) {
  const node = document.getElementById(`bnode${nodeIndex + 1}`);
  if (nodeIndex === correctOrder[currentIndex]) {
    node.classList.add('active');
    currentIndex++;
    if (currentIndex === correctOrder.length) {
      const twistEnd = Date.now();
      const twistTime = Math.floor((twistEnd - twistStart) / 1000);
      localStorage.setItem("timeTakenFinalTwist", twistTime);

      setTimeout(() => {
        document.getElementById('finalWinMessage').classList.remove('hidden');
        Swal.fire("✅ Signal Traced", "The final mission is complete!", "success")
          .then(() => window.location.href = "victory.html");
      }, 500);
    }
  } else {
    node.classList.add('error');
    document.getElementById("restartBtn").classList.remove("hidden");
  }
}

function resetNodes() {
  currentIndex = 0;
  for (let i = 1; i <= 4; i++) {
    const node = document.getElementById(`bnode${i}`);
    node.classList.remove('active', 'error');
    node.style.boxShadow = '0 0 8px #00ffcc';
  }
  document.getElementById("restartBtn").classList.add("hidden");
  blinkHint();
}

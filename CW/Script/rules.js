// instructions.js
console.log("🔧 instructions.js loaded");

// Caesar-shift helper
function caesarShift(str, shift) {
  return str.split('').map(ch => {
    const code = ch.charCodeAt(0);
    // A–Z
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // a–z
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    // leave other chars unchanged
    return ch;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const inputEl  = document.getElementById('demoInput');
  const shiftEl  = document.getElementById('shiftRange');
  const shiftVal = document.getElementById('shiftVal');
  const outputEl = document.getElementById('demoOut');

  function updateDemo() {
    const text  = inputEl.value;
    const shift = Number(shiftEl.value);
    shiftVal.textContent = shift;
    outputEl.textContent = text
      ? caesarShift(text, shift)
      : '---';
  }

  // wire up events
  inputEl.addEventListener('input', updateDemo);
  shiftEl.addEventListener('input', updateDemo);

  // initialize display
  updateDemo();
});

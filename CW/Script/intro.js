// intro.js
document.addEventListener("DOMContentLoaded", () => {
  const briefing = [
    "Intercepted encrypted transmissions detected...",
    "Agent Cipher, your final mission awaits.",
    "Crack multi-layered ciphers, trace rogue signals, and prevent the final attack.",
    "The fate of cyberspace rests on your skills.",
    "Prepare to engage — Final Mystery Level begins now!"
  ];

  const missionText = document.getElementById("missionText");
  let index = 0;
  let charIndex = 0;

  function typeWriter() {
    if (index < briefing.length) {
      if (charIndex < briefing[index].length) {
        missionText.innerHTML += briefing[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
      } else {
        missionText.innerHTML += "<br><br>";
        index++;
        charIndex = 0;
        setTimeout(typeWriter, 500);
      }
    }
  }

  typeWriter();
});

function startMission() {
  Swal.fire(' Good luck, Agent Cipher!').then(() => {
    window.location.href = 'final-briefing-level1.html';
  });
}

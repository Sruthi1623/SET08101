document.addEventListener("DOMContentLoaded", () => {
    const message = "Tip: Every choice leads to a different ending.";
    const typedText = document.querySelector(".typed-text");
    let i = 0;
  
    function typeEffect() {
      if (i < message.length) {
        typedText.textContent += message.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
      }
    }
  
    typeEffect();
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const text = " Tip: Stay in the shadows, trust no one.";
    const typedText = document.querySelector(".typed-text");
    let i = 0;
  
    function typeEffect() {
      if (i < text.length) {
        typedText.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
      }
    }
  
    typeEffect();
  });
  
// Check if JS is working
console.log("Home JS loaded!");

// Handle "Start your Mission" button
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".start-mission-btn");

    if (startButton) {
      startButton.addEventListener("click", function () {
        window.location.href = "game-mode.html";
      });
    }

  // Optional: Active nav link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Optional: Smooth scroll (if you have anchor links)
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

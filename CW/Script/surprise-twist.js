window.addEventListener("DOMContentLoaded", () => {
    const completed = localStorage.getItem("finalCipherSolved");
  
    if (completed === "true") {
      setTimeout(() => {
        Swal.fire({
          icon: "warning",
          title: "⚠️ Unexpected Transmission Detected",
          text: "A rogue signal is being intercepted. HQ requires immediate analysis.",
          confirmButtonText: "Proceed to Briefing",
          confirmButtonColor: "#00ffcc"
        }).then(() => {
          localStorage.removeItem("finalCipherSolved"); // optional, but good practice
          window.location.href = "trace-briefing.html";
        });
      }, 2000);
    }
  });

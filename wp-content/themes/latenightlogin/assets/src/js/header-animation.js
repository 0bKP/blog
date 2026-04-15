document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".animated-header");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const header = entry.target;
        const span = header.querySelector(".typing-text");

        const fullText = header.dataset.text || header.textContent;
        header.dataset.text = fullText;
        span.textContent = "";
        header.classList.remove("js-hidden");

        let i = 0;
        const interval = setInterval(() => {
          span.textContent = fullText.slice(0, i + 1);
          i++;
          if (i === fullText.length) {
            clearInterval(interval);
            span.style.borderRight = "none";
          }
        }, 50);

        obs.unobserve(header);
      }
    });
  }, { threshold: 0.6 });

  headers.forEach(header => observer.observe(header));
});

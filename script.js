// Navigate to milestone details (kept)
function goToMilestone(id) {
  window.location.href = `milestone.html?id=${id}`;
}

// Arrow scroll controls (kept, now safer and a bit smarter)
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".cards-wrapper");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  if (wrapper && leftBtn && rightBtn) {
    const amount = () => Math.max(300, Math.floor(wrapper.clientWidth * 0.8));

    const toggleArrows = () => {
      const atStart = wrapper.scrollLeft <= 0;
      const atEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 1;
      leftBtn.toggleAttribute('disabled', atStart);
      rightBtn.toggleAttribute('disabled', atEnd);
    };

    leftBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: -amount(), behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: amount(), behavior: "smooth" });
    });

    wrapper.addEventListener('scroll', toggleArrows);
    window.addEventListener('load', toggleArrows);
  }

  // Make cards keyboard-activatable without changing your HTML
  document.querySelectorAll('.card[onclick]').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const call = card.getAttribute('onclick');
        const match = call && call.match(/goToMilestone\('([^']+)'\)/);
        if (match) goToMilestone(match[1]);
      }
    });
  });
});

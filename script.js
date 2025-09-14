// Navigate to milestone details
function goToMilestone(id) {
  window.location.href = `milestone.html?id=${id}`;
}

// Arrow scroll controls
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".cards-wrapper");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  leftBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: 300, behavior: "smooth" });
  });
});

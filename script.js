document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initNotifications();
  initProjectCards();
});

function initSearch() {
  const searchInput = document.querySelector(".search-box input");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    filterProjects(query);
  });
}

function filterProjects(query) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

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
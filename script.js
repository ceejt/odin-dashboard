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

function initNotifications() {
  const notifBtn = document.querySelector(".notification-btn");

  notifBtn.addEventListener("click", () => {
    alert("You have 3 new notifications!");
  });
}

function initProjectCards() {
  const favoriteButtons = document.querySelectorAll(
    ".project-actions .icon-btn:first-child",
  );
  favoriteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
      const svg = e.currentTarget.querySelector("svg");
      svg.style.fill = e.currentTarget.classList.contains("active")
        ? "#7BDFF2"
        : "none";
    });
  });
  const viewButtons = document.querySelectorAll(
    ".project-actions .icon-btn:nth-child(2)",
  );
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Opening project...");
    });
  });
}

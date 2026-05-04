(function () {
  const LINKEDIN_URL = "https://www.linkedin.com/in/constantine-vermund-01baba405/";

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const linkedinButton = document.getElementById("linkedinButton");
  if (linkedinButton && LINKEDIN_URL) {
    linkedinButton.href = LINKEDIN_URL;
    linkedinButton.classList.remove("hidden");
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  document.querySelectorAll(".package-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    });
  });
})();

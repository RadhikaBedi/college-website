document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for header links
  document.querySelectorAll("header a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Apply Now Section
  const applyBtn = document.getElementById("applybtn");
  const applicationDetails = document.getElementById("applicationDetails");
  const closeDetailsBtn = document.getElementById("closeDetailsBtn");

  if (applyBtn && applicationDetails && closeDetailsBtn) {
    applyBtn.addEventListener("click", () => {
      applicationDetails.classList.remove("hidden");
      window.scrollTo({ top: applicationDetails.offsetTop, behavior: "smooth" });
    });

    closeDetailsBtn.addEventListener("click", () => {
      applicationDetails.classList.add("hidden");
    });
  }

  // Explore Programs Section
  const exploreBtn = document.getElementById("exploreBtn");
  const expDetails = document.getElementById("exploreDetails");
  const closeExploreBtn = document.getElementById("closeExploreBtn");

  if (exploreBtn && expDetails && closeExploreBtn) {
    expDetails.classList.add("hidden"); // ensure hidden on load

    exploreBtn.addEventListener("click", () => {
      expDetails.classList.remove("hidden");
      expDetails.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    closeExploreBtn.addEventListener("click", () => {
      expDetails.classList.add("hidden");
    });
  }

  // Scroll-based active nav link
  const sections = document.querySelectorAll("section")});
  
const exploreBtn = document.getElementById('exploreBtn');
const exploreSection = document.getElementById('exploreSection');

exploreBtn.addEventListener('click', () => {
    exploreSection.style.display = 'block';
    exploreSection.style.opacity = 0;
    let op = 0;
    let timer = setInterval(() => {
        if(op >= 1) clearInterval(timer);
        exploreSection.style.opacity = op;
        op += 0.1;
    }, 30);
});

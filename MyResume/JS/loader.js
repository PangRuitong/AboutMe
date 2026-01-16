function loadFragment(id, url) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((err) => console.error(`Failed to load ${url}:`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadFragment("header", "partials/_header.html"),
    loadFragment("about", "partials/_about.html"),
    loadFragment("skill", "partials/_skills.html"),
    loadFragment("project", "partials/_portfolio.html"),
    loadFragment("other", "partials/_other.html"),
    loadFragment("roadmap", "partials/_roadMap.html"),
    loadFragment("contact", "partials/_contact.html"),
    loadFragment("footer", "partials/_footer.html"),
  ])
    .then(() => {
      // 1) header exists now → particles can mount
      if (typeof window.initParticles === "function") window.initParticles();

      // 2) all partials exist → fill from config once
      if (typeof window.initPersonalInfo === "function")
        window.initPersonalInfo();

      // 3) animations after content is in DOM
      if (window.AOS) {
        AOS.init({ once: true });
        AOS.refreshHard?.();
      }

      // 4) any other site-wide setup you expose
      if (typeof window.initApp === "function") window.initApp();
    })
    .catch((err) => console.error(err));
});

const buttons = document.querySelectorAll(".tabs .tab-item");
const panels = document.querySelectorAll(".portfolio-body .panel");
const search_bar = document.getElementById("q");
const loadingOverlay = document.getElementById("loading-overlay");
const initialLoading = document.getElementById("initial-loading");

document.getElementById("panel-0").classList.add("active");
buttons[0].classList.add("active");
search_bar.value = "https://abdelkhaliq/about";

window.addEventListener('load', function() {
    setTimeout(() => {
      initialLoading.classList.add('hidden');
      setTimeout(() => {
        initialLoading.style.display = 'none';
      }, 500);
    }, 800);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Prevent interaction while loading
    if (loadingOverlay.classList.contains("active")) return;

    const index = button.dataset.index;
    const url = button.dataset.url;

    loadingOverlay.classList.add("active");

    // Deactivate all panels and buttons
    panels.forEach((panel) => panel.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Activate clicked tab and update search bar
    button.classList.add("active");
    search_bar.value = url;
    

    setTimeout(() => {
      document.getElementById(`panel-${index}`).classList.add("active");
      loadingOverlay.classList.remove("active");
    }, 800);
  });
});


document.querySelectorAll(".paa-question").forEach((button) => {
    button.addEventListener("click", () => {
      const isActive = button.classList.contains("active");

      document.querySelectorAll(".paa-question").forEach((q) => {
        q.classList.remove("active");
        q.nextElementSibling.classList.remove("active");
      });

      if (!isActive) {
        button.classList.add("active");
        button.nextElementSibling.classList.add("active");
      }
    });
});

document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      alert(
        `Thank you for your message, ${name}! I'll get back to you soon at ${email}.`
      );

      this.reset();
});
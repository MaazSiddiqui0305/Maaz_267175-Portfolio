// Mobile navigation: open and close the menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close the mobile menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Contact form validation. This demo does not send data to a server.
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formFeedback.textContent = "Please complete all three fields before continuing.";
    formFeedback.style.color = "#ffd4c9";
    return;
  }

  if (!emailPattern.test(email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.style.color = "#ffd4c9";
    return;
  }

  formFeedback.textContent = `Thanks, ${name}! Your details passed the form check. This demo does not send the message.`;
  formFeedback.style.color = "#dce8c9";
  contactForm.reset();
});

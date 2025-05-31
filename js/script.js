document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Send email via EmailJS or your own method
  emailjs.sendForm('service_29u8tde', 'template_8kavgco', this, '98MJjEDOftMyke2bT')
    .then(function () {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset(); // ✅ Clear the form
    }, function (error) {
      alert('Failed to send message. Please try again.');
      console.log(error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link-item'); // For closing menu on link click

  if (hamburgerButton && navLinks) {
      hamburgerButton.addEventListener('click', () => {
          const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
          hamburgerButton.setAttribute('aria-expanded', !isExpanded);
          navLinks.classList.toggle('active');
          hamburgerButton.classList.toggle('active');
      });

      // Optional: Close the menu when a link is clicked (useful for single-page apps)
      navLinkItems.forEach(link => {
          link.addEventListener('click', () => {
              if (navLinks.classList.contains('active')) { // Only if menu is open
                  hamburgerButton.setAttribute('aria-expanded', 'false');
                  navLinks.classList.remove('active');
                  hamburgerButton.classList.remove('active');
              }
          });
      });

      // Optional: Close the menu if the user clicks outside of it
      document.addEventListener('click', (event) => {
          const isClickInsideNav = navLinks.contains(event.target);
          const isClickOnHamburger = hamburgerButton.contains(event.target);

          if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
              hamburgerButton.setAttribute('aria-expanded', 'false');
              navLinks.classList.remove('active');
              hamburgerButton.classList.remove('active');
          }
      });

  } else {
      console.error("Hamburger button or navigation links element not found in the DOM.");
  }
});
// Show/hide button on scroll
window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Scroll to top when clicked
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

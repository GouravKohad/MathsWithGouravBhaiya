document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simple form validation
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can add more complex validation here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials[currentTestimonial].style.display = 'none';
    testimonials[index].style.display = 'block';
    currentTestimonial = index;
  }

  function nextTestimonial() {
    let next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
  }

  // Change testimonial every 5 seconds
  setInterval(nextTestimonial, 5000);
});
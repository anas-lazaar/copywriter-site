// Initialize AOS animations
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
    disable: "mobile",
  })

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear()

  // Initialize Feather icons
  feather.replace()
})

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  hamburger.classList.toggle("active")
  document.body.classList.toggle("no-scroll")
})

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll(".nav-links a")
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active")
      hamburger.classList.remove("active")
      document.body.classList.remove("no-scroll")
    }
  })
})

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector("header").offsetHeight
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Parallax effect for shapes
window.addEventListener("scroll", () => {
  const shapes = document.querySelectorAll(".hero-shape, .services-shape, .testimonials-shape, .cta-shape")

  shapes.forEach((shape) => {
    const speed = 0.2
    const yPos = -(window.scrollY * speed)
    shape.style.transform = `translateY(${yPos}px)`
  })
})

// Simple form validation for contact form (if added later)
const contactForm = document.querySelector("#contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Form validation logic would go here
    alert("Thanks for your message! I'll get back to you soon.")
    contactForm.reset()
  })
}

// Hover effects for service cards
const serviceCards = document.querySelectorAll(".service-card")
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
    this.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
    this.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  })
})

// Animate testimonial quotes on scroll
const testimonialCards = document.querySelectorAll(".testimonial-card")
const animateTestimonials = () => {
  testimonialCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (cardTop < windowHeight - 100) {
      const quote = card.querySelector(".quote")
      quote.style.transform = "scale(1.1)"
      quote.style.opacity = "0.5"
    }
  })
}

window.addEventListener("scroll", animateTestimonials)

// Add a simple typing effect to the hero heading
document.addEventListener("DOMContentLoaded", () => {
  const heroHeading = document.querySelector(".hero h1")
  if (heroHeading) {
    const text = heroHeading.textContent
    heroHeading.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroHeading.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    // Only run on desktop
    if (window.innerWidth > 768) {
      setTimeout(typeWriter, 500)
    } else {
      heroHeading.textContent = text
    }
  }
})

// Navbar Slide-In
gsap.to(".navbar", {
  y: 100, // bring it down from -100px
  duration: 1,
  ease: "power3.out",
  delay: 0.3
});

// Button Hover Pulse using JavaScript
document.querySelectorAll(".cta-btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power1.inOut" });
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale: 1, duration: 0.2, ease: "power1.inOut" });
  });
});

// Scroll-Triggered Fade-Ins
gsap.utils.toArray(".fade-section").forEach(section => {
  gsap.fromTo(section, 
    { opacity: 0, y: 50 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
});

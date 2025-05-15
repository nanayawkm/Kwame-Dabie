"use client";

// Function to check if an element is in viewport
function isInViewport(element, offset = 150) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
}

// Function to handle reveal animations
export function setupRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  function handleScroll() {
    revealElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }
  
  // Initial check on load
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

// Add scroll-based parallax effects for enhanced visual interest
export function setupParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  function handleParallax() {
    parallaxElements.forEach((element) => {
      const scrollPosition = window.scrollY;
      const speed = element.dataset.speed || 0.2;
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  }
  
  // Add scroll event listener for parallax
  window.addEventListener('scroll', handleParallax, { passive: true });
  
  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener('scroll', handleParallax);
  };
}

// Set up smooth scrolling for anchor links
export function setupSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get the height of your fixed header
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        // Calculate the target position with offset for fixed header
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        
        // Smooth scroll to the target
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Optimize scrolling performance on mobile
export function optimizeForMobile() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Reduce animation complexity on mobile
    document.documentElement.classList.add('mobile-optimized');
    
    // Handle touch events better
    document.addEventListener('touchstart', function() {}, {passive: true});
  }
} 
/* ============================================================
   TEAM CONTRIBUTION PROJECT — script.js
   ============================================================
   This file handles all interactive features:
   - Sticky navbar with scroll effect
   - Mobile hamburger menu toggle
   - Contributor search / filter
   - Animated counter for contributor count
   - Active nav link on scroll (Intersection Observer)
   - Back-to-top button visibility
   - Smooth reveal animations on scroll

   NOTE FOR CONTRIBUTORS:
   If you want to add interactive features to the page,
   add your JavaScript below the "ADD YOUR CODE HERE" comment
   near the bottom. Keep functions small and well-commented!
   ============================================================ */

'use strict'; // Catch common coding mistakes

// ============================================================
// DOM ELEMENT REFERENCES
// ============================================================
const navbar         = document.getElementById('navbar');
const hamburger      = document.getElementById('hamburger');
const navLinks       = document.getElementById('nav-links');
const searchInput    = document.getElementById('search-input');
const contributorsGrid = document.getElementById('contributors-grid');
const noResults      = document.getElementById('no-results');
const visibleCount   = document.getElementById('visible-count');
const contributorCountEl = document.getElementById('contributor-count');
const backToTopBtn   = document.getElementById('back-to-top');
const allNavLinks    = document.querySelectorAll('.nav-link');
const allSections    = document.querySelectorAll('section[id]');


// ============================================================
// 1. NAVBAR — Sticky & Scroll Effect
// Adds the "scrolled" class when the page is scrolled down.
// The .scrolled class applies a glass-morphism background via CSS.
// ============================================================
function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });


// ============================================================
// 2. MOBILE HAMBURGER MENU
// Toggles the open/close state of the nav menu on mobile.
// ============================================================
hamburger.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu when a nav link is clicked
navLinks.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }
});


// ============================================================
// 3. ACTIVE NAV LINK ON SCROLL
// Uses IntersectionObserver to highlight the active nav link
// based on which section is currently in the viewport.
// ============================================================
const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Remove active from all links
        allNavLinks.forEach(function (link) {
          link.classList.remove('active');
        });
        // Add active to the matching link
        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  {
    rootMargin: '-40% 0px -50% 0px', // Triggers when section is near center of viewport
  }
);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});


// ============================================================
// 4. CONTRIBUTOR SEARCH / FILTER
// Filters cards in real-time based on name or skill input.
// The data-name and data-skills attributes on each card
// are used for matching.
// ============================================================
function filterContributors() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = contributorsGrid.querySelectorAll('.contributor-card');
  let visibleCards = 0;

  cards.forEach(function (card) {
    // Read the data attributes we search against
    const name   = (card.dataset.name   || '').toLowerCase();
    const skills = (card.dataset.skills || '').toLowerCase();

    // Show if query matches name OR any skill
    const matches = name.includes(query) || skills.includes(query);

    if (matches) {
      card.classList.remove('hidden');
      visibleCards++;
    } else {
      card.classList.add('hidden');
    }
  });

  // Show or hide the "no results" message
  noResults.style.display = visibleCards === 0 ? 'block' : 'none';

  // Update the count display
  if (visibleCount) {
    visibleCount.textContent = visibleCards;
  }
}

// Listen for input changes (real-time filtering)
if (searchInput) {
  searchInput.addEventListener('input', filterContributors);
}


// ============================================================
// 5. ANIMATED CONTRIBUTOR COUNTER
// Counts up from 0 to the actual number of contributor cards.
// Called once on page load.
// ============================================================
function animateCounter(element, targetValue, duration) {
  if (!element) return;

  let startTime   = null;
  const startValue = 0;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // clamp to [0, 1]

    // Ease-out function for a natural feel
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startValue + (targetValue - startValue) * eased);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Count the actual number of contributor cards in the DOM
function initContributorCounter() {
  const totalCards = contributorsGrid
    ? contributorsGrid.querySelectorAll('.contributor-card').length
    : 0;

  // Animate the big counter in the hero stats bar
  animateCounter(contributorCountEl, totalCards, 1500);

  // Set the initial visible count below the grid
  if (visibleCount) {
    visibleCount.textContent = totalCards;
  }
}

// Run after the page loads
window.addEventListener('load', initContributorCounter);


// ============================================================
// 6. BACK TO TOP BUTTON
// Shows the button after scrolling down 400px,
// and scrolls back to the top when clicked.
// ============================================================
function handleBackToTop() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleBackToTop, { passive: true });

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ============================================================
// 7. SCROLL REVEAL ANIMATIONS
// Uses IntersectionObserver to animates elements into view
// as they enter the viewport during scrolling.
// ============================================================
const revealObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        observer.unobserve(entry.target); // Run once
      }
    });
  },
  { threshold: 0.12 }
);

// Apply initial hidden state and observe
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.feature-card, .step-card, .contributor-card, .rules-box'
  );

  revealElements.forEach(function (el) {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    revealObserver.observe(el);
  });
}

// Wait for DOM to be fully parsed before running reveal setup
document.addEventListener('DOMContentLoaded', initScrollReveal);


// ============================================================
// 8. SMOOTH ANCHOR LINKS
// Ensures all internal anchor links (#section) scroll
// smoothly and account for the fixed navbar height.
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return; // Skip empty anchors

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    const targetTop    = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});


/* ============================================================
   ADD YOUR JAVASCRIPT HERE
   ============================================================
   Want to add a new feature? Add your code below this comment.

   Some ideas:
   - A dark/light mode toggle
   - Sort contributors alphabetically
   - A "copy to clipboard" button on the code blocks
   - Filter by specific skill tags

   Example structure:
   function myFeatureName() {
     // 1. Get the element you need
     // 2. Do your logic
     // 3. Update the DOM
   }
   ============================================================ */

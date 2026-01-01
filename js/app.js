/* ============================================
   BIKEDEKHO PX 2.0 - MAIN APP
   ============================================
   Interactive functionality for all components
   ============================================ */

// Current state
let currentPersona = 'weekend';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initHighlightsCarousel();
  initScenarioTabs();
  initZoneAccordions();
  initPersonaSystem();
  initCostCalculator();
  initSpecsDrawer();
  initSmoothScroll();
  initPersonaBarSticky();
});

/* ----------------------------------------
   HIGHLIGHTS CAROUSEL
   ---------------------------------------- */

function initHighlightsCarousel() {
  const track = document.querySelector('.highlights-track');
  const dots = document.querySelectorAll('.highlights-dot');
  
  if (!track || !dots.length) return;
  
  // Update active dot on scroll
  track.addEventListener('scroll', () => {
    const scrollLeft = track.scrollLeft;
    const cardWidth = track.querySelector('.highlight-card').offsetWidth + 12;
    const activeIndex = Math.round(scrollLeft / cardWidth);
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  });
  
  // Click on dot to scroll to card
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const cardWidth = track.querySelector('.highlight-card').offsetWidth + 12;
      track.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    });
  });
}

/* ----------------------------------------
   SCENARIO TABS
   ---------------------------------------- */

function initScenarioTabs() {
  const tabs = document.querySelectorAll('.scenario-tab');
  const contents = document.querySelectorAll('.scenario-content');
  
  if (!tabs.length || !contents.length) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.scenario;
      
      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update content
      contents.forEach(content => {
        content.classList.toggle('active', content.id === `scenario-${targetId}`);
      });
    });
  });
}

/* ----------------------------------------
   ZONE ACCORDIONS
   ---------------------------------------- */

function initZoneAccordions() {
  const zoneHeaders = document.querySelectorAll('.zone-header');
  
  zoneHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.zone-card');
      card.classList.toggle('expanded');
    });
  });
  
  // Reviews toggle within zones
  const reviewToggles = document.querySelectorAll('.zone-reviews-toggle');
  
  reviewToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const reviews = toggle.nextElementSibling;
      reviews.classList.toggle('visible');
      toggle.textContent = reviews.classList.contains('visible') 
        ? '▲ Hide reviews' 
        : '▼ What do owners & experts say?';
    });
  });
}

/* ----------------------------------------
   PERSONA SYSTEM
   ---------------------------------------- */

function initPersonaSystem() {
  // Set initial persona
  selectPersona('weekend');
}

function selectPersona(persona) {
  currentPersona = persona;
  
  // Update persona buttons
  const personaBtns = document.querySelectorAll('.persona-btn');
  personaBtns.forEach(btn => {
    const btnPersona = btn.dataset.persona;
    btn.classList.toggle('active', btnPersona === persona);
  });
  
  // Update match result
  updatePersonaMatch(persona);
}

function updatePersonaMatch(persona) {
  const matchScoreCircle = document.getElementById('matchScoreCircle');
  const matchScoreValue = document.getElementById('matchScoreValue');
  const matchScoreLabel = document.getElementById('matchScoreLabel');
  const matchScoreDetail = document.getElementById('matchScoreDetail');
  const matchExplanation = document.getElementById('matchExplanation');
  
  if (!matchScoreCircle || !DOMINAR_250_DATA) return;
  
  const personaData = DOMINAR_250_DATA.personas;
  let data;
  
  switch(persona) {
    case 'weekend':
      data = personaData.weekendWarrior;
      break;
    case 'commuter':
      data = personaData.dailyCommuter;
      break;
    case 'value':
      data = personaData.valueHunter;
      break;
    case 'enthusiast':
      data = personaData.enthusiast;
      break;
    default:
      data = personaData.weekendWarrior;
  }
  
  // Update score display
  matchScoreValue.textContent = data.matchScore + '%';
  matchScoreLabel.textContent = data.matchLabel;
  matchScoreDetail.textContent = data.description;
  
  // Update score circle class
  matchScoreCircle.className = 'match-score-circle';
  if (data.matchScore >= 85) {
    matchScoreCircle.classList.add('excellent');
  } else if (data.matchScore >= 70) {
    matchScoreCircle.classList.add('good');
  } else if (data.matchScore >= 55) {
    matchScoreCircle.classList.add('fair');
  } else {
    matchScoreCircle.classList.add('poor');
  }
  
  // Update explanation
  const explanations = {
    weekend: "70% of 850+ Dominar 250 owners are weekend tourers who specifically chose this bike for long-distance capability. The bike excels at exactly what you want to do.",
    commuter: "The 180kg weight and front-heavy steering make city commuting tolerable but not ideal. Both owners and experts rate city usability 2-2.5/5. Consider lighter options like Gixxer 250.",
    value: "This bike offers the most features per rupee in the 250cc segment. Riding modes, traction control, slipper clutch, and ABS – all under ₹1.85L. Unbeatable value proposition.",
    enthusiast: "Good power for the segment, but 180kg and touring-focused geometry mean the Duke 250 is better for aggressive riding. This bike prioritizes comfort over agility."
  };
  
  matchExplanation.innerHTML = `<strong>Why this score:</strong> ${explanations[persona]}`;
}

// Make selectPersona available globally
window.selectPersona = selectPersona;

/* ----------------------------------------
   PERSONA BAR STICKY
   ---------------------------------------- */

function initPersonaBarSticky() {
  const personaBar = document.getElementById('personaBar');
  if (!personaBar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      personaBar.classList.add('scrolled');
    } else {
      personaBar.classList.remove('scrolled');
    }
  });
}

/* ----------------------------------------
   COST CALCULATOR
   ---------------------------------------- */

function initCostCalculator() {
  // Initialize with default values
  calculateCosts();
}

function calculateCosts() {
  const monthlyKmInput = document.getElementById('monthlyKm');
  const fuelPriceInput = document.getElementById('fuelPrice');
  const ridingStyleInput = document.getElementById('ridingStyle');
  
  if (!monthlyKmInput || !fuelPriceInput || !ridingStyleInput) return;
  
  const monthlyKm = parseInt(monthlyKmInput.value) || 1200;
  const fuelPrice = parseInt(fuelPriceInput.value) || 105;
  const mileage = parseInt(ridingStyleInput.value) || 38;
  
  // Update displays
  const kmDisplay = document.getElementById('kmDisplay');
  const mileageDisplay = document.getElementById('mileageDisplay');
  const styleLabel = document.getElementById('styleLabel');
  
  if (kmDisplay) kmDisplay.textContent = monthlyKm;
  if (mileageDisplay) mileageDisplay.textContent = mileage;
  
  // Update style label
  if (styleLabel) {
    let styleText = 'Mixed';
    if (mileage <= 33) styleText = 'Aggressive';
    else if (mileage <= 38) styleText = 'Mixed';
    else styleText = 'Controlled';
    styleLabel.textContent = `${styleText} (${mileage} kmpl)`;
  }
  
  // Calculate fuel cost
  const litresNeeded = monthlyKm / mileage;
  const fuelCost = Math.round(litresNeeded * fuelPrice);
  
  const fuelCostDisplay = document.getElementById('fuelCost');
  if (fuelCostDisplay) {
    fuelCostDisplay.textContent = formatPrice(fuelCost);
  }
  
  // Calculate total (fuel + service + insurance)
  const serviceCost = 850;
  const insuranceCost = 625;
  const total = fuelCost + serviceCost + insuranceCost;
  
  const totalMonthlyDisplay = document.getElementById('totalMonthly');
  if (totalMonthlyDisplay) {
    totalMonthlyDisplay.textContent = formatPrice(total);
  }
}

// Make calculateCosts available globally
window.calculateCosts = calculateCosts;

/* ----------------------------------------
   SPECS DRAWER
   ---------------------------------------- */

function initSpecsDrawer() {
  const fab = document.querySelector('.specs-fab');
  const drawer = document.querySelector('.specs-drawer');
  const closeBtn = document.querySelector('.specs-drawer-close');
  const overlay = document.querySelector('.drawer-overlay');
  
  if (!fab || !drawer) return;
  
  function openDrawer() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  
  function closeDrawer() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }
  
  fab.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ----------------------------------------
   SMOOTH SCROLL
   ---------------------------------------- */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ----------------------------------------
   UTILITY FUNCTIONS
   ---------------------------------------- */

// Format price in Indian format
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Format number with commas
function formatNumber(num) {
  return num.toLocaleString('en-IN');
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ----------------------------------------
   BATTLEGROUND ACCORDION (MOBILE)
   ---------------------------------------- */

document.querySelectorAll('.battleground-column-header').forEach(header => {
  header.addEventListener('click', function() {
    if (window.innerWidth < 768) {
      const column = this.closest('.battleground-column');
      column.classList.toggle('collapsed');
    }
  });
});

/* ----------------------------------------
   DYNAMIC DATA POPULATION
   ---------------------------------------- */

// Populate mods section dynamically from data
function populateModsSection() {
  const modsContainer = document.querySelector('.mods-list');
  if (!modsContainer || !DOMINAR_250_DATA) return;
  
  const mods = DOMINAR_250_DATA.popularMods;
  
  modsContainer.innerHTML = mods.map(mod => `
    <div class="mod-item">
      <span class="mod-percentage">${mod.percentage}%</span>
      <div class="mod-info">
        <div class="mod-name">${mod.mod}</div>
        <div class="mod-meta">${mod.price} • "${mod.reason}"</div>
      </div>
    </div>
  `).join('');
}

// Populate surprising insights dynamically
function populateSurprisingInsights() {
  const container = document.querySelector('.surprising-insights-grid');
  if (!container || !DOMINAR_250_DATA) return;
  
  const insights = DOMINAR_250_DATA.surprisingInsights;
  
  container.innerHTML = insights.map(insight => `
    <div class="insight-card">
      <div class="insight-card-icon">${insight.icon}</div>
      <div class="insight-expected">Expected: "${insight.expected}"</div>
      <div class="insight-reality">Reality: ${insight.reality}</div>
    </div>
  `).join('');
}

// Initialize dynamic content after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // These functions will populate content from data if containers exist
  // Currently content is hardcoded in HTML for reliability
});

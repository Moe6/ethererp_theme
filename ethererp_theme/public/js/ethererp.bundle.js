// EtherErp Website Bundle - Main theme JavaScript

(function() {
  'use strict';

  // Utility function to wait for DOM ready
  function onReady(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Initialize website branding
  function initWebsiteBranding() {
    var host = (location && location.host ? location.host.toLowerCase() : "");
    var isShop = host.indexOf("shop.circuitauto") !== -1;
    
    // Add shop class to body for red styling
    if (isShop) {
      document.body.classList.add('shop-circuitauto');
    }
    
    // Set favicon for website
    var favicon = isShop
      ? "https://www.ethercircuit.co.za/assets/CA_favicon.png"
      : "https://www.ethercircuit.co.za/assets/ES_favicon.png";

    try {
      var link = document.querySelector('link[rel="icon"]') || document.createElement('link');
      link.rel = "icon";
      link.href = favicon;
      if (!link.parentNode) {
        document.head.appendChild(link);
      }
    } catch(e) {
      console.warn('Could not set favicon:', e);
    }

    // Update page title if needed
    var brand = isShop ? "Circuit Auto" : "EtherErp";
    var currentTitle = document.title;
    if (!currentTitle.includes(brand) && !currentTitle.includes("EtherErp")) {
      document.title = brand + " - " + currentTitle;
    }
  }

  // Initialize navbar branding for website
  function initNavbarBranding() {
    var host = (location && location.host ? location.host.toLowerCase() : "");
    var isShop = host.indexOf("shop.circuitauto") !== -1;
    var brand = isShop ? "Circuit Auto" : "EtherErp";
    var logo = isShop
      ? "https://www.ethercircuit.co.za/assets/CA_logo.png"
      : "https://www.ethercircuit.co.za/assets/ES_logo.png";

    // Find navbar brand elements and update them
    var brandElements = document.querySelectorAll('.navbar-brand, .site-brand, .brand-logo');
    brandElements.forEach(function(element) {
      if (!element.querySelector('img')) {
        element.innerHTML = '<img src="' + logo + '" alt="' + brand + '" class="brand-logo"> ' + brand;
      }
    });

    // Look for existing brand logos and update if needed
    var existingLogos = document.querySelectorAll('.brand-logo, .navbar-brand img');
    existingLogos.forEach(function(img) {
      if (img.src !== logo) {
        img.src = logo;
        img.alt = brand;
      }
    });
  }

  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize all website features
  function init() {
    initWebsiteBranding();
    initNavbarBranding();
    initSmoothScrolling();
    
    // Log successful initialization
    console.log('EtherErp Website Bundle initialized');
  }

  // Start initialization when DOM is ready
  onReady(init);

})();

// EtherErp Desk Enhancements: brand the topbar and favicon
(function () {
  function onReady(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  onReady(function(){
    var host = (location && location.host ? location.host.toLowerCase() : "");
    var isShop = host.indexOf("shop.circuitauto") !== -1;
    var brand = isShop ? "Circuit Auto" : "EtherErp";
    var logo = isShop
      ? "https://www.ethercircuit.co.za/assets/CA_logo.png"
      : "https://www.ethercircuit.co.za/assets/ES_logo.png";
    var favicon = isShop
      ? "https://www.ethercircuit.co.za/assets/CA_favicon.png"
      : "https://www.ethercircuit.co.za/assets/ES_favicon.png";

    try {
      var link = document.querySelector('link[rel="icon"]') || document.createElement('link');
      link.rel = "icon";
      link.href = favicon;
      if (!link.parentNode) document.head.appendChild(link);
    } catch(e) {}

    var navbar = document.querySelector('.navbar .container, .navbar');
    if (navbar && !document.querySelector('.ethererp-desk-brand')) {
      var left = navbar.querySelector('.navbar-brand') || navbar.firstElementChild;
      var brandNode = document.createElement('div');
      brandNode.className = 'ethererp-desk-brand';
      brandNode.innerHTML = '<img alt="'+brand+'" src="'+logo+'"><span class="title">'+brand+'</span>';
      if (left) left.prepend(brandNode);
      else navbar.prepend(brandNode);
    }
  });
})();

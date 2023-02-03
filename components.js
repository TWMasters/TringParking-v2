
const headerTemplate =  document.createElement('template');
headerTemplate.innerHTML = 
  '<div class="logo__container">' +
    '<img src="Images/deer-logo-1.png" alt="" height="100%" class="deer__logo">' +
  '</div>' +
  '<h1 class="title">PARKING AT TRING STATION</h1>' +
  '<nav>' +
    '<a class="page__link">Location Map</a>' +
    '<a class="page__link">Parking Bay Map</a>' +
    '<a class="page__link">Contact</a>' +
  '</nav>';

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML =
  '<a class="legal-link" id="terms-link">Terms & Conditions</a>' +
  '<a class="legal-link" id="privacy-link">Privacy Policy</a>' +
  '<a class="legal-link" id="legal-link">Legal Information</a>';

class TringHeader extends HTMLElement  {
  constructor() {
    super();
    this.appendChild(headerTemplate.content.cloneNode(true));
  }
}

class TringFooter extends HTMLElement  {
  constructor() {
    super();
    this.appendChild(footerTemplate.content.cloneNode(true));
    this.getElementById('terms-link').onclick = function() {
      legalClick('terms.html');
    }
    this.getElementById('privacy-link').onclick = function() {
      legalClick('privacy.html');
    }
    this.getElementById('legal-link').onclick = function() {
      legalClick('legal.html');
    }
  
  }
}

function loadHeaderFooter() {
  window.customElements.define('tring-header', TringHeader);
  window.customElements.define('tring-footer', TringFooter);
}

function legalClick(url) {
  var left = (screen.width/2)-(400);
  var top = (screen.height / 10);
  window.open(url, '_blank', 'height=1000,width=800,left='+left+',top='+top);
}

/*Run as default if NO other scripts!*/
window.onload = function() {
  console.log('Loaded Default Script');
  loadHeaderFooter();
}
  
  





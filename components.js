/*
const template =  document.createElement('template');
template.innerHTML = 
  '<div class="logo__container">' +
    '<img src="Images/deer-logo-1.png" alt="" height="100%" class="deer__logo">' +
  '</div>' +
  '<h1 class="title">PARKING AT TRING STATION</h1>' +
  '<nav>' +
    '<a class="page__link">Location Map</a>' +
    '<a class="page__link">Parking Bay Map</a>' +
    '<a class="page__link">Contact</a>' +
  '</nav>';

class TringHeader extends HTMLElement  {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

*/

window.onload = function() {
  console.log('Loaded Templates')
  window.customElements.define('tringheader', TringHeader);
}


  
  





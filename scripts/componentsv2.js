function loadHeaderFooter() {
  defineHeader();
  defineFooter();
}

function legalClick(url) {
  var left = (screen.width/2)-(400);
  var top = (screen.height / 10);
  window.open(url, '_blank', 'height=1000,width=800,left='+left+',top='+top);
}

function defineHeader() {
  const tringHeader = document.getElementById('tring-header');
  tringHeader.innerHTML =
  '<div class="title-container">' +
    '<a href="index.html">' +
      '<img src="Images/deer-logo-1.png" alt="" height="100%" class="deer__logo">' +
    '</a>' +
    '<h1>PARKING FOR TRING STATION</h1>' +
  '</div>' +  
  '<nav>' +
    '<a class="page-link" href="location.html">Location Map</a>' +
    '<a class="page-link" href="parkingbay.html">Parking Bay Map</a>' +
  '</nav>';
}

function defineFooter() {
  const tringHeader = document.getElementById('tring-footer');
  tringHeader.innerHTML =
  '<a id="terms-link">Terms & Conditions</a>' +
  '<a id="privacy-link">Privacy Policy</a>' +
  '<a id="legal-link">Legal Information</a>';
  document.getElementById('terms-link').onclick = function() {
    legalClick('terms.html');
  }
  document.getElementById('privacy-link').onclick = function() {
    legalClick('privacy.html');
  }
  document.getElementById('legal-link').onclick = function() {
    legalClick('legal.html');
  }
}

/*Run as default if NO other scripts!*/
window.onload = function() {
  console.log('Loaded Default Script');
  loadHeaderFooter();
}
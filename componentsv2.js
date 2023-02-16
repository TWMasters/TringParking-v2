function loadHeaderFooter() {
  defineHeader();
  defineFooter();
}

function defineHeader() {
  const tringHeader = document.getElementById('tring-header');
  tringHeader.innerHTML =
  '<div class="title-container">' +
    '<img src="Images/deer-logo-1.png" alt="" height="100%" class="deer__logo">' +
    '<h1>PARKING AT TRING STATION</h1>' +
  '</div>' +  
  '<nav>' +
    '<a class="page-link">Location Map</a>' +
    '<a class="page-link" href="parkingbay.html">Parking Bay Map</a>' +
    '<a class="page-link">Contact</a>' +
  '</nav>';
}

function defineFooter() {

}

/*Run as default if NO other scripts!*/
window.onload = function() {
  console.log('Loaded Default Script');
  loadHeaderFooter();
}
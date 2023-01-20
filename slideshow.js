var slideIndex = 0;

window.onload = function () {
  carousel();
  document.getElementById('terms-link').onclick = function() {
    legalClick('terms.html');
  }
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 10 seconds
}


function legalClick(url) {
  console.log("Legal Link Clicked");
  var left = (screen.width/2)-(400);
  var top = (screen.height / 10);
  window.open(url, '_blank', 'height=1000,width=800,left='+left+',top='+top);
}
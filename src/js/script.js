
(function() {
  'use strict';


function trackScroll(){
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 20);
    }
  }


  var goTopBtn = document.querySelector('#btn-scroll-up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

  var goTopBtn = document.querySelector('#logo-up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);


  const anchors = document.querySelectorAll('#btn-scroll-up')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

})();

function myFunction(){
  document.getElementById("myMenu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.menu__button')) {
    var dropdowns = document.getElementsByClassName(".menu__content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

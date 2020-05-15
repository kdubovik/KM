
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

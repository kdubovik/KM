
(function() {
  'use strict';


function trackScroll(){
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;
  //
  // if (scrolled > coords) {
  //   goTopBtn.classList.add('.btn-scroll-up-show');
  // }
  // if (scrolled < coords) {
  //   goTopBtn.classList.remove('.btn-scroll-up-show')
  // }
}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 20);
    }
  }

  // window.onscroll = function() {
  //  var scrollElem = document.getElementById("btn-scroll-up");
  //  if (document.body.scrollTop > document.documentElement.clientHeight) {
  //     scrollElem.style.opacity = "1";
  //  } else {
//        scrollElem.style.opacity = "0";
//    }
// }

  var goTopBtn = document.querySelector('.btn-scroll-up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();



// function backToTop() {
//   let button = $('btn-scroll-up');
//   $(window).on('scroll', () => {
//     button.fadeIn();
//   } else {
//     button.fadeOut();
//   });
//   button.on('click', () => {
//     e.preventDefault();
//     $('html').animate({scrollTop: 0}, 1000)
//   })
// }
// backToTop();

// banner slide
var swiper_banner_slide = new Swiper(".banner_slide_swiper-container", {
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

//banner dự án
var swiper = new Swiper('.banner_prj .swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 5,
      pagination: {
        el: '.banner_prj .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          allowTouchMove: true,
          slidesPerColumn: 1,
        }
      }
    });


//slide đối tác
// var appendNumber = 4;
// var prependNumber = 1;
var swiper = new Swiper(".banner_dt .swiper-container", {
  autoplay: {
    delay: 4000
  },
  // loop: true,
  speed: 1000,
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: ".banner_dt .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".banner_dt .swiper-button-next",
    prevEl: ".banner_dt .swiper-button-prev"
  }
});
// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function(e) {
//     e.preventDefault();
//     swiper.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     ]);
//   });
// document.querySelector(".prepend-slide").addEventListener("click", function(e) {
//   e.preventDefault();
//   swiper.prependSlide(
//     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//   );
// });
// document.querySelector(".append-slide").addEventListener("click", function(e) {
//   e.preventDefault();
//   swiper.appendSlide(
//     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//   );
// });
// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function(e) {
//     e.preventDefault();
//     swiper.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//     ]);
//   });
 
//nút scroll
var mybutton = document.getElementById("myBtn");
 
window.onscroll = function() {
  scrollFunction();
};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 
//popup
function toggleForm() {
  var element = document.getElementById("myForm");
  if (element.classList) {
    element.classList.toggle("open");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("open");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("open");
      element.className = classes.join(" ");
    }
}


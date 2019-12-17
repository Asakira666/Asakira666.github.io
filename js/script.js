//Слайдер========++++++++++++++++++++++================================
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//Плавный скрол по якорям=++++++++++++++++++++++++++++++++++================
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function (event) {
//     event.preventDefault();
//     const blockID = anchor.getAttribute("href");
//     document.querySelector("" + blockID).scrollIntoView({
//       behavori: "smooth",
//       block: "start"
//     });
//   });
// }

// $(document).ready(function () {
//   $('a[href^="#"]').click(function () {
//     var target = $(this).attr("href");
//     $("html, body").animate({
//         scrollTop: $(target).offset().top
//       },
//       500
//     );
//   });
// });


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var myVar;

function myFunction() {
    myVar = setTimeout(MostraPagina, 1500);
}

function MostraPagina() {
  document.getElementById("spinner1").style.display = "none";
  document.getElementById("poesia").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("bottonetop").style.display = "block";
    } else {
        document.getElementById("bottonetop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

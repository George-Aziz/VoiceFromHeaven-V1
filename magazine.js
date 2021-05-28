var slideIdx = 1;
moveSlides(slideIdx);

// Next/previous controls
function plusSlides(n) {
  moveSlides(slideIdx += n);
}

// Thumbnail image controls
function currentSlide(n) {
  moveSlides(slideIdx = n);
}

function moveSlides(n) 
{
    var i;
    var slides = document.querySelectorAll('.magazine-slide');
    var dots = document.querySelectorAll('.dot');

    //If current slide is past the limit go back to slide=1
    if (n > slides.length) { slideIdx = 1 }
    //If current slide is less than 1 then reset it to last slide
    if (n < 1) { slideIdx = slides.length }

    //Ensures all slides are hidden
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Ensures all dots are not active
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //Sets current slide visible and makes current dot active
    slides[slideIdx-1].style.display = "grid";
    dots[slideIdx-1].className += " active";
    console.log(n);
}
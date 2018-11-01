var slideIndex = 0;
showSlides();

function showSlides(){
    var index;
    var slides = document.getElementsByClassName("slideshow");
    for(index = 0; index<slides.length;index++){
        slides[index].style.display = "none";
    }
    slideIndex++;
    if (slideIndex>slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}

//Next/previous controls
function plusSlides(n){
    showSlides(slideIndex +=n );
}

//Image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}



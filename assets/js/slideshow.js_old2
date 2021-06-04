function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}


function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}



function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}

    // this turns all of the slides "off"
    for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
    //console.log(slideIndex[no]-1);
}

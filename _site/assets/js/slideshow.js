//var slideIndex = 1;
//showSlides(slideIndex, slideId);


// for slideshow of lecture slides
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}


//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}    
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//      // console.log("i in slides=", i);
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//      // console.log("i in dots =", i);
//  }
//  slides[slideIndex-1].style.display = "block";  
//  dots[slideIndex-1].className += " active";
//}

//function showSlides(n, no) {
//    console.log('n, no');
//    console.log(n);
//    console.log(no);
//    var i;
//    //var slides = document.getElementsByClassName("mySlides");
//    var slides = document.getElementsByClassName(slideId[no]);
//    console.log(slideId[no]);
//    console.log(slides.length);
//    //var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {slideIndex[no] = 1}    
//    if (n < 1) {slideIndex[no] = slides.length}
//    for (i = 0; i < slides.length; i++) {
//	slides[i].style.display = "none";
//	// console.log("i in slides=", i);
//    }
//    //for (i = 0; i < dots.length; i++) {
//    //    dots[i].className = dots[i].className.replace(" active", "");
//    //    // console.log("i in dots =", i);
//    //}
//    slides[slideIndex[no]-1].style.display = "block";  
//    //dots[slideIndex-1].className += " active";
//}


function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
    //console.log(slideId[no]);
  x[slideIndex[no]-1].style.display = "block";  
}

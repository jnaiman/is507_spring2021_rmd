var showSlidesLib = showSlidesLib || (function(){
    var _args = {}; // private

    // private indicies
    var slideIndex;
    var slideId;
    //var no;
    //var n;
    
    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
	    slideIndex = _args[0];
	    slideId = _args[1];
	    // (n, no)
	    showSlidesLib.showSlides(_args[2], _args[3]);
        },
	// not used I think???
        showSlidesInitial : function(n,no) {

	    var i;
	    var x = document.getElementsByClassName(slideId[no]);
	    if (n > x.length) {slideIndex[no] = 1}    
	    if (n < 1) {slideIndex[no] = x.length}
	    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	    }
	    x[slideIndex[no]-1].style.display = "block";

        },
	showSlides : function(n,no) {
	    var i;
	    var x = document.getElementsByClassName(slideId[no]);
	    
	    if (n > x.length) {slideIndex[no] = 1}    
	    if (n < 1) {slideIndex[no] = x.length}
	    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	    }
	    x[slideIndex[no]-1].style.display = "block";

        },
	plusSlides: function(n,no) {
	    showSlidesLib.showSlides(slideIndex[no] += n, no);
	}

    }; // end of return
    //setTimeout(function(){showSlides},20);
}());

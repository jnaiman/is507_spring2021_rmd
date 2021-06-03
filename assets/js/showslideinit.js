//var slideshowLib || slideshowLib (function(){
//    var _args = {}; // private
//
//    return {
//        init : function(Args) {
//            _args = Args;
//            // some other initialising
//        },
//        //helloWorld : function() {
//        //    alert('Hello World! -' + _args[0]);
//        //}
//	showSlidesInitial : function() {
//	    var no = _arg[0];
//	    var n = _arg[1];
//	    var slideId = _arg[2];
//	    var slideIndex = _arg[3];
//	    
//	    var i;
//	    var x = document.getElementsByClassName(slideId[no]);
//	    if (n > x.length) {slideIndex[no] = 1}    
//	    if (n < 1) {slideIndex[no] = x.length}
//	    for (i = 0; i < x.length; i++) {
//		x[i].style.display = "none";
//	    }
//	    x[slideIndex[no]-1].style.display = "block";  	    
//	}
//    };
//}());

var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
            //alert('Hello World! -' + _args[0]);
	    console.log(_args[0]);
        }
    };
}());

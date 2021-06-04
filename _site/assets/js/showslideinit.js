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

var showSlidesLib = showSlidesLib || (function(){
    var _args = {}; // private

    // private indicies
    var slideIndex;
    var slideId;
    var no;
    var n;

//    var forceRedraw = function(element){
//	
//	if (!element) { return; }
//	
//	var n = document.createTextNode(' ');
//	var disp = element.style.display;  // don't worry about previous display style
//	
//	element.appendChild(n);
//	element.style.display = 'none';
//	
//	setTimeout(function(){
//            element.style.display = disp;
//            n.parentNode.removeChild(n);
//	},20); // you can play with this timeout to make it as short as possible
//    }
    
    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
	    slideIndex = _args[0];
	    slideId = _args[1];
	    no = _args[2];
	    n = _args[3];
	    console.log(slideIndex);
	    console.log(no);
	    console.log(slideIndex[no]);
	    console.log(slideIndex[0]);
	    console.log('end initial')
        },
        showSlidesInitial : function() {
	    //var slideIndex = _args[0];
	    //var slideId = _args[1];
	    //var n = _args[2];
	    //var no = _args[3];
            //alert('Hello World! -' + _args[0]);
	    //console.log(_args[0]);
	    //console.log(_args[1]);
	    //console.log(slideIndex, slideId, n, no);

	    var i;
	    var x = document.getElementsByClassName(slideId[no]);
	    if (n > x.length) {slideIndex[no] = 1}    
	    if (n < 1) {slideIndex[no] = x.length}
	    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	    }
	    x[slideIndex[no]-1].style.display = "block";

	    //console.log(n, no);
	    //console.log('end initial showslides');

        },
	//showSlides : function(n,no) {
	showSlides : function(noin) {
	    //var slideIndex = _args[0];
	    //var slideId = _args[1];
	    //var n = _args[2];
	    //var no = _args[3];
            //alert('Hello World! -' + _args[0]);
	    //console.log(_args[0]);
	    //console.log(_args[1]);
	    //console.log(slideIndex, slideId, n, no);

	    var i;
	    //$('#' + slideId[no]).hide().show(0);
	    //console.log('#' + slideId[no]);

	    var x = document.getElementsByClassName(slideId[noin]);
	    //console.log(x);
	    //x[slideIndex[no]-1].style.display = "block";
	    if (n > x.length) {slideIndex[noin] = 1}    
	    if (n < 1) {slideIndex[noin] = x.length}
	    for (i = 0; i < x.length; i++) {
		//x[i].style.display = "block";
		x[i].style.display = "none";
		//x[i].style.display = "block";
		//x[i].offsetHeight;
	    }
	    x[slideIndex[noin]-1].style.display = "block";
	    //x[slideIndex[no]-1].style.display = "block";
	    //forceRedraw(x[slideIndex[no]-1]);
	    //x[slideIndex[no]-1].show(0);
	    //$('#parentOfElementToBeRedrawn').hide().show(0);
	    // return updates
	    //_args[2] = slideIndex[no]-1;
	    //console.log('args here', _args[2]);
	    //console.log(slideIndex[no]-1);

	    console.log('noin=',noin, 'index=',slideIndex[noin], 'n=',n);
	    console.log('end show slides');


        },
	plusSlides: function(nin,noin) {
	    //var slideIndex = _args[0];
	    //var slideId = _args[1];
	    //showSlidesLib.showSlides(slideIndex[no] += n, no);
	    //console.log('here');
	    //console.log(n,no);
	    n = slideIndex[noin]+nin;
	    console.log('n before=',n);
	    //no = noin;
	    showSlidesLib.showSlides(noin);
	    console.log('n=',n, 'no=',no, 'nin=',nin);
	    console.log('end plus');
	}

    }; // end of return
    //setTimeout(function(){showSlides},20);
}());

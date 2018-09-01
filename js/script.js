function openNav() {
	console.log("test open");
	document.getElementById("teaNav").style.width = "100%";
}

function closeNav(){
		console.log("test open");
		document.getElementById("teaNav").style.width = "0";
}


var sliBtn = '.search-field';
var	sliCont = '.search-slide';
var	sliTxt = '.search-slide input[type=text]';
var	sliDis = '.search-close';
var	sliSpd = 200;

$(sliBtn).click(function () {
	$(sliCont).animate({'width':'15em'}, sliSpd);
	$(sliTxt).focus();
});

$(sliDis).click(function () {
	$(sliCont).animate({'width':0}, sliSpd);
});

$(function () {
	$(".money").click(function () {
		console.log("hi");
		$(".sub-button").slideToggle("slow");
	});

	$(".Modern-Slider").slick({
	 	dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed:3000,
		slideToShow:1,
		slideToScroll:1,
		pauseOnHover:false,
		pauseOnDotsHover:true,
		draggable:false,
	});
});


var lightbox = $('.tvariety a').simpleLightbox({
	captions:true


});


$('.tborder-box').click(function(){
	lightbox.open();

})

// var lightbox = $('trecipe li').simpleLightbox({
// 	captions:true
// });

$('.tea-banner2').click(function(){
	lightbox.open();
})


$(function(){
    var front = $('.front'),
    back = ['left2', 'left', 'right', 'right2'];


    $('.Carousel').on('click', '.lipton-tea', function() {
      
        var $this = $(this);
        $.each(back, function(i,cl) {
          
            console.log("test", $this.hasClass(cl));
            if($this.hasClass(cl)) {
                front.removeClass('front').addClass(cl);
                front = $this;
    
                front.addClass('front').removeClass(cl);
            }
        });
    });
});





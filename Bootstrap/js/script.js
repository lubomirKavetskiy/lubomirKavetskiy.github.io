$(document).on("ready", function(){
	$(".glyphicon.glyphicon-remove").on("click", function(event){
		event.stopPropagation();
		$(".categories").fadeOut();
	});
	$(".third-bar .active-link").on("mouseenter", function(event){
		event.stopPropagation();
		$(".categories").fadeIn();
	});
	// variant 1:
	$(".name-price a[href='#show']").on("click", function(event){
		event.stopPropagation();
		if($(".text-active").is(":visible")){
			$(".text-active").fadeOut();
			$(".img-active").find("img").css({"opacity":"1"});
		} 
		else {
			$(".text-active").fadeIn();
			$(".img-active").find("img").css({"opacity":"0.3"});
		}
	//	variant 2:
	/* $(".product.active").on("mouseenter", function(event){
			event.stopPropagation();
			if($(".text-active").is(":visible")){
				$(".text-active").fadeOut();
				$(".img-active").find("img").css({"opacity":"1"});
			} 
			else {
				$(".text-active").fadeIn();
				$(".img-active").find("img").css({"opacity":"0.3"});
			}
		});
	*/
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseenter", function(event){
		if((window.matchMedia('(min-width: 992px)').matches) && (window.matchMedia('(max-width: 1199px)').matches)) {
			$(this).addClass("class992");
			$(this).children(".name-price.text").addClass("class1199");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseleave", function(event){
		if((window.matchMedia('(min-width: 992px)').matches) && (window.matchMedia('(max-width: 1199px)').matches)) {
			$(this).removeClass("class992");
			$(this).children(".name-price.text").removeClass("class1199");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseenter", function(event){
		if((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 991px)').matches)) {
			$(this).addClass("class768");
			$(this).children(".name-price.text").addClass("class991");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseleave", function(event){
		if((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 991px)').matches)) {
			$(this).removeClass("class768");
			$(this).children(".name-price.text").removeClass("class991");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseenter", function(event){
		if((window.matchMedia('(min-width: 601px)').matches) && (window.matchMedia('(max-width: 767px)').matches)) {
			$(this).addClass("class601");
			$(this).children(".name-price.text").addClass("class767");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseleave", function(event){
		if((window.matchMedia('(min-width: 601px)').matches) && (window.matchMedia('(max-width: 767px)').matches)) {
			$(this).removeClass("class601");
			$(this).children(".name-price.text").removeClass("class767");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseenter", function(event){
		if((window.matchMedia('(min-width: 481px)').matches) && (window.matchMedia('(max-width: 600px)').matches)) {
			$(this).addClass("class481");
			$(this).children(".name-price.text").addClass("class600");
		}
	});

	$(".recomend-left > .product, .recomend-right > .product").on("mouseleave", function(event){
		if((window.matchMedia('(min-width: 481px)').matches) && (window.matchMedia('(max-width: 599px)').matches)) {
			$(this).removeClass("class481");
			$(this).children(".name-price.text").removeClass("class600");
		}
	});

	$(".name-price.text a[href='#show-text-left']").on("click", function(event){
		event.stopPropagation();
		if(window.matchMedia('(max-width: 480px)').matches) {
			$(".recomend-left").find(".product-img").fadeToggle();
			$(this).parent("span").parent("div").find("p").fadeToggle();
		}
	});

	$(".name-price.text a[href='#show-text-right']").on("click", function(event){
		event.stopPropagation();
		if(window.matchMedia('(max-width: 480px)').matches) {
			$(".recomend-right").find(".product-img").fadeToggle();
			$(this).parent("span").parent("div").find("p").fadeToggle();
		}
	});

	$(function(){
		$('.carousel').carousel({
	  		interval: false
		})
	})
});




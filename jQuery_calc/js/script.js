var resultPrice = 0;

function setEqualHeight(columns){ 					
		var tallestcolumn = 0; 
		columns.each( function(){ 
			currentHeight = $(this).height(); 
			if(currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}); 
			columns.height(tallestcolumn); 
		};

function calcPricePlus(price) { 		
	return resultPrice += price;
}

function calcPriceMinus(price) { 
	if(resultPrice > 0)	{
		return resultPrice -= price;
	}	return resultPrice == 0;
}

function showSumPlus(data) {
	$("#section-3-price-sum span").text(calcPricePlus(data));
}

function showSumMinus(data) {
	$("#section-3-price-sum span").text(calcPriceMinus(data));
}

function showVal(data) {
	$("#section-3-price-val span").text(data);
}

function showMessage(elem, message){
	if (elem.hasClass("errorInput")) {
		elem.next().text(message);        
	}else{
		elem.addClass("errorInput")
		elem.after("<p id='error'>"+message+"</p>");
	}
}


$(document).on("ready", function(){
	$(".button-menu").on("click", function(){
		if( $(".header-menu").css("display") == "none" ){
			$(".header-menu").addClass("show");
		} else {
			$(".header-menu").removeClass("show");
		}
	});

	setEqualHeight($(".img"));

	$(".section-2-bottom-list li").on("mouseenter", function(event){
		event.stopPropagation();
		if( $(this).find(".ok-black-img").css("display") == "none") {
			$(this).css({"background":"linear-gradient(to right, #fed343, #fe9528)", "color":"#FFFFFF"});
			$("#section-3-price-val").css({"background":"linear-gradient(to right, #fed343, #fe9528)", "color":"#FFFFFF"});
			$("#section-3-price-val span").css({"color":"#FFFFFF"});
		} else {  
			$(this).css({"background":"#F8E3C3", "border":"1px solid #fe9528"});
			$(this).find(".ok-black-img").hide();
			$(this).find(".ok-orang-img").show();
			$(this).find("span").css({"border-color":"#f59029"});
			$("#section-3-price-val").css({"background":"#F8E3C3"});
		}
			showVal($(this).data("price"));
	});

	$(".section-2-bottom-list li").on("mouseleave", function(event){
		event.stopPropagation();
		if( $(this).find(".ok-orang-img").css("display") != "none" ) {
			$(this).find(".ok-orang-img").hide();
			$(this).find(".ok-black-img").show();
			$(this).find("span").css({"border-color":"#404040"});
			$(this).css({"border-color":"#f6f6f6", "background":"#f6f6f6", "color":"#f48b1e"});
		} else {
			$(this).css({"background":"#FFFFFF", "color":"#f48b1e"});	
		}
		showVal("0");
		$("#section-3-price-val").css({"background":"#FFFFFF", "color":"#f48b1e"});
		$("#section-3-price-val span").css({"color":"#f48b1e"});
	});

	$(".section-2-bottom-list li").on("click", function(event){
		event.stopPropagation();
		if( $(this).find(".ok-orang-img").css("display") == "none" ) {
			$(this).find(".ok-orang-img").show();
			showSumPlus($(this).data("price"));
		} else {
			$(this).find(".ok-orang-img").hide();
			showSumMinus($(this).data("price"));
		}
	});

		$(".section-4-slider").unslider({
				autoplay: true,
				arrows  : false
			});	

	$(function($){
	    $(".foot-tel-inp").mask("+38 (099) 999-99-99");
	});

	$(function(){
		var formInputs = $(".foot-name-inp, .foot-tel-inp, .foot-email-inp");
		var uName = $(".footer-your-contact").find("[type=text]");
		var phone = $(".footer-your-contact").find("[type=tel]");
		var email = $(".footer-your-contact").find("[type=email]");
		
		formInputs.on("focus", function(){
			$(this).prev().show(400);
			if($(this).hasClass("errorInput")) {
				$(this).removeClass("errorInput");
				$(this).next().remove();
			};
		});

		formInputs.on("blur", function(){
			var valInput = $(this).val();
			$(this).prev().hide(50);
			if(valInput === "" || valInput.match(/^\s+$/)) {
				showMessage($(this), "Это поле не может быть пустым");
			} else {

				if( ($(this).is(uName)) && (!(uName.val().match(/^\w{6,64}$/))) ) {
					showMessage($(this), "Введен неверный формат");
				};
				if($(this).is(email)) {
					if(email.val().match(/[.]{2}/)) {
						showMessage($(this), "Введен неверный формат (две '.' подряд)");
					} else if(!(email.val().match(/^\w{4,64}@[^.][a-z0-9-]{1,64}\.[a-z0-9-.]{2,64}[^.]$/))) {
							showMessage($(this), "Введен неверный формат.");
					};
				};	

				if( $(this).is(phone) && (phone.val().match(/^\+38\s\(0\D{2}\)\s\D{3}-\D{2}-\D{2}$/)) ) {
		 			showMessage($(this), "Это поле не может быть пустым");
		 			return;
				};

				if( ($(this).is(phone) && (!(phone.val().match(/^\+38\s\(0\d{2}\)\s\d{3}-\d{2}-\d{2}$/))) )) {
					showMessage($(this), "Введен неверный формат.");
				};
			};
		});

		$(".footer-your-contact").on("submit", function(event){
			formInputs.each(function(){
				if($(this).val() === "") {
					showMessage($(this), "Это поле не может быть пустым");
					event.preventDefault();
				}else if($(this).hasClass("errorInput")) {
					event.preventDefault();
				}
			});		
		});
	});
});
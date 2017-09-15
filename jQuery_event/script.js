var resultPrice = 0;
var resultWeight = 0;

function calcPricePlus(price) {
	return resultPrice += price;
}

function calcPriceMinus(price) {
	return resultPrice -= price;
}


function calcWeightPlus(weight) {
	return resultWeight += weight;
}

function calcWeightMinus(weight) {
	return resultWeight -= weight;
}

function toIncreas(value){
	var valuE = +value;
	number = valuE + 1;
	return number;
}

	function toRemove(values){
	var valueS = +values;
	numbe = valueS - 1;
	return numbe;
}

function greateBorder(){
	if ( $(".container-middle-left").height() > ($(".container-middle-right").height()) ){
		$(".container-middle-right").css({"border-left":"1px solid #FFF"});
		$(".container-middle-left").css({"border-right":"1px solid #C5BFBF"});
	} else {
		$(".container-middle-left").css({"border-right":"1px solid #FFF"});
		$(".container-middle-right").css({"border-left":"1px solid #C5BFBF"});
	}
}

function changeSize() {
	$(".size-of-dough-img").find("img").hide();
	$(".size-of-dough-hide").children("img").show();
	$(".temp-hide").children("img").hide();
	$(".temp-show").children("img").show();
	$(".size-of-dough-text").html("<p>Розмір<br><strong>30 см</strong></p>");
};

$(document).on("ready", function(){
	$(".current-price").text(calcPricePlus($(".temp-show>img").data("price")));
	$(".current-weight").text(calcWeightPlus($(".temp-show>img").data("weight")));
	$(".type-of-dough").on("click", "img", function(event){
		event.stopPropagation();
		$(this).css({"opacity":"1"});
		$(this).parent("li").siblings("li").children("img").css({"opacity":"0.5"});
		switch( $(this).data("dough") ) {
			case "americano":
			$(".current-price").text(calcPriceMinus($(".size-of-dough-show>img:visible").data("price")));
			$(".current-weight").text(calcWeightMinus($(".size-of-dough-show>img:visible").data("weight")));
			$(".current-price").text(calcPricePlus($(".size-of-dough-img").children("li").eq(3).children("img").data("price")));
			$(".current-weight").text(calcWeightPlus($(".size-of-dough-img").children("li").eq(3).children("img").data("weight")));
			$(".type-of-dough-text").html("<p>Тiсто <br><strong>Американо</strong></p>");	
			changeSize();
			break;
			case "italiano":
			$(".current-price").text(calcPriceMinus($(".size-of-dough-show>img:visible").data("price")));
			$(".current-weight").text(calcWeightMinus($(".size-of-dough-show>img:visible").data("weight")));
			$(".current-price").text(calcPricePlus($(".size-of-dough-img").children("li").eq(3).children("img").data("price")));
			$(".current-weight").text(calcWeightPlus($(".size-of-dough-img").children("li").eq(3).children("img").data("weight")));
			$(".type-of-dough-text").html("<p>Тiсто <br><strong>Італьяно</strong></p>");
			changeSize();
			break;
			case "hotdog":
			$(".current-price").text(calcPriceMinus($(".size-of-dough-show>img:visible").data("price")));
			$(".current-weight").text(calcWeightMinus($(".size-of-dough-show>img:visible").data("weight")));
			$(".current-price").text(calcPricePlus($(".size-of-dough-img").children("li").eq(3).children("img").data("price")));
			$(".current-weight").text(calcWeightPlus($(".size-of-dough-img").children("li").eq(3).children("img").data("weight")));
			$(".type-of-dough-text").html("<p>Тiсто <br><strong>Хот-дог</strong></p>");
			$(".size-of-dough-img").find("img").hide();
			$(".temp-show").children("img").show();
			$(".size-of-dough-text").html("<p>Розмір <br><strong>30 см</strong></p>");
			break;
		};
	});

	$(".size-of-dough-hide").on("click", "img", function(event){
		event.stopPropagation();
		$(".current-price").text(calcPriceMinus($(".size-of-dough-show>img:visible").data("price")));
		$(".current-weight").text(calcWeightMinus($(".size-of-dough-show>img:visible").data("weight")));
		$(".size-of-dough-img").find("img").hide();
		$(this).parent("li").next("li").children("img").show();
		$(".size-of-dough-hide").children("img").show();
		$(this).hide();
		switch( $(this).data("size") ) {
			case "large":
			$(".size-of-dough-text").html("<p>Розмір<br><strong>35 см</strong></p>");
			$(".current-price").text(calcPricePlus($(this).parent("li").next("li").children("img").data("price")));
			$(".current-weight").text(calcWeightPlus($(this).parent("li").next("li").children("img").data("weight")));
			break;
			case "middle":
			$(".size-of-dough-text").html("<p>Розмір<br><strong>30 см</strong></p>");
			$(".current-price").text(calcPricePlus($(this).parent("li").next("li").children("img").data("price")));
			$(".current-weight").text(calcWeightPlus($(this).parent("li").next("li").children("img").data("weight")));
			break;
			case "small":
			$(".size-of-dough-text").html("<p>Розмір<br><strong>25 см</strong></p>");
			$(".current-price").text(calcPricePlus($(this).parent("li").next("li").children("img").data("price")));
			$(".current-weight").text(calcWeightPlus($(this).parent("li").next("li").children("img").data("weight")));
		};		
	});

	$(".type-of-sauce-img").on("click", "img", function(event){
		event.stopPropagation();
		$(this).css({"opacity":"1"});
		$(this).parent("li").siblings("li").children("img").css({"opacity":"0.5"});
		switch( $(this).data("sauce") ) {
			case "ranch":
			$(".type-of-sauce-text").html("<p>Соус <br><strong>Ранч</strong></p>");
			break;
			case "garlik":
			$(".type-of-sauce-text").html("<p>Соус <br><strong>Гарлик</strong></p>");
			break;
			case "bbg":
			$(".type-of-sauce-text").html("<p>Соус <br><strong>Bbq</strong></p>");
			break;
			case "salsa":
			$(".type-of-sauce-text").html("<p>Соус <br><strong>Сальса</strong></p>");	
		};
	});

	$(".type-of-sauce2-chahge").on("change", function(event){
		event.stopPropagation();
		if($(this).val() !== "tomat"){
			$(".type-of-sauce2-img").prev("img").hide();
			$(".type-of-sauce2-img").show();
		} else {
			$(".type-of-sauce2-img").hide();
			$(".type-of-sauce2-img").prev("img").show();
		}
	});
	
	$(".container-middle-right-tabs-hide").on("click", "img", function(event){
		event.stopPropagation();
		$(".container-middle-right-tabs-show").children("img").hide();
		$(this).parent("li").next("li").children("img").show();
		$(this).parent("li").next("li").css({"text-align":"center"});
		$(".container-middle-right-tabs-hide").children("img").show();
		$(this).hide();
		$(".container-middle-right-boxes").children("div").hide();
		$(".container-middle-right-boxes").children("div").eq($(this).data("tab")).show();
		greateBorder();
	});

	$(".container-middle-right-boxes > div").each(function(event){
		$(this).children("div").each(function(i){
			$(this).children("div").attr("data-pos", i);
		})
	})

	$(".container-middle-right-boxes > div > div").on("click", "div", function(event){
		$(this).fadeOut(0, function(){
			$(this).appendTo($(".container-middle-left"));
			$(this).children("p").last().fadeOut();
		});
		$(this).fadeIn(300);
		$(this).children("p").append("<p class='remove'>-</p>");
		$(".container-top-left").children("span").eq($(this).data("box")).children("img").eq($(this).data("pos")).fadeIn(300);
		greateBorder();
		$(".current-price").text(calcPricePlus($(this).data("price")));
		$(".current-weight").text(calcWeightPlus($(this).data("weight")));
	});
			
	$(".container-middle-left").on("click", ".remove", function(event){
		if(+($(this).parent("p").parent("div").children("span").text()) >= 2){
			$(this).parent("p").parent("div").children("span").text(toRemove($(this).parent("p").parent("div").children("span").text()));
			$(".current-price").text( calcPriceMinus($(this).parent("p").parent("div").data("price")) );
			$(".current-weight").text( calcWeightMinus($(this).parent("p").parent("div").data("weight")) );
		}else{
			var dataBox = $(this).parent("p").parent("div").data("box"),
			dataPos = $(this).parent("p").parent("div").data("pos");

			$(".current-price").text( calcPriceMinus($(this).parent("p").parent("div").data("price")) );
			$(".current-weight").text( calcWeightMinus($(this).parent("p").parent("div").data("weight")) );

			$(this).parent("p").parent("div").fadeOut(0);
			$(".container-middle-right-boxes").children("div").eq(dataBox).children("div").eq(dataPos).append($(this).parent("p").parent("div"));
			$(this).parent("p").parent("div").fadeIn(300);
			$(this).parent("p").next("p").fadeIn(300);
			$(".container-middle-right-boxes").find(".remove").remove();
			$(".container-middle-right-boxes").find(".increas").remove();
			$(".container-top-left").children("span").eq(dataBox).children("img").eq(dataPos).fadeOut(); 
			greateBorder();
		}
	});

	$(".container-middle-left").on("click", "img:not(.not)", function(event){
		if($(this).parent("div").children("span").text() == ""){
			$(this).parent("div").prepend("<span class='increas'>2</span>");
			$(".current-price").text(calcPricePlus($(this).parent("div").data("price")));
			$(".current-weight").text(calcWeightPlus($(this).parent("div").data("weight")));
		}else{
			$(this).parent("div").children(".increas").text(toIncreas($(this).parent("div").children("span").text()));
			$(".current-price").text(calcPricePlus($(this).parent("div").data("price")));
			$(".current-weight").text(calcWeightPlus($(this).parent("div").data("weight")));
		}
	});

	$(".container-bottom-reset").on("click", function(){
		location.reload();
	});	
});
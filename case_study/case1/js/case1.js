/* window.addEventListener("load", () => {

		let n=0;
		let total;
	
		let slider=document.getElementsByClassName("slider")[0]; //.slider
		let sliderList=slider.firstElementChild.firstElementChild.children; //slider li
		let direction=document.getElementsByClassName("direction")[0]; //.direction
		let [leftBtn, rightBtn]=direction.children; // a left, a. right
		let control=document.getElementsByClassName("control")[0]; //.control
		let controlList=control.firstElementChild.children; //.control li
		total=controlList.length;
	
		let init=() => {
			sliderList[n].classList.add("active");
			controlList[n].classList.add("active");
		};
	
		let sliderInteraction=() => {
			for(let i=0; i<sliderList.length; i++){
				if(i === n){
					sliderList[i].classList.add("active");
					controlList[i].classList.add("active");
				}
				else{
					sliderList[i].classList.remove("active");
					controlList[i].classList.remove("active");
				}
			}
		};
	
		init();
	
		leftBtn.addEventListener("click", e => {
			e.preventDefault();
	
			if(n > 0){
				n=n-1;
			}
			else{
				n=total-1;
			}
	
			sliderInteraction();
		});
		rightBtn.addEventListener("click", e => {
			e.preventDefault();
	
			if(n < (total-1)){
				n=n+1;
			}
			else{
				n=0;
			}
	
			sliderInteraction();
			
		});
	
		for(let i=0; i<controlList.length; i++){
			controlList[i].idx=i;
	
			controlList[i].addEventListener("click", e => {
				e.preventDefault();
				n=e.currentTarget.idx;
				sliderInteraction();
			});
		}
	}); */
$(function(){
	$(".slider a").click(function(e){
		e.preventDefault();
	});

	let pageN=0;

	$(".control li").eq(0).addClass("active");
	$(".slider_moving li").eq(0).addClass("active");

	$(".control li").click(function(e){
		e.preventDefault();
		$(".control li").removeClass("active");
		$(this).addClass("active");

		pageN=$(this).index();
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});

	$(".right").click(function(e){
		e.preventDefault();
		if(pageN<3){
			pageN=pageN+1;
		}
		else {
			pageN=0;
		}
		$(".control li").removeClass("active");
		$(".control li").eq(pageN).addClass("active");
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});
	$(".left").click(function(e){
		e.preventDefault();
		if (pageN>0){
			pageN=pageN-1;
		}
		else {
			pageN=3;
		}

		$(".control li").removeClass("active");
		$(".control li").eq(pageN).addClass("active");
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});
});

$(function(){
	$("#gnb").mouseenter(function(){
		$("#gnb").addClass("active");
	});
	$("#gnb").mouseleave(function(){
		$("#gnb").removeClass("active");
	});

	$("#gnb").focusin(function(){
		$(this).addClass("active");
	});

	$("#gnb li:last-child li:last-child a").focusout(function(){
		$("#gnb").removeClass("active");
	});

	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});

	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
	});
});
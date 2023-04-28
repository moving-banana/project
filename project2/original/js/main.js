//original
$(function(){
	setTimeout(function(){
		$("#header a.logo").addClass("active2");
		// $("#page1 .text_box.active2").addClass("active2");
	}, 1800);

	//상단 lang버튼 언어목록
	let whiteFlag=false;

	$("#header li.lang").click(function(e){
		e.preventDefault();
		// console.log("hello!");
		if($("#header .choose_lang").css("display") === "none"){
			$("#header .choose_lang").slideDown(400);
			$("#header").addClass("active");
			$("#gnb").addClass("active");
		}
		else{
			$("#header .choose_lang").hide();
			if(whiteFlag) return;{
				$("#header").removeClass("active");
				$("#gnb").removeClass("active");
			}
		}
	});

	//탭 클릭시 숨겨진 메뉴 오픈
	$(".tab").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$("body").addClass("fixed");
			$(".gnb_open").addClass("active").fadeIn(400);
		}
		else{
			$(this).removeClass("active");
			$("body").removeClass("fixed");
			$(".gnb_open").removeClass("active").hide();
		}
	});

	$(window).trigger("resize");
	// 1025px 미만시 탭메뉴
	let winw;
	let winHalf;
	let wint=0;
	let isMobile=false;
	
	$(window).resize(function(){
		winw=$(window).width();
		winHalf=$(window).height()/1.2;

		if(winw <= 1025){
			isMobile=true;
		}
		else {
			isMobile=false;
			for(let i=0; i<$("#open_gnb > ul > li").length; i++){
				if($("#open_gnb > ul > li").eq(i).find("ul").attr("style") != undefined){
					$("#open_gnb > ul > li").eq(i).removeAttr("class");
					$("#open_gnb > ul > li").eq(i).find("ul").removeAttr("style");
				}
			}
		}
	});

	$("#open_gnb > ul > li").click(function(e){
		e.preventDefault();
		console.log("hi!!");
		if(isMobile == false) return;

		if($(this).hasClass("active") == false){
			$("#open_gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#open_gnb ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});

	//스크롤따른 페이지 움직임
	gsap.registerPlugin(ScrollTrigger);
	
	for(let i=1; i<=8; i++){
		// console.log(i);
		gsap.to("#page"+i,{
			scrollTrigger: "#page"+i,
			onUpdate: function(){
				let timer=setTimeout(function(){
					if($("#page"+i).hasClass("active")===false){
					$("#page"+i).addClass("active");
					// console.log("#page"+i);
					}
				},300);
			}
		});
	}

	// 스크롤150이상시 헤더 변환
	$(window).scroll(function(){
		wint=$(window).scrollTop();
		if(wint > 150){
			$("#header").addClass("active");
			$("#gnb").addClass("active");
		}
		else{
			$("#header").removeClass("active");
			$("#gnb").removeClass("active");
		}
	});

	//GNB동작
	$("#gnb > ul").mouseenter(function(){
		$("#header").addClass("active");
	});
	$("#gnb > ul").mouseleave(function(){
		if(whiteFlag) return;
		$("#header").removeClass("active");
	});
	$("#gnb > ul > li").mouseenter(function(){
		// console.log("slidedown!");
		$("#header").addClass("active2");
		$(this).find("ul").stop().delay(75).slideDown(200);
	});
	$("#gnb > ul > li").mouseleave(function(){
		$("#header").removeClass("active2");
		$(this).find("ul").stop().slideUp(100);
	});

	//스크롤시 상단가기버튼 생성
	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(t > 100) {
			$(".go_top_btn").addClass("visible");
			$("#header").addClass("active");
			whiteFlag=true;
		}
		else {
			$(".go_top_btn").removeClass("visible");
			$("#header").removeClass("active");
			whiteFlag=false;
		}
	});

	//상단가기 버튼
	$(".go_top_btn").click(function() {
		$('html, body').animate({
			scrollTop : 0
		});
		return false;
	});

	//slider 왼쪽
	const bannerData=[
		{
			banner: "banner1",
			title: "XTeer TOP PRIME 5W30",
			desc: "XTeer TOP PRIME은 100% 합성 엔진오일로서 API 및 ACEA 최신 성능 요구 사항 및 유럽 명차 요구 수준을 만족시키는 최고급 엔진오일입니다."
		},
		{
			banner: "banner2",
			title: "XTeer Ultra GSL 0W20",
			desc: "XTeer Ultra GSL은 100% 합성엔진오일로서 연비개선 효과와 소음감소 및 엔진 최대 출력이 가능하도록 그 성능을 극대화 시켰습니다."
		},
		{
			banner: "banner3",
			title: "XTeer Ultra HD 15W40",
			desc: "합성엔진오일로써 최신의 API 및 ACEA 그리고 대형엔진제작자의 품질기준을 충족하여 디젤 엔진에 최적의 윤활성능을 제공합니다."
		},
		{
			banner: "banner4",
			title: "XTeer ATF Multi-V",
			desc: "100% 합성기유와 우수한 첨가제로 만든 4~8속 자동 변속기유로 우수한 내마모성, 우수한 유동성, 우수한 산화 안정성을 가진 제품입니다."
		},
		{
			banner: "banner5",
			title: "XTeer Alpha",
			desc: "XTeer Alpha 는 연료 주유 시 함께 투입하는 연료첨가제입니다. 휘발유용/경유용 으로 나뉩니다. 더욱 강화 된 세정 효과로 엔진의 청결을 지속적으로 유지하며, 엔진 성능을 향상시키기 위해 최신 첨가제 기술이 적용되며 모든 유형의 가솔린/디젤 자동차에 탁월한 효과를 발휘합니다."
		},
	];

	var bannerSwiper=new Swiper(".mySwiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction"
		},
		on: {
			init: function(){
				// console.log(this.slides.length, this.activeIndex);
				let idx=this.activeIndex;
				// console.log(bannerData[idx].title, bannerData[idx].desc);

				$(".product_detail h3").text( bannerData[idx].title);
				$(".product_detail p").text( bannerData[idx].desc);
			},
			slideChange: function(){
				let idx=this.activeIndex;
				// console.log(bannerData[idx].title, bannerData[idx].desc);

				$(".product_detail h3").text( bannerData[idx].title);
				$(".product_detail p").text( bannerData[idx].desc);
			}
		}
	});

	//footer-family site
	$("#footer a.title").click(function(e){
		e.preventDefault();
		if($(this).next().css("display") === "none"){
			$(this).next().fadeIn(400);
		}
		else{
			$(this).next().hide();
		}
	});
});
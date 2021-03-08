window.onbeforeunload = function(){
            document.documentElement.scrollTop = 0;  //ie下
            document.body.scrollTop = 0;  //非ie
}
var per2 = $("#per2"),
	per3 = $("#per3"),
	bg = $(".bg"),
	intro = $(".intro"),
	onair = $(".onair");
var spans = document.getElementsByTagName('span');
console.log(spans)

var tlLoader = new TimelineMax();
tlLoader
	// .from(".person",2,{autoAlpha:0,y:60})
	.from(".bg",2.5,{scale:2,autoAlpha:0.5,ease:Power1.easeInOut})
	.fromTo("#btitle",2,{autoAlpha: 0, filter:"blur(3px)",y: 20,ease:Power1.easeInOut},{autoAlpha:1,filter:"blur(0px)",y: 0,},"-=1.5")
	.fromTo("#stitle",1,{autoAlpha: 0, filter:"blur(1px)",y: 0,},{autoAlpha:1,filter:"blur(0px)",y: 5,},"-=1.9")
	.fromTo(".person",3,{autoAlpha:0,y:60},{autoAlpha:1,y:0},"-=3")
	.from("#jtbc",1,{autoAlpha:0,y:10,ease:Power1.easeInOut},"-=2")
	// .staggerFromTo(".oneword",2,{x:-10,y:10},{x:0,y:0},0.1,"-=2")	
	// .staggerTo(".oneword",1,{x:-10,y:10},0.08,"-=3.8")		
	.staggerFrom(".sns a",2.5,{x:15,y:10,autoAlpha:0,ease:Back.easeOut},0.2)
	.from(".onair",1.5,{autoAlpha: 0,y: 10},"-=2.5")
	.staggerFromTo(".oneword",2,{x:0,y:0,ease:Expo.ease},{x:10,y:-10},0.13,"-=1.3")
	.from(".scroll-line",1.5,{autoAlpha:0,scaleY:0.7,ease:Expo.ease},"-=1")
	.fromTo(".scroll-line h6",2,{autoAlpha:0,y:-10},{autoAlpha:1,y:0},"-=3")

var controller = new ScrollMagic.Controller();
var tlMainScroll = new TimelineMax()
.add([
	// TweenMax.set("#per2",{y:510}
	TweenMax.to(".bg",4,{scale:1.2}),
	TweenMax.fromTo("#per2",4,{scale:1,y:960},{scale:1.18,y:1050,opacity:0.9}),
	TweenMax.fromTo("#per3",4,{scale:1,y:960},{scale:1.13,y:900,opacity:0.9}),
	TweenMax.fromTo("#btitle",5,{autoAlpha:1,y:0,filter:"blur(0px)"},{autoAlpha:0,y:10,filter:"blur(5px)"}),
	TweenMax.fromTo("#stitle",5,{autoAlpha:1,y:0,filter:"blur(0px)"},{scale:1.01,y:10,filter:"blur(1px)"}),
	TweenMax.staggerTo(".intro .oneword",0.4,{autoAlpha:0,y:-5,filter:"blur(5px)"},0.05),
	TweenMax.to(".onair",3,{autoAlpha:0,x:10}),
	TweenMax.staggerTo(".sns a",3,{autoAlpha:0,x:10}),
]);
var tweenHome = new ScrollMagic.Scene({
	triggerElement:".section1",
	triggerHook:0,
	duration:"110%"
})
.setTween(tlMainScroll)
.setPin('.section1')
.addTo(controller);



var tlMainScrollOut = new TimelineMax()
.add([
	TweenMax.to(".bg",5,{autoAlpha:0}),
	TweenMax.to(".person",5,{autoAlpha:0,scale:1.01,y:-10}),
	TweenMax.fromTo(".section2",4,{autoAlpha:0,filter:"blur(5px)"},{autoAlpha:1,filter:"blur(0px)"}),
	TweenMax.set(["#prointro",".top2 .nav",".profile #proimg",".profile #prointro","#botlogo"],{autoAlpha:0}),
	// TweenMax.set("#prointro",{autoAlpha:0}),
	TweenMax.fromTo(".top2 #stitle",4,{scale:1.01,autoAlpha:1,filter:"blur(2px)"},{scale:1,autoAlpha:0,filter:"blur(10px)"}),
	TweenMax.from(".nav",2,{autoAlpha:0,y:20,ease:Expo.ease})
	// ,
])
var section12 = new ScrollMagic.Scene({
	triggerElement:".section2",
	triggerHook:0,
	duration:"40%"
})
.setTween(tlMainScrollOut)
.setPin('.section2')
.addTo(controller);
console.log(tlMainScrollOut)

var flag = false;
document.body.onscroll = function(){
	if(document.documentElement.scrollTop >= 1190){
		flag = !flag;
	}	
	if(flag==true){
		var tlMain2in = new TimelineMax()
		Spanize("#dialog")
		tlMain2in
		// .fromTo("#cast h2",0.5,{autoAlpha:0,filter:'blur(10px)',y:20,ease:Expo.easeIn},{autoAlpha:1,filter:'blur(0px)',y:0})
		 .fromTo(".nav",2,{autoAlpha:0,y:20},{autoAlpha:1,y:0,ease:Strong.easeOut,delay:0.2})
		 .fromTo(".profile #proimg",2,{autoAlpha:0,x:-10},{autoAlpha:1,x:0},"-=1.5")
		 .set(".profile #prointro",{autoAlpha:1},"-=1.8")
		 .set(["#cast h2","#cast h4","#castintro","#dialog"],{autoAlpha:0},"-=1.8")
		 .fromTo("#cast h2",1,{autoAlpha:0,x:-5,y:10,filter:"blur(1px)",ease:Expo.easeOut},{autoAlpha:1,y:0,filter:"blur(0px)"},"-=1.2")
		 .fromTo("#cast h4",2,{autoAlpha:0,x:-10},{autoAlpha:1,x:0},"-=1.2")
		 .fromTo("#castintro",2,{autoAlpha:0,x:0},{autoAlpha:1,x:10},"-=2")
		 // .set("#dialog",{autoAlpha:1})
		 .to("#dialog",3,{autoAlpha:1,},"+=0.5")
		.staggerTo(".onequot",2,{autoAlpha:1,ease:Ease.easeInOut},0.07,"-=5")
		flag =null;
		if(document.documentElement.scrollTop >= 1195){
			// setTimeout(function(){
			// 	$(document.body).css({"overflow-y":"hidden"})
			// }
			// ,1000)
			$(document.body).css({"overflow-y":"hidden"})
		}
		document.body.onscroll = null
	}

}
var aArr = [$("#p1"),$("#p2"),$("#p3"),$("#p4"),$("#p5")];
var casth2Arr = ["한서진","이수임","노승혜","진진희","김주영"]
var casth4Arr = ["염정아","이태란","윤세아","오나라","김서형"]
var casintroArr = ["모나코 왕비였던 그레이스 켈리보다 더 진주목걸이가 잘 어울린다. 우아하고 기품이 넘친다. 범접할 수 없는 아우라가 ‘황실의 왕비’ 못지않다. 시드니 모기지 전문 뱅크 은행장인 아버지에 명문가 출신의 어머니 사이에서 1남 1녀의 외동딸로 태어났다. 11살에 호주로 이민, 시드니대학 교육학과를 졸업 후, 강준상을 만나 열애 끝에 결혼했다고 알려져 있다.<br/><br/>남편이 주남대 의대 정교수로 승진하면서 유럽의 고성처럼 웅장하고 격조 있는 스카이 캐슬에 입성, 두 딸의 자녀교육도 남편의 내조도 완벽한 여자로 스카이 캐슬 안, 그 0.1% 사이에서도 선망의 대상이다.","청바지에 밀짚모자가 근사하게 어울리는 여자다. 소탈, 수수, 소박, 그 자체다. 꽃과 나무를 사랑해 사시사철 손수 가꾸다보니 손톱 밑의 흙 때는 기본. 입맛 또한 토종이라 싱싱한 선지로 선짓국을 맛깔나게 끓여 낼 줄도 안다. 직접 기른 무공해 채소에 된장찌개 하나면 고봉밥도 뚝딱, 함께 있으면 덩달아 입맛 돌고 살 맛 나는, 싱그러운 여자다.<br/><br/>한서진의 주도로 스카이 캐슬 귀부인들 사이에 왕따가 되어버렸으나, 그럼에도 주눅은커녕 씩씩하다 못해 용감무쌍하게 귀부인들이 <학구적 문화>랍시고 쌓아온 <폭력적 문화>를 하나하나 격파해 나가는 그녀. 덕분에 스카이 캐슬 아이들 사이에서는 아이돌 스타 못지않게 사랑받는 멘토가 되는데...","보헤미안 시크 스타일을 즐겨 입는다. 모던한 칼라의 블라우스에 바람에 흩날리는 하늘하늘한 롱스커트 속에 언제 터질지 모를 폭탄을 감추고 있는 여자다.<br/><br/>육군참모총장에 여당 국회의원까지 지낸 아버지 밑에서 수건 한 장도 각 잡아 걸어야했던 생활에 순응하며 살았던 ‘얌전한’ 모범생이었다. 때문에 다혈질인 아버지 밑에서 얌전히, 순종적으로, 튀지 않고 살아온 그녀의 내면 깊숙이 용암이 들끓는다는 건 아무도 모른다. 일탈, 모험, 자유, 도전, 도발이란 단어를 들으면 심장이 벌렁벌렁, 당장이라도 맨발로 집을 뛰쳐나가고픈 욕망을 눌러 참아 왔다는 것 역시 아무도 모른다.","화려한 액세서리, 원색의 비비드 컬러의 파티 웨어가 너무도 잘 어울린다. 정열적이고 섹시하면서도 러블리하고 큐티한 면을 동시에 갖고 있는 탁구공처럼 통통 튀는 여자다.<br/><br/>그 주체할 수 없는 끼로 공부는 뒷전, 강남 일대를 주름잡던 일진 짱의 애인이었다는 소문은 믿거나 말거나. 팩트는 패리스힐튼 보다 더한 셀럽이 되겠다는 목표로 방송 연예과를 졸업, 한때 단역배우로 활동했다는 것인데... 강남에 빌딩을 수채나 갖고 있는 갓물주가 아버지다 보니 오냐오냐 금지옥엽 자란 그녀가 어찌 이름도 없는 행인1, 2, 3에 감읍하며 끈기 있게 그 바닥에서 버틸 수 있었겠는가?","대치동 엄마들도 모르는 극소수 아는 사람들만 아는 탑급 입시 코디네이터. 서울대 입학사정관 출신에 성공률 백 프로, 베테랑 전문가들로 꾸려진 전투력과 수십억을 호가하는 몸값으로 유명하지만 ... 원한다고 그녀를 고용할 수 없다. 서류와 면접을 통해 그녀에게 간택 되어야만 자녀 관리를 맡길 수 있다.<br/><br/>학종 대비 내신관리는 물론 자동봉진(자율, 동아리, 봉사, 진로활동)에 교우관계, 심리, 건강, 수면 스타일까지... 하나부터 열까지 학생의 모든 것을 분석하고 관리하면서도 업무 외의 이야기는 단 한 마디도 하지 않는 무겁고 신중한 스타일."]
var dialogArr = ["우리 예서 서울의대 보내야 돼요.","이거, 정말 애들이 원하는 거 맞아요?","이건 아니지 싶네요.","왜 아갈머리를 쳐닫고 있어요?","어머니, 후회하지 않으시겠습니까?"]
console.log(aArr) 
var index = 1
function Switch(btn,i){
	btn.onmousemove = function(){
		
	}
	btn.onclick=function(){
		// alert("dsfsdf")
		$("#proimg").addClass("distort")
		TweenMax.to("#proimg",0.5,{autoAlpha:0,x:10,ease:Expo.easeOut,onComplete:function(){
			$("#proimg").removeClass("distort")
			$("#proimg img")[0].src = "images/"+(i+1)+"-1.png";
			TweenMax.to("#proimg",0.5,{autoAlpha:1,x:0})
		}})
		
		TweenLite.fromTo("#cast h2", 0.5,{autoAlpha: 1,filter: 'blur(0px)',y: 0},{autoAlpha: 0.2,filter: 'blur(10px)',y: 20,ease: Expo.easeIn,onComplete: 
			function () {
            	$("#cast h2")[0].innerHTML = casth2Arr[i];
				TweenLite.to("#cast h2", 0.5, {autoAlpha: 1,filter: 'blur(0px)',y: 0});
			} 
		});
		TweenLite.fromTo("#cast h4", 0.4,{autoAlpha: 1,filter: 'blur(0px)',y: 0 },{autoAlpha: 0,filter: 'blur(5px)',y: 20,ease: Expo.easeIn,onComplete:
			function () {
             $("#cast h4")[0].innerHTML = casth4Arr[i];
			TweenLite.to("#cast h4", 0.4, {autoAlpha: 1,filter: 'blur(0px)',y: 0,delay: 0.1 });
			} 
		});
		TweenLite.fromTo("#castintro", 0.4,{autoAlpha: 1,y: 0 },{autoAlpha: 0,x: -10,ease: Expo.easeIn,onComplete:
			function () {
             $("#castintro")[0].innerHTML = casintroArr[i];
			TweenLite.to("#castintro", 0.4, {autoAlpha: 1,filter: 'blur(0px)',x: 0,delay: 0.1 });
			} 
		});
		// TweenMax.staggerFromTo(".onequot", 5,{autoAlpha: 1,filter:"blur(0px)",y: 0 },{autoAlpha: 0,filter: 'blur(2px)',y: 20,ease: Expo.easeIn,onComplete:
		// 	function () {
		// 		TweenLite.fromTo("#dialog",0.2,{autoAlpha:1,y:0,filter:"blur(0px)"},{autoAlpha:1,y:0,filter:"blur(2px)",ease: Expo.easeIn, onComplete:function(){
		// 				$("#dialog")[0].innerHTML = dialogArr[i];
		// 				Spanize("#dialog");
		// 				TweenLite.to(".onequot",0,{autoAlpha:0,onComplete:function(){
		// 					TweenLite.to("#dialog",1,{autoAlpha:1,y:0,filter:"blur(0px)"});
		// 					TweenMax.staggerTo(".onequot", 0.4, {autoAlpha: 1,filter: 'blur(0px)',y: 0,delay: 5 });
		// 				}})	
		// 			}
		// 		})
  //       	} 
		// },-0.1);
		TweenMax.staggerTo(".onequot", 5,{autoAlpha: 0,filter: 'blur(20px)',y: 20,ease: Expo.easeOut},-0.05)
		TweenMax.to("#dialog",0.5,{autoAlpha:0,onComplete:function(){
			$("#dialog")[0].innerHTML = dialogArr[i];
			Spanize("#dialog");
			TweenLite.fromTo("#dialog",2,{autoAlpha:0,x:-5,filter:"blur(2px)"},{autoAlpha:1,x:0,filter:"blur(0px)",ease:Expo.easeOut,delay:0.1});
		}})
		console.log($("#cast h2")[0].innerHTML)
		console.log(btn)
		console.log($(btn))
		$(".nav a.current").removeClass("current");
		$(btn).addClass("current")

	}

	console.log($("#cast h2")[0].innerHTML)
	console.log(casth4Arr[i])
}
Switch($("#p1")[0],0)
Switch($("#p2")[0],1)
Switch($("#p3")[0],2)
Switch($("#p4")[0],3)
Switch($("#p5")[0],4)
function Spanize(idStr){
	var spnzLet = document.querySelector(idStr)
	//$.trim 表示jquery提供的trim函数
	// console.log(spnzLet.innerHTML)
	// var RegExp = /<br>/g 
	var spnzLet2 = spnzLet.innerHTML.replace(/<br>/g ,"a")
	var spanArr = $.trim(spnzLet2).split("");
	var spanized = "<span class=\"onequot\">"+spanArr.join("</span><span class=\"onequot\">")+"</span>";
	spnzLet.innerHTML = spanized;
	spnzLet.innerHTML = spnzLet.innerHTML.replace(/<span class="onequot">a<\/span>/g,"<br>")
}


//메인메뉴 노란 바

const elMenu = document.querySelectorAll('.gnb > li');
const elBar = document.querySelector('.bar');

// elBar.style = `left:${elMenu[0].offsetLeft}px`; //bar의 시작위치를 첫번째 li로 한다
/*
function barMove(){
    elMenu.forEach(function(item){
        item.onmouseenter = function(){
            elBar.style = `width:${this.offsetWidth}px ; left:${this.offsetLeft}px`;
        }
    });
}

window.addEventListener('load',barMove);
*/

$('.bar').css({left: `${$('.gnb > li')[0].offsetLeft}px`});

let open = 0; //변수 open에 0을 넣어준다 (화면이 처음 열릴 때 .gnbsub가 닫혀있다)
$('.gnb > li').mouseenter(function(){
    $('.bar').css({left: `${this.offsetLeft}px`, width: `${this.offsetWidth}px`});
    $('.searchTop').hide();
    $('.searchBtn').removeClass('on');
    $('.gnbBg').stop(true,false).fadeIn();
    $('.searchBg').hide();
    if(!open == 0){
        $('.gnbSub').hide();
        $(this).find('.gnbSub').stop(true,false).show();
    } else {
        $(this).find('.gnbSub').stop(true,false).slideDown(500);
        open = 'xxx';
    }

});

$('.kbGnb').mouseleave(function(){
    $('.gnbSub').slideUp(300);
    $('.bar').css({width: '0px'});
    $('.gnbBg').fadeOut(300);
    open = 0;
});

$('.otherUtil').mouseenter(function(){
    $('.gnbSub').slideUp(300);
    $('.bar').css({width: '0px'});
    $('.gnbBg').fadeOut(100);
    open = 0;
});

$('.gnb').mouseleave(function(){
    $('.gnbSub').slideUp(300);
    $('.gnbBg').fadeOut(300);
    open = 0;
});


// searchTop

$('.searchBtn').click(function(){
    $('.searchTop').toggle();
    $(this).toggleClass('on');
    
    if($('.searchBtn').hasClass('on')){
        $('.searchBg').show();
    } else {
        $('.searchBg').hide();
    }
})

// 로그인 박스 tab
const tabBtn1 = document.querySelectorAll('.logbox .tabsMenu li a');
const tabBd1 = document.querySelectorAll('.logbox .tabsBody>div');

let num = 0;
tabBtn1.forEach(function(item,index){
    item.onclick = function(e) {
        e.preventDefault();
        for(let i=0; i <tabBtn1.length; i++){
            tabBtn1[i].classList.remove('on');
            tabBd1[i].style.display='none';
        }

        item.classList.add('on');
        tabBd1[index].style.display='block';

        // tabBtn[num].classList.remove('on');
        // this.classList.add('on');
        // num = bb;
    };
})

////section2d의 tab (추천카드)

const tabBtn2 = document.querySelectorAll('.recomCard .tabsMenu li');
const tabBd2 = document.querySelectorAll('.recomCard .tabsBody>div');

tabBtn2.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3 ; i++){
            tabBtn2[i].classList.remove('on');
            tabBd2[i].style.display='none';
        }

        item.classList.add('on');
        tabBd2[aa].style.display="flex";
    }
});


////section4의 tab(이용가이드)

const tabBtn3 = document.querySelectorAll('.guideArea .tabsMenu li');
const tabBd3 = document.querySelectorAll('.guideArea .tabsBody>div');

tabBtn3.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3 ; i++){
            tabBtn3[i].classList.remove('on');
            tabBd3[i].style.display='none';
        }

        item.classList.add('on');
        tabBd3[aa].style.display="block";
    }
});


///footer Link

$('.kdNetLink > a').click(function(e){
    e.preventDefault();
    $('.kdNetList').toggle();
})

$('.kdNetLink > a').click(function(){
    if($('.kdNetLink > a').hasClass('a1')){
        $('.kdNetLink > a').removeClass('a1');
        $('.kdNetLink > a').addClass('a2');
    } 
    else if($('.kdNetLink > a').hasClass('a2')) {
        $('.kdNetLink > a').removeClass('a2');
        $('.kdNetLink > a').addClass('a1');
    }
});

//스크롤시 헤더 아래쪽의 kbgnb 고정

const kbGnbTop = $('.kbGnb').offset().top; // .kbGnb가 위에서부터 얼마나 떨어져있나 변수로

$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if (scroll >= kbGnbTop){
        $('.kbGnb').addClass('on');
    } else {
        $('.kbGnb').removeClass('on');
    }
}) 

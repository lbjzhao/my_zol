/**
 * Created by zhaoyunfei-pc on 2016/5/5.
 */
//==================================轮播图的效果=====================================//

var oDiv=$('.hot-carousel');
var oList=$('.hot-carousel-list');
var oPic=$('.hot-carousel-list li');
var oBtn=$('.hot-carousel-btn li');
var aNext=$('.nex');
var aPre=$('.pre');
var iNow=0;
var iw=oPic.width();
var len=oBtn.length;
//鼠标移到图片上，显示前进、后退键
oDiv.hover(function () {
    aNext.stop().show();
    aPre.stop().show();
},function () {
    aNext.stop().hide();
    aPre.stop().hide();
})

oList.html(oList.html()+oList.html());
oList.css({"width":2*len*iw});
oBtn.click(function(){
    iNow=$(this).index();
    change();
})

aPre.click(function(){
    iNow--;
    if(iNow==-1){
        oList.css({"left":-3*iw});
        iNow=len-1;
    }
    change();
})

aNext.click(function(){
    iNow++;
    if(iNow==6)
    {
        oList.css({"left":-2*iw});
        iNow=3;
    }
    change();
})
function change(){
    oBtn.removeClass('cur').eq(iNow%len).addClass('cur');
    oList.stop().animate({"left":-iNow*iw},500);
}
function Dchange(){
    iNow++;
    if(iNow==6)
    {
        oList.css({"left":-2*iw});
        iNow=3;
    }
    oBtn.removeClass('cur').eq(iNow%len).addClass('cur');
    oList.stop().animate({"left":-iNow*iw},500);
}
var time;
time=setInterval(Dchange,4000);

//==================================大家在看什么-固定定位===========================//
var $hotAttention=$(".hot-attention");
$(window).scroll(function () {
    //获取当前滚动条的位置
    var $n=$(this).scrollTop();
    if($n>1160 && $n<3860){
        $hotAttention.css({ position:"fixed",top:0,left:"895px"});
    }
    else if($n<1160){
            $hotAttention.css({ position:"static"});
    }else {
        $hotAttention.css({ position:"absolute",top:"3565px",left:0});
    }
})

//==================================底部导航栏-选项卡效果=========================//
var $contentBnavi=$(".content-Bnavi ul");
var $firstLevel=$(".first-level li");
$firstLevel.hover(function () {
    console.log("in:"+$(this).index());
    $(this).addClass("cur")
    
    $contentBnavi.eq($(this).index()+1).css({ display:"block"});
},function () {
    console.log("out"+$(this).index());
    $(this).removeClass("cur")
    $contentBnavi.eq($(this).index()+1).css({ display:"none"});
})
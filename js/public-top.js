/**
 * Created by zhaoyunfei-pc on 2016/5/4.
 */
//订阅团购推荐式样
//顶部导航栏左侧式样
var $nav=$(".top-navigation .navi-list li");
var len=$nav.length;
var temp;
$nav.hover(function(){
    temp=this.className;
    this.className="cur";
},function () {
    this.className=temp;
})
//最近浏览式样
var $recent=$(".recent");

$recent.hover(function () {
    $(this).addClass("cur")
    $(this).find(".browe-history").css({ display:"block"});

},function () {
    $(this).removeClass("cur");
    $(this).find(".browe-history").css({ display:"none"});
})


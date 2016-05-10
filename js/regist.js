/**
 * Created by zhaoyunfei-pc on 2016/5/8.
 */
//注册方式（phone-email）
var $registKinds=$(".regist-kinds li");
var $detialPhone=$(".form-detial .phone");
var $detialEmail=$(".form-detial .email");
$registKinds.click(function () {
    // 注册方式的顶端样式
    $(this).siblings().removeClass("cur");
    $(this).addClass("cur");
    //手机号-邮箱号的切换
    if($(this).index()==0){
        $detialPhone.show();
        $detialEmail.hide();
    }
    else {
        $detialPhone.hide();
        $detialEmail.show();
    }
})

//快速登陆
var $fastRegist=$(".fast-regist ul li a");
var len=$fastRegist.length;
for(var i=0;i<len;i++){
    $fastRegist.eq(i).css({backgroundPositionY: -(i-1)*37});
}

//表单验证
var $input=$(".form-mudle input");
var len=$input.length;
var _d=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/g;
$input.focus(function () {
    $(this).css({ border: "1px solid #cc0000"});
});
$input.blur(function () {
    $(this).css({ border: "1px solid #ccc"});
    if($(this).val()==''){
        console.log($(this).next());
        $(this).nextAll(".warning").css({ display:"block"});
    }else {
        $(this).nextAll(".warning").css({ display:"none"});
    }
    if(_d.test($(this).val())){
        console.log(1);
    }else {
        console.log(0);
    }
});
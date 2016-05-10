/**
 * Created by zhaoyunfei-pc on 2016/5/9.
 */
//登陆方式切换（phone/userName）
var $loginWays=$(".login-ways span");
var $formMudle=$(".form-mudle .loginWays");
var temp;
$loginWays.click(function () {
    temp=$(this).index();
    //登陆方式标题切换
    $(this).css({ display:"none"});
    $(this).siblings().css({ display:"block"});
    //登陆方式内容切换
    $formMudle.eq(temp).css({ display:"none"});
    $formMudle.eq(temp).siblings().css({ display:"block"});
})
//合作账号登录
var $linkRegist=$(".link-regist a");
var len=$linkRegist.length;
console.log(len);
for(var i=0;i<len;i++){
    $linkRegist.eq(i).css({backgroundPositionX: -i*39});
}
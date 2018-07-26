
$(".checklist").on("click", "li", function () {

    // 选项卡
    var getLog = $(this).attr("data-log")
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    $("textarea." + getLog).siblings().hide()
    $("textarea." + getLog).show()
})

var flag = true;
var time = null;
var screenW = screenW = $(window).width() // 获取屏幕宽度
$(".icon").on("click", function () {
    pickScreen()
})

function pickScreen() {

    // 切屏函数
    hiddenIcon() // 按钮动画

    if (flag) {
        flag = false;
        if (screenW > 450) {
            $(".wrapper").stop().animate({ "left": -300 + "px" })
        } else {
            $(".wrapper").stop().animate({ "left": -100 + "vw" })
            $(".icon").css("right", -10 + "vw")
        }
        $(".icon").attr("class", "icon iconfont icon-more")
    } else {
        flag = true;
        if (screenW > 450) {
            $(".wrapper").stop().animate({ "left": 0 + "px" })
        } else {
            $(".wrapper").stop().animate({ "left": 0 + "vw" })
            $(".icon").css("right", 0 + "vw")
        }
        $(".icon").attr("class", "icon iconfont icon-back")
    }
}


function hiddenIcon() {

    // 超时按钮变色函数
    $(".icon").stop().animate({ "opacity": 1 }, 100)
    this.time = setTimeout(function () {
        clearTimeout(this.time);
        $(".icon").stop().animate({ "opacity": .4 }, 1000)
        if (screenW < 450) {
            $(".icon").animate({ "right": -5 + "vw" })
        }
    }, 3000)
}
hiddenIcon()



// 匹配
var classArr = {
    "HTML": "HTML",
    "CSS": "CSS",
    "JS": "JS"
}
var insertDom = {

    // 对应插入位置的class名
    "HTML": "show",
    "CSS": "style",
    "JS": "script"
}
var textVal = {
    "HTML": "在这里粘贴html",
    "CSS": "在这里粘贴css..",
    "JS": "在这里粘贴js.."
}
for(var prop in classArr){

    // 获取焦点 清空内容
        $("." + prop).focus(function(){
            $(this).html("")
        })
}
$(".send").on("click", function () {

 
    for (var prop in insertDom){
        
        // 在插入新代码前，将原来的代码区间清空 
        $("." + insertDom[prop]).empty()
    }

    for (var prop in classArr) {

        // 插入前先判断是否已修改html、css、js默认内容，若未修改，则将其置空

        if($("." + prop).val() == textVal[prop]){
            console.log($("." + prop).val());
            $("." + prop).html("");
        }
        
        // 将html、css、js里面的值插入到对应的show、style、script之间
        if(insertDom[prop] != "script"){
            $("." + insertDom[prop]).append($("." + prop).val())
        }else{
            if($(".HTML").val() != "" || $(".CSS").val() != "" || $(".JS").val() != ""  ){
                try {
                    eval($("." + prop).val())
                    pickScreen() // 切屏函数 如果报错 则不会进行页面跳转
                } catch (error) {
                    alert(error);       
                }
            }else{
                alert("输入不能为空！")
            }

        }
    }
})



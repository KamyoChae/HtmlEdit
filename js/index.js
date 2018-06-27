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
    "HTML": "show",
    "CSS": "style",
    "JS": "script"
}

$(".send").on("click", function () {

    pickScreen() // 切屏函数
    for (var prop in classArr) {
        $("." + insertDom[prop]).append($("." + prop).val())
    }
})


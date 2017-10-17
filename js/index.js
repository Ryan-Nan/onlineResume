/**
 * Created by Ryan on 2017/10/5 0005.
 */
/*
** page of works
*/
$(document).ready(function() {
    $('a.smallIcon-l').fancyZoom({scaleImg: true, closeOnClick: false});
    $("a.smallIcon-l").click(function () {
        $("#lightbox").fadeIn(500);
        $("#navBar").hide();
        addEvent(document.body,"mousewheel",function(){
            $("#lightbox").hide();
            $("#navBar").show();
            $('#zoom').hide();
            $('#zoom_content').html('');
        })
    });
    $("#lightbox").click(function () {
        $("#lightbox").fadeOut(300);
        $("#navBar").show();


    });

    $("#zoom_close").click(function () {
        $("#lightbox").fadeOut(300);
        $("#navBar").show();
    });

    //绑定鼠标滚动事件
    function addEvent(obj,type,fn){
        var isFirefox= typeof document.body.style.MozUserSelect != "undefined";
        if(obj.addEventListener){
            obj.addEventListener(isFirefox?"DOMMouseScroll":type,fn,false)
        }else{
            obj.attachEvent("on"+type,fn)
        }
        return fn; //必须有这个，因为移出事件的时候必须是这个函数，所以必须返回出来
    }

});

//全屏滚动模块
var runPage;
runPage = new FullPage({
    id: 'pageContain',
    slideTime: 600,
    continuous:false,
    effect: {
        transform: {
            translate: 'Y',    //垂直滚动，改为X则是水平滚动
            scale : [.6, 1],
            rotate : [0, 0]
        },
        opacity: [1, 1]
    },
    mode: 'wheel, touch, nav:navBar',
    easing: 'ease',
    start : 0                                   // which page will display when install
});

//复制功能
var clipboard = new Clipboard('#emailBtn', {
    target: function() {
        return document.querySelector('#copytext');
    }
});

clipboard.on('success', function(e) {
    console.log(e);
    $('#copied').show().addClass('copySucceed');
    setTimeout("$('#copied').fadeOut()",1800)
});

clipboard.on('error', function(e) {
    console.log(e);
});
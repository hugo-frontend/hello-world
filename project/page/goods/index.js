/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    
    jQuery(".productViedoBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
    var count = $("#imageMenu li").length - 4; /* 显示 6 个 li标签内容 */
    var interval = $("#imageMenu li:first").width()+22;
    var curIndex = 0;

    $('.scrollbutton').click(function(){
        if( $(this).hasClass('disabled') ) return false;

        if ($(this).hasClass('smallImgUp')) --curIndex;
        else ++curIndex;

        $('.scrollbutton').removeClass('disabled');
        if (curIndex == 0) $('.smallImgUp').addClass('disabled');
        if (curIndex == count-1) $('.smallImgDown').addClass('disabled');

        $("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);
    });

    $(".jqzoom").imagezoom();

    $("#imageMenu li a").bind("mouseover",function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
    }).bind("click",function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
    });
    $(".js-hardAddCount").on("mousedown", function (event) {
        $(".js-hardCount").val(parseInt($(".js-hardCount").val()) + 1);
        event.preventDefault();
    });
    $(".js-hardReduceCount").on("mousedown", function (event) {
        if (parseInt($(".js-hardCount").val()) > 1){
            $(".js-hardCount").val(parseInt($(".js-hardCount").val()) - 1);
        }
        event.preventDefault();
    });
    $(".js-addCount").on("mousedown", function (event) {
        $(".js-count").val(parseInt($(".js-count").val()) + 1);
        event.preventDefault();
    });
    $(".js-reduceCount").on("mousedown", function (event) {
        if (parseInt($(".js-count").val()) > 1) {
            $(".js-count").val(parseInt($(".js-count").val()) - 1);
        }
        event.preventDefault();
    });


});




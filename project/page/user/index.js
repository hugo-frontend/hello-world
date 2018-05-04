$(function(){
    $(".address-modify-form").parsley();
    $(".account-setting-form").parsley();
    $(".choose-box select").each(function(){
        var selectVal = $(this).find("option:selected").text()
        $(this).prev().text(selectVal);
    })
    $(".choose-box select").on("change", function(){
        var selectVal = $(this).find("option:selected").text()
        $(this).prev().text(selectVal);
    })
})

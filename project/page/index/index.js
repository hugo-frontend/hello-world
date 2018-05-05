$(function(){
  $(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});

  $(function () {
    $(".login-form").parsley();
    $(".register-form").parsley();

    $(".js-change-password").on("click", function () {
      if ($(this).hasClass("hide-password")) {
        var inputVal = $(this).siblings("input[type=password]").val();
        $(this).siblings("input[type=text]").val(inputVal)
        $(this).siblings("input[type=password]").addClass("element-hide");
        $(this).siblings("input[type=text]").removeClass("element-hide");
        $(this).removeClass("hide-password");
        $(this).addClass("show-password");
      } else {
        var inputVal = $(this).siblings("input[type=text]").val();
        $(this).siblings("input[type=password]").val(inputVal)
        $(this).siblings("input[type=text]").addClass("element-hide");
        $(this).siblings("input[type=password]").removeClass("element-hide");
        $(this).removeClass("show-password");
        $(this).addClass("hide-password");
      }
    });

    $(".js-close-login").on("click", function(){
      $(".cover-layer").hide();
      $(".login-page").hide();
      $(".register-page").hide();
    })
  });

  $(".js-login-btn").on("click", function(){
    $(".cover-layer").show();
    $(".login-page").show();
    $(".register-page").hide();
  })
    $(".js-register-btn").on("click", function () {
      $(".cover-layer").show();
      $(".register-page").show();
      $(".login-page").hide();
    })

})

let lightImg2 = $("#theme-switch");

lightImg2.on("click", function () {
  $("#light, #dark").slideToggle(
    300, //toggles between the sun icon and the moon icon
    function () {
      if ($("#light").is(":visible")) {
        $("html").attr("data-bs-theme", "dark");
        $(".arrow").css("fill", "rgba(255, 255, 255, 1)");//changes the arrow color 
        $("#naruto").css("border", "7px solid white")//changes the color border of the portrait
        lightImg2.css("background-color", "rgba(255, 255, 255, 0.2)");
      } else if ($("#dark").is(":visible")) {
        $("html").attr("data-bs-theme", "light");
        $(".arrow").css("fill", "rgba(0, 0, 0, 1)");//changes the arrow color 
        $("#naruto").css("border", "7px solid black")//changes the color border of the portrait
        lightImg2.css("background-color", "hsla(0, 1%, 38%, 0.258)");
      }
    }
  );
}); 

$("#arrow").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $("#skills").offset().top,
    },
    500
  );
});

$(".btn-float-gentle").on("click", function () {
  $(this).css("background-color", "rgba(128, 128, 128, 0.18)");

  setTimeout(() => {
    $(this).css("background-color", "rgba(128, 128, 128, 0.18)");
  }, 1000);
});

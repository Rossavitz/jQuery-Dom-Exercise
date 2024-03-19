$(function () {
  console.log("Let's get ready to party with jQuery!");
});

$("img").addClass("image-center");

$("p").last().remove();

$("h1").css("font-size", Math.floor(Math.random() * 101));

$("ol").append("<li>Added new list item!</li>");

$("aside").empty().append($("<p> Sorry for the lists existence</p>"));

$(".form-control").on("keyup", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + red + "," + green + "," + blue + ")"
  );
});

$("img").on("click", function () {
  $(this).remove();
});

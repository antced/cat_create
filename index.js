
var color = ""
var tailType = ""
var eyeType = ""
var noseType = ""
var earType = ""

// BODY COLORS

$(".white").click(function () {
  color = "white"
  $(".cat-body").attr("src", "images/body-white.png");
  $(".cat-tail").attr("src", "images/" + tailType + "-white.png");
  $(".cat-tail2").attr("src", "images/" + tailType + "-white.png");
  $(".cat-ear").attr("src", "images/" + earType + "-white.png");
});

$(".brown").click(function () {
  color = "brown"
  $(".cat-body").attr("src", "images/body-brown.png");
  $(".cat-tail").attr("src", "images/" + tailType + "-brown.png");
  $(".cat-tail2").attr("src", "images/" + tailType + "-brown.png");
  $(".cat-ear").attr("src", "images/" + earType + "-brown.png");
});

$(".gray").click(function () {
    color = "gray"
  $(".cat-body").attr("src", "images/body-gray.png");
  $(".cat-tail").attr("src", "images/" + tailType + "-gray.png");
  $(".cat-tail2").attr("src", "images/" + tailType + "-gray.png");
  $(".cat-ear").attr("src", "images/" + earType + "-gray.png");
});

$(".orange").click(function () {
  color = "orange"
  $(".cat-body").attr("src", "images/body-orange.png");
  $(".cat-tail").attr("src", "images/" + tailType + "-orange.png");
  $(".cat-tail2").attr("src", "images/" + tailType + "-orange.png");
  $(".cat-ear").attr("src", "images/" + earType + "-orange.png");
});

// EYE TYPES

$(".red").click(function () {
  $(".cat-eye").css("visibility", "visible");
  $(".cat-eye").attr("src", "images/eye-red.png")
});
$(".blue").click(function () {
  $(".cat-eye").css("visibility", "visible");
  $(".cat-eye").attr("src", "images/eye-blue.png")
});
$(".yellow").click(function () {
  $(".cat-eye").css("visibility", "visible");
  $(".cat-eye").attr("src", "images/eye-yellow.png")
});
$(".closed").click(function () {
  $(".cat-eye").css("visibility", "visible");
  $(".cat-eye").attr("src", "images/eye-closed.png")
});

// NOSE TYPES

$(".quiet").click(function () {
  $(".cat-nose").css("visibility", "visible");
  $(".cat-nose").attr("src", "images/nose-quiet.png")
});
$(".nice").click(function () {
  $(".cat-nose").css("visibility", "visible");
  $(".cat-nose").attr("src", "images/nose-nice.png")
});
$(".tongue").click(function () {
  $(".cat-nose").css("visibility", "visible");
  $(".cat-nose").attr("src", "images/nose-tongue.png")
});
$(".evil").click(function () {
  $(".cat-nose").css("visibility", "visible");
  $(".cat-nose").attr("src", "images/nose-evil.png")
});

// EAR TYPES

$(".big").click(function () {
  $(".cat-ear").css("visibility", "visible");
  earType = "big"
  if (color === "white"){
    $(".cat-ear").attr("src", "images/big-white.png");
  }
  else if (color === "brown"){
    $(".cat-ear").attr("src", "images/big-brown.png");
  }
  else if (color === "gray"){
    $(".cat-ear").attr("src", "images/big-gray.png");
  }
  else {
    $(".cat-ear").attr("src", "images/big-orange.png");
  }
});

$(".small").click(function () {
  $(".cat-ear").css("visibility", "visible");
  earType = "small"
  if (color === "white"){
    $(".cat-ear").attr("src", "images/small-white.png");
  }
  else if (color === "brown"){
    $(".cat-ear").attr("src", "images/small-brown.png");
  }
  else if (color === "gray"){
    $(".cat-ear").attr("src", "images/small-gray.png");
  }
  else {
    $(".cat-ear").attr("src", "images/small-orange.png");
  }
});

$(".fold").click(function () {
  $(".cat-ear").css("visibility", "visible");
  earType = "fold"
  if (color === "white"){
    $(".cat-ear").attr("src", "images/fold-white.png");
  }
  else if (color === "brown"){
    $(".cat-ear").attr("src", "images/fold-brown.png");
  }
  else if (color === "gray"){
    $(".cat-ear").attr("src", "images/fold-gray.png");
  }
  else {
    $(".cat-ear").attr("src", "images/fold-orange.png");
  }
});

$(".down").click(function () {
  $(".cat-ear").css("visibility", "visible");
  earType = "down"
  if (color === "white"){
    $(".cat-ear").attr("src", "images/down-white.png");
  }
  else if (color === "brown"){
    $(".cat-ear").attr("src", "images/down-brown.png");
  }
  else if (color === "gray"){
    $(".cat-ear").attr("src", "images/down-gray.png");
  }
  else {
    $(".cat-ear").attr("src", "images/down-orange.png");
  }
});

// TAIL TYPES

$(".thin").click(function () {
  $(".cat-tail").css("visibility", "visible");
  $(".cat-tail2").css("visibility", "hidden");
  tailType = "thin"
  if (color === "white"){
    $(".cat-tail").attr("src", "images/thin-white.png");
  }
  else if (color === "brown"){
    $(".cat-tail").attr("src", "images/thin-brown.png");
  }
  else if (color === "gray"){
    $(".cat-tail").attr("src", "images/thin-gray.png");
  }
  else {
    $(".cat-tail").attr("src", "images/thin-orange.png");
  }
});

$(".fluffy").click(function () {
  $(".cat-tail").css("visibility", "visible");
  $(".cat-tail2").css("visibility", "hidden");
  tailType = "fluffy"
  if (color === "white"){
    $(".cat-tail").attr("src", "images/fluffy-white.png");
  }
  else if (color === "brown"){
    $(".cat-tail").attr("src", "images/fluffy-brown.png");
  }
  else if (color === "gray"){
    $(".cat-tail").attr("src", "images/fluffy-gray.png");
  }
  else {
    $(".cat-tail").attr("src", "images/fluffy-orange.png");
  }
});

$(".stub").click(function () {
  $(".cat-tail").css("visibility", "visible");
  $(".cat-tail2").css("visibility", "hidden");
  tailType = "stub"
  if (color === "white"){
    $(".cat-tail").attr("src", "images/stub-white.png");
  }
  else if (color === "brown"){
    $(".cat-tail").attr("src", "images/stub-brown.png");
  }
  else if (color === "gray"){
    $(".cat-tail").attr("src", "images/stub-gray.png");
  }
  else {
    $(".cat-tail").attr("src", "images/stub-orange.png");
  }
});

$(".curly").click(function () {
  $(".cat-tail2").css("visibility", "visible");
  $(".cat-tail").css("visibility", "hidden");
  tailType = "curly"
  if (color === "white"){
    $(".cat-tail2").attr("src", "images/curly-white.png");
  }
  else if (color === "brown"){
    $(".cat-tail2").attr("src", "images/curly-brown.png");
  }
  else if (color === "gray"){
    $(".cat-tail2").attr("src", "images/curly-gray.png");
  }
  else {
    $(".cat-tail2").attr("src", "images/curly-orange.png");
  }
});

$(".imagecontainer").click(function(){
  var audio = new Audio("sounds/meow.mp3");
  audio.play();
});

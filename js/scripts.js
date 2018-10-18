$(document).ready(function() {
  $("button#alpaca").click(function(){
    $(".panda").hide();
    $(".koala").hide();
    $(".alpaca").show();
  });
  $("button#panda").click(function(){
    $(".alpaca").hide();
    $(".koala").hide();
    $(".panda").show();
  });
  $("button#koala").click(function(){
    $(".alpaca").hide();
    $(".panda").hide();
    $(".koala").show();
  });
});

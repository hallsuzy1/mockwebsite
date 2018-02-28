// //$("buy-now").click(function(changetext(words) {
//   $("buy-now").addClass("added-to-cart");
//   var change =$("added-to-cart");
//   change.text("ADDED TO CART!");
//
// //}))



var changeText = $(".buy-now");
console.log(changeText);


  $(".buy-now").click (function() {
  changeText.text("ADDED TO CART!");
  $(".buy-now").fadeOut(1000, function() {
  $(".buy-now").text(($("buy-now").text() == 'BUY NOW!') ? 'ADDED TO CART' : 'BUY NOW!').fadeIn();
})
})


// $(".cartNumber")(function() {counter++;
//   counter.text(++);

// })
var numberChange = $(".cartNumber");
console.log(numberChange);

// $(".cartNumber").text(counter);
//   var counter = 0;
var counter = 0;
$(".cartNumber").click(function() {
counter+=1;
})
//
// //
// // var counter = 0;
//
//        $(document).ready(function() {
//
//            $("#addMe").click(function(){
//                counter++;
//
//                $("#theCount").text(counter);
//            });

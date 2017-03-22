// Business (or back-end) logic:

var multiply = function(n1, n2) {
  return n1 * n2;
}
var divide = function(n1, n2) {
  return n1 / n2;
}
var subtract = function(n1, n2) {
  return n1 - n2;
}
var add = function(n1, n2) {
  return n1 + n2;
}
var modulus = function(n1, n2) {
  return n1 % n2;
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output_add").text(result);
  });

  $("form#modulus").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#modulus1").val());
  var number2 = parseInt($("#modulus2").val());
  var result = modulus(number1, number2);
  $("#output_modulus").text(result);
  });

  $("form#dropdown").change(function(event) {
  event.preventDefault();
  var bevlistval = parseInt($("#beverage :selected").val());
  // console.log(bevlistval);
  $("#output_bev").text(bevlistval);

  });

});

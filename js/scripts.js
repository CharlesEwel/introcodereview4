//Business Logic

function pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.toppings = toppings;
}


//UI Logic
$(document).ready(function() {
  // event.preventDefault()
  $("form#pizza-order").submit(function() {
    $("input#name").val()=customerName
    $("input#name").val()=customerName
    $("input#name").val()=customerName
    var pizza = new Pizza()
    $("#rollResult").text("Your roll was " + rollResult);
    $("#tempScore").text("Your current score is " + tempScore);
    $("#currentTurn").text(players[(turnCount-1)%players.length].playerName + "'s turn");
  })
});
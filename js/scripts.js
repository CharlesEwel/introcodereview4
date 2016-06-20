//Business Logic

function pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.toppings = toppings;
}

pizza.prototype.price = function () {
  cost=8;
  if (this.pizzaSize==="small") {
    cost-=2;
  } else if (this.pizzaSize==="large") {
    cost+=2;
  } else if (this.pizzaSize==="extra-large") {
    cost+=4;
  }
  return cost;
}

//UI Logic

$(document).ready(function() {
  // event.preventDefault()
  $("form#pizza-order").submit(function() {
    var customerName = $("input#name").val();
    debugger;
    var size = $("input:radio[name=size]:checked").val();
    debugger;
    var pizza = new Pizza(customerName, "large", "toppings")
    orderPrice=pizza.price();
    $("#order-output").text("Your total cost comes out to " + orderPrice);
  });
});
